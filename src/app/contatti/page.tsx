import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/data/site-config";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Contatti",
  description:
    "Contatta PowerVolt per telefono, email o WhatsApp. Impianti elettrici civili e industriali, automazioni, domotica e sicurezza. Ogni lavoro richiede un sopralluogo diretto.",
  canonical: `${SEO_CONFIG.siteUrl}/contatti`,
  keywords: [
    "contatti PowerVolt",
    "sopralluogo impianto elettrico",
    "elettricista contatto",
    "impianti elettrici preventivo",
  ],
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContattiPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Contatti", href: "/contatti" }]);
  const webpageSchema = buildWebPageSchema({
    name: "Contatti — PowerVolt",
    description:
      "Contatta PowerVolt per un sopralluogo su impianti elettrici civili e industriali, automazioni, domotica e sicurezza.",
    url: `${SEO_CONFIG.siteUrl}/contatti`,
  });

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, webpageSchema]} />

      {/* Page header */}
      <Section aria-labelledby="contact-page-heading" variant="dark">
        <Container>
          <div className="max-w-3xl">
            <Badge className="mb-5" variant="brand">
              Contatti
            </Badge>
            <h1
              className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"
              id="contact-page-heading"
            >
              Parliamo del Tuo Impianto
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300">
              Ogni lavoro richiede una valutazione diretta prima di qualsiasi proposta. Contattaci
              per fissare un sopralluogo: analizziamo le tue esigenze sul posto e ti proponiamo
              la soluzione tecnica più adeguata.
            </p>
          </div>
        </Container>
      </Section>

      {/* Breadcrumb */}
      <Section padding="sm" variant="light">
        <Container>
          <Breadcrumb items={[{ name: "Contatti", href: "/contatti" }]} />
        </Container>
      </Section>

      {/* Main contact section */}
      <Section aria-labelledby="contact-info-heading" id="sopralluogo" variant="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Why contact us */}
            <div>
              <h2
                className="mb-6 text-2xl font-extrabold text-neutral-900"
                id="contact-info-heading"
              >
                Come Contattarci
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                Non utilizziamo moduli online: preferiamo parlare direttamente con te. Una
                conversazione breve ci permette di capire subito di cosa hai bisogno e di
                organizzare un sopralluogo nei tempi che preferisci.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  aria-label="Scrivici su WhatsApp"
                  className="flex w-full items-center gap-4 rounded-2xl border-2 border-green-500 bg-green-50 px-6 py-4 text-green-800 transition-colors hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle aria-hidden className="h-7 w-7 shrink-0 text-green-600" />
                  <div>
                    <span className="block text-base font-bold">Scrivici su WhatsApp</span>
                    <span className="block text-sm text-green-700">
                      Risposta rapida nei nostri orari di lavoro
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  aria-label={`Chiama PowerVolt: ${SITE_CONFIG.phoneFormatted}`}
                  className="flex w-full items-center gap-4 rounded-2xl border-2 border-brand-primary bg-brand-primary-light px-6 py-4 text-neutral-900 transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  href={`tel:${SITE_CONFIG.phone}`}
                >
                  <Phone aria-hidden className="h-7 w-7 shrink-0 text-brand-primary" />
                  <div>
                    <span className="block text-base font-bold">{SITE_CONFIG.phoneFormatted}</span>
                    <span className="block text-sm text-neutral-600">Chiama direttamente</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  className="flex w-full items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-neutral-900 shadow-card transition-colors hover:border-brand-primary/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  <Mail aria-hidden className="h-7 w-7 shrink-0 text-brand-primary" />
                  <div>
                    <span className="block text-base font-bold">{SITE_CONFIG.email}</span>
                    <span className="block text-sm text-neutral-600">Scrivici via email</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Info cards */}
            <aside aria-label="Informazioni operative" className="space-y-6">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <h3 className="mb-4 text-lg font-bold text-neutral-900">Come Funziona</h3>
                <ol className="space-y-3 text-neutral-600" role="list">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-secondary">
                      1
                    </span>
                    <span>Ci contatti per telefono, WhatsApp o email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-secondary">
                      2
                    </span>
                    <span>Fissiamo un sopralluogo diretto presso il tuo immobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-secondary">
                      3
                    </span>
                    <span>Valutiamo il lavoro necessario e concordiamo i termini</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-secondary">
                      4
                    </span>
                    <span>Realizziamo l&apos;impianto con rilascio di documentazione tecnica</span>
                  </li>
                </ol>
              </div>

              {/* Business hours */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Clock aria-hidden className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-lg font-bold text-neutral-900">Orari</h3>
                </div>
                <div className="space-y-1.5">
                  {SITE_CONFIG.businessHours.map((h) => (
                    <p key={h.days} className="text-neutral-600">
                      <span className="font-semibold">{h.days}:</span> {h.hours}
                    </p>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <div className="mb-3 flex items-center gap-3">
                  <MapPin aria-hidden className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-lg font-bold text-neutral-900">Zona Operativa</h3>
                </div>
                <p className="text-neutral-600">
                  Servizi elettrici civili e industriali attivi su Bologna e provincia.
                </p>
              </div>

              {/* PEC */}
              {SITE_CONFIG.pec && (
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                  <div className="mb-3 flex items-center gap-3">
                    <Mail aria-hidden className="h-5 w-5 text-brand-primary" />
                    <h3 className="text-lg font-bold text-neutral-900">PEC</h3>
                  </div>
                  <a
                    className="text-sm text-neutral-600 hover:text-brand-primary"
                    href={`mailto:${SITE_CONFIG.pec}`}
                  >
                    {SITE_CONFIG.pec}
                  </a>
                </div>
              )}

              {/* CEI conformity note */}
              <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary-light p-5">
                <p className="text-sm font-semibold text-neutral-800">
                  Tutti gli impianti realizzati da PowerVolt sono conformi alle normative CEI e
                  accompagnati dalla dichiarazione di conformità (DM 37/08).
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
