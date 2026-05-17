import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildServiceSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { getServiceBySlug } from "@/data/services";

const SERVICE_SLUG = "automazioni";

export const metadata: Metadata = buildMetadata({
  title: "Automazioni Civili e Industriali",
  description:
    "Sistemi di automazione a Bologna per cancelli, porte automatiche, PLC e controllo motori. PowerVolt installa automazioni civili e industriali con assistenza tecnica dedicata.",
  canonical: `${SEO_CONFIG.siteUrl}/servizi/automazioni`,
  keywords: [
    "automazioni",
    "automazione industriale",
    "cancelli automatici",
    "porte automatiche",
    "PLC",
    "controllo motori",
    "sistemi SCADA",
  ],
});

export default function AutomazioniPage() {
  const service = getServiceBySlug(SERVICE_SLUG);
  if (!service) return null;

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Servizi", href: "/servizi" },
    { name: service.name, href: service.path },
  ]);
  const faqSchema = buildFaqSchema(service.faq);

  const civilItems = [
    "Automazione cancelli",
    "Automazione basculanti",
    "Automazione tapparelle",
    "Automazione serrande per negozi",
  ];

  const industrialItems = [
    "Quadri di automazione con PLC",
    "Messa a norma di sistemi automatici",
    "Assistenza guasti su macchine a controllo numerico",
    "Assistenza su isole robotizzate",
  ];

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Automazioni"
        ctaPrimaryText="Richiedi Preventivo"
        headline="Automazioni Civili e Industriali — Soluzioni Intelligenti"
        headingLevel="h1"
        subheadline="PowerVolt progetta e installa sistemi di automazione per edifici e impianti industriali."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb
            items={[
              { name: "Servizi", href: "/servizi" },
              { name: service.name, href: service.path },
            ]}
          />
        </Container>
      </Section>

      <Section aria-labelledby="service-desc-heading" variant="light">
        <Container size="narrow">
          <h2
            className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="service-desc-heading"
          >
            Automazione Professionale per Ogni Esigenza
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">{service.fullDescription}</p>
        </Container>
      </Section>

      <Section aria-labelledby="scope-heading" variant="muted">
        <Container>
          <div className="mb-10 text-center">
            <h2
              className="mb-3 text-2xl font-extrabold text-neutral-900 md:text-3xl"
              id="scope-heading"
            >
              Cosa Include il Servizio
            </h2>
            <p className="mx-auto max-w-xl text-neutral-600">
              Soluzioni di automazione per abitazioni, attività commerciali e ambienti industriali.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-lg font-bold text-neutral-900">Automazione Civile</h3>
              <ul className="space-y-3" role="list">
                {civilItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      aria-hidden
                      className="text-brand-primary mt-0.5 h-5 w-5 shrink-0"
                    />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-lg font-bold text-neutral-900">Automazione Industriale</h3>
              <ul className="space-y-3" role="list">
                {industrialItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      aria-hidden
                      className="text-brand-primary mt-0.5 h-5 w-5 shrink-0"
                    />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-service-heading" variant="light">
        <Container size="narrow">
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="faq-service-heading"
          >
            Domande Frequenti
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <details key={index} className="group rounded-xl border border-neutral-200 bg-white">
                <summary className="hover:text-brand-primary focus-visible:ring-brand-primary flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-4 font-semibold text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-brand-primary ml-auto shrink-0 transition-transform group-open:rotate-180"
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
        excludeSlug={SERVICE_SLUG}
        heading="Altri Servizi PowerVolt"
        subheading="Scopri tutti i servizi di impiantistica elettrica disponibili."
        variant="related"
      />
      <Contact serviceName={service.name} variant="compact" />
    </>
  );
}
