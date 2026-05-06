<script>
  let age = $state('');
  let gender = $state('male');
  let height = $state('');
  let weight = $state('');
  let activity = $state('sedentary');
  let goal = $state('maintain');
  let result = $state(null);

  const activityLevels = [
    {
      value: 'sedentary',
      label: 'Sedentary',
      description: 'Little or no exercise, desk job (e.g. office worker, mostly sitting)'
    },
    {
      value: 'light',
      label: 'Lightly Active',
      description: 'Light exercise 1-3 days per week (e.g. casual walks, light yoga)'
    },
    {
      value: 'moderate',
      label: 'Moderately Active',
      description: 'Moderate exercise 3-5 days per week (e.g. gym, cycling, swimming)'
    },
    {
      value: 'active',
      label: 'Very Active',
      description: 'Hard exercise 6-7 days per week (e.g. daily training, sports)'
    },
    {
      value: 'extra',
      label: 'Extra Active',
      description: 'Very hard exercise or physical job (e.g. athlete, construction worker)'
    }
  ];

  const goals = [
    {
      value: 'lose',
      label: '🔻 Lose Weight',
      description: 'Calorie deficit of ~500 kcal/day'
    },
    {
      value: 'maintain',
      label: '⚖️ Maintain Weight',
      description: 'Stay at your current weight'
    },
    {
      value: 'gain',
      label: '💪 Gain Muscle',
      description: 'Calorie surplus of ~300 kcal/day'
    }
  ];

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extra: 1.9
  };

  function calculateBMR() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    // Mifflin-St Jeor Formula
    if (gender === 'male') {
      return 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      return 10 * w + 6.25 * h - 5 * a - 161;
    }
  }

  function calculate() {
    if (!age || !height || !weight) return;

    const bmr = calculateBMR();
    const tdee = Math.round(bmr * activityMultipliers[activity]);

    let calories;
    if (goal === 'lose') calories = tdee - 500;
    else if (goal === 'gain') calories = tdee + 300;
    else calories = tdee;

    // Macro split based on goal
    let proteinPct, carbsPct, fatPct;

    if (goal === 'lose') {
      proteinPct = 0.40; carbsPct = 0.35; fatPct = 0.25;
    } else if (goal === 'gain') {
      proteinPct = 0.35; carbsPct = 0.45; fatPct = 0.20;
    } else {
      proteinPct = 0.30; carbsPct = 0.45; fatPct = 0.25;
    }

    // Protein & carbs = 4 kcal/g, fat = 9 kcal/g
    const protein = Math.round((calories * proteinPct) / 4);
    const carbs   = Math.round((calories * carbsPct) / 4);
    const fat     = Math.round((calories * fatPct) / 9);

    result = { tdee, calories, protein, carbs, fat };
  }
</script>

<svelte:head>
  <title>Calorie Calculator - MacroMate</title>
</svelte:head>

