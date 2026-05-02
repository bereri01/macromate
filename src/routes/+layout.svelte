<script>
  import "./app.css";
  let { children } = $props();
</script>

<div class="d-flex flex-column min-vh-100">
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

  <div class="container mt-3 flex-grow-1">
    {@render children()}
  </div>


  <!-- src/lib/components/layout/Footer.svelte -->
  <footer class="footer bg-dark text-light mt-auto py-4" data-bs-theme="dark">
    <div class="container-fluid px-4">
      <div class="row align-items-center">

        <!-- Left: Brand & Tagline -->
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <a href="/" class="text-light text-decoration-none fw-bold fs-5">MacroMate</a>
          <p class="text-secondary mb-0 small mt-1">Track smarter. Eat better.</p>
        </div>

        <!-- Center: Nav Links -->
        <div class="col-12 col-md-4 mb-3 mb-md-0 text-md-center">
          <ul class="list-unstyled d-flex flex-wrap justify-content-md-center gap-3 mb-0">
            <li><a href="/dailytracking" class="text-secondary text-decoration-none footer-link">Daily Tracking</a></li>
            <li><a href="/caloriecalculator" class="text-secondary text-decoration-none footer-link">Calorie Calculator</a></li>
            <li><a href="/food" class="text-secondary text-decoration-none footer-link">Food Macros</a></li>
            <li><a href="/recipes" class="text-secondary text-decoration-none footer-link">Recipes</a></li>
          </ul>
        </div>

        <!-- Right: Login & Copyright -->
        <div class="col-12 col-md-4 text-md-end">
          <a href="/login" class="btn btn-outline-light btn-sm mb-2">Login</a>
          <p class="text-secondary mb-0 small">
            &copy; {new Date().getFullYear()} MacroMate. All rights reserved.
          </p>
        </div>

      </div>

      <!-- Divider -->
      <hr class="border-secondary mt-3 mb-2" />

      <p class="text-secondary text-center mb-0" style="font-size: 0.75rem;">
        Built with SvelteKit and Bootstrap
      </p>
    </div>
  </footer>
</div>
<style>
  .footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-link:hover {
    color: #fff !important;
    transition: color 0.2s ease;
  }
</style>