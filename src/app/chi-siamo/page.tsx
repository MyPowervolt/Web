import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Chi Siamo",
  description:
    "PowerVolt è un'attività professionale specializzata in impianti elettrici civili e industriali a Bologna e provincia. Conformità CEI, dichiarazione di conformità e assistenza post-lavoro garantite.",
  canonical: `${SEO_CONFIG.siteUrl}/chi-siamo`,
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChiSiamoPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Chi Siamo", href: "/chi-siamo" }]);
  const webpageSchema = buildWebPageSchema({
    name: "Chi Siamo — PowerVolt",
    description:
      "PowerVolt è un'attività professionale specializzata in impianti elettrici civili e industriali a Bologna e provincia. Conformità CEI e dichiarazione di conformità garantite.",
    url: `${SEO_CONFIG.siteUrl}/chi-siamo`,
  });

  const values = [
    {
      title: "Conformità alle Normative",
      description:
        "Ogni impianto è realizzato nel pieno rispetto delle normative CEI e delle leggi vigenti. Rilascio sempre la documentazione tecnica richiesta, inclusa la dichiarazione di conformità.",
    },
    {
      title: "Qualità dei Materiali",
      description:
        "Utilizzo esclusivamente componentistica certificata di primarie marche del settore, garantendo sicurezza, durata e prestazioni nel tempo.",
    },
    {
      title: "Rispetto dei Tempi",
      description:
        "Definisco con il cliente i tempi di intervento e mi impegno a rispettarli. La gestione organizzata del cantiere è una priorità.",
    },
    {
      title: "Assistenza Continua",
      description:
        "Il rapporto con il cliente non si chiude al termine dei lavori. Sono disponibile per manutenzione, assistenza tecnica e nuovi interventi.",
    },
  ];

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, webpageSchema]} />

      {/* Page header */}
      <Section aria-labelledby="about-heading" variant="dark">
        <Container>
          <div className="max-w-3xl">
            <Badge className="mb-5" variant="brand">
              Chi Siamo
            </Badge>
            <h1
              className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"
              id="about-heading"
            >
              PowerVolt — Elettricista Professionista a Bologna
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300">
              Mi occupo della progettazione e realizzazione di impianti elettrici civili e
              industriali, con un approccio rigoroso alla qualità, alla sicurezza e alla conformità
              normativa.
            </p>
          </div>
        </Container>
      </Section>

      {/* Breadcrumb */}
      <Section padding="sm" variant="light">
        <Container>
          <Breadcrumb items={[{ name: "Chi Siamo", href: "/chi-siamo" }]} />
        </Container>
      </Section>

      {/* Company description — with real photo */}
      <Section aria-labelledby="company-desc-heading" variant="light">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="mb-6 text-3xl font-extrabold text-neutral-900 md:text-4xl"
                id="company-desc-heading"
              >
                Chi è PowerVolt
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-neutral-600">
                <p>
                  PowerVolt nasce come attività professionale specializzata nella realizzazione di
                  impianti elettrici civili e industriali. Mi occupo direttamente di un ampio
                  spettro di interventi: impianti civili per abitazioni, uffici e condomini.
                  Impianti industriali per capannoni e stabilimenti, sistemi di automazione,
                  domotica, quadri elettrici, impianti reti dati.
                </p>
                <p>
                  Ogni progetto viene seguito con la massima cura tecnica, dall&apos;analisi delle
                  esigenze del cliente alla progettazione dell&apos;impianto, dalla realizzazione al
                  collaudo finale. L&apos;obiettivo è consegnare impianti sicuri, efficienti e
                  perfettamente conformi alle normative CEI vigenti.
                </p>
                <p>
                  La qualità di un impianto elettrico si misura nel tempo: per questo sono
                  disponibile per assistenza post-lavoro, manutenzione programmata e nuovi
                  interventi, con un contatto diretto con chi ha eseguito il lavoro.
                </p>
              </div>
            </div>

            {/* Real photo */}
            <div className="shadow-card overflow-hidden rounded-2xl">
              <Image
                alt="Il titolare di PowerVolt durante un sopralluogo su impianto elettrico"
                className="h-auto w-full"
                height={2048}
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/img/hero-technician.jpg"
                width={1536}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section aria-labelledby="values-heading" variant="muted">
        <Container>
          <h2
            className="mb-10 text-3xl font-extrabold text-neutral-900 md:text-4xl"
            id="values-heading"
          >
            Come Lavoro
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <CheckCircle aria-hidden className="text-brand-primary mt-0.5 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Contact variant="full" />
    </>
  );
}
