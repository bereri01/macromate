import db from "$lib/db";

export async function load({ url }) {
  const category = url.searchParams.get("category") || "";
  const search = url.searchParams.get("search") || "";

  const recipes = await db.getRecipes(category, search);
  return {
    recipes,
    category,
    search,
  };
}