<div class="container py-5" style="max-width: 720px;">

  <div class="mb-5">
    <h1 class="fw-bold mb-1">Calorie Calculator</h1>
    <p class="text-secondary">Enter your details below to calculate your daily calorie needs and ideal macro breakdown.</p>
  </div>

  <form onsubmit={(e) => { e.preventDefault(); calculate(); }}>

    <!-- Personal Details -->
    <div class="card border-0 shadow-sm p-4 mb-4">
      <h5 class="fw-semibold mb-4">👤 Personal Details</h5>

      <div class="row g-3">

        <!-- Age -->
        <div class="col-12 col-sm-6">
          <label for="age" class="form-label">Age</label>
          <input type="number" id="age" class="form-control" placeholder="e.g. 25" min="10" max="100" bind:value={age} required/>
        </div>

        <!-- Gender -->
        <div class="col-12 col-sm-6">
          <p class="form-label" id="gender-label">Gender</p>
          <div class="d-flex gap-2" role="group" aria-labelledby="gender-label">
            <input type="radio" name="gender" id="male" value="male" bind:group={gender} class="d-none" />
            <label for="male" class="btn flex-fill {gender === 'male' ? 'btn-success' : 'btn-dark border-secondary'}" >
              Male
            </label>
            <input type="radio" name="gender" id="female" value="female" bind:group={gender} class="d-none" />
            <label for="female" class="btn flex-fill {gender === 'female' ? 'btn-success' : 'btn-dark border-secondary'}" >
              Female
            </label>
          </div>
        </div>

        <!-- Height -->
        <div class="col-12 col-sm-6">
          <label for="height" class="form-label">Height (cm)</label>
          <input type="number" id="height" class="form-control" placeholder="e.g. 178" min="100" max="250" bind:value={height} required />
        </div>

        <!-- Weight -->
        <div class="col-12 col-sm-6">
          <label for="weight" class="form-label">Weight (kg)</label>
          <input type="number" id="weight" class="form-control" placeholder="e.g. 75" min="30" max="300" bind:value={weight} required />
        </div>

      </div>
    </div>

    <!-- Activity Level -->
    <div class="card border-0 shadow-sm p-4 mb-4">
      <h5 class="fw-semibold mb-4">🏃 Activity Level</h5>
      <div class="d-flex flex-column gap-2">
        {#each activityLevels as level}
          <label class="activity-option d-flex align-items-start gap-3 p-3 rounded-3 border cursor-pointer {activity === level.value ? 'border-success bg-success bg-opacity-10' : 'border-secondary'}" >
            <input type="radio" name="activity" value={level.value} bind:group={activity} class="mt-1" />
            <div>
              <p class="fw-semibold mb-0">{level.label}</p>
              <p class="text-secondary small mb-0">{level.description}</p>
            </div>
          </label>
        {/each}
      </div>
    </div>

    <!-- Goal -->
    <div class="card border-0 shadow-sm p-4 mb-4">
      <h5 class="fw-semibold mb-4">🎯 Your Goal</h5>
      <div class="row g-3">
        {#each goals as g}
          <div class="col-12 col-md-4">
            <label class="goal-option d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100 cursor-pointer {goal === g.value ? 'border-success bg-success bg-opacity-10' : 'border-secondary'}" >
              <input type="radio" name="goal" value={g.value} bind:group={goal} class="d-none" />
              <p class="fw-semibold mb-1">{g.label}</p>
              <p class="text-secondary small mb-0">{g.description}</p>
            </label>
          </div>
        {/each}
      </div>
    </div>

    <!-- Submit -->
    <button type="submit" class="btn btn-success btn-lg w-100">
      Calculate My Macros
    </button>

  </form>

  <!-- Results -->
  {#if result}
    <div class="result-card card border-0 shadow-lg p-4 mt-5" data-bs-theme="dark">

      <h4 class="fw-bold mb-1 text-center">Your Daily Targets</h4>
      <p class="text-secondary text-center small mb-4">Based on your profile and goal</p>

      <!-- Calories -->
      <div class="text-center mb-4">
        <p class="text-secondary small mb-0">Daily Calories</p>
        <p class="display-5 fw-bold text-success mb-0">{result.calories} <span class="fs-5 fw-normal text-secondary">kcal</span></p>
      </div>

      <hr class="border-secondary mb-4" />

      <!-- Macros -->
      <div class="row text-center g-4 mb-4">

        <div class="col-4">
          <div class="macro-block p-3 rounded-3">
            <p class="small mb-1" style="color: var(--mm-protein);">Protein</p>
            <p class="fw-bold fs-4 mb-0" style="color: var(--mm-protein);">{result.protein}g</p>
            <p class="text-secondary" style="font-size: 0.75rem;">{Math.round(result.protein * 4)} kcal</p>
          </div>
        </div>

        <div class="col-4">
          <div class="macro-block p-3 rounded-3">
            <p class="small mb-1" style="color: var(--mm-carbs);">Carbs</p>
            <p class="fw-bold fs-4 mb-0" style="color: var(--mm-carbs);">{result.carbs}g</p>
            <p class="text-secondary" style="font-size: 0.75rem;">{Math.round(result.carbs * 4)} kcal</p>
          </div>
        </div>

        <div class="col-4">
          <div class="macro-block p-3 rounded-3">
            <p class="small mb-1" style="color: var(--mm-fat);">Fat</p>
            <p class="fw-bold fs-4 mb-0" style="color: var(--mm-fat);">{result.fat}g</p>
            <p class="text-secondary" style="font-size: 0.75rem;">{Math.round(result.fat * 9)} kcal</p>
          </div>
        </div>

      </div>

      <!-- TOODDOOOOO Save to Goals Button -->
      <button class="btn btn-success w-100">
        💾 Save as My Daily Goals
      </button>

    </div>
  {/if}

</div>

<style>
  .activity-option {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .activity-option:hover {
    border-color: var(--mm-green) !important;
  }

  .goal-option {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .goal-option:hover {
    border-color: var(--mm-green) !important;
  }

  .macro-block {
    background-color: var(--mm-surface-raised);
  }

  .result-card {
    background-color: var(--mm-surface);
    border: 1px solid rgba(40, 167, 69, 0.3) !important;
  }
</style>