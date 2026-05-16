import { CheckCircle, Clock, Award, Headphones } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface WhyUsItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
}

const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: CheckCircle,
    title: "Conformità CEI Garantita",
    description:
      "Tutti gli impianti sono realizzati nel pieno rispetto delle normative CEI vigenti. Al termine dei lavori rilascio la dichiarazione di conformità (DiCo) come previsto dal DM 37/08.",
  },
  {
    icon: Award,
    title: "Qualità e Professionalità",
    description:
      "Esperienza diretta nel settore civile e industriale, con formazione tecnica continua. Utilizzo materiali e componenti certificati per garantire sicurezza e durata nel tempo.",
  },
  {
    icon: Clock,
    title: "Puntualità e Rispetto dei Tempi",
    description:
      "Definiamo con il cliente i tempi di intervento e li rispettiamo. La gestione precisa dei cantieri ci permette di consegnare i lavori nei tempi stabiliti.",
  },
  {
    icon: Headphones,
    title: "Assistenza Post-Lavoro",
    description:
      "Il rapporto con il cliente non si esaurisce al termine dei lavori. Offro assistenza tecnica, manutenzione programmata e supporto per eventuali interventi futuri.",
  },
];

interface WhyUsProps {
  variant?: "full" | "compact";
  heading?: string;
}

/**
 * WhyUs — 4 trust-signal blocks.
 * variant="full": shown on homepage (4 columns desktop)
 * variant="compact": shown on service pages (2 columns, fewer items)
 */
export function WhyUs({ variant = "full", heading = "Perché Scegliere PowerVolt" }: WhyUsProps) {
  const items = variant === "compact" ? WHY_US_ITEMS.slice(0, 2) : WHY_US_ITEMS;

  return (
    <Section aria-labelledby="why-us-heading" variant="dark">
      <Container>
        <div className="mb-12 max-w-2xl text-center md:mx-auto">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
            id="why-us-heading"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Scegliere PowerVolt significa affidarsi a un professionista del settore che mette
            competenza, qualità e rispetto delle normative al primo posto.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${variant === "full" ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/20">
                  <Icon aria-hidden className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
