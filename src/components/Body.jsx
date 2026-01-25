import Card from "./CardsSection";
import { cardsData } from "../data/cardsData";

export default function Body() {
  return (
    <section className="w-[80%] mx-auto space-y-4 mt-10">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          features={card.features}
        />
      ))}
    </section>
  );
}
