import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 configuration.
 *
 * In Tailwind v4, the primary design system is declared via @theme in globals.css.
 * This file is retained for:
 * - Plugin registration (future: @tailwindcss/forms, @tailwindcss/typography)
 * - Any config-only options not yet supported in @theme
 *
 * Brand palette source: public/LogoPageS.svg
 * Logo colors confirmed:
 *   - #e2aa0e / #e1ac0e  → amber gold (sinusoide / lightning bolt)
 *   - #f0b400            → amber (.title CSS class in SVG)
 *   - #ffffff / #f2f2f2  → white / off-white (wordmark POWERVOLT)
 *
 * All color, spacing, font, shadow tokens live in:
 *   src/styles/globals.css → @theme block
 */
const config: Config = {
  // In Tailwind v4 with @tailwindcss/postcss, content detection is automatic.
  // These paths are kept as an explicit fallback for tooling that reads the config.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Theme extensions are handled via @theme in globals.css.
    // Do not duplicate color/spacing tokens here — keep a single source of truth.
    extend: {},
  },
  plugins: [
    // TODO: add @tailwindcss/forms when contact form is implemented (Phase 2)
    // require("@tailwindcss/forms"),
  ],
};

export default config;
