<style>
  .carousel {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 30px;
  }
  .carousel::-webkit-scrollbar {
    display: none;
  }
</style>

<div class="carousel">
  <slot />
</div>
