<script>
  import Category from "../components/Category.svelte";
  import Carousel from "../components/Carousel.svelte";
  import ConsoleItem from "../components/ConsoleItem.svelte";
  import Login from "../components/Login.svelte";

  import { currentUser } from "../stores/user";
</script>

<style>
  h2,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>CheaPlatzi</title>
</svelte:head>

<main>
  <h2>
    {#if $currentUser}
      Welcome back
      <strong>{$currentUser.displayName}!</strong>
    {:else}Explore the best Video Games & Consoles in your City.{/if}
    <br />
  </h2>

  <figure>
    <img alt="Nintendo" src="nintendo.jpeg" />
    <figcaption>Consolas y video juegos de Nintendo</figcaption>
  </figure>

  <Category>
    <Carousel>
      <ConsoleItem />
      <ConsoleItem />
      <ConsoleItem />
      <ConsoleItem />
    </Carousel>
  </Category>

</main>
