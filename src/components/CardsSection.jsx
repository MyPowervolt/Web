import { useRef, useState, useEffect } from "react";

export default function Accordion({ title, description, features }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <div className="bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-yellow-400 w-full shadow-lg mb-4">
      
      {/* Titolo cliccabile */}
      <div
        className="flex justify-between items-center cursor-pointer p-4 rounded-xl hover:bg-yellow-400/10 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
        <span
          className={`text-yellow-400 text-3xl font-bold transform transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </div>

      {/* Contenuto animato */}
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-all duration-500 ${
          open ? "opacity-100 py-4" : "opacity-0 py-0"
        }`}
      >
        <p className="text-gray-200 mb-4">{description}</p>
        <ul className="list-disc list-inside text-start text-gray-300 text-sm space-y-1">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
