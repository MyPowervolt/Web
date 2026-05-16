import type { JsonLdObject, Service } from "@/types";
import { SITE_CONFIG } from "@/data/site-config";
import { SERVICES } from "@/data/services";
import { SEO_CONFIG } from "./seo-config";

// ─── Organization + LocalBusiness + ElectricalContractor ─────────────────────

/**
 * Core organisation schema. Injected on every page via root layout.
 * Uses @type array for maximum richness in search results.
 */
export function buildOrganizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ElectricalContractor"],
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.companyName,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SEO_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_CONFIG.siteUrl}/LogoPageS.svg`,
      width: 400,
      height: 122,
    },
    image: `${SEO_CONFIG.siteUrl}/og-default.jpg`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    openingHoursSpecification: SITE_CONFIG.businessHours
      .filter((h) => /^\d{2}:\d{2}–\d{2}:\d{2}$/.test(h.hours))
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.hours.split("–")[0]?.trim() ?? "",
        closes: h.hours.split("–")[1]?.trim() ?? "",
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi di Impiantistica Elettrica",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.shortDescription,
            url: `${SEO_CONFIG.siteUrl}${service.path}`,
          },
        },
      })),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.491,
      longitude: 11.213,
    },
    areaServed: [
      { "@type": "City", name: "Bologna" },
      { "@type": "City", name: "Zola Predosa" },
      { "@type": "City", name: "Casalecchio di Reno" },
      { "@type": "City", name: "Sasso Marconi" },
      { "@type": "City", name: "Valsamoggia" },
      { "@type": "AdministrativeArea", name: "Città Metropolitana di Bologna" },
    ],
    // Social media profiles (populated from SITE_CONFIG when confirmed)
    sameAs: SITE_CONFIG.socialLinks.map((link) => link.url),
  };
}

// ─── WebSite ─────────────────────────────────────────────────────────────────

/** WebSite schema with SearchAction for Google Sitelinks Searchbox. Homepage only. */
export function buildWebSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}/#website`,
    name: SITE_CONFIG.companyName,
    url: SEO_CONFIG.siteUrl,
    description: SITE_CONFIG.description,
    inLanguage: SEO_CONFIG.language,
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_CONFIG.siteUrl}/ricerca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── Service page ─────────────────────────────────────────────────────────────

/** Service schema for individual service pages. */
export function buildServiceSchema(service: Service): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SEO_CONFIG.siteUrl}${service.path}#service`,
    name: service.name,
    description: service.fullDescription,
    url: `${SEO_CONFIG.siteUrl}${service.path}`,
    provider: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Italia",
    },
    serviceType: service.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
      },
    },
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/** BreadcrumbList schema for any page below the homepage. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.href}`,
    })),
  };
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage schema for FAQ sections on homepage and service pages. */
export function buildFaqSchema(faqs: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Local Service page ──────────────────────────────────────────────────────

/** Service schema for local landing pages (city-specific). */
export function buildLocalServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  city: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: opts.city,
    },
    serviceType: opts.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
      },
    },
  };
}

// ─── WebPage ─────────────────────────────────────────────────────────────────

/** Generic WebPage schema. Used on informational pages like Chi Siamo, Contatti. */
export function buildWebPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: SEO_CONFIG.language,
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
    },
    about: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
  };
}
