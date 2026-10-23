"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";

const TABS = [
  { id: "ind", label: "Industria e aziende" },
  { id: "civ", label: "Abitazioni" },
  { id: "bnb", label: "B&B e ospitalità" },
] as const;

type Aud = (typeof TABS)[number]["id"];

export function Commitment() {
  const [aud, setAud] = useState<Aud>("ind");
  const audTabs = TABS.map((t) => ({
    label: t.label,
    cls: aud === t.id ? "tab on" : "tab",
    pick: () => setAud(t.id),
  }));
  const isInd = aud === "ind";
  const isCiv = aud === "civ";
  const isBnb = aud === "bnb";

  return (
    <section className="wrap" style={{ paddingTop: "112px", paddingBottom: "112px" }}><div style={{ maxWidth: "980px" }}><div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFC21A" }}>Il mio impegno</div><h2 className="disp h2" style={{ margin: "14px 0 0", fontSize: "64px", lineHeight: "1.02" }}>Ogni impianto lo realizzo e lo firmo come se fosse casa mia.</h2></div><div style={{ marginTop: "40px", fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#8A9099" }}>Per chi lavoro</div><div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "14px" }}>{audTabs.map((t, __i) => (<Fragment key={__i}><button className={t.cls} onClick={t.pick}>{t.label}</button></Fragment>))}</div>{isInd ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "48px", marginTop: "40px", padding: "48px", background: "#12151A", border: "1px solid #232930" }}><div style={{ flex: "1 1 440px", minWidth: "0", maxWidth: "760px" }}><h3 className="disp" style={{ margin: "0", fontSize: "44px", lineHeight: "1.05" }}>Continuità produttiva, sicurezza, norme.</h3><p style={{ margin: "20px 0 0", color: "#B6BBC2" }}>{"Capannoni, stabilimenti, uffici e linee produttive. Impianti pensati per ridurre i fermi, rispettare le norme e crescere insieme all'azienda, con quadri e automazione costruiti su misura."}</p><div style={{ marginTop: "32px" }}><a className="btn btn-p" href="#sopralluogo">Parliamo del tuo stabilimento <span className="arrow">→</span></a></div></div></div></>) : null}{isCiv ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "48px", marginTop: "40px", padding: "48px", background: "#12151A", border: "1px solid #232930" }}><div style={{ flex: "1 1 440px", minWidth: "0", maxWidth: "760px" }}><h3 className="disp" style={{ margin: "0", fontSize: "44px", lineHeight: "1.05" }}>{"Case in cui l'impianto è invisibile e perfetto."}</h3><p style={{ margin: "20px 0 0", color: "#B6BBC2" }}>{"Ville, appartamenti e ristrutturazioni importanti: un impianto ordinato, sicuro e pensato fin dall'inizio per l'uso quotidiano, con domotica e automazioni integrate dove servono."}</p><div style={{ marginTop: "32px" }}><a className="btn btn-p" href="#sopralluogo">Parliamo della tua casa <span className="arrow">→</span></a></div></div></div></>) : null}{isBnb ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "48px", marginTop: "40px", padding: "48px", background: "#12151A", border: "1px solid #232930" }}><div style={{ flex: "1 1 440px", minWidth: "0", maxWidth: "760px" }}><h3 className="disp" style={{ margin: "0", fontSize: "44px", lineHeight: "1.05" }}>Accoglienza autonoma, ospiti più soddisfatti.</h3><p style={{ margin: "20px 0 0", color: "#B6BBC2" }}>{"Per B&B, affittacamere e piccole strutture ricettive: automazioni che rendono possibile il check-in autonomo e la gestione di luci e clima camera per camera, con meno presenza fisica e più continuità del servizio."}</p><div style={{ marginTop: "32px" }}><a className="btn btn-p" href="#sopralluogo">Parliamo della tua struttura <span className="arrow">→</span></a></div></div></div></>) : null}</section>
  );
}
