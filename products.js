/* Korad Beauty Empire product catalog. This is the only file you need to edit to
   add, remove, rename or reprice products. See HOW-TO-UPDATE.md for the steps.

   Fields
     id        unique short code, never reuse one (e.g. "fc12")
     name      product name as customers see it
     size      optional, e.g. "500ml"
     brand     optional, shown for stocked supplements
     category  must match one of the names in CATEGORY_ORDER below, exactly
     price     number in naira (12000), or null to show "Contact for price"
     image     optional file name inside images/products/ (e.g. "deluxe-face-cream.jpg")
     note      optional one-line description
     soldOut   optional, true shows a "Sold out" button instead of "Add to order" */

const PRODUCTS = [
  // ---- Full Kits ----
  { id: "fk1", name: "Deluxe Full Set", category: "Full Kits", price: 250000 },
  { id: "fk2", name: "Whitening Kit", category: "Full Kits", price: 117000 },
  { id: "fk3", name: "7D Full Kit", category: "Full Kits", price: 132000 },
  { id: "fk4", name: "Caramel Kit", category: "Full Kits", price: 97000 },
  { id: "fk5", name: "Moroccan Kit", category: "Full Kits", price: 85000 },

  // ---- Face Creams ----
  { id: "fc1", name: "Whitening Face Cream", category: "Face Creams", price: 12000 },
  { id: "fc2", name: "Lightening Face Cream", category: "Face Creams", price: 10000 },
  { id: "fc3", name: "Deluxe Face Cream", category: "Face Creams", price: 14000 },
  { id: "fc4", name: "7D Face Cream", category: "Face Creams", price: 13000 },
  { id: "fc5", name: "Redness Face Cream", category: "Face Creams", price: 6000 },
  { id: "fc6", name: "Sunburn Face Cream", category: "Face Creams", price: 7000 },
  { id: "fc7", name: "Acne/Pimples Face Cream", category: "Face Creams", price: 10000 },
  { id: "fc8", name: "Caramel Face Cream", category: "Face Creams", price: 7000 },
  { id: "fc9", name: "Natural Fairness Face Cream", category: "Face Creams", price: 8000 },
  { id: "fc10", name: "Dark Spot Face Cream", category: "Face Creams", price: 5000 },
  { id: "fc11", name: "Anti Ageing Face Cream", category: "Face Creams", price: 6000 },

  // ---- Body Soaps ----
  { id: "bs1", name: "Deluxe Body Soap", size: "500ml", category: "Body Soaps", price: 20000 },
  { id: "bs2", name: "Whitening Herbal Soap", size: "500ml", category: "Body Soaps", price: 15000 },
  { id: "bs3", name: "7D Body Soap", size: "500ml", category: "Body Soaps", price: 17000 },
  { id: "bs4", name: "Moroccan Body Soap", size: "500ml", category: "Body Soaps", price: 16000 },
  { id: "bs5", name: "Dark Spot Body Soap", size: "500ml", category: "Body Soaps", price: 7000 },
  { id: "bs6", name: "Reaction Body Soap", size: "500ml", category: "Body Soaps", price: 7000 },
  { id: "bs7", name: "Natural Fairness Body Soap", size: "500ml", category: "Body Soaps", price: 15000 },
  { id: "bs8", name: "Lemon Extract Body Soap", size: "500ml", category: "Body Soaps", price: 24000 },
  { id: "bs9", name: "Papaya Extract Body Soap", size: "500ml", category: "Body Soaps", price: 20000 },
  { id: "bs10", name: "Repair Body Soap", size: "500g", category: "Body Soaps", price: 12000 },
  { id: "bs11", name: "Stretch Mark Body Soap", size: "1 litre", category: "Body Soaps", price: 50000 },
  { id: "bs12", name: "Caramel Body Soap", size: "500g", category: "Body Soaps", price: 15000 },
  { id: "bs13", name: "Hot Chocolate Body Wash", size: "500ml", category: "Body Soaps", price: 18000 },

  // ---- Cleansers ----
  { id: "cl1", name: "7D Face Cleanser", category: "Cleansers", price: 8000 },
  { id: "cl2", name: "Whitening Face Cleanser", category: "Cleansers", price: 8000 },
  { id: "cl3", name: "Acne Face Cleanser", category: "Cleansers", price: 7000 },
  { id: "cl4", name: "Knuckles Cleanser", category: "Cleansers", price: 7000 },

  // ---- Body Scrubs ----
  { id: "sc1", name: "Coffee Body Scrub", category: "Body Scrubs", price: 15000 },
  { id: "sc2", name: "Glow Body Polish Scrub", category: "Body Scrubs", price: 20000 },

  // ---- Serums & Toners ----
  { id: "se1", name: "Vit C Face Serum", category: "Serums & Toners", price: 12000 },
  { id: "se2", name: "Redness Face Serum", category: "Serums & Toners", price: 12000 },
  { id: "se3", name: "Nature Body Serum", category: "Serums & Toners", price: 10000 },
  { id: "se4", name: "Renew Face Toner", category: "Serums & Toners", price: 9000 },

  // ---- Oils ----
  { id: "oi1", name: "Body Moisturizing Glow Oil", size: "500ml", category: "Oils", price: 20000 },
  { id: "oi2", name: "7D Body Oil", size: "250ml", category: "Oils", price: 10000 },
  { id: "oi3", name: "Indian White Oil", size: "500ml", category: "Oils", price: 35000 },
  { id: "oi4", name: "Repair Oil", size: "500ml", category: "Oils", price: 10000 },
  { id: "oi5", name: "Stretch Mark Oil", size: "500ml", category: "Oils", price: 28000 },
  { id: "oi6", name: "Kiddies Oil", size: "500ml", category: "Oils", price: 20000 },

  // ---- Body Creams ----
  { id: "bc1", name: "Deluxe Body Milk", size: "500ml", category: "Body Creams", price: 30000 },
  { id: "bc2", name: "Caramel Body Milk", size: "500ml", category: "Body Creams", price: 24000 },
  { id: "bc3", name: "Whitening Body Milk", size: "500ml", category: "Body Creams", price: 25000 },
  { id: "bc4", name: "Lightening Body Milk", size: "500ml", category: "Body Creams", price: 27000 },
  { id: "bc5", name: "Natural Fairness Body Cream", size: "500ml", category: "Body Creams", price: 24000 },
  { id: "bc6", name: "Dark Spot Body Cream", size: "500ml", category: "Body Creams", price: 25000 },
  { id: "bc7", name: "Anti Ageing Body Cream", size: "500ml", category: "Body Creams", price: 20000 },
  { id: "bc8", name: "Stretch Mark Body Cream", size: "500ml", category: "Body Creams", price: 50000 },
  { id: "bc9", name: "Dark Area Corrector Cream", size: "500ml", category: "Body Creams", price: 15000 },
  { id: "bc10", name: "Moroccan Body Cream", size: "500ml", category: "Body Creams", price: 30000 },
  { id: "bc11", name: "Knuckle Cream", size: "500ml", category: "Body Creams", price: 30000 },
  { id: "bc12", name: "Hot Chocolate Body Milk", size: "500ml", category: "Body Creams", price: 18000 },
  { id: "bc13", name: "7D Body Cream", size: "500ml", category: "Body Creams", price: 28000 },

  // ---- Baby Care (no confirmed price yet) ----
  {
    id: "baby1", image: "baby-body-butter.jpg", name: "Baby Body Butter Moisturizer", size: "200g / 7.05oz",
    category: "Baby Care", price: null,
    note: "Shea butter, cocoa butter, sweet almond oil, coconut oil & vitamin E. Paraben-free, sulfate-free, phthalate-free. Safe from day 1."
  },

  // ---- Brightening Collection (separate line, no confirmed price yet) ----
  { id: "bg1", name: "Brightening Face Wash", category: "Brightening Collection", price: null, note: "Vitamin C & Turmeric. Deep cleansing, radiant glow." },
  { id: "bg2", name: "Brightening Body Lotion", size: "300ml", category: "Brightening Collection", price: null, note: "Niacinamide & Vitamin C. For brighter, even-tone skin." },
  { id: "bg3", image: "brightening-body-butter.jpg", name: "Brightening Body Butter", size: "250g", category: "Brightening Collection", price: null, note: "Shea Butter & Niacinamide." },
  { id: "bg4", name: "Skin Glow Face Serum", size: "30ml", category: "Brightening Collection", price: null, note: "Hyaluronic Acid & Vitamin C." },
  { id: "bg5", image: "brightening-soap.jpg", name: "Brightening Soap", size: "200g", category: "Brightening Collection", price: null, note: "Kojic Acid & Glutathione." },

  // ---- Supplements (stocked third-party brands, not Korad's own formulation) ----
  { id: "su1", image: "collagen-peptides.jpg", name: "Grassfed Collagen Peptides + Vitamin C & Biotin", brand: "NeoCell", size: "180 tablets", category: "Supplements", price: null, note: "6000mg per serving. Supports healthy hair, skin & nails." },
  { id: "su2", name: "Women's Probiotic", brand: "Spring Valley", size: "30 vegetarian capsules", category: "Supplements", price: null, note: "Allergen-free, 1 billion CFU, digestive health support." },
  { id: "su3", name: "Magnesium", brand: "Spring Valley", size: "60 vegetarian capsules", category: "Supplements", price: null, note: "High absorption, sleep, rest & muscle health." },
  { id: "su4", name: "Ashwagandha", brand: "Spring Valley", size: "60 vegetarian capsules", category: "Supplements", price: null, note: "Extra strength stress support." },
  { id: "su5", name: "Zinc", brand: "Finest Nutrition", size: "100 caplets", category: "Supplements", price: null, note: "High potency immune support." },
  { id: "su6", name: "Hair, Skin & Nails", brand: "Spring Valley", category: "Supplements", price: null, note: "Extra strength, 5000mcg biotin, collagen support." },
  { id: "su7", name: "Women's Multivitamin Gummies", brand: "Nature's Bounty", size: "80 gummies", category: "Supplements", price: null, note: "With 50mg collagen." },
  { id: "su8", name: "Vitamin C", category: "Supplements", price: null, note: "Immune health support." },
  { id: "su9", name: "Vitamin B12", brand: "Spring Valley", category: "Supplements", price: null, note: "Metabolism support." },
  { id: "su10", name: "Goodbye Stress", category: "Supplements", price: null, note: "GABA, L-theanine & lemon balm." },
  { id: "su11", image: "maca-cordyceps.jpg", name: "Maca Cordyceps Extra Strength (Men Power)", brand: "DUOZI", size: "60 tablets", category: "Supplements", price: null, note: "Energy, sexual health, athletic performance, immune function, stress relief & cognitive support (per label)." },
];

