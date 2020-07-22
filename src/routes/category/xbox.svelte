<script>
  import { onMount } from "svelte";
  import API_URL from "../../config/config.js";
  import ConsoleItem from "../../components/ConsoleItem.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import Category from "../../components/Category.svelte";
  import Spinner from "../../components/Spinner.svelte";
  import TextInput from "../../components/TextInput.svelte";
  const API = `${API_URL.API_URL}product?`;
  let xboxProducts = []
  onMount(async () => {
    let response = await fetch(`${API}id_type_product=2&page=1`);
    xboxProducts = await response.json();
  });
  let searchInput = "";
  let searchedItems = [];
  const handleInput = event => {
    event.preventDefault();
    searchInput = event.target.input.value;
    fetch(`${API}name=${searchInput}&id_type_product=2&page=1`)
      .then(response => response.json())
      .then(apiResponse => {
        searchedItems = apiResponse;
      });
  };
</script>
<style>
  .hero {
    height: 400px;
    width: 100%;
    background-image: url('../nintendo.jpg');
    background-position:center;
    background-size: cover;
  }
  .textInput_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .search_container{
    width: 90%;
    margin: 0 auto;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .container--product {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>

<div class="hero">
</div>
<div class="textInput_container">
  <TextInput text="Find your videogame"
  {handleInput}
  />
  {#if searchedItems.length > 0}
  <div class="search_container">
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
  </div>
  {/if}
</div>
<div class="container">
  <Category text='Videogames Xbox'>
    <div class="container--product">
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
            id_ecommerce={product.id_ecommerce} 
          />
        {/each}
       {:else}
          <Spinner />
      {/if}
    </div>
  </Category>
</div>
