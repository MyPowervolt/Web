---
name: PowerVolt Architecture & Design System
description: Section variants, color tokens, component patterns, contrast risks, and known bugs found during initial audit
type: project
---

## Color Tokens (globals.css @theme)
- brand-primary: #e2aa0e (amber gold)
- brand-primary-light: #fef3c7 (very light amber — used as `brand` section bg)
- brand-secondary: #1a1a2e (dark navy)
- neutral-100: #f3f4f6 (muted section bg)

## Section Variants (Section.tsx)
- light: bg-white text-neutral-900
- muted: bg-neutral-100 text-neutral-900
- dark: bg-brand-secondary text-white
- brand: bg-brand-primary-light text-neutral-900

## Known Contrast Failures (audit 2026-05-11)
- Stats.tsx: text-brand-primary (#e2aa0e) stat values on brand section (bg #fef3c7) — ~2.1:1, fails WCAG AA even for large text
- ContactCta.tsx + Contact.tsx: variant="secondary" Button (amber border + amber text) on brand section background — same ~2.1:1 failure
- Stats.tsx: Badge variant="dark" inside brand section is fine (dark bg, amber text)

## Known Logic/Accessibility Bugs (audit 2026-05-11)
- Header.tsx line 33: aria-expanded="false" is hardcoded on CSS-hover dropdown — never reflects actual open state, fails WCAG 4.1.2
- Header.tsx line 250: mobile drawer top-16 (4rem) does not account for lg:h-20 (5rem) header — drawer mis-positioned at lg breakpoint
- not-found.tsx: root <section> has no aria-label or aria-labelledby
- Contact.tsx and ContactCta.tsx both use id="contact-cta-heading" — duplicate IDs if both rendered on same page

## Component Patterns
- Button: polymorphic (as="button"|"link"|"a"), variants: primary/secondary/ghost/link
- Section: variant + padding props; always wrap content in Container
- Badge: variant="brand" = amber bg / dark text (good on dark sections); variant="dark" = dark bg / amber text
- aria-hidden on decorative icons: mix of aria-hidden (no value) and aria-hidden="true" — both work in React but inconsistent

## Pages & Section Sequences
- Homepage: Hero(dark) > Services > WhyUs(dark) > About teaser(light) > Testimonials(light) > FAQ(muted) > Contact(brand)
- Chi Siamo: dark header > light breadcrumb > light company desc > muted values > Contact(brand)
- Contatti: dark header > light breadcrumb > light form+info
- 404: bare <section> (no Section component), light bg

## Placeholder / Pre-launch Risks
- Stats variant="full" shows "—" placeholder values (Anni di Esperienza, Impianti Realizzati)
- Testimonials: all three are placeholder data with "Cliente A/B/C"
- Contact form is a visual placeholder (Phase 2)
- Phone, email, address, business hours all sourced from SITE_CONFIG placeholders
