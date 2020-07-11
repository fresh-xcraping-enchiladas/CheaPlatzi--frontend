<style>
  footer {
    background-color: var(--variant-white);
    color: #000;
    gap: normal;
    widows: 100%;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100px;
    height: 110px;
  }
  .footer__links {
    display: flex;
    gap: normal;
    justify-content: center;
    margin: 0px 40px;
    padding: 48px 24px 0px 0px;
  }

  .footer__navigation {
    gap: normal;
    list-style: none;
    text-align: center;
  }

  .footer__links--title {
    display: list-item;
    font-size: 14px;
    gap: normal;
    line-height: 20px;
    margin: 0px 0px 10px;
    text-align: left;
  }

  .footer__logotype {
    gap: normal;
    margin: 0px 40px;
    justify-content: center;
    padding: 48px 24px 0px;
    text-align: center;
  }

  .footer__wrapper {
    align-items: center;
    display: flex;
    gap: normal;
    justify-content: center;
    margin: 0px 40px;
    padding: 24px 24px 48px;
  }

  .footer__copyright {
    font-size: 14px;
    gap: normal;
  }

  .footer__social {
    display: inline-flex;
    gap: normal;
  }

  @media (max-width: 375px) {
    .footer__wrapper {
      display: block;
      text-align: center;
    }
    .footer__social {
      color: var(--lightpurple-text);
      padding: 0;
    }
  }
</style>

<footer>

  <div class="footer__logotype">
    <img src="../gamecheap-logo.png" alt="Gamecheap Logo" />
    <h2>Gamecheap</h2>
  </div>

  <div class="footer__links">
    <ul class="footer__navigation">
      <li class="footer__links--title">
        <p>Company</p>
      </li>
      <li>
        <a href=".">Home</a>
      </li>
      <li>
        <a href=".">About</a>
      </li>
      <li>
        <a href=".">Blog</a>
      </li>
    </ul>

    <ul class="footer__navigation">
      <li class="footer__links--title">
        <p>Product</p>
      </li>
      <li>
        <a href=".">Info</a>
      </li>
      <li>
        <a href=".">Info</a>
      </li>
      <li>
        <a href=".">Info</a>
      </li>
    </ul>
  </div>

  <div class="footer__wrapper">
    <span class="footer__copyright">
      <p>Copyright 2020 Gamecheap. All rights reserved.</p>
    </span>
    <ul class="footer__social">
      <i class="github" />
      <a href=".">freshxcrapingenchiladas@gmail.com</a>
    </ul>
  </div>

</footer>
