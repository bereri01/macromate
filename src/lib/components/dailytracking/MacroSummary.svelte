<script>
  export let totalMacros = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  export let goals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
</script>

<section class="macro-summary-card">
  <div class="macro-header">
    <div>
      <p class="eyebrow">Today’s totals</p>
      <h2>Macro summary</h2>
    </div>
  </div>

  <div class="macro-grid">
    <article class="macro-card calories">
      <span class="macro-title">Calories</span>
      <strong>{totalMacros.calories}</strong>
      {#if goals.calories}
        <small>Goal: {goals.calories}</small>
      {/if}
    </article>

    <article class="macro-card protein">
      <span class="macro-title">Protein</span>
      <strong>{totalMacros.protein}g</strong>
      {#if goals.protein}
        <small>Goal: {goals.protein}g</small>
      {/if}
    </article>

    <article class="macro-card carbs">
      <span class="macro-title">Carbs</span>
      <strong>{totalMacros.carbs}g</strong>
      {#if goals.carbs}
        <small>Goal: {goals.carbs}g</small>
      {/if}
    </article>

    <article class="macro-card fat">
      <span class="macro-title">Fat</span>
      <strong>{totalMacros.fat}g</strong>
      {#if goals.fat}
        <small>Goal: {goals.fat}g</small>
      {/if}
    </article>
  </div>
</section>
<br/>

<style>
  .macro-summary-card {
    background: var(--surface, #fff);
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .macro-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .eyebrow {
    margin: 0 0 0.35rem;
    color: #62727f;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.78rem;
  }

  h2 {
    margin: 0;
    font-size: 1.6rem;
    color: var(--text-primary, #1f2a37);
  }

  .macro-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .macro-card {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 1rem;
    padding: 1rem;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .macro-title {
    font-size: 0.9rem;
    color: #5f7d99;
  }

  strong {
    font-size: 2rem;
    margin: 0.5rem 0;
    display: block;
    color: var(--text-primary, #1f2a37);
  }

  small {
    color: #6f7e94;
  }

  .calories,
  .protein,
  .carbs,
  .fat {
    background: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: 768px) {
    .macro-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>