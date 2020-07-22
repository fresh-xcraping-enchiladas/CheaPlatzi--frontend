<script context="module">
  import API_URL from "../../config/config.js"
  import { mxnTousd, copTousd } from '../../stores/currency'; 
  const API = `${API_URL.API_URL}product`;
  export async function preload(page, session) {
		const { slug } = page.params;
		const res = await this.fetch(`${API}/${slug}`);
    const item = await res.json();
    const response = await this.fetch(`${API}?barcode=${item.barcode}`)
    let items = []
    items = await response.json()
    function priceToUSD ( item ) {
      if (item.id_ecommerce < 4) {
        return item.price/copTousd
      }
      return item.price/mxnTousd
    }
    function compare( a, b ) {
      const firstPrice = priceToUSD(a)
      const secondPrice = priceToUSD(b)
      if ( firstPrice < secondPrice ){
        return -1;
      }
      if ( firstPrice > secondPrice ){
        return 1;
      }
      return 0;
    }
    items = items.sort(compare)
    let id_type_product = items[0].id_type_product;
    let id_ecommerce = items[0].id_ecommerce;
    let name = items[0].name;
    let product_type = null;
    let commerce = null;

    switch (id_type_product) {
      case 1:
        product_type = "nintendo";
        break;
      case 2:
        product_type = "xbox";
        break;
      case 3:
        product_type = "playstation";
        break;
      default:
        product_type = "default";
        break;
    }
    switch (id_ecommerce) {
      case 1:
        commerce = "MercadoLibre";
        break;
      case 2:
        commerce = "ColombiaGamer";
        break;
      case 3:
        commerce = "OLX";
        break;
      case 4:
        commerce = "GamePlanet";
        break;
      case 5:
        commerce = "Sears";
        break;
      case 6:
        commerce = "MixUp";
        break;
      default:
        commerce = "default";
        break;
    }
    window.ga('send', 'pageview', `${product_type}/${commerce}/${name}`);

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
      {#each items as product, i}
        {#if i > 0}
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
        {/if}
      {/each}
    </Carousel>
  </Category>
</main>
