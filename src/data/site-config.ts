import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  companyName: "PowerVolt",
  legalName: "PowerVolt",
  tagline: "Impianti Elettrici Civili e Industriali",
  description:
    "PowerVolt realizza impianti elettrici civili e industriali, automazioni, domotica, quadri elettrici e reti dati, nel rispetto delle normative CEI.",

  siteUrl: "https://powervolt.it",

  phone: "+393932826533",
  phoneFormatted: "+39 393 282 6533",

  email: "info@powervolt.it",
  pec: "amministrazione@pec.powervolt.it",

  whatsappNumber: "393932826533",

  address: {
    streetAddress: "",
    addressLocality: "Zola Predosa",
    addressRegion: "BO",
    postalCode: "40069",
    addressCountry: "IT",
  },

  businessHours: [
    { days: "Lunedì–Venerdì", hours: "08:00–17:00" },
    { days: "Sabato e Domenica", hours: "Su appuntamento — solo per urgenze o lavori precedentemente concordati" },
  ],

  socialLinks: [],

  vatNumber: "04351091204",
  rea: "BO-586974",
};
