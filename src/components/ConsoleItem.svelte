<script>
  export let segment;
</script>

<style>
  .console__item {
    width: 200px;
    height: 300px;
    color: var(--textcolor-nintendo);
    text-align: center;
    margin-right: 1.3rem;
    line-height: 1.2rem;
    border-radius: 7px;
    background-image: linear-gradient(
      10deg,
      var(--backcolor-nintendo),
      var(--backcolor-nintendo) 50%,
      var(--textcolor-nintendo)
    );
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
  }
  .item__provider {
    width: 50%;
    color: #735318;
    background-color: #cccc2e;
    font-weight: 600;
    margin: 0 auto;
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
    height: 120px;
    margin: 0.5em;
  }
  a {
    text-decoration: none;
  }
</style>

<div class="console__item">
  <a aria-current={segment === 'item' ? 'page' : undefined} href="item">
    <img src="PS.png" alt="Item Imagen" />
    <h1>Play Station 4</h1>
    <h2>$1000 USD</h2>
    <p>Play Station 4 description and features</p>
    <div class="item__provider">
      <p>Amazon</p>
    </div>
  </a>
</div>
