/* ==========================================================================
   KORAD BEAUTY EMPIRE — SITE SCRIPT
   Basket (localStorage), product grid rendering, filters, nav toggle.
   ========================================================================== */

const WHATSAPP_NUMBER = "2347041880706";
const BASKET_KEY = "korad_basket_v1";

/* ---------------- Nav toggle (mobile) ---------------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* ---------------- Basket core ---------------- */
function getBasket() {
  try {
    const raw = localStorage.getItem(BASKET_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveBasket(items) {
  localStorage.setItem(BASKET_KEY, JSON.stringify(items));
  renderBasket();
}

function addToBasket(product) {
  const items = getBasket();
  const existing = items.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      size: product.size || "",
      category: CATEGORY_LABELS[product.category] || product.category,
      price: product.price,
      qty: 1
    });
  }
  saveBasket(items);
}

function removeFromBasket(id) {
  const items = getBasket().filter(i => i.id !== id);
  saveBasket(items);
}

function basketCount(items) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

function basketTotal(items) {
  return items.reduce((sum, i) => sum + (typeof i.price === "number" ? i.price * i.qty : 0), 0);
}

function renderBasket() {
  const items = getBasket();
  const countEl = document.querySelector(".basket-count");
  const listEl = document.querySelector(".basket-items");
  const totalEl = document.querySelector(".basket-total-value");
  const fab = document.querySelector(".basket-fab");

  if (fab) {
    const count = basketCount(items);
    if (countEl) {
      countEl.textContent = count;
      countEl.style.display = count > 0 ? "flex" : "none";
    }
  }

  if (!listEl) return;

  if (items.length === 0) {
    listEl.innerHTML = '<div class="basket-empty">Your order is empty. Browse the shop and tap "Add to order" on anything you like.</div>';
  } else {
    listEl.innerHTML = items.map(i => {
      const priceLabel = typeof i.price === "number"
        ? "₦" + (i.price * i.qty).toLocaleString("en-NG") + (i.qty > 1 ? ` (×${i.qty})` : "")
        : "Contact for price";
      return `
        <div class="basket-item">
          <div>
            <div class="basket-item-name">${escapeHtml(i.name)}${i.size ? " — " + escapeHtml(i.size) : ""}</div>
            <div class="basket-item-cat">${escapeHtml(i.category)}${i.qty > 1 ? " · qty " + i.qty : ""}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="basket-item-price">${priceLabel}</div>
            <button class="basket-item-remove" aria-label="Remove ${escapeHtml(i.name)}" data-remove="${i.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>`;
    }).join("");

    listEl.querySelectorAll("[data-remove]").forEach(btn => {
      btn.addEventListener("click", () => removeFromBasket(btn.getAttribute("data-remove")));
    });
  }

  if (totalEl) {
    totalEl.textContent = "₦" + basketTotal(items).toLocaleString("en-NG");
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function buildWhatsAppMessage() {
  const items = getBasket();
  if (items.length === 0) {
    return "Hi Korad Beauty Empire! I'd like to place an order.";
  }
  let msg = "Hi Korad Beauty Empire! I'd like to order:\n\n";
  items.forEach(i => {
    const priceLabel = typeof i.price === "number" ? "₦" + (i.price * i.qty).toLocaleString("en-NG") : "price to confirm";
    msg += `• ${i.name}${i.size ? " (" + i.size + ")" : ""} x${i.qty} — ${priceLabel}\n`;
  });
  const total = basketTotal(items);
  msg += `\nEstimated total: ₦${total.toLocaleString("en-NG")} (excludes items marked "price to confirm" and delivery fee)`;
  msg += "\n\nPlease confirm availability, final total and delivery fee. Thank you!";
  return msg;
}

function initBasketUI() {
  const fab = document.querySelector(".basket-fab");
  const panel = document.querySelector(".basket-panel");
  const closeBtn = document.querySelector(".basket-close");
  const checkoutBtn = document.querySelector(".basket-checkout");

  if (fab && panel) {
    fab.addEventListener("click", () => panel.classList.toggle("open"));
  }
  if (closeBtn && panel) {
    closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  }
  document.addEventListener("click", (e) => {
    if (!panel || !panel.classList.contains("open")) return;
    if (panel.contains(e.target) || (fab && fab.contains(e.target))) return;
    panel.classList.remove("open");
  });
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const text = encodeURIComponent(buildWhatsAppMessage());
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    });
  }

  renderBasket();
}

