import type { Metadata } from "next";
import { CheckCircle, MapPin, Phone, Zap } from "lucide-react";
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

const PAGE_URL = `${SEO_CONFIG.siteUrl}/domotica-bologna`;

export const metadata: Metadata = buildMetadata({
  title: "Domotica Bologna | Automazione Casa e Industria",
  description:
    "Sistemi domotici a Bologna per il controllo intelligente di luci, climatizzazione, tapparelle e sicurezza. PowerVolt installa domotica residenziale e industriale con certificazione CEI.",
  canonical: PAGE_URL,
  keywords: [
    "domotica Bologna",
    "automazione casa Bologna",
    "impianto domotico Bologna",
    "smart home Bologna",
    "automazione industriale Bologna",
    "controllo luci domotica",
    "tapparelle motorizzate Bologna",
    "impianti domotici CEI Bologna",
  ],
});

const FAQ = [
  {
    question: "Installi sistemi domotici a Bologna?",
    answer:
      "Sì. Progetto e installo sistemi domotici a Bologna e nell'area metropolitana bolognese per abitazioni, ville, uffici e ambienti industriali. Mi occupo di luci, climatizzazione, tapparelle, irrigazione e sicurezza.",
  },
  {
    question: "La domotica si può installare anche in una casa già costruita?",
    answer:
      "Sì. I sistemi domotici sono compatibili con impianti esistenti, sia attraverso soluzioni wireless che con cablaggio dedicato. Effettuo un sopralluogo per valutare la soluzione più adatta alla tua situazione.",
  },
  {
    question: "Quali brand o protocolli domotici utilizzi?",
    answer:
      "Lavoro con i principali standard del settore. La scelta del sistema viene fatta in base alle esigenze specifiche: ampiezza dell'impianto, budget, necessità di integrazione con sistemi esistenti e preferenze del cliente.",
  },
  {
    question: "La domotica aumenta il valore dell'immobile?",
    answer:
      "Sì. Un impianto domotico certificato, con relativa documentazione di conformità, è considerato un plus in fase di compravendita e locazione di immobili residenziali e commerciali.",
  },
  {
    question: "Quanto tempo richiede l'installazione di un impianto domotico?",
    answer:
      "I tempi dipendono dall'ampiezza del progetto. Un impianto residenziale base richiede in genere 1-3 giorni. Per installazioni più complesse, i tempi vengono definiti in sede di sopralluogo.",
  },
];

const APPLICATIONS = [
  "Controllo intelligente di luci e scenari luminosi",
  "Gestione tapparelle e tende motorizzate",
  "Regolazione termica e climatizzazione",
  "Irrigazione automatica del giardino",
  "Videosorveglianza e controllo accessi",
  "Rilevazione intrusioni e allarmi",
  "Integrazione con assistenti vocali",
  "Monitoraggio consumi energetici",
];

export default function DomoticaBolognaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Domotica Bologna", href: "/domotica-bologna" },
  ]);
  const faqSchema = buildFaqSchema(FAQ);
  const serviceSchema = buildLocalServiceSchema({
    name: "Domotica a Bologna — Sistemi di Automazione Residenziale e Industriale",
    description:
      "Progettazione e installazione di sistemi domotici a Bologna per il controllo intelligente di luci, climatizzazione, tapparelle, sicurezza e consumi energetici. Conformi alle normative CEI.",
    url: PAGE_URL,
    city: "Bologna",
  });

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Domotica Bologna"
        ctaPrimaryText="Richiedi un Sopralluogo"
        ctaPrimaryHref="/contatti#sopralluogo"
        headline={
          <>
            Domotica a Bologna —<br />
            Automazione per Casa e Azienda
          </>
        }
        headingLevel="h1"
        subheadline="Sistemi domotici progettati su misura per il controllo intelligente della tua abitazione o azienda. Luci, climatizzazione, tapparelle, sicurezza — tutto sotto controllo."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb
            items={[{ name: "Domotica Bologna", href: "/domotica-bologna" }]}
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
            Domotica Professionale a Bologna
          </h2>
          <div className="prose prose-neutral max-w-none text-lg leading-relaxed text-neutral-600">
            <p>
              La <strong>domotica</strong> permette di controllare e automatizzare le funzioni
              principali di un&apos;abitazione o di un ambiente industriale: luci, tapparelle,
              climatizzazione, irrigazione, sicurezza. PowerVolt progetta e installa sistemi
              domotici a <strong>Bologna</strong> e nell&apos;area metropolitana bolognese, sia in
              edifici di nuova costruzione che in ristrutturazioni.
            </p>
            <p className="mt-4">
              Ogni progetto domotico viene studiato in base alle esigenze specifiche del cliente:
              effettuo un sopralluogo, definisco la soluzione tecnica e mi occupo direttamente
              dell&apos;installazione, del collaudo e della configurazione. Gli impianti sono realizzati
              nel rispetto delle <strong>normative CEI</strong> con rilascio della dichiarazione di
              conformità.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <MapPin aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">Bologna e Provincia</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <Zap aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">Sistemi su Misura</span>
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

      {/* Applications */}
      <Section aria-labelledby="applications-heading" variant="muted">
        <Container>
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="applications-heading"
          >
            Cosa Puoi Automatizzare
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {APPLICATIONS.map((item) => (
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
              Vuoi approfondire il servizio domotica?{" "}
              <Link
                href="/servizi/domotica"
                className="font-semibold text-brand-primary underline underline-offset-4 hover:no-underline"
              >
                Scopri tutti i dettagli sul servizio domotica e automazioni →
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
            Domande Frequenti — Domotica Bologna
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
