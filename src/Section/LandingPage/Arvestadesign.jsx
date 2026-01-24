import img1 from "../../assets/HeroImage/about-image2.png";
import mandala from "../../assets/HeroImage/mandala.gif";

const Arvestadesign = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#3a2a63] via-[#1b1433] to-black py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={img1}
            alt="Growth"
            className="w-[85%] sm:w-[70%] md:w-full max-w-full md:max-w-lg h-auto object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative text-left">

          {/* Mandala Design */}
          <img
            src={mandala}
            alt=""
            className="absolute -right-52 top-1/2 translate-y-34 md:-translate-y-1/2 w-[420px] opacity-20 pointer-events-none"
          />
<div className="px-6 md:px-0">
          <h2 className="font-instrument leading-tight text-4xl lg:text[30px] xl:text-[14px] text-[#AC8A3A] mb-5 relative z-10">
            Arvesta – Designed for Your
            <br className="hidden sm:block" />
            Long-Term Growth
          </h2>

          <p className="font-montserrat text-[#FFECBC] md:text-[20px] text-[16px] leading-relaxed max-w-xl relative z-10">
            Derived from the word Arvesta, symbolising growth, trust, and
            principled governance, our identity reflects what we stand for:
            a place where credit is nurtured responsibly, decisions are
            data-driven, and long-term outcomes matter more than short-term
            cycles.
          </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Arvestadesign;
