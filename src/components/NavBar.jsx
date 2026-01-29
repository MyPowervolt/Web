import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    // { name: "Home", href: "#home" },
    // { name: "Servizi", href: "#servizi" },
    // { name: "Progetti", href: "#progetti" },
    // { name: "Contatti", href: "#contatti" },
    // { name: "Su di me", href: "#Su-di-me" },
  ];

  return (
    <header className="m-0">
      <nav className="border-b-2 border-yellow-400 w-full  bg-[linear-gradient(150deg,#f0b400_0%,#000000_56%)] text-white shadow-md">
        {/* Pulsante hamburger (solo mobile) */}
        {/* <button
          onClick={() => setOpen(!open)}
          aria-label="Apri o chiudi menu"
          aria-expanded={open}
          className="cursor-pointer absolute right-6 top-10 md:hidden z-50"
        >
          <div
            className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></div>
        </button> */}

        {/* Navbar desktop */}
        {/* <ul className="hidden md:flex fixed top-0 left-0 w-full justify-center gap-10 py-4 bg-black/70 backdrop-blur-md font-[Poppins,sans-serif] font-extrabold tracking-wide text-lg shadow-lg">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-yellow-400 hover:scale-105 transition-transform duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul> */}

        {/* Logo + testo (desktop + mobile) */}
          <div className="w-full flex justify-center items-center">
            <img
             fetchpriority={"high"}
              src="/img/LogoPageS.svg"
              alt="Logo PowerVolt"
              className="h-60 my-4 px-10"
            />
          </div>

        {/* Overlay scuro dietro menu mobile */}
        {open && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"></div>
        )}

        {/* Menu mobile */}
        <ul
          className={`md:hidden flex flex-col items-center gap-6 text-lg font-medium bg-transparent transition-all duration-700 ease-in-out overflow-hidden relative z-50 ${
            open ? "p-7 max-h-screen" : "max-h-0"
          }`}
        >
          {open &&
            links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
