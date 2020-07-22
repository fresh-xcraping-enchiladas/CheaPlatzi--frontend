<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .blog__container {
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    padding: 1em;
  }

  .blog__posts {
    grid-template-columns: repeat(3, 33%);
  }

  .blog__inner {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    grid-row-gap: 1.5em;
    display: grid;
  }
  .blog__post {
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    border-radius: 5px;
    margin: 0 0 20px 0;
    display: block;
    /* animation-duration: 2s; */
    /* animation-name: fade; */
  }

  img{
    height: 50px;
  }

  li {
    padding: 20px 0;
  }

  @media (min-width: 320px) {
    .blog__container {
      padding: 5em 2em;
      height: 80vh;
    }
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="blog__container">
  <h1>Recent posts</h1>
  <div class="blog__posts">
    <div class="blog__inner">
      <div class="blog__post">
        <ul>
          {#each posts as post}
            <li>
              <img src={post.image} alt="" />
              <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
