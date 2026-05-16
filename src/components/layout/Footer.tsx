import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";
import { FOOTER_NAV } from "@/data/navigation";

/**
 * Site footer.
 * Contains: logo, company description, NAP, navigation columns, legal.
 *
 * NAP (Name, Address, Phone) must be consistent with Google Business Profile
 * and schema.org LocalBusiness markup for local SEO.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white" role="contentinfo">
      {/* Main footer grid */}
      <Container>
        <div className="grid grid-cols-1 gap-6 py-10 md:gap-10 md:grid-cols-2 md:py-16 lg:grid-cols-4">
          {/* Column 1: Brand + description + NAP */}
          <div className="lg:col-span-1">
            <Link
              aria-label="PowerVolt — Homepage"
              className="mb-4 block"
              href="/"
            >
              <Image
                alt="PowerVolt"
                className="h-10 w-auto"
                height={40}
                src="/LogoPageS.svg"
                width={130}
              />
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-neutral-300">
              {SITE_CONFIG.description}
            </p>

            {/* NAP — Name, Address, Phone */}
            <address className="space-y-3 not-italic text-sm text-neutral-300">
              {/* Location — show city/province even without a street address */}
              {SITE_CONFIG.address.addressLocality && (
                <div className="flex items-start gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <span>
                    {SITE_CONFIG.address.streetAddress && (
                      <>{SITE_CONFIG.address.streetAddress}<br /></>
                    )}
                    {SITE_CONFIG.address.postalCode && `${SITE_CONFIG.address.postalCode} `}
                    {SITE_CONFIG.address.addressLocality}
                    {SITE_CONFIG.address.addressRegion && ` (${SITE_CONFIG.address.addressRegion})`}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-primary" />
                <a
                  aria-label={`Chiama PowerVolt: ${SITE_CONFIG.phoneFormatted}`}
                  className="transition-colors hover:text-brand-primary"
                  href={`tel:${SITE_CONFIG.phone}`}
                >
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-primary" />
                <a
                  className="transition-colors hover:text-brand-primary"
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* PEC */}
              {SITE_CONFIG.pec && (
                <div className="flex items-center gap-2">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-primary/60" />
                  <a
                    className="transition-colors hover:text-brand-primary"
                    href={`mailto:${SITE_CONFIG.pec}`}
                  >
                    <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      PEC
                    </span>
                    {SITE_CONFIG.pec}
                  </a>
                </div>
              )}

              {/* Business hours */}
              {SITE_CONFIG.businessHours.length > 0 && (
                <div className="flex items-start gap-2">
                  <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                  <div>
                    {SITE_CONFIG.businessHours.map((h) => (
                      <div key={h.days}>
                        <span className="font-medium">{h.days}:</span> {h.hours}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </address>
          </div>

          {/* Column 2: Company links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Azienda
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-neutral-300 transition-colors hover:text-brand-primary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Servizi
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-neutral-300 transition-colors hover:text-brand-primary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Badge CEI conformity */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Conformità
            </h3>
            <div className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-4 py-3">
              <span aria-hidden="true" className="text-2xl">
                ✓
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Normative CEI</div>
                <div className="text-xs text-neutral-400">Impianti certificati</div>
              </div>
            </div>

            {/* Social links — rendered only when data is confirmed */}
            {SITE_CONFIG.socialLinks.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-primary">
                  Seguici
                </h3>
                <ul className="flex gap-3" role="list">
                  {SITE_CONFIG.socialLinks.map((social) => (
                    <li key={social.platform}>
                      <a
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-brand-primary hover:text-brand-secondary"
                        href={social.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="text-xs font-bold uppercase">
                          {social.platform.slice(0, 2)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-400 sm:flex-row">
            <div>
              &copy; {currentYear} {SITE_CONFIG.companyName}
              {SITE_CONFIG.vatNumber && ` — P.IVA ${SITE_CONFIG.vatNumber}`}
              {SITE_CONFIG.rea && ` — REA ${SITE_CONFIG.rea}`}
              {" — Tutti i diritti riservati"}
            </div>
            <ul className="flex gap-4" role="list">
              {FOOTER_NAV.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition-colors hover:text-brand-primary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
