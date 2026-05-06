import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("macromate");

//////////////////////////////////////////
// Recipes
//////////////////////////////////////////

async function getRecipes(category = "", search = "") {
  let recipes = [];
  try {
    const collection = db.collection("recipes");

    const query = {};
    if (category) query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    recipes = await collection.find(query).toArray();
    recipes.forEach((recipe) => {
      recipe._id = recipe._id.toString();
    });
  } catch (error) {
    console.log(error.message);
  }
  return recipes;
}

async function getRecipe(id) {
  let recipe = null;
  try {
    const collection = db.collection("recipes");
    const query = { _id: new ObjectId(id) };
    recipe = await collection.findOne(query);

    if (!recipe) {
      console.log("No recipe with id " + id);
    } else {
      recipe._id = recipe._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return recipe;
}

//////////////////////////////////////////
// Users
//////////////////////////////////////////

async function getUser(email) {
  let user = null;
  try {
    const collection = db.collection("users");
    user = await collection.findOne({ email });

    if (user) user._id = user._id.toString();
  } catch (error) {
    console.log(error.message);
  }
  return user;
}

async function createUser(user) {
  try {
    const collection = db.collection("users");
    const result = await collection.insertOne(user);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function updateUser(user) {
  try {
    let id = user._id;
    delete user._id;
    const collection = db.collection("users");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: user });

    if (result.matchedCount === 0) {
      console.log("No user with id " + id);
    } else {
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Daily Logs
//////////////////////////////////////////

async function getDailyLog(userId, date) {
  let log = null;
  try {
    const collection = db.collection("dailylogs");
    log = await collection.findOne({ userId, date });

    if (log) log._id = log._id.toString();
  } catch (error) {
    console.log(error.message);
  }
  return log;
}

async function createDailyLog(log) {
  try {
    const collection = db.collection("dailylogs");
    const result = await collection.insertOne(log);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function updateDailyLog(log) {
  try {
    let id = log._id;
    delete log._id;
    const collection = db.collection("dailylogs");
    const query = { _id: new ObjectId(id) };
    await collection.updateOne(query, { $set: log });
    return id;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Foods
//////////////////////////////////////////

async function getFoods(search = "") {
  let foods = [];
  try {
    const collection = db.collection("foods");
    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    foods = await collection.find(query).toArray();
    foods.forEach((food) => {
      food._id = food._id.toString();
    });
  } catch (error) {
    console.log(error.message);
  }
  return foods;
}

export default {
  getRecipes,
  getRecipe,
  getUser,
  createUser,
  updateUser,
  getDailyLog,
  createDailyLog,
  updateDailyLog,
  getFoods,
};
