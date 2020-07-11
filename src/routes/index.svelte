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
  .container__hero {
    background: url(https://gamecheap-resources.s3.amazonaws.com/hero-img.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container__hero h2 {
    color: white;
    text-transform: uppercase;
    margin: 0;
    width: 50%;
    font-size: 2.8rem;
    text-align: center;
    line-height: 56px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }

  @media screen and (max-width: 480px) {
    .container {
      width: 100%;
    }

    .container__hero h2 {
      font-size: 1.7rem;
      width: 80%;
      line-height: 30px;
    }
  }
</style>

<svelte:head>
  <title>Gamecheap | Find your favorite console or videogames</title>
</svelte:head>

<div class="page-index">
  {#if $currentUser}
    <h2>
      Welcome back
      <strong>{$currentUser.displayName}!</strong>
    </h2>
  {:else}
    <div class="container__hero">
      <h2>Explore the best videogames and consoles in your city.</h2>
      <TextInput placeholder="Find your favorite console or videogames" />
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
</div>
