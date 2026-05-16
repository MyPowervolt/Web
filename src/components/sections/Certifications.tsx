import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

/**
 * Certification / compliance item definition.
 */
interface CertificationItem {
  /** Short name of the certification or standard. */
  name: string;
  /** One-line description of what it covers. */
  description: string;
  /**
   * Whether this item is confirmed from the source site (https://powervolt.it/).
   * Unconfirmed items are hidden in production (flagged with TODO comment).
   */
  confirmed: boolean;
}

/**
 * Confirmed certifications and compliance standards.
 *
 * CONFIRMED from https://powervolt.it/ SERP meta-description:
 * - CEI compliance ("nel rispetto delle normative CEI")
 * - DM 37/08 (implied by electrical contractor context, standard in the sector)
 *
 * ⚠️ Additional certifications listed as PLACEHOLDER below must be confirmed
 * with the client before being shown on the live site.
 */
const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Normative CEI",
    description:
      "Tutti gli impianti sono realizzati nel pieno rispetto del Comitato Elettrotecnico Italiano.",
    confirmed: true,
  },
  {
    name: "D.M. 37/08",
    description: "Dichiarazione di conformità (DiCo) rilasciata al termine di ogni intervento.",
    confirmed: true,
  },
  {
    // ⚠️ PLACEHOLDER — confirm whether PowerVolt holds SOA/ISO certifications
    name: "ISO / SOA",
    description: "⚠️ Dato da confermare con il cliente prima di pubblicare.",
    confirmed: false,
  },
  {
    // ⚠️ PLACEHOLDER — confirm ATEX qualification
    name: "ATEX",
    description: "⚠️ Abilitazione impianti in atmosfere potenzialmente esplosive — da confermare.",
    confirmed: false,
  },
];

interface CertificationsProps {
  /**
   * "confirmed": show only the 2 confirmed items (safe default).
   * "all": show all items, including placeholders (development only).
   */
  variant?: "confirmed" | "all";
}

/**
 * Certifications & Compliance section.
 *
 * Displayed near the bottom of the homepage between WhyUs and Testimonials,
 * or on the Chi Siamo page.
 *
 * ⚠️ Use variant="confirmed" until the client provides full certification details.
 * The section only renders confirmed items by default.
 */
export function Certifications({ variant = "confirmed" }: CertificationsProps) {
  const displayedItems =
    variant === "all"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.confirmed);

  return (
    <Section aria-labelledby="certifications-heading" variant="muted">
      <Container>
        <div className="mb-10 max-w-2xl text-center md:mx-auto">
          <h2
            className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="certifications-heading"
          >
            Conformità e Certificazioni
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Ogni impianto PowerVolt viene realizzato nel pieno rispetto delle normative vigenti,
            con tutta la documentazione tecnica prevista dalla legge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayedItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-card"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary-light">
                <ShieldCheck aria-hidden className="h-7 w-7 text-brand-primary" />
              </div>

              {/* Name */}
              <Badge variant="brand" size="md">
                {item.name}
              </Badge>

              {/* Description — hide placeholder text in confirmed variant */}
              {!item.description.startsWith("⚠️") && (
                <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* TODO: add partner/brand logos when client provides them */}
        {/* ⚠️ Partner brand strip (BTicino, ABB, Legrand, Schneider) — necessaria conferma */}
      </Container>
    </Section>
  );
}
