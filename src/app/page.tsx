import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

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
  ],
});

// ─── Homepage FAQ data ────────────────────────────────────────────────────────

const HOMEPAGE_FAQ = [
  {
    question: "Cosa fa PowerVolt?",
    answer:
      "PowerVolt è un'attività specializzata nella realizzazione di impianti elettrici civili e industriali. I servizi comprendono: impianti elettrici civili, impianti elettrici industriali, automazioni, domotica, quadri elettrici e reti dati. Tutti gli impianti sono realizzati nel rispetto delle normative CEI.",
  },
  {
    question: "PowerVolt rilascia la dichiarazione di conformità?",
    answer:
      "Sì. Al termine di ogni intervento viene rilasciata la dichiarazione di conformità (DiCo) prevista dal DM 37/08, che certifica che l'impianto è stato realizzato in conformità alle normative vigenti.",
  },
  {
    question: "Come si richiede un sopralluogo a PowerVolt?",
    answer:
      "Puoi contattarmi direttamente per telefono, email o WhatsApp. Ogni lavoro richiede una valutazione diretta sul posto: fissiamo un sopralluogo per analizzare le tue esigenze prima di proporre qualsiasi soluzione.",
  },
  {
    question: "PowerVolt lavora per privati e aziende?",
    answer:
      "Sì. Realizzo impianti sia per privati (abitazioni, appartamenti, ville) che per aziende e ambienti industriali (capannoni, stabilimenti, uffici).",
  },
  {
    question: "Quali normative vengono rispettate nella realizzazione degli impianti?",
    answer:
      "Tutti gli impianti PowerVolt sono realizzati nel pieno rispetto delle normative CEI (Comitato Elettrotecnico Italiano) e della normativa di riferimento per ogni tipo di impianto, incluso il DM 37/08 per gli impianti civili.",
  },
  {
    question: "Installate anche sistemi domotici?",
    answer:
      "Sì. PowerVolt progetta e installa sistemi domotici per il controllo intelligente di luci, climatizzazione, tapparelle, irrigazione e sicurezza, sia in nuove costruzioni che in ristrutturazioni.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const faqSchema = buildFaqSchema(HOMEPAGE_FAQ);

  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* [1] Hero — founder identity layout */}
      <Hero
        badge="Impianti Elettrici Professionali"
        ctaPrimaryHref="/chi-siamo"
        ctaPrimaryText="Scopri chi sono"
        ctaSecondaryHref="/servizi"
        ctaSecondaryText="Scopri i Servizi"
        founderImageSrc="/img/founder-profile.png"
        headline={
          <>
            Impianti Elettrici
            <br />
            Civili e Industriali
          </>
        }
        layout="founder"
        subheadline="Impianti elettrici realizzati con cura, sicurezza e contatto diretto con il titolare."
      />

      {/* [2] Services */}
      <Services variant="full" />

      {/* [3] Why choose PowerVolt */}
      <WhyUs variant="full" />

      {/* [4] Projects gallery — real photos, lightbox-enabled */}
      <Section aria-labelledby="projects-heading" variant="muted">
        <Container>
          <h2
            className="mb-8 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="projects-heading"
          >
            Alcuni Lavori Realizzati
          </h2>
          <GalleryGrid />
        </Container>
      </Section>

      {/* [5] FAQ */}
      <Section aria-labelledby="faq-heading" variant="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2
              className="mb-10 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
              id="faq-heading"
            >
              Domande Frequenti
            </h2>

            <div className="space-y-4">
              {HOMEPAGE_FAQ.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-neutral-200 bg-white"
                >
                  <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 rounded-xl px-6 py-4 font-semibold text-neutral-900 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-brand-primary transition-transform group-open:rotate-180"
                    >
                      &#8964;
                    </span>
                  </summary>
                  <div className="border-t border-neutral-100 px-6 py-4 text-neutral-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* [6] Final CTA */}
      <Contact variant="full" />
    </>
  );
}