const CATEGORY_ORDER = [
  "Full Kits", "Face Creams", "Body Soaps", "Cleansers", "Body Scrubs",
  "Serums & Toners", "Oils", "Body Creams", "Baby Care",
  "Brightening Collection", "Supplements"
];

/* Optional intro shown above a category on the Shop page.
   image: file inside images/ (not images/products/). */
const CATEGORY_INTRO = {
  "Full Kits": {
    text: "Complete routines in a single order. Message us on WhatsApp to confirm exactly what is inside each kit."
  },
  "Brightening Collection": {
    image: "brightening-cluster.jpg",
    alt: "Korad brightening body lotion, face wash, face serum and soap",
    text: "Face wash with vitamin C and turmeric, body lotion with niacinamide and vitamin C, body butter with shea butter and niacinamide, face serum with hyaluronic acid and vitamin C, and soap with kojic acid and glutathione."
  },
  "Baby Care": {
    image: "baby-butter-jars.jpg",
    alt: "Korad Baby Body Butter Moisturizer jar and lid",
    text: "Made with shea butter, cocoa butter, sweet almond oil, coconut oil and vitamin E. Free from parabens, sulfates, phthalates, mineral oil and artificial colour. For babies from day 1."
  },
  "Supplements": {
    image: "supplements-group.jpg",
    alt: "Selection of supplements stocked by Korad Beauty Empire",
    text: "Supplements we stock from other brands, including NeoCell, Spring Valley, Nature's Bounty and Finest Nutrition. They are sold in their original packaging and are not made by Korad.",
    fine: "These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease. Use as a food supplement only."
  }
};

function formatNaira(n) {
  return "\u20A6" + n.toLocaleString("en-NG");
}

function priceLabel(product) {
  return product.price === null ? "Contact for price" : formatNaira(product.price);
}

const SUPPLEMENT_DISCLAIMER = "These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Use as a food supplement only.";
