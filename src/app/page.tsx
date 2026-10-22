import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
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
      "Sì. PowerVolt progetta e installa sistemi domotici per il controllo intelligente di luci, climatizzazione e tapparelle, sia in nuove costruzioni che in ristrutturazioni.",
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
        badge="Zola Predosa · Bologna e dintorni"
        ctaPrimaryHref="/contatti#sopralluogo"
        ctaPrimaryText="Richiedi un sopralluogo"
        ctaSecondaryHref="/servizi"
        ctaSecondaryText="Scopri i Servizi"
        founderImageSrc="/img/founder-profile.png"
        headline={
          <>
            Il tuo elettricista a
            <br />
            <span className="text-brand-primary">Zola Predosa e Bologna.</span>
          </>
        }
        layout="founder"
        subheadline="Dalla tua casa alla tua azienda: impianti elettrici, domotica e automazioni realizzati con cura. Un unico referente, dal primo sopralluogo alla consegna."
      />

      {/* [2] Services */}
      <Services variant="full" />

      <Section aria-labelledby="local-heading" variant="dark">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
                <MapPin aria-hidden="true" className="h-4 w-4" /> Vicino a te
              </p>
              <h2 id="local-heading" className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Un professionista del territorio. Un contatto diretto.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-neutral-300">
                PowerVolt ha sede a Zola Predosa e lavora a Bologna e nei comuni vicini,
                tra cui Casalecchio di Reno, Sasso Marconi e Valsamoggia.
                Raccontami il tuo progetto: concordiamo un sopralluogo e valutiamo
                insieme la soluzione per il tuo impianto.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/impianti-elettrici-zola-predosa", title: "Impianti a Zola Predosa", text: "Abitazioni, ristrutturazioni e attività locali." },
                { href: "/elettricista-bologna", title: "Elettricista a Bologna", text: "Impianti elettrici per privati e aziende." },
                { href: "/domotica-bologna", title: "Domotica a Bologna", text: "Luci, tapparelle e comfort da controllare insieme." },
                { href: "/quadri-elettrici-industriali-bologna", title: "Quadri elettrici industriali", text: "Distribuzione e automazione per la tua azienda." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/20 bg-white/5 p-5 transition-colors hover:border-brand-primary hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
                  <ArrowUpRight aria-hidden="true" className="mb-4 h-5 w-5 text-brand-primary" />
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

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
