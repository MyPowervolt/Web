import { useState } from "react";
import Card from "./CardsSection";
import { cardsData } from "../data/cardsData";

export default function Body() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="w-[80%] mx-auto space-y-4 mt-10">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          features={card.features}
          isOpen={openId === card.id}
          onToggle={() => setOpenId((prev) => (prev === card.id ? null : card.id))}
        />
      ))}
    </section>
  );
}

