<!-- src/routes/+page.svelte -->

<script>
  const features = [
    {
      icon: "📋",
      title: "Daily Tracking",
      description: "Log your meals and monitor your macro intake every day with ease.",
      href: "/dailytracking"
    },
    {
      icon: "🔥",
      title: "Calorie Calculator",
      description: "Calculate your daily calorie needs based on your goals and body metrics.",
      href: "/caloriecalculator"
    },
    {
      icon: "🥦",
      title: "Food Macros",
      description: "Browse a detailed database of foods and their macro breakdowns.",
      href: "/food"
    },
    {
      icon: "📖",
      title: "Recipes",
      description: "Discover healthy recipes with full nutritional information per serving.",
      href: "/recipes"
    }
  ];

  const stats = [
    { value: "500+", label: "Foods in Database" },
    { value: "100+", label: "Healthy Recipes" },
    { value: "3", label: "Macros Tracked" },
    { value: "Free", label: "Always" }
  ];
</script>

<svelte:head>
  <title>MacroMate - Track Smarter. Eat Better.</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero bg-dark text-light py-5">
  <div class="container py-4">
    <div class="row align-items-center">

      <div class="col-12 col-md-7 mb-4 mb-md-0">
        <span class="badge bg-success mb-3">Free to use</span>
        <h1 class="display-4 fw-bold mb-3">
          Track your macros.<br />Reach your goals.
        </h1>
        <p class="lead text-secondary mb-4">
          MacroMate helps you monitor your daily nutrition, calculate calories,
          and discover healthy recipes - all in one place.
        </p>
        <div class="d-flex flex-wrap gap-3">
          <a href="/login" class="btn btn-success btn-lg">Get Started Free</a>
          <a href="/dailytracking" class="btn btn-outline-light btn-lg">See How It Works</a>
        </div>
      </div>

      <div class="col-12 col-md-5">
        <div class="card bg-secondary bg-opacity-25 border-0 rounded-4 p-4">
          <p class="text-secondary small mb-2">Today's Progress</p>
          <h2 class="text-light fw-bold mb-1">1,840 <span class="fs-5 fw-normal text-secondary">/ 2,200 kcal</span></h2>
          <div class="progress bg-dark mb-4" style="height: 8px;">
            <div class="progress-bar bg-success" style="width: 83%;"></div>
          </div>
          <div class="row text-center g-3">
            <div class="col-4">
              <p class="text-secondary small mb-1">Protein</p>
              <p class="text-light fw-semibold mb-1">142g</p>
              <div class="progress bg-dark" style="height: 5px;">
                <div class="progress-bar bg-primary" style="width: 71%;"></div>
              </div>
            </div>
            <div class="col-4">
              <p class="text-secondary small mb-1">Carbs</p>
              <p class="text-light fw-semibold mb-1">198g</p>
              <div class="progress bg-dark" style="height: 5px;">
                <div class="progress-bar bg-warning" style="width: 66%;"></div>
              </div>
            </div>
            <div class="col-4">
              <p class="text-secondary small mb-1">Fat</p>
              <p class="text-light fw-semibold mb-1">54g</p>
              <div class="progress bg-dark" style="height: 5px;">
                <div class="progress-bar bg-danger" style="width: 77%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Stats Bar -->
<section class="bg-success py-3">
  <div class="container">
    <div class="row text-center g-3">
      {#each stats as stat}
        <div class="col-6 col-md-3">
          <p class="fw-bold fs-4 text-white mb-0">{stat.value}</p>
          <p class="text-white opacity-75 small mb-0">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-5 bg-body">
  <div class="container py-3">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Everything you need to eat smarter</h2>
      <p class="text-secondary">Four powerful tools, one simple app.</p>
    </div>
    <div class="row g-4">
      {#each features as feature}
        <div class="col-12 col-sm-6 col-lg-3">
          <a href={feature.href} class="card h-100 text-decoration-none border-0 shadow-sm feature-card">
            <div class="card-body p-4">
              <div class="fs-2 mb-3">{feature.icon}</div>
              <h5 class="card-title fw-semibold">{feature.title}</h5>
              <p class="card-text text-secondary small">{feature.description}</p>
            </div>
            <div class="card-footer bg-transparent border-0 pb-3 px-4">
              <span class="text-success small fw-semibold">Explore →</span>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-dark text-light py-5">
  <div class="container py-3 text-center">
    <h2 class="fw-bold mb-3">Ready to take control of your nutrition?</h2>
    <p class="text-secondary mb-4 mx-auto" style="max-width: 500px;">
      Join MacroMate today and start tracking your macros in minutes. No credit card required.
    </p>
    <a href="/login" class="btn btn-success btn-lg px-5">Get Started Free</a>
  </div>
</section>

<style>
  .hero {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .feature-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
  }
</style>