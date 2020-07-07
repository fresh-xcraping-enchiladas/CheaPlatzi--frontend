<script>
  import { signUp } from "../utils/firebase";

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

<div class="form__container">
  <h2>Find consoles and video games at the best possible price.</h2>
  <div class="form__container--input">
    <input id="emailSign" type="email" placeholder="you@email" />
    <input id="passwrdSign" type="password" placeholder="password" />
    <button
      id="signupbtn"
      on:click={() => {
        signUp();
      }}>
      Sign Up
    </button>
  </div>
  <p>
    Already have an account?
    <a aria-current={segment === 'login' ? 'page' : undefined} href="login">
      Login
    </a>
  </p>
</div>
