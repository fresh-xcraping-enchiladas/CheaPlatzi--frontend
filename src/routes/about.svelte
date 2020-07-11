<style>
  @media (max-width: 320px) {
    .about__container {
      height: 100vh;
    }
    .about__container--description {
      padding: 0;
    }
    .about__container--info {
      display: block;
      padding: 1em;
      border-radius: 0;
    }
    img {
      border: 10px solid red;
    }
  }

  @media (min-width: 900px) {
    .about__container {
      display: flex;
      padding: 2em;
      justify-content: center;
      background-color: #eaeaea;
    }
    .about__container--info {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      position: relative;
      width: 75%;
      background-color: var(--primary-white);
      padding: 3rem;
      border-radius: 20px;
    }
    .about__container--description {
      grid-column: 1 / span 2;
      padding: 3em 4em 0 0;
    }
    .about__container--img {
      position: absolute;
      left: 50%;
      top: 10%;
      /* grid-column: 3 / span 2; */
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="about__container">
  <div class="about__container--info">
    <div class="about__container--description">
      <h1>About Gamecheap</h1>
      <p>
        Gamecheap is the most reliable source for finding the cheapest Video
        Gmes & Console on the market.
      </p>
      <p>
        In
        <strong>Gamecheap</strong>
        you could find the newest video games at the very cheap price in your
        area
      </p>
      <h2>How it works?</h2>
      <p>
        Let's say you want to buy a new video game for your new XBOX but you
        don't know cheapest place on the internet to buy it. Then you ahead to
        Gmecheap. You enter the searh bar and just type the name of your video
        game. Instantly Gamecheap searches
        <strong>the best purchase option</strong>
        . That is, at the cheapest price 😉.
      </p>
    </div>
    <div class="about__container--img">
      <img src="../modern-gamepads_127657-18487.jpg" alt="About img" />
    </div>
  </div>
</div>
