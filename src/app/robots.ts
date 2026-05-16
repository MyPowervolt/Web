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
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
  };
}
