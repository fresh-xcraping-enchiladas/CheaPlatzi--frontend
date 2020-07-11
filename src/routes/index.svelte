<script>
  import Category from "../components/Category.svelte";
  import Carousel from "../components/Carousel.svelte";
  import ConsoleItem from "../components/ConsoleItem.svelte";
  import Login from "../components/Login.svelte";
  import TextInput from "../components/TextInput.svelte";
  import CategoryContainer from "../components/CategoryContainer.svelte";

  import { currentUser } from "../stores/user";
</script>

<style>
  h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 0.5em 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .container__hero {
    background: linear-gradient(rgba(12, 79, 131, 0.6), rgba(0, 0, 0, 0.6)),
      url(https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
    background-size: cover;
    width: 100%;
    height: 400px;
    position: relative;
    margin-bottom: 50px;
  }

  .text__hero h2 {
    color: white;
    text-transform: uppercase;
    margin: 0;
    width: 95%;
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 3rem;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 375px) {
    .container {
      width: 375px;
    }
    .text__hero h2 {
      font-size: 2rem;
      width: 85%;
      font-weight: 500;
    }
  }
  @media (min-width: 480px) {
    h2 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Gamecheap</title>
</svelte:head>

<main>
  {#if $currentUser}
    <h2>
      Welcome back
      <strong>{$currentUser.displayName}!</strong>
    </h2>
  {:else}
    <div class="container__hero text__hero">
      <h2>Explore the best Video Games & Consoles in your City.</h2>
      <div>
        <TextInput placeholder="Search" />
      </div>
    </div>
  {/if}

  <div class="container">
    <CategoryContainer />

    <Category>
      <Carousel>
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
      </Carousel>
    </Category>

    <Category>
      <Carousel>
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
        <ConsoleItem />
      </Carousel>
    </Category>
  </div>
</main>
