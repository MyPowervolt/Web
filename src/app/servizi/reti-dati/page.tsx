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

const SERVICE_SLUG = "reti-dati";

export const metadata: Metadata = buildMetadata({
  title: "Reti Dati e Cablaggio Strutturato",
  description:
    "Cablaggio strutturato e reti dati a Bologna per uffici, aziende e ambienti industriali. Cat.6/Cat.6A/Cat.7, Wi-Fi enterprise e fibra ottica. Sopralluogo gratuito.",
  canonical: `${SEO_CONFIG.siteUrl}/servizi/reti-dati`,
  keywords: [
    "reti dati",
    "cablaggio strutturato",
    "Cat.6",
    "rete Wi-Fi aziendale",
    "fibra ottica",
    "infrastruttura di rete",
  ],
});

export default function RetiDatiPage() {
  const service = getServiceBySlug(SERVICE_SLUG);
  if (!service) return null;

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Servizi", href: "/servizi" },
    { name: service.name, href: service.path },
  ]);
  const faqSchema = buildFaqSchema(service.faq);

  const scopeItems = [
    "Cablaggio strutturato Cat.6, Cat.6A, Cat.7",
    "Installazione rack e patch panel",
    "Reti LAN cablate ad alta velocità",
    "Reti Wi-Fi enterprise multi-zona",
    "Stesura fibra ottica monomodale e multimodale",
  ];

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Reti Dati"
        ctaPrimaryText="Richiedi Preventivo"
        headline="Reti Dati e Cablaggio Strutturato — Alta Performance"
        headingLevel="h1"
        subheadline="PowerVolt progetta e realizza infrastrutture di rete dati per uffici, aziende e ambienti industriali. Cablaggio strutturato Cat.6/Cat.6A/Cat.7, fibra ottica e reti Wi-Fi enterprise."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb items={[{ name: "Servizi", href: "/servizi" }, { name: service.name, href: service.path }]} />
        </Container>
      </Section>

      <Section aria-labelledby="service-desc-heading" variant="light">
        <Container size="narrow">
          <h2 className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="service-desc-heading">
            Infrastrutture di Rete Affidabili e Certificate
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
            Domande Frequenti
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {service.faq.map((item, index) => (
              <details key={index} className="group rounded-xl border border-neutral-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-xl px-5 py-4 text-sm font-semibold leading-snug text-neutral-900 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:items-center sm:gap-4 sm:px-6 sm:py-5 sm:text-base sm:leading-normal">
                  {item.question}
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-primary transition-transform group-open:rotate-180 sm:mt-0">&#8964;</span>
                </summary>
                <div className="border-t border-neutral-100 px-5 py-4 sm:px-6 sm:py-5">
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">{item.answer}</p>
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
