"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import { ILLUSTRATIONS } from "./ServiceIllustrations";

const services = [
  { key: "ind", n: "01", tag: "Industria", title: "Impianti industriali", text: "Capannoni, stabilimenti e ambienti produttivi. Progettazione, installazione e manutenzione secondo normative CEI.", href: "/servizi/impianti-elettrici-industriali" },
  { key: "qua", n: "02", tag: "Industria", title: "Quadri elettrici", text: "Progettazione e costruzione di quadri di distribuzione, automazione e bordo macchina, civili e industriali.", href: "/servizi/quadri-elettrici" },
  { key: "aut", n: "03", tag: "Industria", title: "Automazioni", text: "Cancelli, porte, barriere, PLC e controllo motori, per edifici e impianti industriali.", href: "/servizi/automazioni" },
  { key: "civ", n: "04", tag: "Civile", title: "Impianti civili", text: "Abitazioni, condomini e uffici. Progettazione e realizzazione conformi a normative CEI e DM 37/08.", href: "/servizi/impianti-elettrici-civili" },
  { key: "dom", n: "05", tag: "Civile", title: "Domotica", text: "Controllo intelligente di luci, climatizzazione e tapparelle, con attenzione al risparmio energetico.", href: "/servizi/domotica" },
  { key: "rete", n: "06", tag: "Industria · Civile", title: "Reti dati e fibra ottica", text: "Cablaggio strutturato Cat.6 e Cat.6A, dorsali in fibra ottica, reti LAN e Wi-Fi, rack e patch panel.", href: "/servizi/reti-dati" },
  { key: "fv", n: "07", tag: "Industria · Civile", title: "Fotovoltaico", text: "Impianti fotovoltaici per aziende e abitazioni, dimensionati sui consumi reali e integrati con l'impianto elettrico, per ridurre i costi energetici.", href: "/servizi/fotovoltaico" },
  { key: "cam", n: "08", tag: "Industria · Civile", title: "Videosorveglianza", text: "Telecamere IP, videoregistrazione e consultazione da remoto per proteggere aziende, abitazioni e strutture.", href: "/servizi/videosorveglianza" },
  { key: "bnb", n: "09", tag: "Ospitalità", title: "Automazioni B&B", text: "Self check-in, serrature elettroniche, gestione di luci e clima per camera: accoglienza autonoma e meno costi di gestione per B&B e strutture ricettive.", href: "/servizi/automazioni-bb" },
  { key: "led", n: "10", tag: "Industria · Civile", title: "Illuminazione LED", text: "Illuminazione LED industriale e residenziale: progetto illuminotecnico, efficienza energetica e comfort visivo, con regolazione e automazione integrate.", href: "/servizi/illuminazione-led" },
  { key: "wb", n: "11", tag: "Mobilità elettrica", title: "Wall box", text: "Installazione di wall box per la ricarica di auto elettriche in casa, in azienda e nelle strutture ricettive, con impianto dimensionato e a norma.", href: "/servizi/wall-box" },
  { key: "cit", n: "12", tag: "Industria · Civile", title: "Citofoni e videocitofoni", text: "Impianti citofonici e videocitofonici per abitazioni, condomini e aziende: chi suona lo vedi, gli parli e apri anche da remoto.", href: "/servizi/citofoni-videocitofoni" },
  { key: "gm", n: "13", tag: "Civile · Gaming", title: "Postazioni gaming e setup", text: "Linee dedicate, rete cablata a bassa latenza, cavi in ordine e illuminazione scenografica per la tua postazione gaming o streaming.", href: "/servizi/postazioni-gaming" },
  { key: "acc", n: "14", tag: "Industria · Civile", title: "Controllo accessi", text: "Badge, tastiere, lettori biometrici, tornelli e serrature elettroniche: decidi chi entra, dove e quando, con il registro di ogni accesso.", href: "/servizi/controllo-accessi" },
];

function tiltMove(e: React.MouseEvent<HTMLElement>) {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
  const py = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
  el.style.transform =
    "perspective(1100px) translateY(-12px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg) scale(1.035)";
}

function tiltEnd(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "";
}

export function Services() {
  return (
    <section id="servizi" style={{ background: "#0E1014", borderTop: "1px solid #1D2127", borderBottom: "1px solid #1D2127" }}><div className="wrap" style={{ paddingTop: "112px", paddingBottom: "112px" }}><div style={{ maxWidth: "760px" }}><div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#FFC21A" }}>Servizi</div><h2 className="disp h2" style={{ margin: "14px 0 0", fontSize: "64px", lineHeight: "1.02" }}>{"Tutto l'impianto, sotto un'unica regia."}</h2><p style={{ margin: "20px 0 0", color: "#B6BBC2" }}>Dalla progettazione alla realizzazione: un solo interlocutore, nessuno scarico di responsabilità tra ditte diverse.</p></div><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "24px", marginTop: "56px" }}>{services.map((s, __i) => (<Fragment key={__i}><Link className="card t3d" onMouseMove={tiltMove} onMouseLeave={tiltEnd} href={s.href} style={{ flex: "1 1 340px", minWidth: "0", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "16px" }}><span className="storm" aria-hidden="true"><svg viewBox="0 0 300 110" preserveAspectRatio="none"><g className="a"><path className="base" pathLength="1" d="M62 0 C54 26 76 44 60 68 S46 94 42 110" /><path className="base" pathLength="1" d="M150 0 C142 30 160 52 148 76 S154 98 150 110" /><path className="base" pathLength="1" d="M238 0 C246 26 224 44 240 68 S254 94 258 110" /><path className="fork" pathLength="1" d="M60 68 C74 78 86 84 96 104" /><path className="fork" pathLength="1" d="M240 68 C226 78 214 84 204 104" /><path className="part" d="M62 0 C54 26 76 44 60 68 S46 94 42 110" /><path className="part" d="M150 0 C142 30 160 52 148 76 S154 98 150 110" /><path className="part" d="M238 0 C246 26 224 44 240 68 S254 94 258 110" /></g><g className="b"><path className="base" pathLength="1" d="M62 0 C70 24 50 46 64 70 S50 96 44 110" /><path className="base" pathLength="1" d="M150 0 C158 28 140 54 152 78 S146 100 150 110" /><path className="base" pathLength="1" d="M238 0 C230 24 252 46 236 70 S250 96 256 110" /><path className="fork" pathLength="1" d="M64 70 C50 80 40 88 30 104" /><path className="fork" pathLength="1" d="M236 70 C250 80 262 86 272 104" /><path className="part" d="M62 0 C70 24 50 46 64 70 S50 96 44 110" /><path className="part" d="M150 0 C158 28 140 54 152 78 S146 100 150 110" /><path className="part" d="M238 0 C230 24 252 46 236 70 S250 96 256 110" /></g></svg></span><div className="stage" aria-hidden="true"><span className="ico">{ILLUSTRATIONS[s.key]}</span></div><div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}><span className="disp" style={{ fontSize: "20px", color: "#FFC21A", letterSpacing: ".1em" }}>{s.n}</span><span style={{ fontSize: "14px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8A9099" }}>{s.tag}</span></div><h3 className="disp" style={{ margin: "0", fontSize: "34px", lineHeight: "1.05" }}>{s.title}</h3><p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#B6BBC2" }}>{s.text}</p></Link></Fragment>))}</div></div></section>
  );
}
