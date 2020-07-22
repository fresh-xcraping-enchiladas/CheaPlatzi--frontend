<script>
  import { onMount } from "svelte";
  import Category from "../components/Category.svelte";
  import Spinner from "../components/Spinner.svelte";
  import Carousel from "../components/Carousel.svelte";
  import ConsoleItem from "../components/ConsoleItem.svelte";
  import Login from "../components/Login.svelte";
  import TextInput from "../components/TextInput.svelte";
  import CategoryContainer from "../components/CategoryContainer.svelte";
  import { currentUser } from "../stores/user";
  import API_URL from "../config/config.js";

  const API = `${API_URL.API_URL}product?`;
  let nintendoProducts = [];
  let playstationProducts = [];
  let xboxProducts = [];
  onMount(async () => {
    let response = await fetch(`${API}id_type_product=1&page=1`);
    nintendoProducts = await response.json();
    response = await fetch(`${API}id_type_product=2&page=1`);
    playstationProducts = await response.json();
    response = await fetch(`${API}id_type_product=3&page=1`);
    xboxProducts = await response.json();
  });

  let searchInput = "";
  let searchedItems = [];
  const handleInput = event => {
    event.preventDefault();
    searchInput = event.target.input.value;
    fetch(`${API}name=${searchInput}&page=1`)
      .then(response => response.json())
      .then(apiResponse => {
        searchedItems = apiResponse;
      });
  };
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


<main>
  <div class="container__hero">
  <h2>Explore the best videogames and consoles in your city.</h2>
  <TextInput
    placeholder="Find your favorite console or videogames"
    {handleInput} />
</div>
  {#if searchedItems.length > 0}
    <Category text="Searched Items">
      <Carousel>
        {#each searchedItems as item}
          <ConsoleItem
            id={item.id}
            image={item.image}
            url={item.url}
            name={item.name}
            price={item.price}
            description={item.description}
            commerce={item.commerce}
            id_type_product={item.id_type_product}
            product_type={item.product_type}
            id_ecommerce={item.id_ecommerce} />
        {/each}
      </Carousel>
    </Category>
  {/if}
  <div class="container">
    <CategoryContainer />
    <Category>
      <Carousel>
        {#if nintendoProducts.length > 0}
          {#each nintendoProducts as product}
            <ConsoleItem
              id={product.id}
              barcode={product.barcode}
              image={product.image}
              url={product.url}
              name={product.name}
              price={product.price}
              description={product.description}
              commerce={product.commerce}
              id_type_product={product.id_type_product}
              product_type={product.product_type}
              id_ecommerce={product.id_ecommerce} />
          {/each}
        {:else}
          <Spinner />
        {/if}
      </Carousel>
    </Category>
    <Category>
      <Carousel>
        {#if playstationProducts.length > 0}
          {#each playstationProducts as product}
            <ConsoleItem
              id={product.id}
              barcode={product.barcode}
              image={product.image}
              url={product.url}
              name={product.name}
              price={product.price}
              description={product.description}
              commerce={product.commerce}
              id_type_product={product.id_type_product}
              product_type={product.product_type}
              id_ecommerce={product.id_ecommerce} />
          {/each}
        {:else}
          <Spinner />
        {/if}
      </Carousel>
    </Category>
    <Category>
      <Carousel>
        {#if xboxProducts.length > 0}
          {#each xboxProducts as product}
            <ConsoleItem
              id={product.id}
              barcode={product.barcode}
              image={product.image}
              url={product.url}
              name={product.name}
              price={product.price}
              description={product.description}
              commerce={product.commerce}
              id_type_product={product.id_type_product}
              product_type={product.product_type}
              id_ecommerce={product.id_ecommerce} />
          {/each}
        {:else}
          <Spinner />
        {/if}
      </Carousel>
    </Category>
  </div>
</main>