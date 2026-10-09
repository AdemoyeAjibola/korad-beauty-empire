/* Cart, WhatsApp checkout, config filling and the contact form. */
const CART_KEY = "korad-cart";

let memoryCart = [];   // used if the browser blocks storage, so the cart still works
function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (saved) return saved;
  } catch (e) {}
  return memoryCart;
}
function saveCart(cart) {
  memoryCart = cart;
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  renderCart();
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const hit = cart.find(i => i.id === id);
  if (hit) hit.qty += 1;
  else cart.push({ id, name: p.name + (p.size ? " (" + p.size + ")" : ""), price: p.price, qty: 1 });
  saveCart(cart);
  openDrawer();
}
function changeQty(id, delta) {
  let cart = getCart();
  const hit = cart.find(i => i.id === id);
  if (!hit) return;
  hit.qty += delta;
  if (hit.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(cart);
}
function removeItem(id) { saveCart(getCart().filter(i => i.id !== id)); }

function cartTotals(cart) {
  return {
    known: cart.reduce((s, i) => s + (i.price ? i.price * i.qty : 0), 0),
    unpriced: cart.some(i => i.price === null),
    count: cart.reduce((s, i) => s + i.qty, 0)
  };
}

function renderCart() {
  const cart = getCart();
  const t = cartTotals(cart);
  document.getElementById("cart-count").textContent = t.count;
  const list = document.getElementById("cart-list");
  const total = document.getElementById("cart-total");
  if (!cart.length) {
    list.innerHTML = `<li class="cart-empty">Your order is empty. Add products from the shop.</li>`;
    total.innerHTML = "";
    return;
  }
  list.innerHTML = cart.map(i => `
    <li>
      <span>${i.name}</span>
      <span class="price">${i.price === null ? "Price on request" : formatNaira(i.price * i.qty)}</span>
      <span class="qty">
        <button data-qty="-1" data-id="${i.id}" aria-label="Decrease quantity of ${i.name}">&minus;</button>
        <span>${i.qty}</span>
        <button data-qty="1" data-id="${i.id}" aria-label="Increase quantity of ${i.name}">+</button>
        <button class="rm" data-rm="${i.id}">Remove</button>
      </span>
    </li>`).join("");
  total.innerHTML = `<span>Estimated total</span><span>${formatNaira(t.known)}${t.unpriced ? " + items to confirm" : ""}</span>`;
}

let lastFocus = null;
function openDrawer() {
  lastFocus = document.activeElement;
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawer").setAttribute("aria-hidden", "false");
  document.getElementById("overlay").classList.add("open");
  document.getElementById("cart-close").focus();
}
function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawer").setAttribute("aria-hidden", "true");
  document.getElementById("overlay").classList.remove("open");
  if (lastFocus) lastFocus.focus();
}

function checkout() {
  const cart = getCart();
  if (!cart.length) { window.open(waLink("Hello Korad Beauty Empire, I would like to place an order."), "_blank"); return; }
  const t = cartTotals(cart);
  const lines = cart.map(i => "- " + i.name + (i.qty > 1 ? " x" + i.qty : "") +
    (i.price ? " (" + formatNaira(i.price * i.qty) + ")" : " (price to confirm)")).join("\n");
  const msg = "Hello Korad Beauty Empire, I would like to place an order.\n\nItems:\n" + lines +
    "\n\nEstimated total: " + formatNaira(t.known) + (t.unpriced ? " plus items to confirm" : "") +
    "\n\nName:\nDelivery address:\nPhone number:";
  window.open(waLink(msg), "_blank");
}

function applyConfig() {
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = waLink(a.dataset.waText || "");
  });
  document.querySelectorAll("[data-ig]").forEach(a => a.href = "https://instagram.com/" + SITE.instagram);
  document.querySelectorAll("[data-tt]").forEach(a => a.href = "https://tiktok.com/@" + SITE.tiktok);
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = SITE.phoneDisplay);
  document.querySelectorAll("[data-cac]").forEach(el => el.textContent = SITE.cacNumber);
  document.querySelectorAll("[data-legal]").forEach(el => el.textContent = SITE.legalName);
  document.querySelectorAll("[data-min-price]").forEach(el => {
    const prices = PRODUCTS.filter(p => p.category === el.dataset.minPrice && p.price).map(p => p.price);
    if (prices.length) el.textContent = formatNaira(Math.min(...prices));
  });
}

function initSite() {
  applyConfig();
  renderCart();
  document.getElementById("cart-open").addEventListener("click", openDrawer);
  document.getElementById("cart-close").addEventListener("click", closeDrawer);
  document.getElementById("overlay").addEventListener("click", closeDrawer);
  document.getElementById("cart-checkout").addEventListener("click", checkout);
  document.getElementById("cart-list").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.qty) changeQty(b.dataset.id, Number(b.dataset.qty));
    if (b.dataset.rm) removeItem(b.dataset.rm);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", async e => {
    e.preventDefault();
    const status = document.getElementById("form-status");
    const data = new FormData(form);
    const text = "Hello Korad Beauty Empire.\n\n" + data.get("message") + "\n\nName: " + data.get("name") + "\nPhone: " + data.get("phone");
    if (SITE.web3formsKey.indexOf("YOUR_") === 0) {      // key not added yet: use WhatsApp instead
      window.open(waLink(text), "_blank");
      status.textContent = "Opening WhatsApp so you can send your message.";
      return;
    }
    data.append("access_key", SITE.web3formsKey);
    status.textContent = "Sending...";
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      status.textContent = json.success ? "Thank you. We will reply shortly." : "That did not send. Please message us on WhatsApp instead.";
      if (json.success) form.reset();
    } catch (err) {
      status.textContent = "That did not send. Please message us on WhatsApp instead.";
    }
  });
}
