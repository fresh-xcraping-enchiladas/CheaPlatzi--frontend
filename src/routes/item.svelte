<script>
  import MainItem from "../components/MainItem.svelte";
</script>

<style>
  .main-item__container {
    display: flex;
    justify-content: center;
    padding: 6em;
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

<div class="main-item__container">
  <div class="card-item__container">
    <MainItem />
  </div>
</div>
