<script>
  export let category;
  export let src;
  export let alt;
  export let href;
</script>

<style>
  .category-item {
    width: 250px;
    height: 60px;
    border-radius: 25px;
    padding: 0 20px;
    margin: 0 auto 40px;
    font-size: 18px;
  }
  .nintendo {
    background: #e50020;
    color: #fff;
    position: relative;
    right: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.28);
  }
  .playstation {
    background: #007aff;
    color: #fff;
    position: relative;
    left: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.28);
  }
  .xbox {
    background: #107c10;
    color: #fff;
    position: relative;
    right: 10vw;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.28);
  }
  .category-item a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
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
  <a href={href}>
    <p style="text-transform: capitalize;">{category}</p>
    <img src={src} alt={alt} style="height: 90%;"/>
  </a>
</div>
