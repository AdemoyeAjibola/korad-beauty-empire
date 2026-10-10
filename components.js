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

  const items = SITE.ticker.map(t => `<span class="item">${t.replace("{phone}", SITE.phoneDisplay)}</span>`).join("");
  document.body.insertAdjacentHTML("afterbegin",
    `<div class="ticker marquee" aria-label="Delivery and ordering information"><div class="marquee-track" data-repeat><span class="marquee-group">${items}</span></div></div>`);

  document.getElementById("site-header").innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="Korad Beauty Empire home">
        <img src="images/logo-icon.png" alt="">
        <span class="wordmark"><span class="w1">Korad</span><span class="w2">beautyempire</span></span>
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Main">${links}</nav>
      <button class="cart-btn" id="cart-open" aria-label="Open your order"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><i class="lbl" style="font-style:normal">Order</i> <span id="cart-count">0</span></button>
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
    <a class="wa-fab" data-wa data-wa-text="Hello Korad Beauty Empire, I would like to make an enquiry." target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      <span>Chat with us</span>
    </a>
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
