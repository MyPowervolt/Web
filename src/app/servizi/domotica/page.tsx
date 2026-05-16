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

const SERVICE_SLUG = "domotica";

export const metadata: Metadata = buildMetadata({
  title: "Domotica e Smart Home a Bologna",
  description:
    "Installazione sistemi domotici a Bologna e provincia per il controllo intelligente di luci, climatizzazione, sicurezza e risparmio energetico. PowerVolt installa la smart home su misura.",
  canonical: `${SEO_CONFIG.siteUrl}/servizi/domotica`,
  keywords: [
    "domotica",
    "smart home",
    "casa intelligente",
    "domotica Bologna",
    "automazione domestica",
    "controllo luci smartphone",
    "risparmio energetico domotica",
  ],
});

export default function DomoticaPage() {
  const service = getServiceBySlug(SERVICE_SLUG);
  if (!service) return null;

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Servizi", href: "/servizi" },
    { name: service.name, href: service.path },
  ]);
  const faqSchema = buildFaqSchema(service.faq);

  const scopeItems = [
    "Progettazione sistema domotico su misura",
    "Controllo illuminazione e scenari luce",
    "Gestione climatizzazione e riscaldamento",
    "Automazione tapparelle, tende e veneziane",
    "Controllo irrigazione giardino",
    "Controllo da smartphone, tablet e pannello",
    "Formazione all'uso del sistema installato",
  ];

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Domotica"
        ctaPrimaryText="Richiedi Preventivo"
        headline="Domotica — Trasforma la Tua Casa in un Ambiente Intelligente"
        headingLevel="h1"
        subheadline="PowerVolt progetta e installa sistemi domotici per il controllo intelligente di luci, climatizzazione, tapparelle e sicurezza. Soluzioni su misura per nuove costruzioni e ristrutturazioni."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb items={[{ name: "Servizi", href: "/servizi" }, { name: service.name, href: service.path }]} />
        </Container>
      </Section>

      <Section aria-labelledby="service-desc-heading" variant="light">
        <Container size="narrow">
          <h2 className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="service-desc-heading">
            La Smart Home su Misura per Te
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">{service.fullDescription}</p>
        </Container>
      </Section>

      <Section aria-labelledby="scope-heading" variant="muted">
        <Container>
          <h2 className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="scope-heading">
            Cosa Include il Servizio
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {scopeItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="faq-service-heading" variant="light">
        <Container size="narrow">
          <h2 className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="faq-service-heading">
            Domande Frequenti sulla Domotica
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <details key={index} className="group rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-4 font-semibold text-neutral-900 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                  {item.question}
                  <span aria-hidden="true" className="ml-auto shrink-0 text-brand-primary transition-transform group-open:rotate-180">&#8964;</span>
                </summary>
                <div className="border-t border-neutral-100 px-6 py-4 text-neutral-600">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Services excludeSlug={SERVICE_SLUG} heading="Altri Servizi PowerVolt" subheading="Scopri tutti i servizi di impiantistica elettrica disponibili." variant="related" />
      <Contact serviceName={service.name} variant="compact" />
    </>
  );
}
