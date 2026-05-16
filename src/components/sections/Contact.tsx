import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";

interface ContactProps {
  /**
   * "full": complete banner with description (homepage, contatti page)
   * "compact": stripped-down CTA row (bottom of service pages)
   */
  variant?: "full" | "compact";
  /**
   * When used on a service page, pass the service name for personalized CTA text.
   */
  serviceName?: string;
}

/**
 * Contact CTA section.
 * Appears at least once per page — this is a primary conversion touchpoint.
 *
 * Homepage: variant="full" at the bottom
 * Service pages: variant="compact" with service-specific text
 */
export function Contact({ variant = "full", serviceName }: ContactProps) {
  const ctaText = serviceName
    ? `Contattaci per ${serviceName}`
    : "Contattaci per un Sopralluogo";

  const bodyText = serviceName
    ? `Hai bisogno di un sopralluogo per ${serviceName}? Ogni lavoro richiede una valutazione diretta — contattaci per fissare un appuntamento.`
    : "Stai pianificando un nuovo impianto o hai bisogno di assistenza? Ogni lavoro richiede una valutazione diretta. Contattaci per organizzare un sopralluogo.";

  if (variant === "compact") {
    return (
      <Section aria-labelledby="contact-cta-heading" variant="dark">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2
                className="text-2xl font-extrabold text-white"
                id="contact-cta-heading"
              >
                {ctaText}
              </h2>
              <p className="mt-2 text-neutral-300">{bodyText}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button as="link" href="/contatti#sopralluogo" size="md" variant="primary">
                Richiedi Sopralluogo
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button as="a" href={`tel:${SITE_CONFIG.phone}`} size="md" variant="secondary">
                <Phone aria-hidden className="h-4 w-4" />
                Chiama Ora
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section aria-labelledby="contact-full-heading" variant="light">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="contact-full-heading"
          >
            Hai un Progetto Elettrico?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">{bodyText}</p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/contatti#sopralluogo" size="lg" variant="primary">
              {ctaText}
              <ArrowRight aria-hidden className="h-5 w-5" />
            </Button>
            <Button as="a" href={`tel:${SITE_CONFIG.phone}`} size="lg" variant="secondary">
              <Phone aria-hidden className="h-5 w-5" />
              {SITE_CONFIG.phoneFormatted}
            </Button>
          </div>

          {/* Email option */}
          <p className="mt-8 text-sm text-neutral-500">
            Preferisci scrivere? Invia una mail a{" "}
            <a
              className="font-semibold text-brand-primary underline-offset-4 hover:underline"
              href={`mailto:${SITE_CONFIG.email}`}
            >
              {SITE_CONFIG.email}
            </a>
          </p>

          <p className="mt-3 text-xs font-medium text-neutral-400">
            Ogni lavoro richiede una valutazione diretta &middot; Contattami per fissare un sopralluogo
          </p>
        </div>
      </Container>
    </Section>
  );
}
