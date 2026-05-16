---
name: Header Design Decisions
description: Dark premium header design rationale, inline nav components, mobile drawer conventions for PowerVolt
type: project
---

## Established design

- Background: `bg-brand-secondary` (`#1a1a2e`) — dark navy, not white
- Top amber hairline: `h-[2px]` gradient `from-transparent via-brand-primary to-transparent opacity-70`
- Scroll state: `border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]` vs `border-b border-white/5`
- Logo height: `h-9 lg:h-11` (down from h-10/h-12 to fit the dark slim bar)
- Nav links: `text-white/75` base, `hover:text-brand-primary` on interaction
- Dropdown: dark-themed (`bg-brand-secondary`, `border-white/10`, `hover:bg-white/5`)
- Phone link text: `text-white/75`, phone icon: `text-brand-primary`
- Focus rings: `focus-visible:ring-offset-brand-secondary` so the amber ring shows on dark bg
- Mobile drawer: same `bg-brand-secondary` as header, amber accent stripe, dark nav items
- Drawer backdrop: `bg-black/60 backdrop-blur-sm` (boosted from /40)
- Mobile secondary CTA: `border-white/30 text-white hover:border-brand-primary hover:text-brand-primary`

## Architecture decision: inline nav components

The dark header inlines `DarkNavLink`, `DesktopNavDark`, and `MobileNavDark` rather than importing from `Navigation.tsx`. This avoids modifying the shared `Navigation.tsx` (which may be used in light-bg contexts elsewhere) and keeps the dark color overrides local.

**Why:** The SVG logo is white on transparent — it disappears on a white header. The dark header is non-negotiable. The inline nav approach avoids coupling light vs dark color concerns into the shared component.

**How to apply:** If a future page needs a light header, use the existing `DesktopNav`/`MobileNav` from `Navigation.tsx`. For any dark-bg context, use the inline dark variants in Header.tsx or create analogous local variants.
