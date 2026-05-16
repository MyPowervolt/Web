---
name: Brand & Design Tokens
description: Confirmed color palette, typography, spacing, and shadow tokens for PowerVolt from globals.css and LogoPageS.svg
type: project
---

## Color palette (from globals.css @theme + LogoPageS.svg)

- `brand-primary`: `#e2aa0e` — amber gold (sinusoide wave + lightning bolt in logo)
- `brand-primary-hover`: `#c99a0c`
- `brand-primary-light`: `#fef3c7`
- `brand-secondary`: `#1a1a2e` — deep navy (confirmed dark background for header/hero)
- `brand-secondary-light`: `#2d2d4e`
- `brand-accent`: `#f0b400` — used in `.title` CSS class inside SVG
- `brand-white`: `#ffffff`
- `brand-off-white`: `#f2f2f2`

## Logo facts (public/LogoPageS.svg)

- Wordmark "POWERVOLT" is rendered in `#ffffff` (white) and `#f2f2f2`
- The sinusoidal wave / lightning bolt icon is `#e2aa0e` (brand-primary)
- Logo has a transparent background — MUST be placed on a dark surface
- Logo is invisible on white backgrounds — this was the primary header bug fixed

## Typography

- Font stack: `"Inter", "Montserrat", Arial, sans-serif`
- Tailwind v4 — all tokens in `@theme` block in `src/styles/globals.css`
- No separate `tailwind.config.ts` theme overrides — single source of truth is globals.css

## Tailwind version

- Tailwind v4 — `@theme` directive in CSS, no `theme.extend` in config
- Content auto-detection is on; config file is minimal

## Shadows

- `shadow-card`: soft card lift
- `shadow-brand-glow`: `0 0 24px rgba(226,170,14,0.25)` — amber glow on primary CTA hover

## Animations (keyframes in globals.css)

- `fade-in`: opacity 0→1, translateY 8px→0
- `slide-in`: translateX -100%→0
- Tailwind built-in `animate-ping` and `animate-pulse` also available

**Why:** Knowing these tokens prevents inventing values or checking the file every turn.

**How to apply:** Use these token names in all Tailwind class recommendations. Never hardcode hex values in className — use CSS custom property tokens instead (except for SVG/gradient `style` props where Tailwind cannot express the value).
