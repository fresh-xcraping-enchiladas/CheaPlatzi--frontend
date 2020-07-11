<script>
  import { logIn } from "../utils/firebase";
  import { currentUser } from "../stores/user";
  import Login from "../components/Login.svelte";

  export let segment;
</script>

<style>
  .form__container {
    text-align: center;
    padding: 1em;
  }
  .form__container--input {
    width: 400px;
    margin: auto;
  }
  h2 {
    font-size: 3rem;
    font-weight: 600;
  }
  input {
    display: block;
    margin: 10px auto;
    outline: none;
    height: 24px;
    text-align: center;
    border: none;
    border-bottom: 0.8px solid var(--purple-button);
  }
  button {
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 18px;
    width: 45%;
    color: var(--lightpurple-text);
    background-color: var(--purple-button);
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--lightpurple-text);
  }
  @media (min-width: 320px) {
    .form__container {
      padding: 5em 2em;
      height: 50vh;
    }
    .form__container--input {
      width: 100%;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
    }

    button {
      width: 35%;
      border-radius: 24px;
      margin-top: 2em;
    }
  }
  @media (min-width: 412px) {
    .form__container--input {
      width: 100%;
    }
    h2 {
      font-size: 2.3em;
      font-weight: 600;
    }
    input,
    button {
      width: 80%;
    }
  }
  @media (min-width: 750px) {
    h2 {
      font-size: 3.2em;
    }
    input {
      width: 30%;
    }
    button {
      width: 20%;
    }
  }
</style>

<div class="form__container" id="firebaseui-auth-container">
  <h2>Log in to Gamecheap</h2>
  <div class="form__container--input">
    <input id="emailLog" type="email" placeholder="you@domain.com" />
    <input id="passwrdLog" type="password" placeholder="Password" />
    <button
      on:click={() => {
        logIn();
      }}>
      Sign In
    </button>
    <p>
      Don't have an account?
      <a aria-current={segment === 'signup' ? 'page' : undefined} href="signup">
        Register
      </a>
    </p>
  </div>
  {#if !$currentUser}
    <p>---------- Or ----------</p>
    <Login class="google__button" />
  {/if}
</div>
