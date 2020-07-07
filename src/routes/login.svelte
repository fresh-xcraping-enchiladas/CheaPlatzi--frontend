<script>
  import { logIn } from "../utils/firebase";
  import { currentUser } from "../stores/user";
  import Login from "../components/Login.svelte";

  export let segment;
</script>

<style>
  .form__container {
    text-align: center;
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
    margin: 0 auto;
    outline: none;
    height: 24px;
    text-align: center;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    margin-bottom: 3px;
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
  @media (max-width: 375px) {
    .form__container--input {
      width: 100%;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    input,
    button {
      width: 80%;
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
  @media screen and (min-width: 750px) {
    h2 {
      font-size: 3.2em;
    }
    input,
    button {
      width: 50%;
    }
  }
</style>

<div class="form__container" id="firebaseui-auth-container">
  <h2>Log in to Gamecheap</h2>
  <div class="form__container--input">
    <input id="emailLog" type="email" placeholder="you@email.com" />
    <input id="passwrdLog" type="password" placeholder="password" />
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
    <Login />
  {/if}
</div>
