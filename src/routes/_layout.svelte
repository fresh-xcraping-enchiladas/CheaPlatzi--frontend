<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import UserObserver from "../components/UserObserver.svelte";

  export let segment;
</script>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(:root) {
    /* this will apply to :root */
    --primary-white: #ffffff;
    --variant-white: #eeeeee;

    --primary-blue: #0c4f83;
    --variant-blue: #71aad7;
    /* Categories - Items color */

    --backcolor-nintendo: #ba0d17;
    --textcolor-nintendo: #ffa3a8;

    --backcolor-play: #3a7eff;
    --textcolor-play: #a9c6ff;

    --backcolor-xbox: #1dc94d;
    --textcolor-xbox: #a8ecbb;

    /* Title, Subs, Texts,  Button colors   */

    --purple-title: #5f1974;
    --purple-subtitle: #46274f;
    --purple-text: #532e5e;
    --purple-button: #643173;
    --lightpurple-button: #7d5ba6;

    --lightpurple-title: #ab94c7;
    --lightpurple-subtitle: #c89cfe;
    --lightpurple-text: #c89cfe;

    /* Fonts on Mobile */

    --last-searchedtxt: 24px;
    --card-title: 18px;
    --card-price: 12px;
    --card-description: 10px;

    /* Fonts on Mobile: MainItem*/

    --item-title: 1.8rem;
    --item-price: 20px;
    --item-description: 19px;
  }

  :global(body) {
    background-color: var(--variant-white);
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  main {
    background-color: white;
    box-sizing: border-box;
    flex: 1;
  }
</style>

<div>
  <UserObserver />
  <Nav {segment} />

  <main>
    <slot />
  </main>

  <Footer />
</div>
