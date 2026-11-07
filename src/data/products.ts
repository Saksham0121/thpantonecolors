export const SITE_URL = "https://thepantonecolors.com";
export const COMPANY = "The Pantone Colors";
export const CONTACT_EMAIL = "thepantonecolors@gmail.com";
export const PHONE_LABEL = "+91 97942 10537";
export const PHONE_HREF = "tel:+919794210537";
export const PHONE_E164 = "+91-9794210537";

export type ProductPage = {
  slug: string;
  /** Short name used in lists, menus and the marquee */
  title: string;
  /** One-line summary shown in the list */
  text: string;
  /** <h1> on the product page */
  h1: string;
  /** <title>, kept near 60 characters */
  metaTitle: string;
  /** meta description, kept under 160 characters */
  metaDesc: string;
  intro: string;
  uses: string[];
  /** Pages that only exist as their own landing page, not as a row in the home list */
  child?: boolean;
  /** For child pages, the parent product slug */
  parent?: string;
};

export const products: ProductPage[] = [
  {
    slug: "offset-conventional-ink",
    title: "Offset Conventional Ink",
    text: "Sharp detail and steady density on sheet-fed offset presses.",
    h1: "Offset printing ink supplier in India",
    metaTitle: "Offset Printing Ink Supplier in India | The Pantone Colors",
    metaDesc:
      "Conventional offset printing inks for sheet-fed presses across India. Sharp detail, steady density and Pantone-matched shades. Request a quote.",
    intro:
      "Conventional offset inks for sheet-fed presses, made for sharp detail and steady density across long runs. We supply commercial and packaging printers across India and can match your Pantone shades.",
    uses: [
      "Commercial and job printing",
      "Folding cartons and packaging",
      "Brochures, catalogues and books",
      "Labels and stationery on sheet-fed presses",
    ],
  },
  {
    slug: "uv-sheet-fed-inks",
    title: "UV Sheet Fed Inks",
    text: "Instant-curing inks with strong adhesion for premium sheet-fed work.",
    h1: "UV sheet fed ink supplier in India",
    metaTitle: "UV Sheet Fed Inks Supplier in India | The Pantone Colors",
    metaDesc:
      "Instant-curing UV sheet fed inks with brilliant colour and strong adhesion for premium packaging. Supplied across India. Request a quote.",
    intro:
      "Instant-curing UV inks for sheet-fed presses, giving brilliant colour and strong adhesion on coated board, plastics and other non-absorbent stock. A good fit for premium packaging and high-productivity runs.",
    uses: [
      "Premium folding cartons",
      "Plastic and PVC sheets",
      "High-gloss promotional print",
      "Non-absorbent and coated stock",
    ],
  },
  {
    slug: "uv-flexo-inks",
    title: "UV Flexo Inks",
    text: "Durable inks for labels, packaging and narrow-web flexo lines.",
    h1: "UV flexo ink supplier in India",
    metaTitle: "UV Flexo Inks Supplier in India | The Pantone Colors",
    metaDesc:
      "Durable UV flexo inks for labels, packaging and narrow-web presses with outstanding printability. Supplied across India. Request a quote.",
    intro:
      "Flexible, durable UV flexo inks for labels, packaging and narrow-web presses. They cure instantly and print cleanly, and we can match brand colours to Pantone references.",
    uses: [
      "Self-adhesive labels",
      "Narrow-web packaging",
      "Cartons and tags",
      "Flexible packaging",
    ],
  },
  {
    slug: "water-base-flexo-inks",
    title: "Water Base Flexo Inks",
    text: "Water-based flexo inks for packaging, cartons and paper printing.",
    h1: "Water base flexo ink supplier in India",
    metaTitle: "Water Base Flexo Inks Supplier in India | The Pantone Colors",
    metaDesc:
      "Water base flexo inks for packaging, cartons and paper printing. Easy clean-up and consistent colour. Supplied across India. Request a quote.",
    intro:
      "Water-based flexo inks for packaging, cartons and paper printing. They clean up with water and hold colour from batch to batch, and we can match your brand shades.",
    uses: [
      "Corrugated boxes and cartons",
      "Paper bags and wrappers",
      "Kraft and paper packaging",
      "Paper labels and tags",
    ],
  },
  {
    slug: "water-base-craft-paper-inks",
    title: "Water Base Craft and Paper Inks",
    text: "Water-based inks for craft paper, kraft stock and paper products.",
    h1: "Water base inks for craft and paper printing",
    metaTitle: "Water Base Inks for Craft & Paper | The Pantone Colors",
    metaDesc:
      "Water base inks for craft paper, kraft stock and paper products. Clear colour on absorbent surfaces. Supplied across India. Request a quote.",
    intro:
      "Water-based inks for craft paper, kraft stock and paper products, giving clear colour on absorbent surfaces. They suit printers who run paper bags, wrappers and craft packaging.",
    uses: [
      "Kraft paper bags",
      "Craft wrappers and gift packaging",
      "Envelopes and stationery",
      "Printed paper products",
    ],
  },
  {
    slug: "specialty-coatings",
    title: "Specialty Coatings",
    text: "Barrier coating for tea cups, pearl coating and fragrance coating.",
    h1: "Specialty coatings: barrier, pearl and fragrance coating",
    metaTitle: "Specialty Coatings: Barrier, Pearl, Fragrance | The Pantone Colors",
    metaDesc:
      "Specialty coatings for packaging and paper: barrier coating for tea cups, pearl coating and fragrance coating. Supplied across India. Request a quote.",
    intro:
      "Functional and decorative coatings for packaging and paper products: barrier coating for tea cups, pearl coating for a shimmering finish, and fragrance coating that gives print a scent.",
    uses: [
      "Barrier coating for tea cups",
      "Pearl coating for premium packs",
      "Fragrance coating for scented print",
      "Custom coatings on request",
    ],
  },
  {
    slug: "barrier-coating-for-tea-cups",
    title: "Barrier Coating for Tea Cups",
    text: "Barrier coating for paper tea cups and cup stock.",
    h1: "Barrier coating for tea cups",
    metaTitle: "Barrier Coating for Tea Cups in India | The Pantone Colors",
    metaDesc:
      "Barrier coating for paper tea cups and cup stock, supplied across India. Share your paper and run details for a recommendation and quote.",
    intro:
      "A barrier coating for paper tea cups and cup stock. Send us your cup paper and run details and we recommend the right coating and quote.",
    uses: ["Paper tea cups", "Paper coffee cups", "Cup stock and blanks", "Paper containers"],
    child: true,
    parent: "specialty-coatings",
  },
  {
    slug: "pearl-coating",
    title: "Pearl Coating",
    text: "Pearl coating for a soft, shimmering finish on packaging and print.",
    h1: "Pearl coating for packaging and print",
    metaTitle: "Pearl Coating Supplier in India | The Pantone Colors",
    metaDesc:
      "Pearl coating that adds a soft, shimmering finish to cartons, boxes and printed paper. Supplied across India. Request a quote.",
    intro:
      "A pearl coating that adds a soft, shimmering finish to cartons, boxes and printed paper for a premium look.",
    uses: [
      "Gift and premium boxes",
      "Cosmetic cartons",
      "Book covers and invitations",
      "Labels and cards",
    ],
    child: true,
    parent: "specialty-coatings",
  },
  {
    slug: "fragrance-coating",
    title: "Fragrance Coating",
    text: "Fragrance coating that gives printed paper and packaging a scent.",
    h1: "Fragrance coating for packaging and print",
    metaTitle: "Fragrance Coating Supplier in India | The Pantone Colors",
    metaDesc:
      "Fragrance coating that gives printed paper and packaging a scent, for promotional print and brand packaging. Supplied across India.",
    intro:
      "A fragrance coating that gives printed paper and packaging a scent, for promotional print and brand packaging that stands out.",
    uses: ["Brochures and mailers", "Brand packaging", "Cards and stationery", "Promotional print"],
    child: true,
    parent: "specialty-coatings",
  },
  {
    slug: "security-inks",
    title: "Security Inks",
    text: "UV-fluorescent, thermochromic and anti-counterfeit inks for protected documents.",
    h1: "Security ink supplier in India",
    metaTitle: "Security Inks Supplier in India | The Pantone Colors",
    metaDesc:
      "UV-fluorescent, thermochromic and anti-counterfeit security inks for protected documents and packaging. Supplied across India.",
    intro:
      "Specialised security inks, including UV-fluorescent, thermochromic and anti-counterfeit formulations, for protected documents and packaging.",
    uses: [
      "Certificates and official documents",
      "Tickets and vouchers",
      "Brand protection on packaging",
      "Labels and seals",
    ],
  },
  {
    slug: "screen-inks",
    title: "Screen Inks",
    text: "Opaque inks for textiles, glass, metal and plastics.",
    h1: "Screen printing ink supplier in India",
    metaTitle: "Screen Printing Inks Supplier in India | The Pantone Colors",
    metaDesc:
      "Screen printing inks with strong opacity for textiles, glass, metal and plastics. Supplied across India. Request a quote.",
    intro:
      "Versatile screen printing inks for textiles, glass, metal, plastics and specialty substrates, with strong opacity and a clean finish.",
    uses: [
      "Textile printing",
      "Glass and bottles",
      "Metal panels and signs",
      "Plastic parts and sheets",
    ],
  },
  {
    slug: "pantone-inks",
    title: "Pantone Inks",
    text: "Pantone-matched mixing and ready-to-use spot colours.",
    h1: "Pantone colour matching inks in India",
    metaTitle: "Pantone Colour Matching Inks in India | The Pantone Colors",
    metaDesc:
      "Pantone-matched ink mixing and ready-to-use spot colours for brand-consistent printing. Send your Pantone reference for a match and quote.",
    intro:
      "Accurate Pantone-matched mixing and ready-to-use spot colours for brand-consistent printing. Send your Pantone reference, substrate and press, and we match the shade.",
    uses: [
      "Brand colours on packaging",
      "Spot colours for cartons",
      "Repeat orders matched batch to batch",
      "Custom shade development",
    ],
  },
  {
    slug: "press-room-chemicals",
    title: "Press Room Chemicals",
    text: "Fountain solutions, washes and roller deglazers for steady production.",
    h1: "Press room chemicals supplier in India",
    metaTitle: "Press Room Chemicals Supplier in India | The Pantone Colors",
    metaDesc:
      "Fountain solutions, washes, roller deglazers and press maintenance chemicals for offset and flexo presses. Supplied across India.",
    intro:
      "A full range of fountain solutions, washes, roller deglazers and press maintenance chemicals to keep production running.",
    uses: [
      "Fountain solutions for offset",
      "Blanket and roller washes",
      "Roller deglazers",
      "Press maintenance chemicals",
    ],
  },
  {
    slug: "consumables",
    title: "Consumables",
    text: "Blankets, rollers, dampening covers and spare parts.",
    h1: "Press room consumables supplier in India",
    metaTitle: "Press Room Consumables Supplier in India | The Pantone Colors",
    metaDesc:
      "Offset blankets, rollers, dampening covers and spare parts for uninterrupted press output. Supplied across India. Request a quote.",
    intro:
      "Essential press room consumables, including blankets, rollers, dampening covers and spare parts, for uninterrupted output.",
    uses: ["Offset blankets", "Rollers", "Dampening covers", "Spare parts"],
  },
  {
    slug: "allied-products",
    title: "Allied Products",
    text: "Custom formulations built around your production needs.",
    h1: "Allied printing products and custom formulations",
    metaTitle: "Allied Printing Products & Custom Inks | The Pantone Colors",
    metaDesc:
      "Allied printing products and custom ink formulations built around your production needs. Supplied across India. Request a quote.",
    intro:
      "A broad portfolio of allied printing products and custom formulations tailored to your production needs.",
    uses: [
      "Custom ink formulations",
      "Allied printing products",
      "Special requirements",
      "Trial and development work",
    ],
  },
];

/** Rows shown in the home page list, marquee and footer (child landing pages are linked from their parent). */
export const homeProducts = products.filter((p) => !p.child);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const faqs = [
  {
    q: "What inks does The Pantone Colors supply?",
    a: "We supply offset conventional inks, UV sheet fed inks, UV flexo inks, water base flexo inks, water base inks for craft and paper, security inks, screen inks and Pantone-matched inks. We also supply specialty coatings, press room chemicals and consumables.",
  },
  {
    q: "Do you supply printers across India?",
    a: "Yes. We supply commercial, packaging and security printers across India.",
  },
  {
    q: "Can you match a Pantone colour?",
    a: "Yes. Send us your Pantone reference, substrate and press, and we formulate the shade and send a quote.",
  },
  {
    q: "Do you supply water base inks and coatings?",
    a: "Yes. We supply water base flexo inks and water base inks for craft and paper, plus barrier coating for tea cups, pearl coating and fragrance coating.",
  },
  {
    q: "How do I get a quote?",
    a: `Use the quote form on this page, call ${PHONE_LABEL} or email ${CONTACT_EMAIL} with your press, substrate and the ink or coating you need.`,
  },
];
