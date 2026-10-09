# How to update the Korad Beauty Empire website

Everything you will ever change lives in a few plain text files. You never touch the design files.

| I want to change... | Edit this file |
|---|---|
| A product (name, price, photo, sold out), add or remove products | `products.js` |
| WhatsApp number, Instagram, TikTok, CAC number, form key | `config.js` |
| Wording on a page | `index.html`, `about.html`, `academy.html`, `contact.html` |
| A photo | the `images/` folder |

Use any text editor (Notepad, VS Code, or the pencil icon inside GitHub). Do not use Word.

---

## 1. Add or replace a product photo

**Prepare the photo**
1. Take it in daylight near a window, product centred, plain or tidy background, no phone UI, no screenshots.
2. Square or slightly tall works best. The shop shows it as a small square, centred, so keep the product in the middle.
3. Make the file small so the site stays fast: go to **squoosh.app** (free), drop the photo in, choose **MozJPEG**, set width to **1000 px**, quality about 75. Aim for under 300 KB.
4. Name it in lowercase with hyphens, no spaces: `deluxe-face-cream.jpg`.

**Put it on the site**
1. Save the file into the `images/products/` folder.
2. Open `products.js` and find the product. For example:

```js
{ id: "fc3", name: "Deluxe Face Cream", category: "Face Creams", price: 14000 },
```

3. Add an `image` field with the file name:

```js
{ id: "fc3", name: "Deluxe Face Cream", category: "Face Creams", price: 14000, image: "deluxe-face-cream.jpg" },
```

4. Save, then publish (section 5). To **replace** a photo later, save the new file with the same name over the old one. Nothing else changes.

If a product has no photo, or the file name is wrong, the shop shows a soft pink tile with the Korad logo instead. It never shows a broken image.

## 2. Change a price, name or description

Open `products.js`, find the line, change the value, save.

```js
{ id: "bs1", name: "Deluxe Body Soap", size: "500ml", category: "Body Soaps", price: 20000 },
```

- Price is a plain number with no comma and no naira sign: `20000`.
- Use `price: null` to show "Contact for price".
- Add a one-line description with `note: "Your text here"`.
- Keep the comma at the end of every line and keep the quotation marks.

## 3. Add a new product

Copy any existing line inside the list, paste it where you want it, and change:
- `id` to something no other product uses (for example `"fc12"`)
- `name`, `price`, `size`
- `category` to one of these, spelled exactly: Full Kits, Face Creams, Body Soaps, Cleansers, Body Scrubs, Serums & Toners, Oils, Body Creams, Baby Care, Brightening Collection, Supplements

## 4. Remove a product, or mark it sold out

- Remove: delete its whole line.
- Sold out: add `soldOut: true` to the line. The button becomes "Sold out" and cannot be clicked. Remove it when restocked.

```js
{ id: "oi3", name: "Indian White Oil", size: "500ml", category: "Oils", price: 35000, soldOut: true },
```

## 5. Publish your changes

**Best method (recommended): GitHub connected to your host.** Set it up once and every update goes live by itself.

One-time setup
1. Create a free account at github.com and make a new repository (any name, public is fine).
2. Click **Add file > Upload files**, drag in everything from the site folder (including the `images` folder), and click **Commit changes**.
3. In Cloudflare Pages, Netlify or Vercel (all free), choose to create a new project **from GitHub**, pick that repository, leave every setting empty or default (there is no build step), and deploy.

Every update after that
1. Open the repository on github.com.
2. To change `products.js` or `config.js`: click the file, click the pencil icon, edit, click **Commit changes**.
3. To add photos: open the `images/products` folder, click **Add file > Upload files**, drop the photos, **Commit changes**.
4. Wait about a minute. The live site updates automatically.

**Simplest alternative: drag and drop.** On Netlify (Deploys tab) or Cloudflare Pages (new deployment, direct upload) you can drag the whole updated folder in again. It replaces the old version. Vercel needs the GitHub method.

## 6. Preview before publishing

Double-click `index.html` on your computer. It opens in your browser exactly as it will look online (you need internet for the fonts). Add something to the order on the shop page to test the cart.

## 7. Turn on the contact form email (once)

1. Go to **web3forms.com**, enter the email address that should receive messages, and copy the access key they send.
2. In `config.js`, replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with that key and publish.

Until you do this, the form opens WhatsApp with the message already typed, so customers can still reach you.

## 8. Things worth adding to make the site feel more established

- A founder name, short story and photo on the About page (there is a note for this in `about.html`).
- Real prices for the Baby Care, Brightening Collection and supplement lines (they show "Contact for price" now).
- Your NAFDAC registration number in `config.js`/`about.html` if the products are registered, and a returns and refund policy. Only add what is true and documented.
- More product photos. Each one you add makes the shop look more finished.

## If something breaks

- Products vanished or the shop is blank: you probably deleted a comma, quote or bracket in `products.js`. Re-add it, or use GitHub's **History** button on that file to go back to the last working version.
- A photo does not show: check the file name matches exactly (capital letters count) and that it is inside `images/products/`.
- Changes do not appear: wait a minute, then hard refresh the page (Ctrl+Shift+R, or clear the browser cache on your phone).
