"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";

const TIPI = [
  "Impianto industriale",
  "Quadro elettrico",
  "Automazione / PLC",
  "Impianto civile",
  "Domotica",
  "Reti dati",
  "Fibra ottica",
  "Fotovoltaico",
  "Videosorveglianza",
  "Illuminazione LED",
  "Wall box",
  "Automazioni B&B",
  "Citofono / videocitofono",
  "Postazione gaming",
  "Controllo accessi",
];

const BUDGETS = [
  "Sotto 1.000 €",
  "1.000 – 5.000 €",
  "5.000 – 25.000 €",
  "Oltre 25.000 €",
  "Da definire dopo il sopralluogo",
];

const STEPS = [
  { n: 1, label: "1 · Lavoro" },
  { n: 2, label: "2 · Investimento" },
  { n: 3, label: "3 · Contatto" },
];

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState("");
  const [budget, setBudget] = useState("");
  const [nome, setNomeV] = useState("");
  const [tel, setTelV] = useState("");
  const [email, setEmailV] = useState("");
  const [msg, setMsgV] = useState("");
  const [hp, setHpV] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const tipi = TIPI.map((t) => ({
    label: t,
    cls: tipo === t ? "opt on" : "opt",
    pick: () => setTipo(t),
  }));
  const budgets = BUDGETS.map((t) => ({
    label: t,
    cls: budget === t ? "opt on" : "opt",
    pick: () => setBudget(t),
  }));
  const lowBudget = budget === "Sotto 1.000 €";
  const stepBar = STEPS.map((b) => ({
    label: b.label,
    bar: step >= b.n ? "#FFC21A" : "#2F353D",
    txt: step >= b.n ? "#FFC21A" : "#8A9099",
  }));

  const text =
    "Buongiorno, sono " + (nome || "[nome]") + ". Vorrei richiedere un sopralluogo per: " + (tipo || "impianto elettrico") +
    ". Fascia indicativa: " + (budget || "da definire") + "." + (msg ? " " + msg : "") +
    " Recapiti: " + tel + " " + email;
  const waHref = "https://wa.me/393932826533?text=" + encodeURIComponent(text);

  const sending = status === "sending";
  const sent = status === "sent";
  const err = status === "error";

  async function submit() {
    if (sending) return;
    if (!nome.trim() || (!tel.trim() && !email.trim())) {
      setErrMsg("Inserisci il tuo nome e almeno un recapito (telefono o email).");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/sopralluogo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, budget, nome, tel, email, msg, sito: hp }),
      });
      if (!res.ok) throw new Error("http " + res.status);
      setStatus("sent");
    } catch {
      setErrMsg("Non sono riuscito a inviare la richiesta.");
      setStatus("error");
    }
  }

  const s1 = step === 1;
  const s2 = step === 2;
  const s3 = step === 3;
  const notSent = !sent;
  const n1cls = tipo ? "btn btn-p" : "btn btn-p dis";
  const n2cls = budget ? "btn btn-p" : "btn btn-p dis";
  const next1 = () => {
    if (tipo) setStep(2);
  };
  const next2 = () => {
    if (budget) setStep(3);
  };
  const back2 = () => setStep(1);
  const back3 = () => setStep(2);
  const sendCls = sending ? "btn btn-p dis" : "btn btn-p";
  const sendLabel = sending ? "Invio in corso…" : "Invia richiesta";
  const setNome = (e: React.ChangeEvent<HTMLInputElement>) => setNomeV(e.target.value);
  const setTel = (e: React.ChangeEvent<HTMLInputElement>) => setTelV(e.target.value);
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmailV(e.target.value);
  const setMsg = (e: React.ChangeEvent<HTMLInputElement>) => setMsgV(e.target.value);
  const setHp = (e: React.ChangeEvent<HTMLInputElement>) => setHpV(e.target.value);

  return (
    <section id="sopralluogo" className="wrap" style={{ paddingTop: "112px", paddingBottom: "112px" }}><div style={{ display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "flex-start" }}><div style={{ flex: "1 1 380px", minWidth: "0" }}><div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFC21A" }}>Richiedi un sopralluogo</div><h2 className="disp h2" style={{ margin: "14px 0 0", fontSize: "64px", lineHeight: "1.02" }}>Raccontami il progetto. Ti rispondo di persona.</h2><p style={{ margin: "24px 0 0", color: "#B6BBC2" }}>Tre passaggi, meno di due minuti. Mi servono per capire se e come posso esserti utile, e per arrivare al sopralluogo già preparato.</p><div style={{ marginTop: "32px", padding: "20px 24px", borderLeft: "4px solid #FFC21A", background: "#12151A", fontSize: "16px", color: "#B6BBC2", lineHeight: "1.55" }}>Mi occupo di impianti e interventi strutturati, su progetto. Lavoro con chi cerca un impianto fatto bene e che duri, non il prezzo più basso.</div><div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "17px" }}><span className="" style={{ display: "inline-flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}><a className="phbtn" href="tel:+393932826533" aria-label="Chiama PowerVolt al +39 393 282 6533"><svg viewBox="0 0 24 24" width="20" height="20" fill="#FFC21A" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>+39 393 282 6533</a><a className="wapill" href="https://wa.me/393932826533" target="_blank" rel="noopener" aria-label="Scrivimi su WhatsApp"><svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>WhatsApp</a></span><a href="mailto:info@powervolt.it" style={{ color: "#B6BBC2" }}>info@powervolt.it</a><span style={{ color: "#8A9099", fontSize: "15px" }}>Lunedì–Venerdì 08:00–17:00 · Sabato e domenica su appuntamento</span></div></div><div style={{ flex: "1 1 480px", minWidth: "0", background: "#12151A", border: "1px solid #232930", padding: "40px" }}><div style={{ display: "flex", gap: "10px", marginBottom: "32px" }}>{stepBar.map((b, __i) => (<Fragment key={__i}><div style={{ flex: "1", minWidth: "0" }}><div style={{ height: "4px", background: "{{b.bar}}" }}></div><div className="stl" style={{ marginTop: "8px", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "{{b.txt}}" }}>{b.label}</div></div></Fragment>))}</div>{s1 ? (<><div><h3 className="disp" style={{ margin: "0 0 20px", fontSize: "32px", lineHeight: "1.1" }}>Di che lavoro si tratta?</h3><div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>{tipi.map((t, __i) => (<Fragment key={__i}><button className={t.cls} onClick={t.pick}>{t.label}</button></Fragment>))}</div><div style={{ marginTop: "32px" }}><button className={n1cls} onClick={next1}>Avanti <span className="arrow">→</span></button></div></div></>) : null}{s2 ? (<><div><h3 className="disp" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1" }}>Quale investimento hai in mente?</h3><p style={{ margin: "0 0 20px", fontSize: "16px", color: "#A3A8AF" }}>Una fascia indicativa: mi serve per dimensionare bene la proposta.</p><div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>{budgets.map((t, __i) => (<Fragment key={__i}><button className={t.cls} onClick={t.pick}>{t.label}</button></Fragment>))}</div>{lowBudget ? (<><div style={{ marginTop: "20px", padding: "16px 18px", border: "1px solid #5A4A12", background: "#1B1A10", fontSize: "16px", lineHeight: "1.55", color: "#E8D9A0" }}>Nessun problema: ogni progetto parte da un sopralluogo e da una valutazione onesta. Vai avanti e raccontami cosa ti serve: ti dico con chiarezza come impostarlo al meglio.</div></>) : null}<div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}><button className="btn btn-g" onClick={back2}>Indietro</button><button className={n2cls} onClick={next2}>Avanti <span className="arrow">→</span></button></div></div></>) : null}{s3 ? (<>{sent ? (<><div role="status" style={{ padding: "8px 0" }}><h3 className="disp" style={{ margin: "0 0 12px", fontSize: "32px", lineHeight: "1.1", color: "#FFC21A" }}>Richiesta ricevuta.</h3><p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#B6BBC2" }}>{"Ti ricontatto di persona appena possibile, di solito entro il giorno lavorativo successivo. Per un'urgenza chiamami direttamente."}</p><div style={{ marginTop: "24px" }}><a className="btn btn-p" href="tel:+393932826533">Chiama +39 393 282 6533</a></div></div></>) : null}{notSent ? (<><div><h3 className="disp" style={{ margin: "0 0 20px", fontSize: "32px", lineHeight: "1.1" }}>Come ti ricontatto?</h3><div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><div><label htmlFor="f-nome" style={{ display: "block", marginBottom: "6px", fontSize: "15px", color: "#B6BBC2" }}>Nome e azienda</label><input id="f-nome" className="field" type="text" value={nome} onChange={setNome} /></div><div><label htmlFor="f-tel" style={{ display: "block", marginBottom: "6px", fontSize: "15px", color: "#B6BBC2" }}>Telefono</label><input id="f-tel" className="field" type="tel" value={tel} onChange={setTel} /></div><div><label htmlFor="f-email" style={{ display: "block", marginBottom: "6px", fontSize: "15px", color: "#B6BBC2" }}>Email</label><input id="f-email" className="field" type="email" value={email} onChange={setEmail} /></div><div><label htmlFor="f-msg" style={{ display: "block", marginBottom: "6px", fontSize: "15px", color: "#B6BBC2" }}>Dove e cosa serve, in due righe</label><input id="f-msg" className="field" type="text" value={msg} onChange={setMsg} /></div></div><div style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true"><label>Sito web<input type="text" tabIndex="-1" autoComplete="off" value={hp} onChange={setHp} /></label></div>{err ? (<><p role="alert" style={{ margin: "20px 0 0", padding: "14px 16px", border: "1px solid #5A4A12", background: "#1B1A10", fontSize: "15px", lineHeight: "1.5", color: "#E8D9A0" }}>{errMsg} <a href={waHref} style={{ textDecoration: "underline" }}>Scrivimi su WhatsApp</a>.</p></>) : null}<div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px" }}><button className="btn btn-g" onClick={back3}>Indietro</button><button className={sendCls} onClick={submit} disabled={sending}>{sendLabel} <span className="arrow">→</span></button><a className="btn btn-g" href={waHref}>Oppure su WhatsApp</a></div><p style={{ margin: "20px 0 0", fontSize: "14px", color: "#8A9099" }}>Inviando la richiesta accetti che i dati siano usati solo per ricontattarti. Maggiori dettagli nella <a href="/privacy-policy" style={{ textDecoration: "underline" }}>Privacy Policy</a>.</p></div></>) : null}</>) : null}</div></div></section>
  );
}
