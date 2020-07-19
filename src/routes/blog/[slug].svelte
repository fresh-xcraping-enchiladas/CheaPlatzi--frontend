<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .content {
    padding: 0 3.2em 4em;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }
  .content :global(img) {
    max-width: 100%;
    max-height: 100%;
  }
  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .blog__title {
    padding: 1em 2em;
  }
  .blog__image {
    display: flex;
    justify-content: center;
  }
  .blog__text {
    padding: 3em 7.5em;
  }
  @media (max-width: 420px) {
    .blog__text {
      padding: 3em 0.8em;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1 class="blog__title">{post.title}</h1>
<div class="content">
  <div class="blog__image">
    <img src={post.image} alt="" />
  </div>
  <div class="blog__text">
    {@html post.html}
  </div>
</div>
