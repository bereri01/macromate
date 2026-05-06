import { error } from "@sveltejs/kit";
import db from "$lib/db";

export async function load({ params }) {
  const recipe = await db.getRecipe(params.recipes_id);

  if (!recipe) {
    throw error(404, "Recipe not found");
  }

  return {
    recipe,
  };
}
