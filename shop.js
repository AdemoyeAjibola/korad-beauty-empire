/* Renders the Shop page from products.js */
(function () {
  const state = { cat: "All", q: "" };
  const TINTS = ["#fbe3ea", "#fdecd0", "#ece4f4", "#e3f0e6"];
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const slug = c => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  // A photo is found automatically: images/products/<product-name-with-hyphens>.jpg
  // or set it yourself with the image field in products.js.
  const photoFile = p => p.image || slug(p.name) + ".jpg";

  function card(p) {
    const meta = [p.brand, p.size].filter(Boolean).join(" \u00B7 ");
    const btn = p.soldOut
      ? `<button class="add" disabled>Sold out</button>`
      : `<button class="add" data-add="${esc(p.id)}">Add to order</button>`;
    return `<li class="pcard">
      <div class="pimg" data-label="${esc(p.category)}"><img src="images/products/${esc(photoFile(p))}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()"></div>
      <h3>${esc(p.name)}</h3>${meta ? `<p class="meta">${esc(meta)}</p>` : ""}${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      <div class="pprice">${esc(priceLabel(p))}</div>${btn}</li>`;
  }

  function render() {
    const q = state.q.trim().toLowerCase();
    let html = "";
    CATEGORY_ORDER.forEach((cat, ci) => {
      if (state.cat !== "All" && state.cat !== cat) return;
      let items = PRODUCTS.filter(p => p.category === cat);
      if (q) items = items.filter(p => (p.name + " " + (p.brand || "") + " " + (p.note || "")).toLowerCase().includes(q));
      if (!items.length) return;
      const info = CATEGORY_INTRO[cat] || {};
      html += `<section class="cat" id="${slug(cat)}" style="--tint:${TINTS[ci % TINTS.length]}">
        <div class="cat-head${info.image ? " with-img" : ""}">
          ${info.image ? `<img src="images/${esc(info.image)}" alt="${esc(info.alt || cat)}">` : ""}
          <div><h2>${esc(cat)} <small>${items.length} ${items.length === 1 ? "product" : "products"}</small></h2>${info.text ? `<p>${esc(info.text)}</p>` : ""}${info.fine ? `<p class="fine">${esc(info.fine)}</p>` : ""}</div>
        </div>
        <ul class="pgrid">${items.map(card).join("")}</ul></section>`;
    });
    document.getElementById("catalog").innerHTML = html ||
      `<p class="empty">Nothing matches "${esc(state.q)}". Try another word, or message us on WhatsApp and we will help you find it.</p>`;
  }

  function renderTabs() {
    document.getElementById("cat-nav").innerHTML = ["All"].concat(CATEGORY_ORDER).map(c =>
      `<button data-cat="${esc(c)}" aria-pressed="${c === state.cat}">${esc(c)}</button>`).join("");
  }

  function fromHash() {
    const h = location.hash.slice(1);
    const hit = CATEGORY_ORDER.find(c => slug(c) === h);
    state.cat = hit || "All";
    renderTabs(); render();
    if (hit) window.scrollTo({ top: document.getElementById("catalog").offsetTop - 150 });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const q = new URLSearchParams(location.search).get("q");
    if (q) { state.q = q; document.getElementById("search").value = q; }
    document.getElementById("cat-nav").addEventListener("click", e => {
      const b = e.target.closest("button[data-cat]");
      if (!b) return;
      state.cat = b.dataset.cat;
      history.replaceState(null, "", state.cat === "All" ? "shop.html" : "#" + slug(state.cat));
      renderTabs(); render();
    });
    document.getElementById("search").addEventListener("input", e => { state.q = e.target.value; render(); });
    document.getElementById("catalog").addEventListener("click", e => {
      const b = e.target.closest("[data-add]");
      if (b) addToCart(b.dataset.add);
    });
    window.addEventListener("hashchange", fromHash);
    fromHash();
  });
})();
