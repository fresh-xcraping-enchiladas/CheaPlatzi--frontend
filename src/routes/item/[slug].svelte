<script context="module">
  import API_URL from "../../config/config.js"
  const API = `${API_URL.API_URL}product`;
  export async function preload(page, session) {
		const { slug } = page.params;
		const res = await this.fetch(`${API}/${slug}`);
    const item = await res.json();
    const response = await this.fetch(`${API}?barcode=${item.barcode}`)
    let items = []
    items = await response.json()
    function compare( a, b ) {
      if ( a.price < b.price ){
        return -1;
      }
      if ( a.price > b.price ){
        return 1;
      }
      return 0;
    }
    items = items.sort(compare)
		return { items };
  }
</script>

<script>
  import MainItem from "../../components/MainItem.svelte";
  import ConsoleItem from "../../components/ConsoleItem.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import Category from "../../components/Category.svelte";
  export let items
</script>

<style>
  .main-item__container {
    display: flex;
    justify-content: center;
    padding: 6em;
  }
  @media screen and (max-width: 700px){
    .main-item__container{
      padding: 10px;
    }
  }
  @media (max-width: 375px) {
    .main-item__container {
      width: auto;
    }
    .card-item__container {
      margin: 3em;
    }
  }
</style>

<main>
  <div class="main-item__container">
    <div class="card-item__container">
      <MainItem data={items[0]} />
    </div>
  </div>
  <Category text='Related Items'>
    <Carousel>
      {#each items as product}
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
    </Carousel>
  </Category>
</main>
