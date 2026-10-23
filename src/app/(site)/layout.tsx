import { InnerShell } from "@/components/home/InnerShell";

/** Layout delle pagine interne (servizi, chi siamo, contatti, pagine locali). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <InnerShell>{children}</InnerShell>;
}
