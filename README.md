# Korad Beauty Empire website

Plain HTML, CSS and JavaScript. No build step, free to host.

- `HOW-TO-UPDATE.md`: how to change products, prices, photos and publish. Start here.
- `index.html`, `shop.html`, `academy.html`, `about.html`, `contact.html`: the pages
- `products.js`: every product, price and photo reference
- `config.js`: WhatsApp number, social handles, CAC number, contact form key
- `style.css`: the design
- `components.js`, `script.js`, `shop.js`: header and footer, cart and WhatsApp checkout, shop page
- `images/`: logo, collection photos. `images/products/` holds individual product photos.

## Deploy (free)

1. Unzip the folder.
2. Quickest: go to netlify.com, sign up, and drag the whole folder onto the "Deploy manually" area. It is live within seconds at a `.netlify.app` address; rename it under Site settings.
3. Better for ongoing updates: put the folder in a GitHub repository and connect it to Cloudflare Pages, Netlify or Vercel (all free). Every change you commit then publishes automatically. Step by step is in `HOW-TO-UPDATE.md`.

## A real .com domain later (about $10 to $15 a year)

1. Buy the domain from Namecheap or Cloudflare Registrar.
2. In your host's project settings open Domains, add the domain, and copy the DNS records it shows.
3. Add those records at the registrar. After 10 to 60 minutes the .com points to the site. No rebuild needed.

## Before launch

- Add your Web3Forms key in `config.js` (free, takes a minute).
- Confirm prices for products showing "Contact for price".
