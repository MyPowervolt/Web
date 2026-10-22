import { Barlow, Barlow_Condensed } from "next/font/google";
import { LightShell } from "@/components/home/LightShell";
import "./home.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <LightShell>{children}</LightShell>
    </div>
  );
}
