<script>
  import Login from "../components/Login.svelte";
  import Button from "./Button.svelte";
  export let segment;
</script>

<style>
  .header {
    height: 50px;
    padding: 0 50px;
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    background-color: #0c4f83;
    color: #fff;
  }
  .header-right {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header-country {
    padding-left: 20px;
  }
  h1 {
    margin: 0;
    font-size: 18px;
  }
  @media screen and (min-width: 750px) {
    .header-right,
    h1 {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 900px) {
    h1 {
      font-size: 32px;
    }
    .header-right,
    .header-country h1 {
      font-size: 24px;
    }
  }

  nav > ul > li:nth-child(5) {
    justify-content: flex-end;
  }

  nav > ul > li:nth-child(5) > a {
    color: pink;
  }

  nav > ul > li:nth-child(6) > a {
    color: pink;
  }
</style>

<nav>
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
        blog
      </a>
    </li>
    <span>

      <li>
        <a
          aria-current={segment === 'favorites' ? 'page' : undefined}
          href="favorites">
          Favorites
        </a>
      </li>

      <!-- li:nth-child(5) -->
      <li>
        <a
          aria-current={segment === 'signup' ? 'page' : undefined}
          href="signup">
          Sign Up
        </a>
      </li>

      <!-- li:nth-child(6) -->
      <li>
        <a aria-current={segment === 'login' ? 'page' : undefined} href="login">
          Log In
        </a>
      </li>
    </span>
  </ul>
  <h1>HunterPrice</h1>
  <div class="header-right">
    <Button text="Log In" />
    <div class="header-country">
      <h1>MEX 🇲🇽</h1>
    </div>
  </div>
  <Login />
</nav>
