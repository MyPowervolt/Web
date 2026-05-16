// ─── Service ─────────────────────────────────────────────────────────────────

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  /** Lucide icon name to render */
  icon: string;
  /** Primary SEO keywords for this service page */
  keywords: string[];
  faq: ServiceFaq[];
  /** schema.org @type for Service structured data */
  schemaType: "Service";
  /** Canonical URL path, e.g. /servizi/domotica */
  path: string;
  /** Whether this service targets consumers (B2C), businesses (B2B), or both */
  target: "B2C" | "B2B" | "B2C+B2B";
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  /** Optional children for dropdown menus */
  children?: NavItem[];
  /** Used for active state detection */
  exactMatch?: boolean;
}

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface SeoMeta {
  title: string;
  description: string;
  /** Absolute canonical URL */
  canonical: string;
  /** Open Graph image absolute URL */
  ogImage?: string;
  /** Schema.org structured data objects to inject */
  structuredData?: Record<string, unknown>[];
  noIndex?: boolean;
}

// ─── Site Config ─────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: "facebook" | "instagram" | "linkedin" | "youtube" | "whatsapp";
  url: string;
  label: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface CompanyAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface SiteConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  pec: string;
  whatsappNumber: string;
  address: CompanyAddress;
  businessHours: BusinessHours[];
  socialLinks: SocialLink[];
  vatNumber: string;
  rea: string;
}

// ─── JSON-LD helpers ─────────────────────────────────────────────────────────

/** Opaque type for a valid JSON-LD object — ensures we only pass real schemas */
export type JsonLdObject = Record<string, unknown>;

// ─── Component variants ───────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type SectionVariant = "light" | "dark" | "brand" | "muted";
