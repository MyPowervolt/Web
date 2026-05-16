import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";

/**
 * Robots.txt generator.
 * Next.js serves this as /robots.txt automatically.
 *
 * Rules:
 * - Allow all public pages
 * - Disallow private/utility paths
 * - Always include Sitemap directive (critical for indexing)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          // Legal pages are indexed but we keep search parameters out
          "/*?*",
        ],
      },
      // Allow Googlebot specifically to access everything public
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
    host: SEO_CONFIG.siteUrl,
  };
}
