/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

const trust = [
  { big: "DM 37/08", small: "Dichiarazione di conformità su ogni impianto" },
  { big: "Norme CEI", small: "Impianti realizzati nel pieno rispetto della normativa" },
  { big: "Certificati", small: "Solo materiali e componenti certificati" },
  { big: "Il titolare", small: "Un unico referente, dal sopralluogo al collaudo" },
];

export function TrustBar() {
  return (
    <section style={{ background: "#12151A", borderTop: "1px solid #232930", borderBottom: "1px solid #232930" }}><div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "0", paddingTop: "0", paddingBottom: "0" }}>{trust.map((t, __i) => (<Fragment key={__i}><div style={{ flex: "1 1 260px", padding: "28px 24px", borderRight: "1px solid #232930" }}><div className="disp" style={{ fontSize: "28px", color: "#FFC21A", lineHeight: "1.1" }}>{t.big}</div><div style={{ marginTop: "4px", fontSize: "16px", color: "#B6BBC2", lineHeight: "1.45" }}>{t.small}</div></div></Fragment>))}</div></section>
  );
}
