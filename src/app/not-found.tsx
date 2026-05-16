import Link from "next/link";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * Custom 404 page.
 * Provides helpful navigation back to key sections.
 * Conversion-oriented: shows phone number in case visitor was looking for contact.
 */
export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          {/* 404 visual */}
          <div className="mb-6 text-8xl font-extrabold text-brand-primary" aria-hidden="true">
            404
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-neutral-900">
            Pagina non trovata
          </h1>
          <p className="mb-8 text-lg text-neutral-600">
            La pagina che stai cercando non esiste o e stata spostata. Usa i link qui sotto
            per navigare nel sito.
          </p>

          {/* Primary actions */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/" size="lg" variant="primary">
              <Home aria-hidden className="h-5 w-5" />
              Torna alla Homepage
            </Button>

            <Button as="link" href="/servizi" size="lg" variant="secondary">
              <ArrowLeft aria-hidden className="h-5 w-5" />
              Vedi i Servizi
            </Button>
          </div>

          {/* Phone fallback — conversion touchpoint */}
          <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="mb-3 font-semibold text-neutral-700">
              Hai bisogno di assistenza?
            </p>
            <a
              aria-label={`Chiama PowerVolt: ${SITE_CONFIG.phoneFormatted}`}
              className="inline-flex items-center gap-2 text-lg font-bold text-brand-primary underline-offset-4 hover:underline"
              href={`tel:${SITE_CONFIG.phone}`}
            >
              <Phone aria-hidden className="h-5 w-5" />
              {SITE_CONFIG.phoneFormatted}
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Link rapidi" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-4" role="list">
              {[
                { label: "Impianti Civili", href: "/servizi/impianti-elettrici-civili" },
                { label: "Domotica", href: "/servizi/domotica" },
                { label: "Chi Siamo", href: "/chi-siamo" },
                { label: "Contatti", href: "/contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm font-medium text-brand-primary underline-offset-4 hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
