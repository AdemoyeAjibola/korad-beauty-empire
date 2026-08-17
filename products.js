/* ==========================================================================
   KORAD BEAUTY EMPIRE — PRODUCT CATALOG
   ==========================================================================
   All prices are real, in Nigerian Naira (₦), current as of the master
   price list supplied by the business.

   Items with price: null are NOT on the master list — they come from
   separate flyers (Baby Care, Brightening Collection) and are shown on
   the site as "Contact for price". Confirm real prices before launch.

   Category keys used for filtering on shop.html:
   kits, face-creams, soaps, cleansers, scrubs, serums, oils,
   body-creams, baby, brightening, supplements
   ========================================================================== */

const CATEGORY_LABELS = {
  "kits": "Full Kits",
  "face-creams": "Face Creams",
  "soaps": "Body Soaps",
  "cleansers": "Cleansers",
  "scrubs": "Body Scrubs",
  "serums": "Serums & Toners",
  "oils": "Oils",
  "body-creams": "Body Creams",
  "baby": "Baby Care",
  "brightening": "Brightening Collection",
  "supplements": "Supplements We Stock"
};

const PRODUCTS = [
  // ---------------- FULL KITS ----------------
  { id: "kit-deluxe", name: "Deluxe Full Set", category: "kits", price: 250000, blurb: "The complete Korad ritual — cream, soap, oil and milk in one set." },
  { id: "kit-whitening", name: "Whitening Kit", category: "kits", price: 117000, blurb: "A full brightening routine, bundled for consistent results." },
  { id: "kit-7d", name: "7D Full Kit", category: "kits", price: 132000, blurb: "Our 7D line, complete — cream, soap and oil together." },
  { id: "kit-caramel", name: "Caramel Kit", category: "kits", price: 97000, blurb: "The Caramel routine in one bundle, for an even, warm glow." },
  { id: "kit-moroccan", name: "Moroccan Kit", category: "kits", price: 85000, blurb: "Moroccan-inspired body care, bundled for daily use." },

  // ---------------- FACE CREAMS ----------------
  { id: "fc-whitening", name: "Whitening Face Cream", category: "face-creams", price: 12000, blurb: "A brightening daily cream for an even, radiant tone." },
  { id: "fc-lightening", name: "Lightening Face Cream", category: "face-creams", price: 10000, blurb: "Lightweight and daily-wearable, for a softer complexion." },
  { id: "fc-deluxe", name: "Deluxe Face Cream", category: "face-creams", price: 14000, blurb: "Our richest face cream, for deep daily nourishment." },
  { id: "fc-7d", name: "7D Face Cream", category: "face-creams", price: 13000, blurb: "Part of the 7D line — smooth, even, consistent glow." },
  { id: "fc-redness", name: "Redness Face Cream", category: "face-creams", price: 6000, blurb: "Calms visible redness and soothes sensitive skin." },
  { id: "fc-sunburn", name: "Sunburn Face Cream", category: "face-creams", price: 7000, blurb: "Soothing relief and repair for sun-stressed skin." },
  { id: "fc-acne", name: "Acne/Pimples Face Cream", category: "face-creams", price: 10000, blurb: "Targets breakouts while keeping skin balanced." },
  { id: "fc-caramel", name: "Caramel Face Cream", category: "face-creams", price: 7000, blurb: "Warm, even tone with the Caramel finish." },
  { id: "fc-natural-fairness", name: "Natural Fairness Face Cream", category: "face-creams", price: 8000, blurb: "A gentle everyday brightening cream." },
  { id: "fc-dark-spot", name: "Dark Spot Face Cream", category: "face-creams", price: 5000, blurb: "Targeted care for dark spots and uneven patches." },
  { id: "fc-anti-ageing", name: "Anti Ageing Face Cream", category: "face-creams", price: 6000, blurb: "Daily care that supports firmer, younger-looking skin." },

  // ---------------- BODY SOAPS ----------------
  { id: "soap-deluxe", name: "Deluxe Body Soap", size: "500ml", category: "soaps", price: 20000, blurb: "Our richest bar, for a full-body glow ritual." },
  { id: "soap-whitening-herbal", name: "Whitening Herbal Soap", size: "500ml", category: "soaps", price: 15000, blurb: "Herbal-infused daily brightening bar." },
  { id: "soap-7d", name: "7D Body Soap", size: "500ml", category: "soaps", price: 17000, blurb: "The 7D bar — even tone, daily cleanse." },
  { id: "soap-moroccan", name: "Moroccan Body Soap", size: "500ml", category: "soaps", price: 16000, blurb: "Moroccan-inspired cleanse for soft, glowing skin." },
  { id: "soap-dark-spot", name: "Dark Spot Body Soap", size: "500ml", category: "soaps", price: 7000, blurb: "A focused bar for dark spots and uneven patches." },
  { id: "soap-reaction", name: "Reaction Body Soap", size: "500ml", category: "soaps", price: 7000, blurb: "Gentle formula for reactive, sensitive skin." },
  { id: "soap-natural-fairness", name: "Natural Fairness Body Soap", size: "500ml", category: "soaps", price: 15000, blurb: "Everyday brightening, gentle enough for daily use." },
  { id: "soap-lemon", name: "Lemon Extract Body Soap", size: "500ml", category: "soaps", price: 24000, blurb: "Citrus-fresh cleanse with lemon extract." },
  { id: "soap-papaya", name: "Papaya Extract Body Soap", size: "500ml", category: "soaps", price: 20000, blurb: "Papaya extract for soft, radiant skin." },
  { id: "soap-repair", name: "Repair Body Soap", size: "500g", category: "soaps", price: 12000, blurb: "Repairing daily bar for stressed skin." },
  { id: "soap-stretch-mark", name: "Stretch Mark Body Soap", size: "1 litre", category: "soaps", price: 50000, blurb: "A dedicated bar for stretch mark care, full-size litre." },
  { id: "soap-caramel", name: "Caramel Body Soap", size: "500g", category: "soaps", price: 15000, blurb: "The Caramel finish, in a daily bar." },
  { id: "soap-hot-chocolate", name: "Hot Chocolate Body Wash", size: "500ml", category: "soaps", price: 18000, blurb: "Indulgent wash with a warm cocoa finish." },

  // ---------------- CLEANSERS ----------------
  { id: "cl-7d", name: "7D Face Cleanser", category: "cleansers", price: 8000, blurb: "Daily cleanse from the 7D line." },
  { id: "cl-whitening", name: "Whitening Face Cleanser", category: "cleansers", price: 8000, blurb: "Brightening cleanse for morning and night." },
  { id: "cl-acne", name: "Acne Face Cleanser", category: "cleansers", price: 7000, blurb: "A clarifying cleanse for breakout-prone skin." },
  { id: "cl-knuckles", name: "Knuckles Cleanser", category: "cleansers", price: 7000, blurb: "Targeted cleanse for dark knuckles." },

  // ---------------- BODY SCRUBS ----------------
  { id: "sc-coffee", name: "Coffee Body Scrub", category: "scrubs", price: 15000, blurb: "Energising coffee scrub for smoother skin." },
  { id: "sc-glow-polish", name: "Glow Body Polish Scrub", category: "scrubs", price: 20000, blurb: "A polishing scrub for an all-over glow." },

  // ---------------- SERUMS & TONERS ----------------
  { id: "se-vitc", name: "Vit C Face Serum", category: "serums", price: 12000, blurb: "Brightening vitamin C serum for daily radiance." },
  { id: "se-redness", name: "Redness Face Serum", category: "serums", price: 12000, blurb: "Calming serum for visibly reduced redness." },
  { id: "se-nature-body", name: "Nature Body Serum", category: "serums", price: 10000, blurb: "A lightweight all-over body serum." },
  { id: "to-renew", name: "Renew Face Toner", category: "serums", price: 9000, blurb: "Refreshes and preps skin before cream or serum." },

  // ---------------- OILS ----------------
  { id: "oil-glow", name: "Body Moisturizing Glow Oil", size: "500ml", category: "oils", price: 20000, blurb: "Locks in moisture for a healthy, lasting glow." },
  { id: "oil-7d", name: "7D Body Oil", size: "250ml", category: "oils", price: 10000, blurb: "The 7D finish, in a lightweight body oil." },
  { id: "oil-indian-white", name: "Indian White Oil", size: "500ml", category: "oils", price: 35000, blurb: "A signature brightening oil for the full body." },
  { id: "oil-repair", name: "Repair Oil", size: "500ml", category: "oils", price: 10000, blurb: "Daily repair for dry or stressed skin." },
  { id: "oil-stretch-mark", name: "Stretch Mark Oil", size: "500ml", category: "oils", price: 28000, blurb: "Targeted oil for stretch mark care." },
  { id: "oil-kiddies", name: "Kiddies Oil", size: "500ml", category: "oils", price: 20000, blurb: "Gentle body oil formulated for children." },

  // ---------------- BODY CREAMS ----------------
  { id: "bc-deluxe-milk", name: "Deluxe Body Milk", size: "500ml", category: "body-creams", price: 30000, blurb: "Our richest body milk for all-day softness." },
  { id: "bc-caramel-milk", name: "Caramel Body Milk", size: "500ml", category: "body-creams", price: 24000, blurb: "The Caramel finish in a daily body milk." },
  { id: "bc-whitening-milk", name: "Whitening Body Milk", size: "500ml", category: "body-creams", price: 25000, blurb: "Brightening body milk for an even tone." },
  { id: "bc-lightening-milk", name: "Lightening Body Milk", size: "500ml", category: "body-creams", price: 27000, blurb: "A lighter daily milk for a softer complexion." },
  { id: "bc-natural-fairness", name: "Natural Fairness Body Cream", size: "500ml", category: "body-creams", price: 24000, blurb: "Gentle everyday brightening cream." },
  { id: "bc-dark-spot", name: "Dark Spot Body Cream", size: "500ml", category: "body-creams", price: 25000, blurb: "Focused care for dark spots and uneven tone." },
  { id: "bc-anti-ageing", name: "Anti Ageing Body Cream", size: "500ml", category: "body-creams", price: 20000, blurb: "Daily body care that supports firmer skin." },
  { id: "bc-stretch-mark", name: "Stretch Mark Body Cream", size: "500ml", category: "body-creams", price: 50000, blurb: "Rich, dedicated care for stretch marks." },
  { id: "bc-dark-area", name: "Dark Area Corrector Cream", size: "500ml", category: "body-creams", price: 15000, blurb: "Targets dark areas for a more even tone." },
  { id: "bc-moroccan", name: "Moroccan Body Cream", size: "500ml", category: "body-creams", price: 30000, blurb: "Moroccan-inspired richness, full body." },
  { id: "bc-knuckle", name: "Knuckle Cream", size: "500ml", category: "body-creams", price: 30000, blurb: "Targeted cream for dark knuckles." },
  { id: "bc-hot-chocolate", name: "Hot Chocolate Body Milk", size: "500ml", category: "body-creams", price: 18000, blurb: "Indulgent, warm-scented daily body milk." },
  { id: "bc-7d", name: "7D Body Cream", size: "500ml", category: "body-creams", price: 28000, blurb: "The 7D finish in a full body cream." },

  // ---------------- BABY CARE (flyer, no master price) ----------------
  {
    id: "baby-body-butter",
    name: "Baby Body Butter Moisturizer",
    size: "200g / 7.05oz",
    category: "baby",
    price: null,
    blurb: "Shea butter, cocoa butter, sweet almond oil, coconut oil and vitamin E. Paraben-free, sulfate-free, phthalate-free. Safe from day one.",
    tags: ["Paraben-free", "Sulfate-free", "Phthalate-free", "From day 1"]
  },

  // ---------------- BRIGHTENING COLLECTION (separate flyer, no master price) ----------------
  { id: "br-face-wash", name: "Brightening Face Wash", category: "brightening", price: null, blurb: "With Vitamin C & Turmeric — a deep-cleansing daily wash." },
  { id: "br-body-lotion", name: "Brightening Body Lotion", size: "300ml", category: "brightening", price: null, blurb: "With Niacinamide & Vitamin C, for a brighter, even tone." },
  { id: "br-body-butter", name: "Brightening Body Butter", size: "250g", category: "brightening", price: null, blurb: "Shea Butter & Niacinamide, whipped for daily richness." },
  { id: "br-face-serum", name: "Skin Glow Face Serum", size: "30ml", category: "brightening", price: null, blurb: "Hyaluronic Acid & Vitamin C, for hydrated, visible glow." },
  { id: "br-soap", name: "Brightening Soap", size: "200g", category: "brightening", price: null, blurb: "Kojic Acid & Glutathione, in a daily brightening bar." },

  // ---------------- SUPPLEMENTS WE STOCK ----------------
  {
    id: "sup-collagen",
    name: "Grassfed Collagen Peptides + Vitamin C & Biotin",
    brand: "NeoCell",
    category: "supplements",
    price: null,
    blurb: "6000mg per serving, 180 tablets. Supports healthy hair, skin and nails.",
    supplement: true
  },
  {
    id: "sup-probiotic",
    name: "Women's Probiotic",
    brand: "Spring Valley",
    category: "supplements",
    price: null,
    blurb: "Allergen-free, 1 billion CFU, 30 vegetarian capsules. Digestive health support.",
    supplement: true
  },
  {
    id: "sup-magnesium",
    name: "Magnesium",
    brand: "Spring Valley",
    category: "supplements",
    price: null,
    blurb: "High absorption, 60 vegetarian capsules. Sleep, rest and muscle health support.",
    supplement: true
  },
  {
    id: "sup-ashwagandha",
    name: "Ashwagandha",
    brand: "Spring Valley",
    category: "supplements",
    price: null,
    blurb: "Extra strength, 60 vegetarian capsules. Stress support.",
    supplement: true
  },
  {
    id: "sup-zinc",
    name: "Zinc",
    brand: "Finest Nutrition",
    category: "supplements",
    price: null,
    blurb: "High potency, 100 caplets. Immune support.",
    supplement: true
  },
  {
    id: "sup-hair-skin-nails",
    name: "Hair, Skin & Nails",
    brand: "Spring Valley",
    category: "supplements",
    price: null,
    blurb: "Extra strength collagen support with 5000mcg biotin.",
    supplement: true
  },
  {
    id: "sup-multivitamin-gummies",
    name: "Women's Multivitamin Gummies with Collagen",
    brand: "Nature's Bounty",
    category: "supplements",
    price: null,
    blurb: "50mg collagen, 80 gummies.",
    supplement: true
  },
  {
    id: "sup-vitc",
    name: "Vitamin C",
    brand: "",
    category: "supplements",
    price: null,
    blurb: "Immune health support.",
    supplement: true
  },
  {
    id: "sup-b12",
    name: "Vitamin B12",
    brand: "Spring Valley",
    category: "supplements",
    price: null,
    blurb: "Metabolism support.",
    supplement: true
  },
  {
    id: "sup-goodbye-stress",
    name: "Goodbye Stress",
    brand: "",
    category: "supplements",
    price: null,
    blurb: "GABA, L-theanine, lemon balm. Stress relief support.",
    supplement: true
  },
  {
    id: "sup-maca-cordyceps",
    name: "Maca Cordyceps — Extra Strength Men Power",
    brand: "DUOZI",
    category: "supplements",
    price: null,
    blurb: "60 tablets. Supports energy levels, sexual health, athletic performance, immune function, stress/fatigue reduction and cognitive function (per product label).",
    supplement: true
  }
];

const SUPPLEMENT_DISCLAIMER = "These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Use as a food supplement only.";

/* Format a price in Naira, or return the contact string if unknown. */
function formatPrice(price) {
  if (price === null || price === undefined) return "Contact for price";
  return "₦" + price.toLocaleString("en-NG");
}
