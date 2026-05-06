<script>
  export let recipe;
</script>

<a href={`/recipes/${recipe._id}`} class="recipe-card-link">
  <article class="recipe-card">
    {#if recipe.imageUrl}
      <img src={recipe.imageUrl} alt={recipe.title} class="recipe-image" />
    {/if}

    <div class="recipe-card-content">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div class="meta">
        <span>{recipe.category}</span>
        <span>{recipe.servings} servings</span>
        <span>{recipe.prepTimeMin} min</span>
      </div>
    </div>
  </article>
</a>

<style>
  .recipe-card-link {
    text-decoration: none;
    color: inherit;
  }

  .recipe-card {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    background: var(--surface, #fff);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .recipe-card:hover,
  .recipe-card:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .recipe-card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0 0 1rem;
    color: var(--text-secondary, #555);
  }

  .meta {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    font-size: 0.9rem;
    color: var(--text-muted, #666);
  }

  .meta span {
    background: rgba(0, 0, 0, 0.04);
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
  }

  @media (max-width: 700px) {
    .recipe-card {
      grid-template-columns: 1fr;
    }
  }
</style>
