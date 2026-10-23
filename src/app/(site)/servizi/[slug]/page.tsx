import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { EXTRA_PAGES, EXTRA_SERVICES } from "@/data/services-extra";

// Solo gli slug definiti in services-extra: gli altri servizi hanno pagine dedicate.
export const dynamicParams = false;

export function generateStaticParams() {
  return EXTRA_SERVICES.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const copy = EXTRA_PAGES[slug];
  const service = getServiceBySlug(slug);
  if (!copy || !service) return {};
  return buildMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    canonical: `${SEO_CONFIG.siteUrl}${service.path}`,
    keywords: service.keywords,
  });
}

export default async function ExtraServicePage({ params }: PageProps) {
  const { slug } = await params;
  const copy = EXTRA_PAGES[slug];
  const service = getServiceBySlug(slug);
  if (!copy || !service) notFound();

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Servizi", href: "/servizi" },
    { name: service.name, href: service.path },
  ]);
  const faqSchema = buildFaqSchema(service.faq);

  return (
    <>
      <JsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Hero
        badge={copy.badge}
        ctaPrimaryText="Richiedi Preventivo"
        headline={copy.h1}
        headingLevel="h1"
        subheadline={copy.subheadline}
      />

      <Section padding="sm" variant="light">
        <Container>
          <Breadcrumb items={[{ name: "Servizi", href: "/servizi" }, { name: service.name, href: service.path }]} />
        </Container>
      </Section>

      <Section aria-labelledby="service-desc-heading" variant="light">
        <Container size="narrow">
          <h2 className="mb-6 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="service-desc-heading">
            {copy.descHeading}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">{service.fullDescription}</p>
        </Container>
      </Section>

      <Section aria-labelledby="scope-heading" variant="muted">
        <Container>
          <h2 className="mb-8 text-2xl font-extrabold text-neutral-900 md:text-3xl" id="scope-heading">
            {copy.scopeHeading}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {copy.scopeItems.map((item) => (
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
            {copy.faqHeading}
          </h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.question} className="group rounded-xl border border-neutral-200 bg-white">
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

      <Services excludeSlug={slug} heading="Altri Servizi PowerVolt" subheading="Scopri tutti i servizi di impiantistica elettrica disponibili." variant="related" />
      <Contact serviceName={service.name} variant="compact" />
    </>
  );
}
