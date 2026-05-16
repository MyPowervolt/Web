---
name: Hero Design Decisions
description: Layered background system, trust badges, CTA treatments, and separator convention for the Hero section
type: project
---

## Background layer system (5 layers, back to front)

1. `bg-brand-secondary` on `<section>` — fallback color
2. Gradient overlay div: `linear-gradient(160deg, #1a1a2e 0%, #0f0f1e 55%, #080810 100%)` — navy to near-black
3. Circuit-dot texture: `radial-gradient(circle, #e2aa0e 1px, transparent 1px)` at 28px grid, `opacity-[0.07]` — PCB feel
4. Diagonal amber stripe: `linear-gradient(135deg, transparent 40%, #e2aa0e 40%)` at bottom-right, `opacity-[0.06]`
5. Amber glow orbs: bottom-right (`bg-brand-primary/20`, `blur-[80px]`) + top-left (`bg-brand-primary/10`, `blur-[60px]`)

Layers 3 & 4 use inline `style` props because Tailwind cannot express arbitrary gradient stop positions with CSS variables. This is the approved exception to the no-inline-styles rule.

## Typography improvements

- Headline: `text-4xl font-extrabold ... text-white md:text-5xl lg:text-6xl`
  - Replaced non-existent `text-mobile-h1` utility (was silently failing)
- Amber underline accent: `h-[3px] w-16 rounded-full bg-brand-primary` — sits between headline and subheadline
- Subheadline: `text-white/80` (was `text-neutral-300` — too faint on dark)
- Compliance micro-copy: `text-white/50` (was `text-neutral-500` — near-invisible)

## CTA treatments

- Primary wrapper: `<div className="relative inline-flex">` containing an `animate-ping` span + the Button
  - Pulse ring: `absolute inset-0 animate-ping rounded-xl bg-brand-primary opacity-20`
  - Respects `prefers-reduced-motion` via globals.css reduced-motion override
- Secondary (phone): `variant="secondary"` + `className="border-white/40 text-white hover:border-brand-primary hover:text-brand-primary"`
  - The base `secondary` variant uses `border-brand-primary` which reads poorly on dark — className override fixes this
- Tertiary (optional nav link): `text-white/60 hover:text-brand-primary hover:underline`

## Trust badges row

Three chips below CTAs, each: `border border-white/10 bg-white/5 px-3 py-2 rounded-lg`
- Certificati CEI — ShieldCheck icon
- DM 37/08 — FileCheck icon
- Oltre 500 impianti — Zap icon
All icons: `text-brand-primary h-4 w-4`
Badge text: `text-xs font-semibold uppercase tracking-wide text-white/60`

## Section separator

A `<div>` immediately after `</section>`: `h-[2px] w-full bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent`
Wrapped in a React fragment `<>` with the section. Adds a subtle amber hairline divider before the next section.

**Why:** The separator creates visual breathing room and echoes the header's amber accent line, reinforcing brand consistency.

**How to apply:** Any full-width dark section that transitions to a lighter section should use this separator pattern.
