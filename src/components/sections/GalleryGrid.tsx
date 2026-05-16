"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";

// Defer lightbox JS from the critical bundle — only needed after user interaction
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

interface GalleryImage {
  src: string;
  alt: string;
}

const HORIZONTAL: GalleryImage[] = [
  {
    src: "/img/hero-technician.jpg",
    alt: "Tecnico PowerVolt in fase di installazione impianto elettrico",
  },
  {
    src: "/img/orizontalCanale.jpg",
    alt: "Canalina elettrica installata in ambiente tecnico industriale",
  },
  {
    src: "/img/electrical-installation-construction-site.png",
    alt: "Installazione elettrica in cantiere edilizio — PowerVolt",
  },
  {
    src: "/img/project-led-lighting-2.jpg",
    alt: "Illuminazione LED professionale installata da PowerVolt",
  },
];

const VERTICAL: GalleryImage[] = [
  {
    src: "/img/bascul.webp",
    alt: "Automazione basculante garage a Bologna",
  },
  {
    src: "/img/verticalCentralino.jpg",
    alt: "Centralino elettrico residenziale installato da PowerVolt",
  },
  {
    src: "/img/verticalQuadroIndustriale.jpg",
    alt: "Quadro elettrico industriale cablato — PowerVolt",
  },
  {
    src: "/img/verticalQuadroMacchina.jpg",
    alt: "Quadro elettrico bordo macchina per impianto industriale",
  },
  {
    src: "/img/verticalPiattaforma.jpg",
    alt: "Installazione impianto elettrico in quota su piattaforma elevatrice",
  },
  {
    src: "/img/verticalCalata.jpg",
    alt: "Posa cavo elettrico — installazione impianto PowerVolt",
  },
];

const ALL_SLIDES = [...HORIZONTAL, ...VERTICAL].map(({ src, alt }) => ({
  src,
  alt,
}));

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      {/* Horizontal images — 4-col on desktop, 2-col on tablet, 1-col on mobile */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HORIZONTAL.map((img, i) => (
          <button
            key={img.src}
            aria-label={`Apri anteprima: ${img.alt}`}
            className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            onClick={() => setLightboxIndex(i)}
            type="button"
          >
            <Image
              alt={img.alt}
              className="object-cover transition-transform duration-300 hover:scale-105"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              src={img.src}
            />
          </button>
        ))}
      </div>

      {/* Vertical images — 6-col on desktop, 3-col on tablet, 2-col on mobile */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {VERTICAL.map((img, i) => (
          <button
            key={img.src}
            aria-label={`Apri anteprima: ${img.alt}`}
            className="relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            onClick={() => setLightboxIndex(HORIZONTAL.length + i)}
            type="button"
          >
            <Image
              alt={img.alt}
              className="object-cover transition-transform duration-300 hover:scale-105"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              src={img.src}
            />
          </button>
        ))}
      </div>

      <Lightbox
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        slides={ALL_SLIDES}
      />
    </>
  );
}
