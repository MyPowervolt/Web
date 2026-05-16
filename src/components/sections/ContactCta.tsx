import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";

interface ContactCtaProps {
  /**
   * Main headline for the CTA banner.
   * Defaults to a generic conversion headline.
   */
  heading?: string;
  /**
   * Supporting body text. One or two sentences max.
   */
  body?: string;
  /**
   * Primary CTA button text.
   */
  ctaText?: string;
  /**
   * Primary CTA href.
   */
  ctaHref?: string;
  /**
   * Background variant.
   * "dark": dark navy background (default — ensures amber primary button has contrast)
   * "light": white background (use when the surrounding page context is dark)
   */
  background?: "dark" | "light";
}

/**
 * Conversion CTA banner component.
 *
 * Appears at the bottom of the homepage and can be dropped into any page
 * as a final conversion touchpoint. Always shows:
 * - A clear headline
 * - A primary "Richiedi un Sopralluogo" button
 * - A "Chiama Ora" secondary button with the placeholder phone number
 *
 * ⚠️ Phone number will display the placeholder until confirmed with client.
 * See SITE_CONFIG.phone in src/data/site-config.ts.
 */
export function ContactCta({
  heading = "Hai un Progetto Elettrico?",
  body = "Stai pianificando un nuovo impianto o hai bisogno di assistenza tecnica? Contattaci per un sopralluogo gratuito e senza impegno. Risponderemo entro 24 ore lavorative.",
  ctaText = "Richiedi un Sopralluogo",
  ctaHref = "/contatti#sopralluogo",
  background = "dark",
}: ContactCtaProps) {
  const isDark = background === "dark";

  return (
    <Section
      aria-labelledby="contactcta-heading"
      variant={background}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h2
            className={`text-3xl font-extrabold tracking-tight md:text-4xl ${isDark ? "text-white" : "text-neutral-900"}`}
            id="contactcta-heading"
          >
            {heading}
          </h2>

          {/* Body */}
          <p className={`mt-4 text-lg ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>{body}</p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href={ctaHref} size="lg" variant="primary">
              {ctaText}
              <ArrowRight aria-hidden className="h-5 w-5" />
            </Button>

            <Button as="a" href={`tel:${SITE_CONFIG.phone}`} size="lg" variant="secondary">
              <Phone aria-hidden className="h-5 w-5" />
              {SITE_CONFIG.phoneFormatted}
            </Button>
          </div>

          {/* Micro trust signal */}
          <p className={`mt-6 text-xs font-medium ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
            Sopralluogo gratuito su richiesta &middot; Risposta entro 24 ore lavorative
          </p>
        </div>
      </Container>
    </Section>
  );
}
