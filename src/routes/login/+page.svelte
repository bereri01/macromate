<script>
  let email = $state('');
  let password = $state('');
  let isRegistering = $state(false);
  let confirmPassword = $state('');
  let errorMessage = $state('');
  let isLoading = $state(false);

  function toggleMode() {
    isRegistering = !isRegistering;
    errorMessage = '';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    errorMessage = '';
    isLoading = true;

    // Error if email or pwd is missing
    if (!email || !password) {
      errorMessage = 'Please fill in all fields.';
      isLoading = false;
      return;
    }

    // Error message if password missmatch
    if (isRegistering && password !== confirmPassword) {
      errorMessage = 'Passwords do not match.';
      isLoading = false;
      return;
    }

    // Error message if password less then 8 characters
    if (password.length < 8) {
      errorMessage = 'Password must be at least 8 characters.';
      isLoading = false;
      return;
    }

    // TODO: Replace with your real auth logic
    setTimeout(() => {
      isLoading = false;
      // e.g. goto('/dailytracking');
    }, 1000);
  }
</script>

<!--  Login or Register in browser head-->
<svelte:head>
  <title>{isRegistering ? 'Register' : 'Login'} - MacroMate</title>
</svelte:head>

<div class="login-wrapper d-flex align-items-center justify-content-center py-5">
  <div class="login-card card border-0 shadow-lg p-4 p-md-5">

    <!-- Head of Login page -->
    <div class="text-center mb-4">
      <a href="/" class="text-decoration-none">
        <h1 class="fs-3 fw-bold text-success mb-0">MacroMate</h1>
        <p class="text-muted small mt-1">Track smarter. Eat better.</p>
      </a>
    </div>

    <!-- Tab Toggle -->
    <div class="d-flex mb-4 login-tabs">
      <button class="flex-fill btn {!isRegistering ? 'btn-success' : 'btn-dark border-secondary'}" onclick={() => { isRegistering = false; }}>
        Login
      </button>
      <button class="flex-fill btn {isRegistering ? 'btn-success' : 'btn-dark border-secondary'}" onclick={() => { isRegistering = true; }}>
        Register
      </button>
    </div>

    <!-- Error Alert -->
    {#if errorMessage}
      <div class="alert alert-danger py-2 small" role="alert">
        {errorMessage}
      </div>
    {/if}

    <!-- Form -->
    <form onsubmit={handleSubmit} novalidate>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label text-muted small">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="you@example.com" bind:value={email} autocomplete="email" required/>
      </div>

      <!-- Password -->
      <div class="mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <label for="password" class="form-label text-muted small mb-0">Password</label>
          {#if !isRegistering}
            <a href="/forgot-password" class="text-success small text-decoration-none">Forgot password?</a>
          {/if}
        </div>
        <input type="password" id="password" class="form-control mt-1" placeholder="Minimum 8 characters" bind:value={password} autocomplete={isRegistering ? 'new-password' : 'current-password'} required/>
      </div>

      <!-- Confirm Password (Register only) -->
      {#if isRegistering}
        <div class="mb-3">
          <label for="confirmPassword" class="form-label text-muted small">Confirm Password</label>
          <input type="password" id="confirmPassword" class="form-control" placeholder="Repeat your password" bind:value={confirmPassword} autocomplete="new-password" required />
        </div>
      {/if}

      <!-- Submit Button -->
      <button type="submit" class="btn btn-success w-100 mt-2" disabled={isLoading}>
        {#if isLoading}
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {isRegistering ? 'Creating account...' : 'Logging in...'}
        {:else}
          {isRegistering ? 'Create Account' : 'Login'}
        {/if}
      </button>

    </form>

    <!-- Footer note -->
    <p class="text-muted text-center small mt-4 mb-0">
      By continuing, you agree to MacroMate's Terms and Privacy Policy.
    </p>

  </div>
</div>

<style>
  .login-wrapper {
    min-height: calc(100vh - 130px); /* Subtract navbar + footer height */
  }

  .login-card {
    width: 100%;
    max-width: 440px;
    background-color: var(--mm-surface) !important;
    border-radius: var(--mm-radius-xl) !important;
  }

  .login-tabs .btn {
    border-radius: 0;
    transition: all 0.2s ease;
  }

  .login-tabs .btn:first-child {
    border-radius: var(--mm-radius) 0 0 var(--mm-radius);
  }

  .login-tabs .btn:last-child {
    border-radius: 0 var(--mm-radius) var(--mm-radius) 0;
  }

  .login-card p, .login-card label {
    color: #f8f9fa !important;
  }
</style>