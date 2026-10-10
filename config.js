/* Site-wide details. Change them here once and every page updates. */
const SITE = {
  name: "Korad Beauty Empire",
  legalName: "Koradbeautyempire Enterprises",
  cacNumber: "9692664",
  whatsapp: "2347041880706",          // international format, no + or spaces
  phoneDisplay: "0704 188 0706",
  instagram: "koradbeautyempire",
  tiktok: "koradbeautyempire",
  // Free key from https://web3forms.com (enter your email, they send you a key).
  // Until you add it, the contact form simply opens WhatsApp with the message filled in.
  // The scrolling strip at the top of every page. Keep these true. Use {phone} for the phone number.
  // Only add offers such as free samples or pickup if Korad really offers them.
  ticker: [
    "Lagos delivery in 24 to 48 hours",
    "Outside Lagos in 2 to 5 working days",
    "Order on WhatsApp {phone}",
    "Delivery across Nigeria",
    "Full payment before processing",
    "CAC registered business"
  ],
  // true = web addresses show /shop instead of /shop.html (needs a host that supports it, see HOW-TO-UPDATE.md)
  cleanUrls: true,
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
};

/* The moving strip at the very top of every page. Add, remove or reword lines freely.
   Only list offers that are true, for example:  "Free sample with every order (while stock lasts)" */
SITE.announcements = [
  "Lagos delivery 24 to 48 hours",
  "Outside Lagos 2 to 5 working days",
  "Delivery across Nigeria",
  "Order on WhatsApp " + SITE.phoneDisplay,
  "Skincare, bodycare and supplements"
];

function waLink(text) {
  return "https://wa.me/" + SITE.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
}
