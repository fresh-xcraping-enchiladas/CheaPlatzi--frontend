<script>
  export let segment;
</script>

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
  i {
    font-size: 25px;
    padding: 0 7px 0;
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
  .footer__links p {
    text-align: center;
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
    padding: 0;
  }

  @media (max-width: 375px) {
    .footer__wrapper {
      display: block;
      text-align: center;
    }
    .footer__social {
      display: block;
    }
    .footer__social a {
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
        <p>Gamecheap</p>
      </li>
      <li>
        <a aria-current={segment === 'blog' ? 'page' : undefined} href="blog">
          Blog
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          About
        </a>
      </li>
      <li>
        <a aria-current={segment === 'home' ? 'page' : undefined} href="/">
          Home
        </a>
      </li>
    </ul>

    <ul class="footer__navigation">
      <li class="footer__links--title">
        <p>Product</p>
      </li>
      <li>
        <a
          href="https://www.notion.so/CheaPlatzi-s-Engineering-Wiki-3f897bf0888d40ffb7388e7f001ad133"
          target="_blank">
          Docs
        </a>
      </li>
      <li>
        <a
          href="https://www.notion.so/ebf27b9666cd4bb3b4b6f5ad4113da7e?v=369bd9f3964f437fa4ceeb7420849d79"
          target="_blank">
          Brand
        </a>
      </li>
      <li>
        <a
          href="https://www.notion.so/Team-dd4cb0a5ac5a414f97989559fc09ca3c"
          target="_blank">
          The Team
        </a>
      </li>
    </ul>
  </div>

  <div class="footer__wrapper">
    <span class="footer__copyright">
      <p>Copyright © 2020 Gamecheap. All rights reserved.</p>
    </span>
    <ul class="footer__social">
      <a href="https://github.com/fresh-xcraping-enchiladas" target="_blank">
        <i class="fab fa-github" />
      </a>
      <a href=".">freshxcrapingenchiladas@gmail.com</a>
    </ul>
  </div>

</footer>
