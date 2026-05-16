import { Inter } from "next/font/google";

/**
 * Inter font optimised via next/font/google.
 * Variable font — covers all weights (100–900) in a single request.
 *
 * Why Inter: matches the font-family used in the PowerVolt SVG logo CSS:
 *   .name { font-family: "Inter", "Montserrat", Arial, sans-serif; }
 *   .title { font-family: "Inter", "Montserrat", Arial, sans-serif; }
 *
 * Using variable font avoids multiple HTTP requests for different weights.
 * `display: swap` prevents invisible text during font load (helps CLS).
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Inter is a variable font — no weight needed, one WOFF2 covers all weights
  preload: true,
});
