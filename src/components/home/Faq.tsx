"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";

const faqDefs = [
  { q: "Quanto costa un impianto?", a: "Dipende dal progetto, per questo parto sempre da un sopralluogo. Dopo la valutazione sul posto ricevi una proposta con soluzione, tempi e costi definiti, prima che parta qualsiasi lavoro." },
  { q: "Rilasciate la dichiarazione di conformità?", a: "Sì. Al termine di ogni intervento rilascio la dichiarazione di conformità (DiCo) prevista dal DM 37/08, che certifica la realizzazione a norma dell'impianto." },
  { q: "Lavorate per privati e per aziende?", a: "Sì. Realizzo impianti per aziende e ambienti industriali (capannoni, stabilimenti, uffici) e per privati (abitazioni, appartamenti, ville)." },
  { q: "Installate anche sistemi domotici?", a: "Sì. Progetto e installo sistemi domotici per luci, climatizzazione e tapparelle, sia in nuove costruzioni che in ristrutturazioni." },
  { q: "Come si richiede un sopralluogo?", a: "Puoi usare il modulo qui sopra, scrivermi su WhatsApp o chiamarmi. Ogni lavoro richiede una valutazione diretta sul posto prima di proporre qualsiasi soluzione." },
];

export const FAQ_ITEMS = faqDefs;

export function Faq() {
  const [open, setOpen] = useState(0);
  const faqs = faqDefs.map((f, i) => {
    const isOpen = open === i;
    return { q: f.q, a: f.a, open: isOpen, icon: isOpen ? "−" : "+", pick: () => setOpen(isOpen ? -1 : i) };
  });

  return (
    <section id="faq" style={{ background: "#0E1014", borderTop: "1px solid #1D2127" }}><div className="wrap" style={{ paddingTop: "112px", paddingBottom: "112px", display: "flex", flexWrap: "wrap", gap: "64px" }}><div style={{ flex: "1 1 320px", minWidth: "0" }}><div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFC21A" }}>Domande frequenti</div><h2 className="disp h2" style={{ margin: "14px 0 0", fontSize: "64px", lineHeight: "1.02" }}>Prima di chiamare.</h2></div><div style={{ flex: "2 1 560px", minWidth: "0" }}>{faqs.map((f, __i) => (<Fragment key={__i}><div><button className="faqb" onClick={f.pick} aria-expanded={f.open}><span>{f.q}</span><span className="faqi">{f.icon}</span></button>{f.open ? (<><p style={{ margin: "0", padding: "20px 56px 28px 0", color: "#B6BBC2" }}>{f.a}</p></>) : null}</div></Fragment>))}</div></div></section>
  );
}
