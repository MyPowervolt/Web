import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Factory,
  Smartphone,
  Settings,
  Cpu,
  Network,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/data/services";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Servizi di Impiantistica Elettrica",
  description:
    "Scopri tutti i servizi PowerVolt a Bologna e provincia: impianti elettrici civili e industriali, automazioni, domotica, quadri elettrici e reti dati. Conformi alle normative CEI.",
  canonical: `${SEO_CONFIG.siteUrl}/servizi`,
  keywords: [
    "servizi impianti elettrici",
    "impianti elettrici civili",
    "impianti elettrici industriali",
    "domotica",
    "automazioni",
    "quadri elettrici",
    "reti dati",
  ],
});

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  Home, Factory, Smartphone, Settings, Cpu, Network,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiziPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Servizi", href: "/servizi" }]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <Hero
        badge="Impiantistica Elettrica"
        headline="Impianti Elettrici a Bologna — Tutti i Servizi"
        headingLevel="h1"
        subheadline="Dalla progettazione alla realizzazione: soluzioni complete per impianti elettrici civili e industriali, automazioni, domotica e molto altro. Tutto nel rispetto delle normative CEI."
      />

      <Section variant="light" padding="sm">
        <Container>
          <Breadcrumb items={[{ name: "Servizi", href: "/servizi" }]} />
        </Container>
      </Section>

      <Section aria-labelledby="all-services-heading" variant="muted">
        <Container>
          <h2
            className="mb-12 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="all-services-heading"
          >
            I Servizi Disponibili
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Home;
              return (
                <article
                  key={service.slug}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary-light text-brand-primary">
                    <Icon aria-hidden className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">{service.name}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-neutral-600">
                    {service.shortDescription}
                  </p>
                  <Link
                    aria-label={`Scopri il servizio: ${service.name}`}
                    className="inline-flex items-center gap-2 font-semibold text-brand-primary underline-offset-4 hover:underline"
                    href={service.path}
                  >
                    Scopri di più
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Contact variant="full" />
    </>
  );
}