/* ---------------- Product card markup ---------------- */
function jarSvg(seed) {
  // A small deterministic set of CSS/SVG "jar" illustrations standing in for
  // products without a clean photo, styled in the brand palette.
  const palette = ["var(--rose)", "var(--gold)", "var(--sage)", "var(--rose-dark)"];
  const c = palette[seed % palette.length];
  return `
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="60" cy="100" rx="30" ry="6" fill="rgba(75,21,40,0.12)"/>
    <rect x="32" y="42" width="56" height="52" rx="10" fill="${c}" opacity="0.85"/>
    <rect x="32" y="42" width="56" height="14" rx="7" fill="var(--plum)" opacity="0.18"/>
    <rect x="42" y="26" width="36" height="18" rx="4" fill="var(--gold)" opacity="0.9"/>
    <circle cx="60" cy="18" r="9" fill="none" stroke="var(--gold)" stroke-width="2"/>
  </svg>`;
}

function productCardHtml(p, index) {
  const priceLabel = formatPrice(p.price);
  const priceClass = p.price === null ? "pc-price contact" : "pc-price";
  const brandLine = p.brand ? `<div class="pc-brand">${escapeHtml(p.brand)}</div>` : "";
  const sizeLine = p.size ? `<p class="pc-size">${escapeHtml(p.size)}</p>` : "";
  const disclaimer = p.supplement ? `<div class="pc-disclaimer">${SUPPLEMENT_DISCLAIMER}</div>` : "";

  return `
  <article class="product-card" data-id="${p.id}" data-category="${p.category}">
    <div class="pc-visual" tabindex="0">
      <div class="pc-jar">${jarSvg(index)}</div>
      <div class="pc-label">
        <div class="pc-label-title">${escapeHtml(p.name)}</div>
      </div>
      <div class="pc-reveal">
        <strong>What it's for</strong>
        <span>${escapeHtml(p.blurb || "")}</span>
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${escapeHtml(CATEGORY_LABELS[p.category] || p.category)}</div>
      ${brandLine}
      <h3 class="pc-name">${escapeHtml(p.name)}</h3>
      ${sizeLine}
      <div class="pc-foot">
        <div class="${priceClass}">${priceLabel}</div>
        <button class="pc-add" data-add="${p.id}">Add to order</button>
      </div>
      ${disclaimer}
    </div>
  </article>`;
}

function renderProductGrid(products, mountSelector) {
  const mount = document.querySelector(mountSelector);
  if (!mount) return;
  if (products.length === 0) {
    mount.innerHTML = '<div class="empty-state">No products in this category yet.</div>';
    return;
  }
  mount.innerHTML = products.map((p, i) => productCardHtml(p, i)).join("");

  mount.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-add");
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      addToBasket(product);
      btn.textContent = "Added ✓";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "Add to order";
        btn.classList.remove("added");
      }, 1400);
    });
  });

  // Tap-to-peel for touch devices (in addition to hover/focus in CSS)
  mount.querySelectorAll(".pc-visual").forEach(v => {
    v.addEventListener("click", () => {
      v.closest(".product-card").classList.toggle("peeled");
    });
  });
}

/* ---------------- Shop page filters ---------------- */
function initShopPage() {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";

  const filterBar = document.querySelector("#filter-bar");
  if (filterBar) {
    filterBar.querySelectorAll(".filter-chip").forEach(chip => {
      if (chip.dataset.filter === activeCategory) chip.classList.add("active");
      else chip.classList.remove("active");

      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.filter;
        filterBar.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        applyFilter();
      });
    });
  }

  function applyFilter() {
    const list = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
    renderProductGrid(list, "#product-grid");
  }

  applyFilter();
}

/* ---------------- Contact form (Web3Forms) ---------------- */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    const successEl = document.querySelector(".form-success");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        if (successEl) successEl.classList.add("show");
      } else {
        alert("Something went wrong sending your message. Please try WhatsApp instead.");
      }
    } catch (err) {
      alert("Something went wrong sending your message. Please try WhatsApp instead.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initBasketUI();
  initShopPage();
  initContactForm();

  // Home page featured products (first 6)
  if (document.querySelector("#featured-grid")) {
    renderProductGrid(PRODUCTS.filter(p => p.category === "kits" || p.category === "face-creams").slice(0, 6), "#featured-grid");
  }
});
