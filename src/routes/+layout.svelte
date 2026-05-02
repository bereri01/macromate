<script>
  import "./app.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <!-- Left: /Home -->
    <a class="navbar-brand" href="/">MacroMate</a>

    <!-- Toggler for mobile -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <!-- Center/Right: Nav links pushed to the right with ms-auto -->
      <ul class="navbar-nav ms-auto me-3">
        <li class="nav-item">
          <a class="nav-link" href="/dailytracking">Daily Tracking</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/caloriecalculator">Calorie Calculator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/food">Food Macros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/recipes">Recipes</a>
        </li>
      </ul>

      <!-- Far Right: Login Button -->
      <a class="btn btn-outline-light" href="/login">Login</a>

    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>