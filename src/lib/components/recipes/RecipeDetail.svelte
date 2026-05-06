<script>
  export let recipe;
</script>

<section class="recipe-detail-card">
  <a href="/recipes" class="back-link">← Back to recipes</a>

  <div class="recipe-detail-header">
    <div>
      <h1>{recipe.title}</h1>
      <p class="eyebrow">{recipe.category} • {recipe.difficulty} • {recipe.prepTimeMin} min</p>
    </div>
    <div class="recipe-summary">
      <span>{recipe.servings} servings</span>
      <span>{recipe.tags?.join(" • ")}</span>
    </div>
  </div>

  {#if recipe.imageUrl}
    <img src={recipe.imageUrl} alt={recipe.title} class="recipe-image" />
  {/if}

  <p class="description">{recipe.description}</p>

  <div class="recipe-grid">
    <section>
      <h2>Ingredients</h2>
      <ul>
        {#each recipe.ingredients as ingredient}
          <li>{ingredient.name}: {ingredient.amountG} g</li>
        {/each}
      </ul>
    </section>

    <section>
      <h2>Macros per serving</h2>
      <ul class="macros">
        <li>Calories: {recipe.macrosPerServing.calories}</li>
        <li>Protein: {recipe.macrosPerServing.protein} g</li>
        <li>Carbs: {recipe.macrosPerServing.carbs} g</li>
        <li>Fat: {recipe.macrosPerServing.fat} g</li>
      </ul>
    </section>
  </div>

  {#if recipe.tags?.length}
    <section class="tags-section">
      <h2>Tags</h2>
      <div class="tags">
        {#each recipe.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </section>
  {/if}
</section>

<style>
  .recipe-detail-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.25rem;
    border-radius: 1rem;
    background: var(--surface, #fff);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }

  .back-link {
    color: var(--primary, #2b8a3e);
    text-decoration: none;
    font-weight: 600;
  }

  .recipe-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  h1 {
    margin: 0;
    font-size: clamp(2rem, 2.4vw, 2.6rem);
  }

  .eyebrow {
    margin: 0.5rem 0 0;
    color: var(--text-muted, #666);
  }

  .recipe-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--text-secondary, #444);
  }

  .recipe-summary span {
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    background: rgba(43, 138, 62, 0.1);
  }

  .recipe-image {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    max-height: 420px;
  }

  .description {
    margin: 0;
    line-height: 1.75;
    color: var(--text-secondary, #4e4e4e);
  }

  .recipe-grid {
    display: grid;
    grid-template-columns: minmax(280px, 1fr) minmax(240px, 320px);
    gap: 1.5rem;
  }

  section h2 {
    margin: 0 0 0.75rem;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .macros {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  .macros li,
  li {
    line-height: 1.6;
  }

  .tags-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border-radius: 999px;
    background: rgba(43, 138, 62, 0.1);
    color: var(--text-secondary, #4a4a4a);
    font-size: 0.9rem;
  }

  @media (max-width: 820px) {
    .recipe-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
