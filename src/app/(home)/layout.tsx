import { LightShell } from "@/components/home/LightShell";
import { barlow, barlowCondensed } from "@/components/home/fonts";
import "./home.css";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <LightShell>{children}</LightShell>
    </div>
  );
}
