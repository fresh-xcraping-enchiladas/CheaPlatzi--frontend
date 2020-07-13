<script>
  export let text = 'Last searched'
</script>
<style>
  .category {
    margin: 0.2em;
    padding: 2.2em;
  }
  .category__title {
    font-size: var(--last-searchedtxt);
  }
</style>

<div class="category">
  <h2 class="category__title">{text}</h2>
  <slot />
</div>
