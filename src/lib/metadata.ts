import type { Metadata } from "next";
import { SEO_CONFIG } from "./seo-config";

interface MetadataOptions {
  title: string;
  description: string;
  /** Absolute canonical URL. If omitted, siteUrl is used. */
  canonical?: string;
  /** Absolute URL to OG image. Falls back to SEO_CONFIG.defaultOgImage. */
  ogImage?: string;
  /** Set to true for pages like privacy-policy, cookie-policy */
  noIndex?: boolean;
  /** Open Graph type. Defaults to "website". */
  ogType?: "website" | "article";
  /** Extra keywords for the meta keywords tag (optional, low SEO impact) */
  keywords?: string[];
}

/**
 * Centralised metadata builder.
 * Every page calls this function from its generateMetadata() export.
 *
 * Usage:
 *   export const metadata = buildMetadata({
 *     title: "Domotica",
 *     description: "...",
 *     canonical: "https://powervolt.it/servizi/domotica",
 *   });
 */
export function buildMetadata({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  ogType = "website",
  keywords,
}: MetadataOptions): Metadata {
  const pageTitle =
    title === SEO_CONFIG.defaultTitle ? title : `${title} | ${SEO_CONFIG.siteName}`;
  const resolvedCanonical = canonical ?? SEO_CONFIG.siteUrl;
  const resolvedOgImage = ogImage ?? SEO_CONFIG.defaultOgImage;

  return {
    title: { absolute: pageTitle },
    description,
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),

    alternates: {
      canonical: resolvedCanonical,
    },

    openGraph: {
      title: pageTitle,
      description,
      url: resolvedCanonical,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type: ogType,
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SEO_CONFIG.siteName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [resolvedOgImage],
      ...(SEO_CONFIG.twitterHandle ? { site: SEO_CONFIG.twitterHandle } : {}),
    },

    robots: noIndex
      ? { index: false, follow: false }
      : SEO_CONFIG.defaultRobots,
  };
}
