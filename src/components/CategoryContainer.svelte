<script>
  import CategoryItem from "../components/CategoryItem.svelte";
</script>

<div class="category-container">
  <CategoryItem 
    category="nintendo"
    src="nintendo-logo.png"
    alt="logo de nintendo"
    href="category/nintendo"
  />
  <CategoryItem 
    category="playstation" 
    src="playstation.png" 
    alt="logo de playstation"
    href="category/playstation"
  />
  <CategoryItem 
    category="xbox" 
    src="xbox.png" 
    alt="logo de xbox"
    href="category/xbox"
  />
</div>
