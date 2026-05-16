import type { ReactNode } from "react";

interface ServiziLayoutProps {
  children: ReactNode;
}

/**
 * Services section layout.
 *
 * Wraps all pages under /servizi/** (the hub page + 7 individual service pages).
 * Currently a thin passthrough — ready to receive shared elements like:
 * - A services sidebar (future phase)
 * - A section-wide breadcrumb context
 * - A related services panel
 *
 * No extra HTML is rendered here. The root layout (src/app/layout.tsx) already
 * provides the Header and Footer, so this layout only needs to wrap `children`.
 */
export default function ServiziLayout({ children }: ServiziLayoutProps) {
  return <>{children}</>;
}
