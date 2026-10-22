/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

const steps = [
  { n: "01", title: "Sopralluogo tecnico", text: "Valuto sul posto esigenze, vincoli e stato dell'esistente. È il punto di partenza di ogni lavoro." },
  { n: "02", title: "Proposta chiara", text: "Ricevi una proposta con soluzione, tempi e costi definiti, prima che parta qualsiasi attività." },
  { n: "03", title: "Realizzazione", text: "Eseguo i lavori con materiali certificati e rispetto dei tempi concordati, con la gestione precisa del cantiere." },
  { n: "04", title: "Collaudo e assistenza", text: "Rilascio la DiCo come previsto dal DM 37/08 e resto a disposizione per manutenzione e interventi futuri." },
];

export function Method() {
  return (
    <section id="metodo" style={{ background: "#ECE8E1", color: "#14161A" }}><div className="wrap" style={{ paddingTop: "112px", paddingBottom: "112px" }}><div style={{ maxWidth: "820px" }}><div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#6B4E00" }}>Metodo</div><h2 className="disp h2" style={{ margin: "14px 0 0", fontSize: "64px", lineHeight: "1.02" }}>Ogni lavoro parte da un sopralluogo. Sempre.</h2><p style={{ margin: "20px 0 0", color: "#3E444B" }}>Non quoto a distanza e non improvviso. Prima valuto sul posto, poi propongo: è il modo in cui si evitano errori, ritardi e costi imprevisti.</p></div><div style={{ display: "flex", flexWrap: "wrap", gap: "0", marginTop: "64px", borderTop: "2px solid #14161A" }}>{steps.map((s, __i) => (<Fragment key={__i}><div style={{ flex: "1 1 260px", minWidth: "0", padding: "32px 28px 8px 0" }}><div className="disp" style={{ fontSize: "64px", lineHeight: "1", color: "#14161A" }}>{s.n}</div><div style={{ width: "48px", height: "4px", background: "#FFC21A", margin: "16px 0" }} /><h3 className="disp" style={{ margin: "0", fontSize: "30px", lineHeight: "1.1" }}>{s.title}</h3><p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.55", color: "#3E444B" }}>{s.text}</p></div></Fragment>))}</div></div></section>
  );
}
