import type { Metadata } from "next";
import { CheckCircle, Factory, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildBreadcrumbSchema, buildFaqSchema, buildLocalServiceSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";
import Link from "next/link";

const PAGE_URL = `${SEO_CONFIG.siteUrl}/quadri-elettrici-industriali-bologna`;

export const metadata: Metadata = buildMetadata({
  title: "Quadri Elettrici Industriali Bologna | Progettazione e Installazione",
  description:
    "Progettazione e installazione di quadri elettrici industriali a Bologna. PowerVolt realizza quadri di potenza, distribuzione e automazione per aziende e capannoni. Conformi alle normative CEI.",
  canonical: PAGE_URL,
  keywords: [
    "quadri elettrici industriali Bologna",
    "quadro elettrico industriale",
    "quadro di distribuzione Bologna",
    "quadro automazione industriale Bologna",
    "installazione quadro elettrico capannone",
    "quadri BT MT Bologna",
    "impianti elettrici industriali Bologna",
    "normative CEI quadri elettrici",
  ],
});

const FAQ = [
  {
    question: "Realizzi quadri elettrici industriali a Bologna?",
    answer:
      "Sì. Mi occupo della progettazione, costruzione e installazione di quadri elettrici industriali a Bologna e nell'area metropolitana bolognese, per capannoni, stabilimenti produttivi, magazzini e ambienti commerciali.",
  },
  {
    question: "Quali tipologie di quadri elettrici realizzi?",
    answer:
      "Realizzo quadri di distribuzione BT, quadri di potenza, quadri di automazione e controllo, quadri per motori e azionamenti, quadri per impianti fotovoltaici industriali. Ogni quadro viene progettato sulle specifiche esigenze dell'impianto.",
  },
  {
    question: "I quadri elettrici rispettano le normative CEI?",
    answer:
      "Sì. Tutti i quadri elettrici vengono realizzati nel rispetto delle normative CEI vigenti (CEI EN 61439 per i quadri di bassa tensione) e consegnati con la documentazione tecnica completa e la dichiarazione di conformità.",
  },
  {
    question: "Esegui anche la manutenzione di quadri elettrici industriali esistenti?",
    answer:
      "Sì. Effettuo verifiche, adeguamenti e manutenzioni su quadri elettrici esistenti: sostituzione componenti obsoleti, aggiornamento protezioni differenziali, integrazione di nuovi circuiti e verifica della conformità alle normative vigenti.",
  },
  {
    question: "Quanto tempo richiede la realizzazione di un quadro industriale?",
    answer:
      "I tempi dipendono dalla complessità del quadro e dall'impianto. Dopo il sopralluogo e la definizione del progetto, fornisco una stima precisa dei tempi di realizzazione e installazione.",
  },
];

const SCOPE_ITEMS = [
  "Quadri di distribuzione BT per ambienti industriali",
  "Quadri di potenza per carichi elevati",
  "Quadri di automazione e controllo processo",
  "Quadri per motori e azionamenti (soft starter, inverter)",
  "Quadri per impianti fotovoltaici industriali",
  "Adeguamento e messa a norma quadri esistenti",
  "Documentazione tecnica e schemi unifilari",
  "Dichiarazione di conformità CEI EN 61439",
];

export default function QuadriElettriciIndustrialiBolognaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    {
      name: "Quadri Elettrici Industriali Bologna",
      href: "/quadri-elettrici-industriali-bologna",
    },
  ]);
  const faqSchema = buildFaqSchema(FAQ);
  const serviceSchema = buildLocalServiceSchema({
    name: "Quadri Elettrici Industriali a Bologna — Progettazione e Installazione PowerVolt",
    description:
      "Progettazione, costruzione e installazione di quadri elettrici industriali a Bologna: quadri di distribuzione BT, quadri di potenza, quadri di automazione. Conformi alle normative CEI EN 61439.",
    url: PAGE_URL,
    city: "Bologna",
  });

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Quadri Industriali Bologna"
        ctaPrimaryText="Richiedi un Sopralluogo"
        ctaPrimaryHref="/contatti#sopralluogo"
        headline={
          <>
            Quadri Elettrici Industriali<br />
            a Bologna
          </>
        }
        headingLevel="h1"
        subheadline="Progettazione e installazione di quadri elettrici industriali per capannoni, stabilimenti e aziende. Conformi alle normative CEI EN 61439 con documentazione tecnica completa."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb
            items={[
              {
                name: "Quadri Elettrici Industriali Bologna",
                href: "/quadri-elettrici-industriali-bologna",
              },
            ]}
          />
        </Container>
      </Section>

      {/* Intro */}
      <Section aria-labelledby="intro-heading" variant="light">
        <Container size="narrow">
          <h2
            className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="intro-heading"
          >
            Quadri Elettrici Industriali — Progettazione su Misura
          </h2>
          <div className="prose prose-neutral max-w-none text-lg leading-relaxed text-neutral-600">
            <p>
              Il quadro elettrico è il cuore di qualsiasi impianto industriale: una progettazione
              errata o componenti inadeguati possono compromettere la sicurezza e la continuità
              operativa di un&apos;intera azienda. PowerVolt progetta e installa{" "}
              <strong>quadri elettrici industriali a Bologna</strong> e nell&apos;area metropolitana,
              con un approccio che parte sempre dall&apos;analisi delle reali esigenze dell&apos;impianto.
            </p>
            <p className="mt-4">
              Mi occupo personalmente di ogni fase: dalla raccolta dei dati di progetto alla
              costruzione del quadro, dall&apos;installazione al collaudo, fino alla consegna della{" "}
              <strong>documentazione tecnica completa</strong> conforme alle normative{" "}
              <strong>CEI EN 61439</strong>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <Factory aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">
                Impianti Industriali
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <MapPin aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">Bologna e Provincia</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <Phone aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm font-semibold text-neutral-700 hover:text-brand-primary transition-colors"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Scope */}
      <Section aria-labelledby="scope-heading" variant="muted">
        <Container>
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="scope-heading"
          >
            Cosa Include il Servizio
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {SCOPE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
                />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-brand-primary/20 bg-brand-primary/5 px-6 py-5">
            <p className="text-sm font-medium text-neutral-700">
              Vuoi approfondire?{" "}
              <Link
                href="/servizi/quadri-elettrici"
                className="font-semibold text-brand-primary underline underline-offset-4 hover:no-underline"
              >
                Scopri tutti i dettagli sul servizio quadri elettrici →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="faq-heading" variant="light">
        <Container size="narrow">
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="faq-heading"
          >
            Domande Frequenti — Quadri Elettrici Industriali Bologna
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border border-neutral-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-4 font-semibold text-neutral-900 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="ml-auto shrink-0 text-brand-primary transition-transform group-open:rotate-180"
                  >
                    &#8964;
                  </span>
                </summary>
                <div className="border-t border-neutral-100 px-6 py-4 text-neutral-600">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Contact variant="compact" />
    </>
  );
}
