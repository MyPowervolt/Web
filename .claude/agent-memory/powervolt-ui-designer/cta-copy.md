---
name: CTA Copy Standard
description: Approved CTA text and href anchor conventions for PowerVolt Header and Hero
type: project
---

## Approved primary CTA

- **Text**: `"Richiedi un Sopralluogo"`
- **Href**: `/contatti#sopralluogo`
- **Replaces**: "Preventivo Gratuito" / "Richiedi Preventivo Gratuito" (deprecated — too generic)

**Why:** "Sopralluogo" (site survey/inspection) is more professional and accurate for a B2B Italian electrical contractor. It sets the right expectation: the first step is a physical visit, not just a quote form.

**How to apply:** Use "Richiedi un Sopralluogo" as the default CTA text in Header (desktop + mobile drawer), Hero (ctaPrimaryText default), and any section-level CTA that sends to the contact page. Update any new pages or components that reference the old "Preventivo Gratuito" copy.

## Footer nav legacy entry

`navigation.ts` still has `{ label: "Richiedi Preventivo", href: "/contatti#preventivo" }` in FOOTER_NAV.company. This was not touched (out of scope for the Header/Hero task) but should be updated to match in a follow-up.
