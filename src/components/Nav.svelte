<script>
 import Button from './Button.svelte'
</script>

<style>
  .header{
    height: 50px;
    padding: 0 50px;
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    background-color: #0C4F83;
    color: #FFF;
  }
  .header-right{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header-country{
    padding-left: 20px;
  }
  h1 {
    margin: 0;
    font-size: 18px;
  }
  @media screen and (min-width: 750px) {
    .header-right, h1 {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 900px) {
    h1 {
      font-size: 32px;
    }
    .header-right, .header-country h1{
      font-size: 24px;
    }
  }
</style>

<nav class="header">
  <h1>HunterPrice</h1>
    <div class="header-right">
      <Button text="Log In" />
      <div class="header-country">
        <h1>MEX 🇲🇽</h1>
      </div>
    </div>
</nav>
