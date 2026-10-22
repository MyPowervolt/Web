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

const PAGE_URL = `${SEO_CONFIG.siteUrl}/elettricista-bologna`;

export const metadata: Metadata = buildMetadata({
  title: "Elettricista a Bologna | Impianti Elettrici Civili e Industriali",
  description:
    "Elettricista a Bologna per impianti elettrici civili e industriali. PowerVolt realizza impianti conformi CEI con dichiarazione di conformità. Contatta il titolare per un sopralluogo.",
  canonical: PAGE_URL,
  keywords: [
    "elettricista Bologna",
    "impianti elettrici Bologna",
    "elettricista civile Bologna",
    "impianto elettrico casa Bologna",
    "messa a norma impianto Bologna",
    "dichiarazione conformità Bologna",
    "DM 37/08 Bologna",
    "impianti industriali Bologna",
  ],
});

const FAQ = [
  {
    question: "Sei un elettricista che lavora a Bologna?",
    answer:
      "Sì. Opero a Bologna e nell'intera area metropolitana bolognese. Sono disponibile per sopralluogi, preventivi e lavori su impianti elettrici civili e industriali, sia per privati che per aziende.",
  },
  {
    question: "Quanto costa un impianto elettrico a Bologna?",
    answer:
      "Il costo dipende dalla tipologia e dimensione dell'impianto. Ogni intervento richiede un sopralluogo per una valutazione precisa. Contattami per fissare un appuntamento senza impegno.",
  },
  {
    question: "Lavori su immobili in affitto o in ristrutturazione a Bologna?",
    answer:
      "Sì. Mi occupo di messa a norma, rifacimento e ampliamento di impianti elettrici in appartamenti, villette, condomini e locali commerciali a Bologna e dintorni.",
  },
  {
    question: "Rilasci la dichiarazione di conformità a Bologna?",
    answer:
      "Sì. Al termine di ogni intervento rilascio la dichiarazione di conformità (DiCo) prevista dal DM 37/08. Il documento è obbligatorio e necessario per locazioni, vendite e pratiche edilizie.",
  },
  {
    question: "Operi anche fuori dal comune di Bologna?",
    answer:
      "Sì. Intervengo in tutta l'area metropolitana bolognese: Zola Predosa, Casalecchio di Reno, Sasso Marconi, Valsamoggia, Pianoro, San Lazzaro di Savena e comuni limitrofi.",
  },
];

const SERVICES_LIST = [
  "Nuovi impianti elettrici civili per abitazioni e uffici",
  "Messa a norma e rifacimento impianti esistenti",
  "Impianti elettrici industriali per capannoni e aziende",
  "Quadri elettrici di distribuzione e protezione",
  "Domotica e automazione residenziale",
  "Reti dati e impianti tecnologici",
  "Dichiarazione di conformità DM 37/08",
];

export default function ElettristaBolognaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Elettricista Bologna", href: "/elettricista-bologna" },
  ]);
  const faqSchema = buildFaqSchema(FAQ);
  const serviceSchema = buildLocalServiceSchema({
    name: "Elettricista a Bologna — Impianti Elettrici Civili e Industriali",
    description:
      "Realizzazione di impianti elettrici civili e industriali a Bologna e area metropolitana. Conformi alle normative CEI, con rilascio della dichiarazione di conformità DM 37/08.",
    url: PAGE_URL,
    city: "Bologna",
  });

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Elettricista Bologna"
        ctaPrimaryText="Richiedi un Sopralluogo"
        ctaPrimaryHref="/contatti#sopralluogo"
        headline={
          <>
            Elettricista a Bologna —<br />
            Impianti Civili e Industriali
          </>
        }
        headingLevel="h1"
        subheadline="Impianti elettrici per abitazioni, uffici e aziende nel territorio bolognese. Contatto diretto con il titolare, sopralluogo e dichiarazione di conformità inclusi."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb
            items={[{ name: "Elettricista Bologna", href: "/elettricista-bologna" }]}
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
            Impianti Elettrici a Bologna — Professionali e Certificati
          </h2>
          <div className="prose prose-neutral max-w-none text-lg leading-relaxed text-neutral-600">
            <p>
              PowerVolt è un&apos;attività specializzata nella realizzazione di impianti elettrici civili
              e industriali, operativa a <strong>Bologna</strong> e nell&apos;intera area metropolitana
              bolognese. Ogni intervento viene eseguito direttamente dal titolare, con attenzione
              alla sicurezza, alla qualità e al rispetto delle normative CEI vigenti.
            </p>
            <p className="mt-4">
              Che si tratti di un nuovo impianto in un appartamento, di una messa a norma in un
              locale commerciale o di un impianto industriale in un capannone, mi occupo
              personalmente di ogni fase: sopralluogo, progettazione, esecuzione e collaudo finale
              con rilascio della <strong>dichiarazione di conformità DM 37/08</strong>.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2">
              <MapPin aria-hidden className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-sm font-semibold text-neutral-700">Bologna e Provincia</span>
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

      {/* What's included */}
      <Section aria-labelledby="services-heading" variant="muted">
        <Container>
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="services-heading"
          >
            Cosa Faccio a Bologna
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
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
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="faq-heading" variant="light">
        <Container size="narrow">
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="faq-heading"
          >
            Domande Frequenti — Elettricista Bologna
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
        heading="Servizi Elettrici a Bologna"
        subheading="Tutti gli interventi che eseguo nell'area bolognese."
        variant="related"
      />

      <Contact variant="compact" />
    </>
  );
}
