import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Commitment } from "@/components/home/Commitment";
import { Services } from "@/components/home/Services";
import { Method } from "@/components/home/Method";
import { About } from "@/components/home/About";
import { QuoteForm } from "@/components/home/QuoteForm";
import { Faq, FAQ_ITEMS } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeFooter } from "@/components/home/Footer";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  canonical: SEO_CONFIG.siteUrl,
  keywords: [
    "impianti elettrici",
    "elettricista",
    "impianti civili",
    "impianti industriali",
    "domotica",
    "automazioni",
    "quadri elettrici",
    "reti dati",
    "normative CEI",
    "elettricista Bologna",
    "impianti elettrici Bologna",
    "elettricista Zola Predosa",
    "impianti elettrici Zola Predosa",
    "pronto intervento elettricista Bologna",
  ],
});

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const faqSchema = buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <JsonLd schema={faqSchema} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustBar />
        <Commitment />
        <Services />
        <Method />
        <About />
        <QuoteForm />
        <Faq />
        <FinalCta />
      </main>
      <HomeFooter />
    </>
  );
}
