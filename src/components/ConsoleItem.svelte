<script>
  import cleanText from '../utils/cleanText';
  export let segment;
  export let image = 'PS.png';
  export let url = 'mock';
  export let name = 'PlayStation 4';
  export let price = 1000;
  export let description = 'PlayStation 4 description and features';
  export let commerce = 'Amazon';
  export let id_type_product = 1;
  export let product_type = "playstation";
  export let id_ecommerce = 1;

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
  if (id_ecommerce <= 3) {
    price = price / 3623.12
    price = price.toFixed(2)
  } else {
    price = price / 100
    price = price / 22.44
    price = price.toFixed(2)
  }
  description = cleanText(description)
</script>

<style>
  .console__item {
    width: 200px;
    max-height: 350px;
    text-align: center;
    margin-right: 1.3rem;
    line-height: 1.2rem;
    border-radius: 7px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
  }
  .nintendo {
    background-image: linear-gradient(
      10deg,
      var(--backcolor-nintendo),
      var(--backcolor-nintendo) 50%,
      var(--textcolor-nintendo)
    );
    color: var(--textcolor-nintendo);
  }
  .xbox {
    background-image: linear-gradient(
      10deg,
      var(--backcolor-xbox),
      var(--backcolor-xbox) 50%,
      var(--textcolor-xbox)
    );
    color: var(--textcolor-xbox);
  }
  .playstation {
    background-image: linear-gradient(
      10deg,
      var(--backcolor-play),
      var(--backcolor-play) 50%,
      var(--textcolor-play)
    );
    color: var(--textcolor-play);
  }
  .item__provider {
    color: #735318;
    background-color: #cccc2e;
    font-weight: 600;
    margin: 10px auto 0;
    padding: 0 10px;
    border-radius: 6px 6px 0 0;
  }
  h1 {
    font-size: var(--card-title);
  }

  h2 {
    font-size: var(--card-price);
  }

  p {
    font-size: var(--card-description);
    margin: 0;
  }

  img {
    width: 130px;
    margin: 0.5em;
  }
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 700px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin: 0;
    }
  }
</style>

<div class={`console__item ${product_type}`} data-url={url} >
  <a aria-current={segment === 'item' ? 'page' : undefined} href="item">
    <img src={image} alt="Item Imagen" />
    <h1>{name.substring(0, 15)}</h1>
    <h2>${price} USD</h2>
    <p class="description">{description.substring(0, 20)}</p>
  </a>
  <div class="item__provider">
    <p>{commerce}</p>
  </div>
</div>
