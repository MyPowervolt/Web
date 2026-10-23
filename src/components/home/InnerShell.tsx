import { LightShell } from "./LightShell";
import { Header } from "./Header";
import { HomeFooter } from "./Footer";
import { barlow, barlowCondensed } from "./fonts";
import "@/app/(home)/home.css";

/** Cornice delle pagine interne: stessa grafica della homepage. */
export function InnerShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <LightShell>
        <Header base="/" />
        <main className="inner" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <HomeFooter />
      </LightShell>
    </div>
  );
}
