import db from "$lib/db";

export async function load({ url }) {
  const search = url.searchParams.get("search") || "";
  const category = url.searchParams.get("category") || "";

  const foods = await db.getFoods(search, category);

  return {
    foods,
    search,
    category,
  };
}