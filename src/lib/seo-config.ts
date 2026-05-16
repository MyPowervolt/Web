/**
 * Site-wide SEO constants for PowerVolt.
 * Used by metadata.ts, structured-data.ts and all generateMetadata() calls.
 */

export const SEO_CONFIG = {
  siteName: "PowerVolt",
  siteUrl: "https://powervolt.it",
  defaultTitle: "PowerVolt | Impianti Elettrici Civili e Industriali",
  titleTemplate: "%s | PowerVolt",
  defaultDescription:
    "PowerVolt realizza impianti elettrici civili e industriali, automazioni, domotica, quadri elettrici e reti dati, nel rispetto delle normative CEI.",
  defaultOgImage: "https://powervolt.it/og-default.jpg",
  locale: "it_IT",
  language: "it",
  twitterHandle: "",

  /**
   * Robots directives for production vs development.
   * In production: index all public pages.
   * Private/legal pages are noindex at the page level.
   */
  defaultRobots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
  },
} as const;

/**
 * Priority and changefreq values for sitemap.ts.
 * Follows SEO priority from REDESIGN_PLAN.md §3.
 */
export const SITEMAP_CONFIG = {
  homepage: { priority: 1.0, changeFrequency: "weekly" as const },
  servicePage: { priority: 0.9, changeFrequency: "monthly" as const },
  servicesHub: { priority: 0.8, changeFrequency: "monthly" as const },
  chiSiamo: { priority: 0.8, changeFrequency: "monthly" as const },
  contatti: { priority: 0.9, changeFrequency: "monthly" as const },
  localPage: { priority: 0.85, changeFrequency: "monthly" as const },
};
