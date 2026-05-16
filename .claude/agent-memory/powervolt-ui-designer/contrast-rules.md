---
name: Contrast Rules — Section Background vs Button Pairing
description: Established rules for which Section variant to pair with which Button variant to ensure readable contrast
type: project
---

Never pair `variant="brand"` (bg-brand-primary-light, `#fef3c7` amber) with `variant="primary"` buttons (bg-brand-primary `#e2aa0e`) or `variant="secondary"` buttons (border-brand-primary, text-brand-primary). Both pairings produce near-zero contrast (amber on amber).

**Why:** Visual cleanup pass on 2026-05-11 revealed that Contact, ContactCta, and Stats all had amber buttons on amber backgrounds, making CTAs functionally invisible.

**How to apply:**
- CTA sections that need prominent buttons: use `variant="dark"` (navy) — amber primary and secondary both read clearly on navy.
- CTA sections where ambient context is already dark: use `variant="light"` (white) — amber primary reads clearly on white.
- Never use `variant="brand"` for any section that contains Button components.
- `variant="brand"` is reserved for decorative stat/badge bars with no interactive elements, AND even there, stat value text must use `text-brand-secondary` (navy), not `text-brand-primary` (amber), to meet contrast on the amber-light background.

## Specific decisions made

### Contact.tsx
- `compact` variant: changed from `variant="brand"` to `variant="dark"`. Heading changed to `text-white`, body to `text-neutral-300`.
- `full` variant: changed from `variant="brand"` to `variant="light"`. Text colors unchanged (already dark-on-light correct).

### ContactCta.tsx
- Removed `"brand"` from the `background` prop type entirely — now accepts `"dark" | "light"` only.
- Default changed from `"brand"` to `"dark"`.
- Text colors are now conditional: dark bg → `text-white` / `text-neutral-300` / `text-neutral-400`; light bg → `text-neutral-900` / `text-neutral-600` / `text-neutral-500`.

### Stats.tsx
- Section background remains `variant="brand"` (amber-light) — no buttons present, acceptable.
- Stat value text changed from `text-brand-primary` to `text-brand-secondary` (navy `#1a1a2e`) for contrast against amber-light background.
- Label `text-neutral-800` and description `text-neutral-600` were already acceptable on amber-light — left unchanged.
