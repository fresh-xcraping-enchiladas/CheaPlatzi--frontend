<style>
  .console__item {
    width: auto;
    color: #000;
    padding: 0.2em;
    text-align: center;
    line-height: 1.2rem;
    border-radius: 7px;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  }
  .console__description {
    text-align: left;
    padding: 1em 2em;
    line-height: 1.5rem;
  }
  .price__section {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .item__price--desc {
    font-size: 16px;
    color: #cdcdcd;
  }
  .item__price {
    color: var(--lightpurple-text);
    font-size: 21px;
  }
  h1 {
    font-size: var(--item-title);
  }
  p {
    font-size: var(--item-description);
    margin: 0;
  }
  i {
    position: absolute;
    left: 83%;
    top: 5%;
    font-size: 24px;
  }
  img {
    width: 325px;
    height: 250px;
    margin: 0.5em;
  }
  button {
    border: none;
    color: var(--purple-button);
    background-color: var(--lightpurple-subtitle);
    padding: 0.3rem;
    margin-top: 1.4em;
    border-radius: 3px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
  }
</style>

<div class="console__item">
  <i class="far fa-heart" />
  <img src="PS.png" alt="Item Imagen" />
  <h1>Play Station 4</h1>
  <div class="console__description">
    <p>Play Station 4 Slim</p>
    <p>1TB Console</p>
    <div class="price__section">
      <p class="item__price--desc">Starts at</p>
      <p class="item__price">$1000 USD</p>
    </div>
    <button>Best Option!</button>
  </div>
</div>
