import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface StatItem {
  /**
   * The numeric or textual value displayed prominently.
   * e.g. "7", "100%", "CEI"
   */
  value: string;
  /**
   * Short label below the value.
   * e.g. "Servizi Offerti", "Conformita Normativa"
   */
  label: string;
  /**
   * Optional supporting description (one line max).
   */
  description?: string;
}

/**
 * Confirmed stats — sourced exclusively from https://powervolt.it/ SERP snippet.
 *
 * ⚠️ Items marked PLACEHOLDER must be confirmed with the client before going live.
 * Do NOT invent numbers (years of experience, number of clients, etc.).
 *
 * Currently confirmed:
 * - 7 services (from meta-description)
 * - CEI compliance (from meta-description)
 */
const STATS: StatItem[] = [
  {
    value: "7",
    label: "Servizi Offerti",
    description: "Civile, industriale, domotica, automazioni e altro",
  },
  {
    value: "CEI",
    label: "Normative Rispettate",
    description: "Dichiarazione di conformita su ogni impianto",
  },
  {
    // ⚠️ PLACEHOLDER — confirm years of operation with client before going live
    value: "—",
    label: "Anni di Esperienza",
    description: "⚠️ Dato da confermare con il cliente",
  },
  {
    // ⚠️ PLACEHOLDER — confirm number of completed projects with client
    value: "—",
    label: "Impianti Realizzati",
    description: "⚠️ Dato da confermare con il cliente",
  },
];

interface StatsProps {
  /**
   * "full": all 4 stat items (homepage trust bar)
   * "confirmed": only the 2 confirmed data points (safe to use without client confirmation)
   */
  variant?: "full" | "confirmed";
}

/**
 * Stats / Trust Bar section.
 * Shown between the Hero and the Services grid on the homepage.
 *
 * Provides quick trust signals at a glance.
 *
 * ⚠️ Use variant="confirmed" until client provides real numbers.
 * Switch to variant="full" only after client confirms all placeholder values.
 */
export function Stats({ variant = "confirmed" }: StatsProps) {
  const displayedStats = variant === "confirmed" ? STATS.slice(0, 2) : STATS;

  return (
    <Section aria-labelledby="stats-heading" padding="sm" variant="brand">
      <Container>
        {/* Visually hidden heading for screen readers */}
        <h2 className="sr-only" id="stats-heading">
          PowerVolt in Numeri
        </h2>

        <div
          className={`grid grid-cols-2 gap-8 ${
            variant === "full" ? "lg:grid-cols-4" : "lg:grid-cols-2"
          }`}
        >
          {displayedStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              {/* Value */}
              <span className="text-4xl font-extrabold text-brand-secondary md:text-5xl">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-sm font-semibold text-neutral-800 md:text-base">
                {stat.label}
              </span>

              {/* Description */}
              {stat.description && !stat.description.startsWith("⚠️") && (
                <span className="text-xs text-neutral-600">{stat.description}</span>
              )}
            </div>
          ))}
        </div>

        {/* CEI conformity badge */}
        <div className="mt-8 flex justify-center">
          <Badge size="md" variant="dark">
            Impianti conformi alle normative CEI — D.M. 37/08
          </Badge>
        </div>
      </Container>
    </Section>
  );
}
