<script>
  import MacroSummary from '$lib/components/dailytracking/MacroSummary.svelte';
  import MealSection from '$lib/components/dailytracking/MealSection.svelte';

  const today = new Date().toISOString().split('T')[0];
  let selectedDate = today;

  const goals = {
    calories: 2100,
    protein: 140,
    carbs: 250,
    fat: 70
  };

  const foods = [
    {
      id: 'food-1',
      name: 'Chicken Breast',
      serving_unit: '100g',
      macros: { calories: 165, protein: 31, carbs: 0, fat: 3.6 }
    },
    {
      id: 'food-2',
      name: 'Brown Rice',
      serving_unit: '100g',
      macros: { calories: 112, protein: 2.6, carbs: 23, fat: 0.9 }
    },
    {
      id: 'food-3',
      name: 'Avocado',
      serving_unit: '100g',
      macros: { calories: 160, protein: 2, carbs: 9, fat: 15 }
    },
    {
      id: 'food-4',
      name: 'Greek Yogurt',
      serving_unit: '100g',
      macros: { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 }
    }
  ];

  const recipes = [
    {
      id: 'recipe-1',
      title: 'Protein Power Bowl',
      macrosPerServing: { calories: 420, protein: 32, carbs: 35, fat: 14 }
    },
    {
      id: 'recipe-2',
      title: 'Veggie Stir Fry',
      macrosPerServing: { calories: 320, protein: 10, carbs: 45, fat: 12 }
    },
    {
      id: 'recipe-3',
      title: 'Berry Smoothie',
      macrosPerServing: { calories: 230, protein: 8, carbs: 38, fat: 6 }
    }
  ];

  const mealLabels = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snacks: 'Snacks'
  };

  function emptyMeals() {
    return {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: []
    };
  }

  let dailyLogs = {
    [selectedDate]: emptyMeals()
  };

  let meals = dailyLogs[selectedDate];

  function calculateTotalMacros(mealData) {
    return Object.values(mealData).flat().reduce(
      (totals, item) => ({
        calories: totals.calories + item.macros.calories,
        protein: totals.protein + item.macros.protein,
        carbs: totals.carbs + item.macros.carbs,
        fat: totals.fat + item.macros.fat
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  }

  $: totalMacros = calculateTotalMacros(meals);

  function saveCurrentDay() {
    dailyLogs = {
      ...dailyLogs,
      [selectedDate]: meals
    };
  }

  function loadDay(date) {
    saveCurrentDay();
    selectedDate = date;
    if (!dailyLogs[date]) {
      dailyLogs = { ...dailyLogs, [date]: emptyMeals() };
    }
    meals = dailyLogs[date];
  }

  function changeDate(offset) {
    const current = new Date(selectedDate);
    current.setDate(current.getDate() + offset);
    loadDay(current.toISOString().split('T')[0]);
  }

  function handleAddFood(event) {
    const { mealType, foodId, quantity } = event.detail;
    const food = foods.find((item) => item.id === foodId);
    if (!food) return;

    const entry = {
      id: `${foodId}-${Date.now()}`,
      name: food.name,
      serving_unit: food.serving_unit,
      quantity,
      macros: {
        calories: Math.round(food.macros.calories * quantity),
        protein: Math.round(food.macros.protein * quantity * 10) / 10,
        carbs: Math.round(food.macros.carbs * quantity * 10) / 10,
        fat: Math.round(food.macros.fat * quantity * 10) / 10
      }
    };

    meals = {
      ...meals,
      [mealType]: [...meals[mealType], entry]
    };
    saveCurrentDay();
  }

  function handleAddRecipe(event) {
    const { mealType, recipeId, servings } = event.detail;
    const recipe = recipes.find((item) => item.id === recipeId);
    if (!recipe) return;

    const entry = {
      id: `${recipeId}-${Date.now()}`,
      title: recipe.title,
      servings,
      macros: {
        calories: Math.round(recipe.macrosPerServing.calories * servings),
        protein: Math.round(recipe.macrosPerServing.protein * servings * 10) / 10,
        carbs: Math.round(recipe.macrosPerServing.carbs * servings * 10) / 10,
        fat: Math.round(recipe.macrosPerServing.fat * servings * 10) / 10
      }
    };

    meals = {
      ...meals,
      [mealType]: [...meals[mealType], entry]
    };
    saveCurrentDay();
  }

  function handleRemoveItem(event) {
    const { mealType, itemId } = event.detail;
    meals = {
      ...meals,
      [mealType]: meals[mealType].filter((item) => item.id !== itemId)
    };
    saveCurrentDay();
  }

  function formatDisplayDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>Daily Tracking • MacroMate</title>
</svelte:head>



    <header class="page-top">
      <section class="page-header">
        <h1>Daily Tracking</h1>
        <p>What did you eat today?</p>
      </section>
      <div class="date-controls">
        <button class="btn btn-secondary" type="button" on:click={() => changeDate(-1)}>
          ← Previous
        </button>
        <div class="current-date">{formatDisplayDate(selectedDate)}</div>
        <button class="btn btn-secondary" type="button" on:click={() => changeDate(1)}>
          Next →
        </button>
      </div>
    </header>

    <MacroSummary totalMacros={totalMacros} goals={goals} />

    <section class="meals-grid">
      {#each Object.keys(mealLabels) as mealType}
        <MealSection mealType={mealType} mealLabel={mealLabels[mealType]} mealItems={meals[mealType]} {foods} {recipes} on:addfood={handleAddFood} on:addrecipe={handleAddRecipe} on:remove={handleRemoveItem} />
      {/each}
    </section>
    <br/>


<style>
  .page-shell {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .page-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .date-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .current-date {
    font-weight: 600;
    color: #f8fafc;
    min-width: 240px;
    text-align: center;
  }

  .meals-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .btn {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 0.78rem 1rem;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    background: rgba(255, 255, 255, 0.08);
    color: #f8fafc;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    color: #f8fafc;
  }

  @media (max-width: 900px) {
    .meals-grid {
      grid-template-columns: 1fr;
    }

    .current-date {
      min-width: auto;
    }
  }
</style>
