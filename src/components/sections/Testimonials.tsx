import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

/**
 * ⚠️ PLACEHOLDER — Dato non presente nel sito attuale.
 * Le testimonianze reali devono essere fornite dal cliente prima di andare live.
 *
 * This component renders a structured placeholder that:
 * 1. Makes the homepage visually complete during development
 * 2. Shows the client how testimonials will look
 * 3. Is clearly marked in code so it cannot be missed before launch
 *
 * When real testimonials are available:
 * - Replace PLACEHOLDER_TESTIMONIALS with real data
 * - Add the author's name and role (if they consent)
 * - Consider importing from a CMS or a data file
 */

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

// ⚠️ PLACEHOLDER DATA — must be replaced before going live
const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Professionalita eccellente dall'inizio alla fine. L'impianto e stato realizzato nei tempi concordati e la documentazione e arrivata subito. Consigliato senza riserve.",
    author: "Cliente A",
    role: "⚠️ Dato da confermare con il cliente",
    rating: 5,
  },
  {
    quote:
      "Abbiamo affidato a PowerVolt la realizzazione dell'impianto elettrico del nostro capannone. Lavoro preciso, conforme alle normative e completato nei tempi stabiliti.",
    author: "Cliente B",
    role: "⚠️ Dato da confermare con il cliente",
    rating: 5,
  },
  {
    quote:
      "Ottima esperienza. Il sistema domotico installato ha trasformato la gestione della nostra abitazione. Supporto tecnico sempre disponibile.",
    author: "Cliente C",
    role: "⚠️ Dato da confermare con il cliente",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div aria-label={`Valutazione: ${rating} su 5 stelle`} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${i < rating ? "fill-brand-primary text-brand-primary" : "fill-neutral-200 text-neutral-200"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section aria-labelledby="testimonials-heading" variant="light">
      <Container>
        <div className="mb-12 max-w-2xl text-center md:mx-auto">
          <h2
            className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
            id="testimonials-heading"
          >
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="mt-4 text-neutral-600">
            La soddisfazione dei nostri clienti e la nostra migliore referenza.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
            <blockquote
              key={index}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
            >
              <StarRating rating={testimonial.rating} />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-neutral-900">
                    {testimonial.author}
                  </span>
                  {!testimonial.role.startsWith("⚠️") && (
                    <span className="block text-xs text-neutral-500">{testimonial.role}</span>
                  )}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* ⚠️ PLACEHOLDER notice — dev-only, not rendered in production */}
        {process.env.NODE_ENV === "development" && (
          <p className="mt-8 text-center text-xs text-neutral-400" role="note">
            ⚠️ Dati placeholder — sostituire con testimonianze reali prima del lancio
          </p>
        )}
      </Container>
    </Section>
  );
}
