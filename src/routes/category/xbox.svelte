<script>
  import { onMount } from "svelte";
  import API_URL from "../../config/config.js";
  import ConsoleItem from "../../components/ConsoleItem.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import Category from "../../components/Category.svelte";
  import Spinner from "../../components/Spinner.svelte";
  const API = `${API_URL.API_URL}product?`;
  let xboxProducts = []
  onMount(async () => {
    let response = await fetch(`${API}id_type_product=2&page=1`);
    xboxProducts = await response.json();
  });
</script>
<style>
  .hero {
    height: 400px;
    width: 100%;
    background-image: url('../xbox.jpg');
    background-position:center;
    background-size: cover;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .container--product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div class="hero">
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
