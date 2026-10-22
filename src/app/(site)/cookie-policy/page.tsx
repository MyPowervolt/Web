import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie sul sito powervolt.it.",
  canonical: `${SEO_CONFIG.siteUrl}/cookie-policy`,
});

export default function CookiePolicyPage() {
  return (
    <Container size="narrow" className="py-16">
      <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
      <p className="text-sm opacity-70 mb-8">Ultimo aggiornamento: ottobre 2026</p>
      <div className="space-y-4 leading-relaxed">
        <p>
          Il sito powervolt.it non usa cookie di profilazione né strumenti di statistica o
          pubblicità di terze parti. Per questo non viene mostrato alcun banner di consenso.
        </p>
        <p>
          Il sito può usare esclusivamente cookie o memorizzazioni tecniche strettamente necessarie
          al funzionamento (ad esempio per la sicurezza e la consegna delle pagine da parte
          dell&apos;hosting), che non richiedono consenso ai sensi dell&apos;art. 122 del Codice
          Privacy.
        </p>
        <p>
          Se in futuro verranno aggiunti strumenti di analisi o servizi di terze parti (come
          mappe o video incorporati), questa informativa sarà aggiornata e verrà richiesto il tuo
          consenso prima della loro attivazione.
        </p>
        <p>
          Per domande scrivi a{" "}
          <a className="underline" href="mailto:info@powervolt.it">info@powervolt.it</a>. Per i
          dati personali trattati tramite il modulo di contatto vedi la{" "}
          <a className="underline" href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </Container>
  );
}
