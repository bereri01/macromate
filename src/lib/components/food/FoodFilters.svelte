<script>
  export let search = "";
  export let category = "";
</script>

<section class="food-filters">
  <form method="get" class="filter-form">
    <div class="search-group">
      <input
        type="text"
        name="search"
        placeholder="Search foods..."
        value={search}
        aria-label="Search foods"
      />
    </div>

    <div class="category-group">
      <label for="category-select">Filter by category:</label>
      <select name="category" id="category-select" value={category}>
        <option value="">All categories</option>
        <option value="Meat">Meat</option>
        <option value="Fish & Seafood">Fish & Seafood</option>
        <option value="Dairy & Eggs">Dairy & Eggs</option>
        <option value="Grains & Cereals">Grains & Cereals</option>
        <option value="Legumes">Legumes</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Nuts & Seeds">Nuts & Seeds</option>
        <option value="Oils & Fats">Oils & Fats</option>
        <option value="Beverages">Beverages</option>
        <option value="Supplements">Supplements</option>
        <option value="Snacks">Snacks</option>
      </select>
    </div>

    <button type="submit">Apply</button>
  </form>
</section>

<style>
  .food-filters {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--surface, #fff);
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .filter-form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: end;
  }

  .search-group {
    flex: 1 1 300px;
  }

  .category-group {
    flex: 1 1 200px;
  }

  .category-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-secondary, #555);
  }

  input, select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    background: var(--surface, #fff);
    font-size: 1rem;
  }

  input:focus, select:focus {
    outline: none;
    border-color: var(--primary, #2b8a3e);
    box-shadow: 0 0 0 3px rgba(43, 138, 62, 0.1);
  }

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.75rem;
    background: var(--primary, #2b8a3e);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }

  button:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .filter-form {
      flex-direction: column;
      align-items: stretch;
    }

    .search-group, .category-group {
      flex: 1 1 auto;
    }
  }
</style>