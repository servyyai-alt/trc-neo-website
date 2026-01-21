import mandala from "../../assets/HeroImage/mandala.gif";
import SectionZoom from "../../components/SectionZoom";

const rightData = [
  "Preserving long-term investments while addressing liquidity needs",
  "Supporting opportunities, transitions, or rebalancing decisions",
  "Introducing flexibility within complex wealth structures",
  "Aligning financing with long-term or multi-generational objectives",
];

const SupportWealthSection = () => {
  return (

    <section id="growth" className="w-full grid grid-cols-1 lg:grid-cols-2 snap-start min-h-screen">

      {/* LEFT DARK PANEL — CENTER CONTENT */}
      <div className="relative bg-gradient-to-b from-[#231A3D] to-black text-white px-14 py-24 overflow-hidden flex flex-col justify-center">

        {/* Mandala top-right */}
        <img
          src={mandala}
          className="absolute -top-24 -right-24 w-72 opacity-20 pointer-events-none"
          alt=""
        />

        {/* Mandala bottom-left */}
        <img
          src={mandala}
          className="absolute -bottom-24 -left-24 w-72 opacity-20 pointer-events-none rotate-180"
          alt=""
        />

        <h2 className="font-playfair md:text-[66px] text-4xl leading-tight mb-6 max-w-2xl font-instrument">
          We are Here to Support 
          Your Long-Term Wealth 
          Decisions
        </h2>

        <p className="text-[#FFECBC] max-w-md leading-7 font-montserrat text-[20px] md:text-base">
          At Arvesta, we engage with clients in situations where financing
          plays a supportive, well-defined role.
        </p>

      </div>

      {/* RIGHT LIGHT LIST PANEL — FADE COLOR TOP → BOTTOM */}
      <div className="bg-gradient-to-b from-[#FFECBC] from-10% via-[#FFF2D6] via-40% to-[#FFF8EA]">

        {rightData.map((text, i) => (
          <div
            key={i}
            className="px-12 py-13 text-[#1c1b3a] text-xl md:text-[26px] font-montserrat border-b border-[#f0e1b9]"
          >
            {text}
          </div>
        ))}

      </div>

    </section>

  );
};

export default SupportWealthSection;
