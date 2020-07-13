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

  const API = "https://cheaplatzi.uc.r.appspot.com/api/product";
  let data = []
  let nintendoProducts = [];
  let playstationProducts = [];
  let xboxProducts = [];
  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
    nintendoProducts = data.filter(item => item.id_type_product === 1)
    nintendoProducts = nintendoProducts.slice(10, 20)
    xboxProducts = data.filter(item => item.id_type_product === 2)
    xboxProducts = xboxProducts.slice(10, 20)
    playstationProducts = data.filter(item => item.id_type_product === 3)
    playstationProducts = playstationProducts.slice(10, 20)
  });

  let searchInput = '';
  const handleInput = (event) => {
    searchInput = event.target.value
    if (event.keyCode === 13){
      fetch(`${API}?name=${searchInput}`)
      .then(response => response.json())
      .then(apiResponse => {
        searchedItems = apiResponse.slice(0, 20)
    })
    }
  }
  let searchedItems = [];
  if (searchInput > 2) {
  
}
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
      <TextInput placeholder="Find your favorite console or videogames" handleInput={handleInput} />
    </div>
  {/if}
  {#if searchedItems.length > 0}
  <Category text="Searched Items">
      <Carousel>
    {#each searchedItems as item}
      <ConsoleItem 
          image = {item.image}
          url = {item.url}
          name = {item.name}
          price = {item.price}
          description = {item.description}
          commerce = {item.commerce}
          id_type_product = {item.id_type_product}
          product_type = {item.product_type}
          id_ecommerce = {item.id_ecommerce}
           />
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
            image = {product.image}
            url = {product.url}
            name = {product.name}
            price = {product.price}
            description = {product.description}
            commerce = {product.commerce}
            id_type_product = {product.id_type_product}
            product_type = {product.product_type}
            id_ecommerce = {product.id_ecommerce}
            />
          {/each}
        {:else}
          <Spinner />
        {/if}
      </Carousel>
    </Category>
    <Category>
      <Carousel>
      {#if nintendoProducts.length > 0}
        {#each playstationProducts as product}
            <ConsoleItem 
            image = {product.image}
            url = {product.url}
            name = {product.name}
            price = {product.price}
            description = {product.description}
            commerce = {product.commerce}
            id_type_product = {product.id_type_product}
            product_type = {product.product_type}
            id_ecommerce = {product.id_ecommerce}
            />
          {/each}
        {:else}
          <Spinner />
        {/if}
      </Carousel>
    </Category>
    <Category>
      <Carousel>
      {#if nintendoProducts.length > 0}
        {#each xboxProducts as product}
            <ConsoleItem 
            image = {product.image}
            url = {product.url}
            name = {product.name}
            price = {product.price}
            description = {product.description}
            commerce = {product.commerce}
            id_type_product = {product.id_type_product}
            product_type = {product.product_type}
            id_ecommerce = {product.id_ecommerce}
            />
          {/each}
      {:else}
        <Spinner />
      {/if}
      </Carousel>
    </Category>
  </div>
</div>
