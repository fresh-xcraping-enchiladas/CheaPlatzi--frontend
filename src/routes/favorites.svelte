<script>
  import Login from "../components/Login.svelte";
  import { currentUser } from "../stores/user";
</script>

<style>
  .fav__container {
    padding: 1em;
  }

  @media (min-width: 320px) {
    .fav__container {
      padding: 5em 2em;
      height: 100vh;
    }
  }
</style>

<main>
  <div class="fav__container">
    <h1>Favorites</h1>

    <div class="page-index">
      {#if $currentUser}
        <h2>
          Welcome back
          <strong>{$currentUser.displayName}!</strong>
        </h2>
      {:else}
        You need to be logged in to access this page. Please, log in first.
        <Login />
      {/if}
    </div>
  </div>
</main>
