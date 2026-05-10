<script>
  export let food;
</script>

<article class="food-card">
  <div class="food-card-content">
    <h3>{food.name}</h3>
    <p class="category">{food.category}</p>
    <p class="serving">Per {food.serving_unit}</p>

    <div class="macros">
      <div class="macro-item">
        <span class="macro-label">Calories</span>
        <span class="macro-value">{food.calories}</span>
      </div>
      <div class="macro-item">
        <span class="macro-label">Protein</span>
        <span class="macro-value">{food.protein_g}g</span>
      </div>
      <div class="macro-item">
        <span class="macro-label">Carbs</span>
        <span class="macro-value">{food.carbs_g}g</span>
      </div>
      <div class="macro-item">
        <span class="macro-label">Fat</span>
        <span class="macro-value">{food.fat_g}g</span>
      </div>
      {#if food.fiber_g > 0}
        <div class="macro-item">
          <span class="macro-label">Fiber</span>
          <span class="macro-value">{food.fiber_g}g</span>
        </div>
      {/if}
      {#if food.sugar_g > 0}
        <div class="macro-item">
          <span class="macro-label">Sugar</span>
          <span class="macro-value">{food.sugar_g}g</span>
        </div>
      {/if}
    </div>
  </div>
</article>

<style>
  .food-card {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    background: var(--surface, #fff);
    padding: 1.25rem;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .food-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  .food-card-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-primary, #333);
  }

  .category {
    margin: 0;
    color: var(--primary, #2b8a3e);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .serving {
    margin: 0;
    color: var(--text-muted, #666);
    font-size: 0.85rem;
  }

  .macros {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .macro-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
  }

  .macro-label {
    font-size: 0.85rem;
    color: var(--text-secondary, #555);
  }

  .macro-value {
    font-weight: 600;
    color: var(--text-primary, #333);
  }
</style>