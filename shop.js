/* Renders the Shop page from products.js */
(function () {
  const state = { cat: "All", q: "" };
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const slug = c => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  function row(p) {
    const img = p.image ? `<img src="images/products/${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">` : "";
    const meta = [p.brand, p.size].filter(Boolean).join(" \u00B7 ");
    const btn = p.soldOut
      ? `<button class="add" disabled>Sold out</button>`
      : `<button class="add" data-add="${esc(p.id)}">Add to order</button>`;
    return `<li class="prow">
      <div class="thumb">${img}</div>
      <div class="pinfo"><h3>${esc(p.name)}</h3>${meta ? `<p class="meta">${esc(meta)}</p>` : ""}${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}</div>
      <div class="pprice">${esc(priceLabel(p))}</div>${btn}</li>`;
  }

  function render() {
    const q = state.q.trim().toLowerCase();
    let html = "";
    CATEGORY_ORDER.forEach(cat => {
      if (state.cat !== "All" && state.cat !== cat) return;
      let items = PRODUCTS.filter(p => p.category === cat);
      if (q) items = items.filter(p => (p.name + " " + (p.brand || "") + " " + (p.note || "")).toLowerCase().includes(q));
      if (!items.length) return;
      const info = CATEGORY_INTRO[cat] || {};
      html += `<section class="cat" id="${slug(cat)}">
        <div class="cat-head${info.image ? " with-img" : ""}">
          ${info.image ? `<img src="images/${esc(info.image)}" alt="${esc(info.alt || cat)}">` : ""}
          <div><h2>${esc(cat)}</h2>${info.text ? `<p>${esc(info.text)}</p>` : ""}${info.fine ? `<p class="fine">${esc(info.fine)}</p>` : ""}</div>
        </div>
        <ul class="plist">${items.map(row).join("")}</ul></section>`;
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
    if (hit) window.scrollTo({ top: document.getElementById("cat-nav").offsetTop - 80 });
  }

  document.addEventListener("DOMContentLoaded", () => {
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
