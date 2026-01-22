import { useState } from "react";
import FinanceCard from "./FinanceCard";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import SectionZoom from "../../components/SectionZoom";

const cards = [
  {
    title: "Secured SME Financing*",
    text:
      "Financing supported by high-quality collateral, evaluated through defined credit assessment and valuation frameworks.",
  },
  {
    title: "Wealth-Backed Financing",
    text:
      "Solutions structured against financial assets, with appropriate safeguards and ongoing monitoring.",
  },
  {
    title: "ESOP Financing",
    text:
      "Customised financing for individuals, families, and institutions—aligned with broader financial, tax, and estate considerations.",
  },
  {
    title: "Structured Financial Solutions",
    text:
      "Bespoke structures developed in collaboration with clients and advisors, designed for clarity, durability, and governance.",
  },
];

const CARD_WIDTH = 360 + 24; // card + gap
const VISIBLE_CARDS = 1;
const MAX_INDEX = cards.length - VISIBLE_CARDS;

const FinancingSection = () => {
  const [index, setIndex] = useState(0);

  // show 2 cards always
 const next = () => {
  setIndex((prev) => Math.min(prev + 1, MAX_INDEX));
};

const prev = () => {
  setIndex((prev) => Math.max(prev - 1, 0));
};



  return (

    <section id="finance" className="relative w-full bg-white py-24 overflow-hidden snap-start">

      {/* glow */}
      <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-b from-[#ffeec4] via-[#f9f4e6] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-[#ffeec4] via-[#f9f4e6] to-transparent" />

      <div className="w-full pl-10 lg:pl-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-instrument text-4xl md:text-[64px] leading-tight text-[#1c1b3a] mb-6">
            Financing Designed <br /> with Perspective
          </h2>

          <p className="text-gray-600 max-w-md mb-6 font-montserrat text-base">
            Financing needs rarely arise in isolation. At Arvesta, we always
            design lending solutions with an understanding of the broader
            financial context and aligned with client goals.
          </p>

          <span className="flex items-center gap-1 font-montserrat text-[#AC8A3A] font-semibold underline mb-8 cursor-pointer">
            Discover Our Solutions <MdArrowOutward />
          </span>

          {/* arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className={`w-12 h-12 rounded-full flex items-center justify-center
                ${index === 0 ? "bg-[#e5d4a6]" : "bg-[#b48b3c]"} text-white`}
            >
              <LuArrowLeft />
            </button>

            <button
              onClick={next}
              className={`w-12 h-12 rounded-full flex items-center justify-center
                ${index === cards.length - 1 ? "bg-[#e5d4a6]" : "bg-[#b48b3c]"} text-white`}
            >
              <LuArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER — SHOW 2 CARDS */}
        <div className="relative overflow-hidden h-[540px] w-full lg:w-[744px]
">

          <div
            className="flex gap-15 md:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {cards.map((card, i) => (
              <FinanceCard
                key={i}
                title={card.title}
                text={card.text}
                isActive={i === index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinancingSection;
