<script>
  export let category;
</script>

<style >
  .category-item{
    width: 250px;
    height: 60px;
    border-radius: 50px;
    padding: 0 20px;
    margin: 0 auto 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nintendo{
    background: linear-gradient(to right, rgba(215,22,22,1) 0%, rgba(232,97,97,1) 100%);
    color: #FFA3A8;
    position: relative;
    right: 10vw;
  }
  .playstation{
    background: linear-gradient(to right, rgba(20,85,254,1) 0%, rgba(160,187,255,1) 100%);
    color: #A9C6FF;
    position: relative;
    left: 10vw;
  }
  .xbox{
    background: linear-gradient(to right, rgba(19,127,17,1) 0%, rgba(146,253,143,1) 100%);
    color: #A8ECBB;
    position: relative;
    right: 10vw;
  }
  .category-item img{
    height: 80%;
  }
  @media screen and (min-width: 700px){
    .category-item{
      width: 500px;
      height: 120px;
      font-size: 36px;
    }
  }
  @media screen and (min-width: 1000px){
    .category-item{
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
    <img src="nintendo-logo.png" alt="">
  {/if}
  {#if category === 'playstation' || category === 'Playstation'}
    <p>PlayStation</p>
    <img src="playstation.png" alt="">
  {/if}
  {#if category === 'xbox' || category === 'Xbox'}
    <p>Xbox</p>
    <img src="xbox.png" alt="">
  {/if}
</div>