<script>
  import { createEventDispatcher } from 'svelte';

  export let mealType;
  export let mealLabel;
  export let mealItems = [];
  export let foods = [];
  export let recipes = [];

  const dispatch = createEventDispatcher();
  let showAddFood = false;
  let showAddRecipe = false;
  let selectedFood = '';
  let quantity = 1;
  let selectedRecipe = '';
  let servings = 1;

  function addFood() {
    if (!selectedFood) return;
    dispatch('addfood', { mealType, foodId: selectedFood, quantity: Number(quantity) });
    showAddFood = false;
    selectedFood = '';
    quantity = 1;
  }

  function addRecipe() {
    if (!selectedRecipe) return;
    dispatch('addrecipe', { mealType, recipeId: selectedRecipe, servings: Number(servings) });
    showAddRecipe = false;
    selectedRecipe = '';
    servings = 1;
  }

  function removeItem(itemId) {
    dispatch('remove', { mealType, itemId });
  }
</script>

<section class="meal-card">
  <div class="meal-card-header">
    <div>
      <h3>{mealLabel}</h3>
      <p class="meal-hint">Track what you eat for {mealLabel.toLowerCase()}.</p>
    </div>
    <div class="meal-buttons">
      <button class="btn btn-success" type="button" on:click={() => { showAddFood = !showAddFood; showAddRecipe = false; }}>
        + Add Food
      </button>
      <button class="btn btn-success" type="button" on:click={() => { showAddRecipe = !showAddRecipe; showAddFood = false; }}>
        + Add Recipe
      </button>
    </div>
  </div>

  {#if showAddFood}
    <form class="item-form" on:submit|preventDefault={addFood}>
      <label>
        Food
        <select bind:value={selectedFood} required>
          <option value="" disabled selected>Select food</option>
          {#each foods as food}
            <option value={food.id}>{food.name} — {food.serving_unit}</option>
          {/each}
        </select>
      </label>
      <label>
        Quantity
        <input type="number" min="0.1" step="0.1" bind:value={quantity} required />
      </label>
      <div class="form-actions">
        <button class="btn btn-tertiary" type="button" on:click={() => { showAddFood = false; selectedFood = ''; quantity = 1; }}>
          Cancel
        </button>
        <button class="btn btn-primary" type="submit">Add food</button>
      </div>
    </form>
  {/if}

  {#if showAddRecipe}
    <form class="item-form" on:submit|preventDefault={addRecipe}>
      <label>
        Recipe
        <select bind:value={selectedRecipe} required>
          <option value="" disabled selected>Select recipe</option>
          {#each recipes as recipe}
            <option value={recipe.id}>{recipe.title}</option>
          {/each}
        </select>
      </label>
      <label>
        Servings
        <input type="number" min="0.1" step="0.1" bind:value={servings} required />
      </label>
      <div class="form-actions">
        <button class="btn btn-tertiary" type="button" on:click={() => { showAddRecipe = false; selectedRecipe = ''; servings = 1; }}>
          Cancel
        </button>
        <button class="btn btn-primary" type="submit">Add recipe</button>
      </div>
    </form>
  {/if}

  {#if mealItems.length > 0}
    <div class="meal-items">
      {#each mealItems as item}
        <div class="meal-item">
          <div>
            <p class="item-name">{item.name ?? item.title}</p>
            <p class="item-meta">
              {#if item.quantity}
                {item.quantity} × {item.serving_unit}
              {:else}
                {item.servings} serving{item.servings !== 1 ? 's' : ''}
              {/if}
            </p>
            <p class="item-macros">
              {item.macros.calories} kcal • {item.macros.protein}g P • {item.macros.carbs}g C • {item.macros.fat}g F
            </p>
          </div>
          <button class="btn btn-remove" type="button" on:click={() => removeItem(item.id)} aria-label="Remove item">
            ×
          </button>
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <p class="empty-state-text">No items added yet for {mealLabel.toLowerCase()}.</p>
    </div>
  {/if}
</section>

<style>
  .meal-card {
    background: var(--surface, #fff);
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .meal-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--text-primary, #333);
  }

  .meal-hint {
    margin: 0.35rem 0 0;
    color: var(--text-muted, #666);
    font-size: 0.95rem;
  }

  .meal-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .item-form {
    display: grid;
    gap: 0.75rem;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 0.9rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    color: var(--text-primary, #333);
    font-size: 0.95rem;
  }

  select,
  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    padding: 0.9rem 1rem;
    font-size: 0.95rem;
    width: 100%;
    background: #fff;
    color: var(--text-primary, #333);
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .meal-items {
    display: grid;
    gap: 0.85rem;
  }

  .meal-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0.9rem;
  }

  .item-name {
    margin: 0 0 0.35rem;
    font-weight: 700;
    color: var(--text-primary, #333);
  }

  .item-meta,
  .item-macros {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted, #666);
  }

  .btn {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 999px;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    padding: 0.8rem 1rem;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  .btn-light {
    background: #fff;
    color: #1d3f8f;
  }

  .btn-primary {
    background: #2d7aee;
    color: white;
  }

  .btn-tertiary {
    background: #f1f5f9;
    color: #1d3f8f;
  }

  .btn-remove {
    width: 2.2rem;
    height: 2.2rem;
    display: grid;
    place-items: center;
    background: #6c2b37;
    color: #f8fafc;
    font-size: 1rem;
  }

  .empty-state {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
  }

  .empty-state-text {
    margin: 0;
    font-size: 0.85rem;
    color: var(--text-secondary, #555);
  }
</style>