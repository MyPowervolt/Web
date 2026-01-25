import { useRef, useEffect } from "react";

export default function Accordion({ title, description, features, isOpen, onToggle }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.style.maxHeight = isOpen
      ? contentRef.current.scrollHeight + "px"
      : "0px";
  }, [isOpen]);

  return (
    <div className="bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-yellow-400 w-full shadow-lg mb-4">
      <div
        className="flex justify-between items-center cursor-pointer p-4 rounded-xl hover:bg-yellow-400/10 transition-colors"
        onClick={onToggle}
      >
        <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
        <span
          className={`text-yellow-400 text-3xl font-bold transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        style={{ maxHeight: "0px" }}
      >
        <div className={`${isOpen ? "py-4" : "py-0"} transition-all duration-500`}>
          <p className="text-gray-200 mb-4">{description}</p>
          <ul className="list-disc list-inside text-start text-gray-300 text-sm space-y-1">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
