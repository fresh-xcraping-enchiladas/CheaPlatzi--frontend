<script>
  export let category;
</script>

<style>
  .category-item {
    width: 250px;
    height: 60px;
    border-radius: 15px;
    padding: 0 20px;
    margin: 0 auto 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nintendo {
    background: #E50020;
    color: #fff;
    position: relative;
    right: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .playstation {
    background: #007AFF;
    color: #fff;
    position: relative;
    left: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .xbox {
    background: #107C10;
    color: #fff;
    position: relative;
    right: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .category-item img {
    height: 80%;
  }

  .nintendo:hover,
  .playstation:hover,
  .xbox:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 700px) {
    .category-item {
      width: 500px;
      height: 120px;
      font-size: 36px;
    }
  }
  @media screen and (min-width: 1000px) {
    .category-item {
      width: 800px;
      height: 150px;
      font-size: 52px;
      margin: 0 auto 20px;
    }
  }
</style>

<div class={`category-item ${category}`}>
  {#if category === 'nintendo' || category === 'Nintendo'}
    <p>Nintendo</p>
    <img src="nintendo-logo.png" alt="" />
  {/if}
  {#if category === 'playstation' || category === 'Playstation'}
    <p>PlayStation</p>
    <img src="playstation.png" alt="" />
  {/if}
  {#if category === 'xbox' || category === 'Xbox'}
    <p>Xbox</p>
    <img src="xbox.png" alt="" />
  {/if}
</div>
