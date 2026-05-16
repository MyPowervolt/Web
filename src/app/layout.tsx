import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/structured-data";
import { SEO_CONFIG } from "@/lib/seo-config";
import "@/styles/globals.css";

// ─── Root metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  generator: "Next.js",
  applicationName: "PowerVolt",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "PowerVolt" }],
  creator: "PowerVolt",
  publisher: "PowerVolt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "PowerVolt — Impianti Elettrici Civili e Industriali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultOgImage],
  },
  verification: {
    google: "OiX7OOUFalehZ0HV8qP13ZT_TRj9dqC25smPkxwcWBY",
  },
  robots: SEO_CONFIG.defaultRobots,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();
  const websiteSchema = buildWebSiteSchema();

  return (
    <html lang="it" className={inter.variable}>
      <head>
        {/* Global JSON-LD: Organization + WebSite — injected on every page */}
        <JsonLd schema={[orgSchema, websiteSchema]} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {/* Skip navigation — accessibility */}
        <a className="skip-nav" href="#main-content">
          Salta al contenuto principale
        </a>

        {/* Site header — sticky */}
        <Header />

        {/* Main content */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Site footer */}
        <Footer />

        {/* WhatsApp floating button — renders on all pages */}
        {/* ⚠️ Enable once phone number is confirmed in SITE_CONFIG */}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
