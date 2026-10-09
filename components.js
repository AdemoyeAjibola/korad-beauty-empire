/* Injects the top bar, header, footer and cart drawer on every page. */
const NAV_LINKS = [
  ["index.html", "Home"], ["shop.html", "Shop"], ["academy.html", "Academy"],
  ["about.html", "About"], ["contact.html", "Contact"]
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function renderChrome() {
  const cur = currentPage();
  const links = NAV_LINKS.map(([href, label]) =>
    `<a href="${href}"${href === cur ? ' aria-current="page"' : ""}>${label}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin",
    `<div class="announce">Delivery across Nigeria. Order on WhatsApp: <span data-phone></span></div>`);

  document.getElementById("site-header").innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="Korad Beauty Empire home">
        <img src="images/logo-icon.png" alt="">
        <span class="wordmark"><span class="w1">Korad</span><span class="w2">beautyempire</span></span>
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Main">${links}</nav>
      <button class="cart-btn" id="cart-open" aria-label="Open your order">Order <span id="cart-count">0</span></button>
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="main-nav">Menu</button>
    </div>`;

  document.getElementById("site-footer").innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" style="margin-bottom:16px"><img src="images/logo-icon.png" alt="Korad Beauty Empire"></a>
          <p>Skincare, bodycare and supplements from Lagos. Delivery across Nigeria.</p>
          <p>CAC registered business, RN <span data-cac></span>.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html#full-kits">Full kits</a></li>
            <li><a href="shop.html#face-creams">Face creams</a></li>
            <li><a href="shop.html#body-creams">Body creams</a></li>
            <li><a href="shop.html#body-soaps">Soaps</a></li>
            <li><a href="shop.html#supplements">Supplements</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="academy.html">Korad Academy</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html#delivery">Delivery and payment</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a data-wa target="_blank" rel="noopener">WhatsApp <span data-phone></span></a></li>
            <li><a data-ig target="_blank" rel="noopener">Instagram</a></li>
            <li><a data-tt target="_blank" rel="noopener">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} <span data-legal></span>. All rights reserved.</span>
        <span>Delivery across Nigeria</span>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Your order" aria-hidden="true">
      <div class="drawer-head"><h2>Your order</h2><button id="cart-close">Close</button></div>
      <ul class="cart-list" id="cart-list"></ul>
      <div class="drawer-foot">
        <div class="cart-total" id="cart-total"></div>
        <p class="fine">Prices are a guide. We confirm availability, the delivery fee and payment details on WhatsApp. Full payment is required before an order is processed.</p>
        <button class="btn block" id="cart-checkout">Send order on WhatsApp</button>
      </div>
    </aside>`);

  document.getElementById("nav-toggle").addEventListener("click", e => {
    const open = document.getElementById("main-nav").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initSite();
});
