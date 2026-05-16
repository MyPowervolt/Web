import Link from "next/link";
import {
  ArrowRight,
  Home,
  Factory,
  Smartphone,
  Settings,
  Cpu,
  Shield,
  Network,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import type { Service } from "@/types";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  Home,
  Factory,
  Smartphone,
  Settings,
  Cpu,
  Shield,
  Network,
};

// ─── Service card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.icon] ?? Home;

  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-card-hover">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary-light text-brand-primary">
        <Icon aria-hidden className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-bold text-neutral-900">{service.name}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">
        {service.shortDescription}
      </p>

      {/* Link */}
      <Link
        aria-label={`Scopri il servizio: ${service.name}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary underline-offset-4 transition-colors hover:underline"
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
}

// ─── Section ─────────────────────────────────────────────────────────────────

interface ServicesProps {
  /**
   * "full": show all 7 services (homepage)
   * "related": show 3 related services (service pages)
   */
  variant?: "full" | "related";
  /**
   * For variant="related": the current service slug to exclude from the list.
   */
  excludeSlug?: string;
  /**
   * Section heading.
   */
  heading?: string;
  /**
   * Section sub-heading.
   */
  subheading?: string;
}

/**
 * Services grid section.
 * Homepage: shows all 7 services.
 * Service pages: shows 3 related services (excludes current).
 */
export function Services({
  variant = "full",
  excludeSlug,
  heading = "Servizi PowerVolt",
  subheading = "Dalla progettazione alla realizzazione: soluzioni complete per impianti elettrici civili e industriali, nel rispetto delle normative CEI.",
}: ServicesProps) {
  const displayedServices =
    variant === "related"
      ? SERVICES.filter((s) => s.slug !== excludeSlug).slice(0, 3)
      : SERVICES;

  return (
    <Section aria-labelledby="services-heading" variant="muted">
      <Container>
        {/* Section header */}
        <div className="mb-12 max-w-2xl text-center md:mx-auto">
          <h2
            className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="services-heading"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{subheading}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* CTA to services hub — shown on homepage only */}
        {variant === "full" && (
          <div className="mt-10 text-center">
            <Link
              className="inline-flex items-center gap-2 font-semibold text-brand-primary underline-offset-4 hover:underline"
              href="/servizi"
            >
              Vedi tutti i servizi
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
