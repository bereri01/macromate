<script>
  import FoodCard from "$lib/components/food/FoodCard.svelte";
  import FoodFilters from "$lib/components/food/FoodFilters.svelte";

  export let data;
  const { foods, search, category } = data;
</script>

<section class="page-header">
  <h1>Food Macros</h1>
  <p>Search and filter through our comprehensive food database with detailed nutritional information.</p>
</section>

<FoodFilters {search} {category} />

{#if foods.length > 0}
  <section class="food-grid">
    {#each foods as food}
      <FoodCard {food} />
    {/each}
  </section>
{:else}
  <div class="no-results">
    <p>No foods found matching your criteria.</p>
    <p>Try adjusting your search or filter settings.</p>
  </div>
{/if}
<br/>

<style>
  .food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  .no-results {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-muted, #888);
  }

  .no-results p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .food-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
