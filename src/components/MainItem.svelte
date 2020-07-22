<script>
  import { copTousd, mxnTousd } from '../stores/currency';
  import cleanText from '../utils/cleanText';
  export let data = {}
  const colombianPrice = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(data.price/copTousd)
  const mexicanPrice = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(data.price/mxnTousd)
  let commerce = null;
  switch (data.id_ecommerce) {
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
</script>

<style>
  .console__item {
    width: auto;
    color: #000;
    padding: 0.4em;
    text-align: center;
    line-height: 1.2rem;
    border-radius: 7px;
    position: relative;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.42);
  }
  .console__description {
    text-align: left;
    padding: 1em 2em;
    line-height: 1.5rem;
  }
  .console_description_paragraph{
    min-height: 200px;
    overflow: scroll;
  }
  .price__section {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .item__price--desc {
    font-size: 16px;
    color: #000;
  }
  .item__price {
    color: #000;
    font-size: 30px;
  }
  h1 {
    font-size: var(--item-title);
    max-width: 90%;
    margin: 10px auto;
  }
  p {
    font-size: var(--item-description);
    max-width: 80%;
    margin: 0 auto;
    line-height: 28px;
  }
  i {
    position: absolute;
    left: 83%;
    top: 5%;
    font-size: 24px;
  }
  img {
    width: 400px;
  }
  a {
    border: none;
    color: var(--purple-button);
    background-color: var(--lightpurple-subtitle);
    padding: 0.4rem;
    margin-top: 1.4em;
    border-radius: 3px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  @media screen and (max-width:700px){
    img{
      width: 80vw;
    }
  }
</style>

  <div class="console__item">
    <i class="far fa-heart" />
    <img src={data.image} alt={data.name} />
    <h1>{data.name}</h1>
    <div class="console__description">
      <p class="console_description_paragraph">{cleanText(data.description)}</p>
      <div class="price__section">
        <p class="item__price--desc">Starts at</p>
        {#if data.id_ecommerce < 4}
          <p class="item__price">{colombianPrice} USD</p>
        {:else}
          <p class="item__price">{mexicanPrice} USD</p>
        {/if}
      </div>
      <a href={data.url} target="_blank">
        Best Option in {commerce}
      </a>
    </div>
  </div>