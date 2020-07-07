<script>
  import Login from "../components/Login.svelte";
  import Button from "./Button.svelte";
  import { signOut } from "../utils/firebase";
  import { currentUser } from "../stores/user";

  export let segment;
</script>

<style>
  .header {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    height: 5.2rem;
    padding: 0 50px;
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-blue);
    color: var(--primary-white);
  }
  .header-country {
    padding-left: 20px;
  }
  h1 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 375px) and (min-width: 375px) {
    .header {
      padding: 0 20px;
    }
    figure {
      margin: 0;
    }
    #sapper > nav > li > a > figure > img {
      height: auto;
      width: auto;
      max-width: 5.6rem;
    }
    #sapper > nav > ul > li:nth-child(1) > a,
    #sapper > nav > ul > li:nth-child(2) > a,
    #sapper > nav > ul > li:nth-child(3) > a,
    #sapper > nav > ul > li:nth-child(4) > a,
    #sapper > nav > ul > li:nth-child(5) > a {
      display: none;
    }
    #sapper > nav > ul > li:nth-child(6) > a {
      font-size: 12px;
    }
    h1 {
      font-size: 12px;
      display: inline-block;
    }
    .header-country {
      padding-left: 5px;
    }
  }

  @media (max-width: 414px) and (min-width: 412px) {
    .header {
      padding: 0 20px;
    }
    figure {
      margin: 0;
    }
    #sapper > nav > li > a > figure > img {
      height: auto;
      width: auto;
      max-width: 7.5rem;
    }
    /* #sapper > nav > li > a > figure > h1 {
      display: none;
    } */
    #sapper > nav > ul > li:nth-child(1) > a,
    #sapper > nav > ul > li:nth-child(2) > a,
    #sapper > nav > ul > li:nth-child(3) > a,
    #sapper > nav > ul > li:nth-child(4) > a,
    #sapper > nav > ul > li:nth-child(5) > a {
      display: none;
    }
    #sapper > nav > ul > li:nth-child(6) > a {
      font-size: 15px;
    }
    h1 {
      font-size: 12px;
      display: inline-block;
    }
    .header-country {
      padding-left: 5px;
    }
  }

  @media screen and (min-width: 750px) {
  }

  @media screen and (min-width: 900px) {
    h1 {
      font-size: 32px;
    }
    .header-country h1 {
      font-size: 24px;
    }
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: auto;
    width: auto;
    max-width: 8rem;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
    display: block;
    float: left;
  }
  a {
    text-decoration: none;
    padding: 0em 0.5em;
    display: block;
    color: var(--variant-blue);
    transition: color 0.2s ease-in-out;
  }
  a:hover {
    color: var(--primary-white);
  }
  nav > ul > li:nth-child(5) > a {
    color: var(--variant-blue);
  }
</style>

<nav class="header">
  <li>
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      <figure>
        <img src="../gamecheap-logo.png" alt="Gamecheap Logo" />
        <h1>Gamecheap</h1>
      </figure>
    </a>
  </li>
  <ul>

    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
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

    <li>
      <a aria-current={segment === 'signup' ? 'page' : undefined} href="signup">
        Sign Up
      </a>
    </li>

    <li>
      {#if !$currentUser}
        <a aria-current={segment === 'login' ? 'page' : undefined} href="login">
          <Button text="Log in" />
        </a>
      {:else}
        <Login />
      {/if}
    </li>

    <li>
      <div class="header-country">
        <h1>MEX 🇲🇽</h1>
      </div>
    </li>
  </ul>
</nav>
