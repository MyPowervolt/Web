import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SEO_CONFIG, SITEMAP_CONFIG } from "@/lib/seo-config";

/**
 * Dynamic sitemap generator.
 * Next.js serves this as /sitemap.xml automatically.
 *
 * Priority levels (from REDESIGN_PLAN.md §3):
 * - Homepage: 1.0
 * - Contatti: 0.9 (direct conversion page)
 * - Service pages: 0.9
 * - Services hub: 0.8
 * - Chi Siamo: 0.8
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.homepage.changeFrequency,
      priority: SITEMAP_CONFIG.homepage.priority,
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.chiSiamo.changeFrequency,
      priority: SITEMAP_CONFIG.chiSiamo.priority,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.servicesHub.changeFrequency,
      priority: SITEMAP_CONFIG.servicesHub.priority,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: SITEMAP_CONFIG.contatti.changeFrequency,
      priority: SITEMAP_CONFIG.contatti.priority,
    },
  ];

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: SITEMAP_CONFIG.servicePage.changeFrequency,
    priority: SITEMAP_CONFIG.servicePage.priority,
  }));

  // Local landing pages
  const localPages: MetadataRoute.Sitemap = [
    "/elettricista-bologna",
    "/impianti-elettrici-zola-predosa",
    "/domotica-bologna",
    "/quadri-elettrici-industriali-bologna",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: SITEMAP_CONFIG.localPage.changeFrequency,
    priority: SITEMAP_CONFIG.localPage.priority,
  }));

  return [...staticPages, ...servicePages, ...localPages];
}
