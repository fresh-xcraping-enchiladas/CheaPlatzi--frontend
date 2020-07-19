<script context="module">
  import API_URL from "../../config/config.js"
  const API = `${API_URL.API_URL}product`;
  export async function preload(page, session) {
		const { slug } = page.params;
		const res = await this.fetch(`${API}/${slug}`);
		const item = await res.json();
		return { item };
  }
</script>

<script>
  import MainItem from "../../components/MainItem.svelte";
  export let item 
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
    <MainItem data={item} />
  </div>
</div>
