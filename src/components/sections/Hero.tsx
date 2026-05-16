import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, FileCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/data/site-config";

interface HeroProps {
  headline: ReactNode;
  subheadline: string;
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  badge?: string;
  headingLevel?: "h1" | "h2";
  /** Optional real photo to use as background (path relative to /public) */
  imageSrc?: string;
  /** Alt text for the background image — keep empty for decorative images */
  imageAlt?: string;
  /** Tailwind object-position class for the background image, e.g. "object-top", "object-center" */
  imageObjectPosition?: string;
  /** Override the default overlay gradient style */
  imageOverlay?: string;
  /**
   * "founder" layout: splits into text-left / profile-image-right.
   * Requires founderImageSrc. WhatsApp button replaces phone button.
   */
  layout?: "default" | "founder";
  founderImageSrc?: string;
  founderImageAlt?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaPrimaryText = "Richiedi un Sopralluogo",
  ctaPrimaryHref = "/contatti#sopralluogo",
  ctaSecondaryText,
  ctaSecondaryHref = "/servizi",
  badge,
  headingLevel = "h1",
  imageSrc,
  imageAlt = "",
  imageObjectPosition = "object-top",
  imageOverlay,
  layout = "default",
  founderImageSrc,
  founderImageAlt = "Il titolare di PowerVolt — elettricista professionista",
}: HeroProps) {
  const HeadingTag = headingLevel;
  const isFounder = layout === "founder";

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-brand-secondary py-10 md:py-20 lg:py-24"
      >
        {/* Background photo — default layout only */}
        {!isFounder && imageSrc && (
          <Image
            alt={imageAlt}
            className={`object-cover ${imageObjectPosition}`}
            fill
            priority
            sizes="100vw"
            src={imageSrc}
          />
        )}

        {/* Dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: imageOverlay
              ? imageOverlay
              : !isFounder && imageSrc
              ? "linear-gradient(105deg, rgba(10,10,22,0.82) 0%, rgba(10,10,22,0.65) 60%, rgba(10,10,22,0.45) 100%)"
              : "linear-gradient(160deg, #1a1a2e 0%, #0f0f1e 55%, #080810 100%)",
          }}
        />

        {/* Diagonal amber accent stripe */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[60%] w-[55%] opacity-[0.06]"
          style={{
            background: "linear-gradient(135deg, transparent 40%, #e2aa0e 40%)",
          }}
        />

        {/* Amber glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-primary/20 blur-[80px] md:h-[500px] md:w-[500px]"
        />

        <Container>
          {isFounder ? (
            /* ── Founder layout: text left, profile photo right ── */
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left: text */}
              <div>
                {badge && (
                  <div className="mb-5">
                    <Badge size="md" variant="brand">
                      {badge}
                    </Badge>
                  </div>
                )}

                <HeadingTag
                  className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
                  id="hero-heading"
                >
                  {headline}
                </HeadingTag>

                <div
                  aria-hidden="true"
                  className="mt-3 h-[3px] w-16 rounded-full bg-brand-primary"
                />

                <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
                  {subheadline}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center">
                  <Button as="link" href={ctaPrimaryHref} size="lg" variant="primary">
                    {ctaPrimaryText}
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Button>

                  <Button
                    as="a"
                    className="border-white/40 text-white hover:border-brand-primary hover:text-brand-primary focus-visible:ring-offset-brand-secondary"
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    size="lg"
                    variant="secondary"
                  >
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                    Scrivimi su WhatsApp
                  </Button>
                </div>

                {ctaSecondaryText && ctaSecondaryHref && (
                  <div className="mt-3 hidden sm:block">
                    <Link
                      className="flex items-center gap-1 text-sm font-semibold text-white/60 underline-offset-4 transition-colors hover:text-brand-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      href={ctaSecondaryHref}
                    >
                      {ctaSecondaryText}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                {/* Trust signals */}
                <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-8">
                  <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-brand-primary"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      Conformità normative CEI
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2">
                    <FileCheck
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-brand-primary"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      DM 37/08
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2">
                    <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-primary" />
                    <a
                      className="text-xs font-semibold text-white/80 transition-colors hover:text-brand-primary"
                      href={`tel:${SITE_CONFIG.phone}`}
                    >
                      {SITE_CONFIG.phoneFormatted}
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-xs font-medium text-white/60">
                  Impianti conformi alle normative CEI — Dichiarazione di conformità rilasciata
                </p>
              </div>

              {/* Right: founder portrait — stacked below text on mobile, side-by-side on lg */}
              {founderImageSrc && (
                <div className="flex items-center justify-center">
                  <div className="relative isolate">
                    {/* Soft amber glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -inset-8 rounded-full bg-brand-primary/10 blur-2xl"
                    />
                    {/* Circle portrait */}
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-brand-primary/35 shadow-xl shadow-black/40 sm:h-52 sm:w-52 md:h-[270px] md:w-[270px] lg:h-[320px] lg:w-[320px]">
                      <Image
                        alt={founderImageAlt}
                        className="object-cover object-top"
                        fill
                        priority
                        sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 270px, 320px"
                        src={founderImageSrc}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ── Default layout: single-column ── */
            <div className="relative z-10 max-w-3xl">
              {badge && (
                <div className="mb-5">
                  <Badge size="md" variant="brand">
                    {badge}
                  </Badge>
                </div>
              )}

              <HeadingTag
                className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
                id="hero-heading"
              >
                {headline}
              </HeadingTag>

              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-16 rounded-full bg-brand-primary"
              />

              <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
                {subheadline}
              </p>

              {/* CTA row */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button as="link" href={ctaPrimaryHref} size="lg" variant="primary">
                  {ctaPrimaryText}
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Button>

                <Button
                  as="a"
                  className="border-white/40 text-white hover:border-brand-primary hover:text-brand-primary focus-visible:ring-offset-brand-secondary"
                  href={`tel:${SITE_CONFIG.phone}`}
                  size="lg"
                  variant="secondary"
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  {SITE_CONFIG.phoneFormatted}
                </Button>

                {ctaSecondaryText && ctaSecondaryHref && (
                  <Link
                    className="flex items-center justify-center gap-1 text-sm font-semibold text-white/60 underline-offset-4 transition-colors hover:text-brand-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    href={ctaSecondaryHref}
                  >
                    {ctaSecondaryText}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2">
                  <ShieldCheck
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-brand-primary"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    Conformità CEI
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-3 py-2">
                  <FileCheck
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-brand-primary"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    DM 37/08
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs font-medium text-white/60">
                Impianti conformi alle normative CEI — Dichiarazione di conformità rilasciata
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Section separator — amber gradient hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"
      />
    </>
  );
}
