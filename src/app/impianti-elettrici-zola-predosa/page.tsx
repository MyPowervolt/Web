import type { Metadata } from "next";
import { CheckCircle, MapPin, Phone, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildBreadcrumbSchema, buildFaqSchema, buildLocalServiceSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";

const PAGE_URL = `${SEO_CONFIG.siteUrl}/impianti-elettrici-zola-predosa`;

export const metadata: Metadata = buildMetadata({
  title: "Impianti Elettrici Zola Predosa | Elettricista Locale",
  description:
    "PowerVolt realizza impianti elettrici a Zola Predosa e dintorni: Casalecchio di Reno, Sasso Marconi, Valsamoggia. Lavori conformi CEI con dichiarazione di conformità. Elettricista di zona.",
  canonical: PAGE_URL,
  keywords: [
    "impianti elettrici Zola Predosa",
    "elettricista Zola Predosa",
    "impianto elettrico Casalecchio",
    "elettricista Sasso Marconi",
    "impianti elettrici Valsamoggia",
    "messa a norma impianto Zola Predosa",
    "dichiarazione conformità Zola Predosa",
    "elettricista provincia Bologna",
  ],
});

const FAQ = [
  {
    question: "PowerVolt opera a Zola Predosa?",
    answer:
      "Sì. PowerVolt ha sede a Zola Predosa (BO) ed è il punto di riferimento locale per impianti elettrici civili e industriali. Sono disponibile per sopralluogi e interventi in tutto il territorio comunale e nei comuni limitrofi.",
  },
  {
    question: "Quali comuni copri oltre a Zola Predosa?",
    answer:
      "Opero regolarmente a Casalecchio di Reno, Sasso Marconi, Valsamoggia, Monte San Pietro, Crespellano e nei comuni del territorio metropolitano bolognese. Per distanze maggiori, contattami per valutare la disponibilità.",
  },
  {
    question: "Fai impianti per nuove costruzioni a Zola Predosa?",
    answer:
      "Sì. Mi occupo di impianti elettrici per nuove costruzioni, ristrutturazioni e ampliamenti, sia per privati che per imprese edili. Collaboro dalla fase progettuale fino al collaudo e alla dichiarazione di conformità.",
  },
  {
    question: "Intervieni anche in caso di guasto urgente?",
    answer:
      "Sì. In caso di guasto o emergenza, contattami direttamente per telefono o WhatsApp per valutare la disponibilità di intervento rapido.",
  },
  {
    question: "Rilasci la dichiarazione di conformità per impianti a Zola Predosa?",
    answer:
      "Sì. Ogni impianto realizzato o riparato viene chiuso con il rilascio della dichiarazione di conformità (DiCo) ai sensi del DM 37/08, necessaria per compravendite, locazioni e pratiche catastali.",
  },
];

const COVERAGE = [
  "Zola Predosa",
  "Casalecchio di Reno",
  "Sasso Marconi",
  "Valsamoggia",
  "Monte San Pietro",
  "Crespellano",
  "Lavino di Mezzo",
  "Bologna (area ovest)",
];

const SERVICES_LIST = [
  "Impianti elettrici civili per abitazioni e villette",
  "Impianti elettrici per condomini e palazzine",
  "Messa a norma impianti esistenti",
  "Rifacimento completo quadro elettrico",
  "Impianti per locali commerciali e artigianali",
  "Domotica e automazioni residenziali",
  "Impianti fotovoltaici e colonnine EV",
  "Dichiarazione di conformità DM 37/08",
];

export default function ImpiantiElettricZolaPredosaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Impianti Elettrici Zola Predosa", href: "/impianti-elettrici-zola-predosa" },
  ]);
  const faqSchema = buildFaqSchema(FAQ);
  const serviceSchema = buildLocalServiceSchema({
    name: "Impianti Elettrici a Zola Predosa — Elettricista Locale PowerVolt",
    description:
      "Realizzazione di impianti elettrici civili e industriali a Zola Predosa, Casalecchio di Reno, Sasso Marconi e Valsamoggia. Conformi alle normative CEI, dichiarazione di conformità DM 37/08.",
    url: PAGE_URL,
    city: "Zola Predosa",
  });

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Elettricista di Zona"
        ctaPrimaryText="Richiedi un Sopralluogo"
        ctaPrimaryHref="/contatti#sopralluogo"
        headline={
          <>
            Impianti Elettrici a<br />
            Zola Predosa e Dintorni
          </>
        }
        headingLevel="h1"
        subheadline="PowerVolt ha sede a Zola Predosa. Realizzo impianti elettrici per privati e aziende in tutto il territorio: Casalecchio, Sasso Marconi, Valsamoggia e comuni vicini."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb
            items={[
              {
                name: "Impianti Elettrici Zola Predosa",
                href: "/impianti-elettrici-zola-predosa",
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
            Il Tuo Elettricista di Zona a Zola Predosa
          </h2>
          <div className="prose prose-neutral max-w-none text-lg leading-relaxed text-neutral-600">
            <p>
              PowerVolt è un&apos;attività professionale con sede a <strong>Zola Predosa (BO)</strong>,
              specializzata nella realizzazione di impianti elettrici civili e industriali.
              Conoscere il territorio significa tempi di intervento rapidi, sopralluogi senza perdite
              di tempo e un rapporto diretto con il titolare senza intermediari.
            </p>
            <p className="mt-4">
              Realizzo impianti nuovi, messe a norma e rifacimenti rispettando le{" "}
              <strong>normative CEI</strong> vigenti. Al termine di ogni lavoro rilascio la{" "}
              <strong>dichiarazione di conformità DM 37/08</strong>, documento indispensabile per
              qualsiasi pratica legata all&apos;immobile.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <MapPin aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">
                Sede: Zola Predosa (BO)
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <ShieldCheck aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">Conformità CEI</span>
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

      {/* Services */}
      <Section aria-labelledby="services-heading" variant="muted">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl"
                id="services-heading"
              >
                Interventi che Eseguo nell&apos;Area
              </h2>
              <ul className="space-y-3" role="list">
                {SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      aria-hidden
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
                    />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-extrabold text-neutral-900">
                Comuni Serviti
              </h3>
              <ul className="space-y-2" role="list">
                {COVERAGE.map((city) => (
                  <li key={city} className="flex items-center gap-3">
                    <MapPin aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
                    <span className="font-medium text-neutral-700">{city}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-neutral-500">
                Per altri comuni dell&apos;area metropolitana bolognese, contattami per verificare la
                disponibilità.
              </p>
            </div>
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
            Domande Frequenti — Zola Predosa e Dintorni
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

      <Services
        heading="Tutti i Servizi PowerVolt"
        subheading="Impianti elettrici, domotica, automazioni e molto altro per la tua zona."
        variant="related"
      />

      <Contact variant="compact" />
    </>
  );
}
