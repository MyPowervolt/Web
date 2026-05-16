import type { NavItem } from "@/types";
import { SERVICES } from "./services";

/**
 * Primary navigation structure for PowerVolt.
 * Used by Header, mobile menu, and Footer.
 */
export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Chi Siamo",
    href: "/chi-siamo",
  },
  {
    label: "Servizi",
    href: "/servizi",
    children: SERVICES.map((service) => ({
      label: service.name,
      href: service.path,
    })),
  },
  {
    label: "Contatti",
    href: "/contatti",
  },
];

/**
 * Footer link columns.
 */
export const FOOTER_NAV = {
  company: [
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Contatti", href: "/contatti" },
    { label: "Richiedi un Sopralluogo", href: "/contatti#sopralluogo" },
  ] satisfies NavItem[],

  services: SERVICES.map((service) => ({
    label: service.name,
    href: service.path,
  })) satisfies NavItem[],

  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ] satisfies NavItem[],
};
