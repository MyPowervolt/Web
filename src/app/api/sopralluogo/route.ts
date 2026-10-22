import { NextResponse } from "next/server";

/**
 * Invio della richiesta di sopralluogo via email.
 *
 * Variabili d'ambiente (da impostare su Netlify):
 *   RESEND_API_KEY      chiave API di Resend (obbligatoria)
 *   CONTACT_TO_EMAIL    destinatario (default: info@powervolt.it)
 *   CONTACT_FROM_EMAIL  mittente verificato su Resend (default: onboarding@resend.dev, solo per prove)
 */

export const runtime = "nodejs";

const MAX = { short: 120, long: 1500 };
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Campo trappola per i robot: se è compilato fingiamo che sia andata bene.
  if (clean(data.sito, MAX.short)) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0]?.trim() ?? "unknown";
  if (tooMany(ip)) return NextResponse.json({ ok: false }, { status: 429 });

  const nome = clean(data.nome, MAX.short);
  const tel = clean(data.tel, 40);
  const email = clean(data.email, MAX.short);
  const tipo = clean(data.tipo, MAX.short);
  const budget = clean(data.budget, MAX.short);
  const msg = clean(data.msg, MAX.long);

  if (!nome || (!tel && !email)) return NextResponse.json({ ok: false }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false }, { status: 503 });

  const lines = [
    `Nome: ${nome}`,
    `Telefono: ${tel || "-"}`,
    `Email: ${email || "-"}`,
    `Lavoro: ${tipo || "-"}`,
    `Fascia indicativa: ${budget || "-"}`,
    `Note: ${msg || "-"}`,
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Sito PowerVolt <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "info@powervolt.it"],
      reply_to: email || undefined,
      subject: `Richiesta sopralluogo: ${tipo || "impianto elettrico"}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  return NextResponse.json({ ok: true });
}
