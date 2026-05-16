---
name: PowerVolt Site Analysis — Current State
description: Findings from initial crawl of https://powervolt.it/ on 2026-05-11 — site structure, technical issues, confirmed data
type: project
---

Only 1 page is indexed by Google (homepage). The site is almost certainly a JS-rendered SPA — WebFetch could only retrieve the `<title>` tag, not any body content. No sitemap.xml, no robots.txt, no sub-pages indexed.

**Why:** The SPA/JS rendering issue means Google and AI search engines cannot read page content — this is the most critical technical blocker for the entire project.

**How to apply:** All development recommendations must prioritize SSR/SSG rendering. Any content or SEO work is useless until the rendering problem is fixed.

## Confirmed Data (from Google search index snippet)

- Meta title: "Powervolt | Impianti elettrici civili e industriali, automazione e domotica"
- Services confirmed: impianti elettrici civili, impianti elettrici industriali, automazioni, domotica, quadri elettrici, impianti di sicurezza, reti dati
- Compliance: normative CEI

## Missing Data (requires client confirmation)

- Physical address
- Phone number
- Email address
- Cities/zones served
- Years in business
- Number of projects completed
- Certifications held
- Brands/products used
- Existing Google Business Profile
- Social media accounts
- Legal company name / P.IVA
