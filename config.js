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
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
};

function waLink(text) {
  return "https://wa.me/" + SITE.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
}
