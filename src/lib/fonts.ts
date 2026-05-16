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
  // Preload the most common weights used in the design
  weight: ["400", "500", "600", "700", "800"],
  // Optimised for Italian — latin subset covers all accented characters
  preload: true,
});
