<style>
  .about__container {
    height: 400px;
    background-color: #eaeaea;
    padding: 3rem;
  }
  .about__container--info {
    display: flex;
    background-color: var(--primary-white);
    border-radius: 20px;
    margin: 0 auto;
    max-width: 1200px;
  }
  .about__container--description {
    padding: 1.5rem;
    width: 50%;
  }
  .about__container--img {
    width: 50%;
  }
  .about__container--img img {
    width: 100%;
    border-radius: 20px;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    .about__container {
      height: auto;
      padding: 1.3rem;
    }
    .about__container--info {
      flex-direction: column;
    }

    .about__container--description {
      width: 80%;
    }

    .about__container--img {
      width: 100%;
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
      <img
        src="https://gamecheap-resources.s3.amazonaws.com/about-img.jpg"
        alt="About img" />
    </div>
  </div>
</div>
