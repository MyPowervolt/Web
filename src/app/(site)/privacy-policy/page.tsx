import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di PowerVolt ai sensi del Regolamento UE 2016/679 (GDPR).",
  canonical: `${SEO_CONFIG.siteUrl}/privacy-policy`,
});

export default function PrivacyPolicyPage() {
  return (
    <Container size="narrow" className="py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm opacity-70 mb-8">Ultimo aggiornamento: ottobre 2026</p>
      <div className="space-y-4 leading-relaxed">
        <h2 className="text-xl font-semibold pt-4">Titolare del trattamento</h2>
        <p>
          PowerVolt, 40069 Zola Predosa (BO) — P.IVA 04351091204 — email{" "}
          <a className="underline" href="mailto:info@powervolt.it">info@powervolt.it</a> — PEC
          amministrazione@pec.powervolt.it — tel. +39 393 282 6533.
        </p>
        <h2 className="text-xl font-semibold pt-4">Dati trattati e finalità</h2>
        <p>
          Quando compili il modulo &ldquo;Richiedi un sopralluogo&rdquo; raccogliamo: nome (ed
          eventuale azienda), telefono, email, tipo di lavoro, fascia di investimento indicativa
          e il testo del messaggio. Li usiamo solo per rispondere alla tua richiesta, preparare un
          sopralluogo o un preventivo e gestire i rapporti precontrattuali e contrattuali.
        </p>
        <p>
          Se scegli di scrivere via WhatsApp o di telefonare, i dati che ci comunichi sono trattati
          con la stessa finalità e secondo le condizioni del servizio che usi.
        </p>
        <h2 className="text-xl font-semibold pt-4">Base giuridica</h2>
        <p>
          Esecuzione di misure precontrattuali richieste da te (art. 6.1.b GDPR) e, per gli
          obblighi fiscali e contabili, obbligo di legge (art. 6.1.c).
        </p>
        <h2 className="text-xl font-semibold pt-4">Conservazione</h2>
        <p>
          Le richieste non seguite da un incarico sono conservate per il tempo necessario a
          rispondere e comunque non oltre 24 mesi. I dati relativi a lavori eseguiti sono conservati
          per i termini previsti dalla legge (di norma 10 anni).
        </p>
        <h2 className="text-xl font-semibold pt-4">Destinatari</h2>
        <p>
          I dati non sono venduti né diffusi. Possono essere trattati da fornitori che erogano
          servizi tecnici al sito (hosting e invio email), nominati responsabili del trattamento,
          e da consulenti fiscali o professionisti incaricati.
        </p>
        <h2 className="text-xl font-semibold pt-4">I tuoi diritti</h2>
        <p>
          Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opporti al
          trattamento scrivendo a{" "}
          <a className="underline" href="mailto:info@powervolt.it">info@powervolt.it</a>. Hai
          inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
          (www.garanteprivacy.it).
        </p>
      </div>
    </Container>
  );
}
