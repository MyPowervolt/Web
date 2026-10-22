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

const SERVICE_SLUG = "impianti-elettrici-industriali";

export const metadata: Metadata = buildMetadata({
  title: "Impianti Elettrici Industriali",
  description:
    "Impianti elettrici industriali a Bologna e provincia per capannoni e stabilimenti. Progettazione in bassa tensione, quadri elettrici, illuminazione industriale. Conformi alle normative CEI.",
  canonical: `${SEO_CONFIG.siteUrl}/servizi/impianti-elettrici-industriali`,
  keywords: [
    "impianti elettrici industriali",
    "impianto elettrico capannone",
    "impianti elettrici industriali Bologna",
    "impianti elettrici stabilimento",
    "DPR 462",
    "verifica impianti industriali",
  ],
});

export default function ImpiantiElettricIindustraliPage() {
  const service = getServiceBySlug(SERVICE_SLUG);
  if (!service) return null;

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Servizi", href: "/servizi" },
    { name: service.name, href: service.path },
  ]);
  const faqSchema = buildFaqSchema(service.faq);

  const scopeItems = [
    "Installazione quadri di distribuzione industriale",
    "Cablaggio potenza e controllo",
    "Impianti di illuminazione industriale",
    "Manutenzione programmata e straordinaria",
    "Documentazione tecnica completa e DiCo",
    "Realizzazione percorsi in plastica o metallo per lo smistamento, la protezione e l’organizzazione delle linee elettriche e di servizio.",
    "Realizzazione blindo luce e potenza",
    "Realizzazione alimentazione bordo macchina",
    "Realizzazione illuminazione uscite di sicurezza",
  ];

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge="Impianti Industriali"
        ctaPrimaryText="Richiedi Preventivo"
        headline="Impianti Elettrici Industriali — Progettazione e Realizzazione"
        headingLevel="h1"
        subheadline="PowerVolt realizza impianti elettrici industriali a Bologna e provincia per capannoni, stabilimenti e ambienti produttivi. Cablaggio potenza e controllo, quadri di distribuzione, illuminazione industriale. Conformi alle normative CEI."
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
            Impianti Elettrici Industriali di Alta Affidabilità
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">{service.fullDescription}</p>
        </Container>
      </Section>

      <Section aria-labelledby="scope-heading" variant="muted">
        <Container>
          <h2
            className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl"
            id="scope-heading"
          >
            Cosa Include il Servizio
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {scopeItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle aria-hidden className="text-brand-primary mt-0.5 h-5 w-5 shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
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
