"use client";

import { useState } from "react";
import { LampArt } from "./LampArt";
import { SvgDefs } from "./SvgDefs";

/**
 * Contenitore della homepage: gradienti SVG condivisi e "luce che segue il cursore"
 * (solo desktop, disattivabile con il pulsante in basso a sinistra).
 */
export function LightShell({ children }: { children: React.ReactNode }) {
  const [lamp, setLamp] = useState(true);

  function lightMove(e: React.MouseEvent<HTMLDivElement>) {
    const root = e.currentTarget;
    let hot = 0;
    const target = e.target as Element | null;
    if (target && target.closest && target.closest("a,button,input,.opt,.tab,.faqb")) hot = 1;
    root.style.setProperty("--lx", e.clientX + "px");
    root.style.setProperty("--ly", e.clientY + "px");
    root.style.setProperty("--hot", String(hot));
    root.style.setProperty("--r", hot ? "440px" : "380px");
  }

  function lightOut(e: React.MouseEvent<HTMLDivElement>) {
    const root = e.currentTarget;
    root.style.setProperty("--lx", "-600px");
    root.style.setProperty("--ly", "-600px");
  }

  return (
    <div
      className={lamp ? "pv root lamp-on" : "pv root"}
      style={{
        width: "100%",
        overflowX: "clip",
        background: "#0B0D10",
        color: "#EDEAE4",
        fontFamily: "var(--font-barlow), sans-serif",
        fontSize: "18px",
        lineHeight: 1.6,
      }}
      onMouseLeave={lightOut}
      onMouseMove={lightMove}
    >
      <SvgDefs />
      <div aria-hidden="true" className="shade" />
      <div aria-hidden="true" className="bulb">
        <LampArt />
      </div>
      <button
        aria-label="Luce che segue il cursore"
        aria-pressed={lamp}
        className="lampbtn"
        type="button"
        onClick={() => setLamp((v) => !v)}
      >
        <span style={{ display: "inline-block", width: "20px", height: "20px" }}>
          <LampArt />
        </span>
        <span>{lamp ? "Luce: on" : "Luce: off"}</span>
      </button>
      {children}
    </div>
  );
}
