<script>
  import RecipeCard from "$lib/components/recipes/RecipeCard.svelte";

  export let data;
  const { recipes, search, category } = data;
</script>

<section class="page-header">
  <h1>Recipes</h1>
  <p>Discover healthy recipes with full nutritional information per serving.</p>
</section>

<section class="recipe-filters">
  <form method="get" class="filter-form">
    <input type="text" name="search" placeholder="Search recipes..." value={search} aria-label="Search recipes" />
    <input type="text" name="category" placeholder="Category (breakfast, lunch, dinner)" value={category} aria-label="Filter by category" />
    <button type="submit">Apply</button>
  </form>
</section>

{#if recipes.length > 0}
  <section class="recipe-list">
    {#each recipes as recipe}
      <RecipeCard {recipe} />
    {/each}
  </section>
{:else}
  <p>No recipes found.</p>
{/if}

<style>
  .recipe-list {
    display: grid;
    gap: 1rem;
  }

  .page-header {
    margin-bottom: 1.5rem;
  }

  .recipe-filters {
    margin-bottom: 1.5rem;
  }

  .filter-form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .filter-form input {
    flex: 1 1 220px;
    padding: 0.85rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    background: var(--surface, #fff);
  }

  .filter-form button {
    padding: 0.85rem 1.25rem;
    border: none;
    border-radius: 0.75rem;
    background: var(--primary, #2b8a3e);
    color: white;
    cursor: pointer;
  }

  .filter-form button:hover {
    opacity: 0.95;
  }
</style>
