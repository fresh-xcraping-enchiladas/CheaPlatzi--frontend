<script>
  import Login from "../components/Login.svelte";
  import Button from "./Button.svelte";
  import { onMount } from "svelte";
  import { signOut } from "../utils/firebase";
  import { currentUser, colombianFlag } from "../stores/user";
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    height: 60px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-blue);
    color: var(--primary-white);
  }

  nav .logo {
    display: flex;
    align-items: center;
  }

  nav .logo a img {
    height: 60px;
  }

  nav .logo h1 {
    font-size: 18px;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  nav ul {
    float: right;
    margin-right: 15px;
    list-style: none;
  }
  [aria-current] {
    opacity: 100%;
  }
  [aria-current]::after {
    opacity: 50%;
  }

  nav ul li {
    display: inline-block;
    line-height: 50px;
    margin: 0 15px;
  }

  nav ul li a {
    position: relative;
    padding: 5px 0;
    color: var(--lightpurple-title);
    font-size: 18px;
    text-decoration: none;
    margin: 0;
    border: none;
  }
  nav ul li [aria-current="page"] {
    color: var(--primary-white);
  }

  label #sign-one,
  label #sign-two {
    font-size: 30px;
    color: #fff;
    line-height: 50px;
    margin-right: 30px;
    cursor: pointer;
    display: none;
  }

  #res-menu {
    display: none;
  }

  @media (max-width: 870px) {
    label #sign-one {
      display: block;
    }

    nav ul {
      position: fixed;
      width: 80%;
      top: 60px;
      left: -100%;
      text-align: center;
      transition: 0.5s;
      z-index: 10;
      background-color: var(--primary-blue);
    }

    nav ul li {
      display: block;
      margin: 40px 0;
      line-height: 30px;
    }

    nav ul li a {
      position: relative;
      padding: 5px 0;
      color: var(--lightpurple-title);
      font-size: 18px;
      text-decoration: none;
      margin: 0;
      border: none;
    }

    #res-menu:checked ~ ul {
      left: 0;
    }
    #res-menu:checked ~ label #sign-one {
      display: none;
    }
  }
  .hide {
    display: none;
  }
</style>

<nav>
  <input type="checkbox" id="res-menu" />
  <label for="res-menu">
    <i class="fa fa-bars" id="sign-one" />
    <i class="fa fa-times" id="sign-two" />
  </label>
  <div class="logo">
    <a aria-current={segment === undefined ? 'page' : undefined} href="/">
      <img src="../gamecheap-logo.png" alt="Gamecheap Logo" />
    </a>
    <a aria-current={segment === undefined ? 'page' : undefined} href="/">
      <h1>Gamecheap</h1>
    </a>
  </div>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href="/">
        Home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blog
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'favorites' ? 'page' : undefined}
        href="favorites">
        Favorites
      </a>
    </li>
    {#if $currentUser}
      <li>
        <a
          class="hide"
          aria-current={segment === 'signup' ? 'page' : undefined}
          href="signup">
          Sign up
        </a>
      </li>
    {:else}
      <li>
        <a
          aria-current={segment === 'signup' ? 'page' : undefined}
          href="signup">
          Sign up
        </a>
      </li>
    {/if}
    <li>
      {#if !$currentUser}
        <a aria-current={segment === 'login' ? 'page' : undefined} href="login">
          <Button text="Log in" />
        </a>
      {:else}
        <Login />
      {/if}
    </li>
  </ul>
</nav>
