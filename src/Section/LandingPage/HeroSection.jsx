import React from "react";
import heroBg from "../../assets/HeroImage/hero-bg.png";
// import SectionZoom from "../../components/SectionZoom";

const HeroSection = () => {
  return (
    <section id="hero" className="w-full bg-black h-screen flex items-center">
      {/* ===== HERO FRAME ===== */}
      <div className="relative flex h-full md:h-screen pl-0 md:pl-0 w-full">

        {/* LEFT IMAGE AREA */}
        <div className="relative w-full md:w-[96%] h-full">
          <img
            src={heroBg}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

          {/* TEXT */}
          <div className="absolute inset-0 flex items-end pb-26 md:pb-28 max-w-7xl">
            <div className="px-8 md:px-14 md:pl-30 text-white ">

              <h1
                className="
                  
                  font-instrument
                  font-normal
                  text-[34px] sm:text-[44px] md:text-[64px] lg:text-[80px]
                  leading-[1.1] lg:leading-[1.05]
                  tracking-[-0.01em]
                  mb-6 md:mb-8 
                  text-white
                "
              >
                Structured Financing <br />
                for Long-Term Wealth Decisions
              </h1>

              <p
                className="
                  max-w-5xl
                  font-montserrat
                  font-normal
                  text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]
                  leading-[1.3]
                  tracking-normal
                  text-white
                "
              >
                Designed for individuals, families, and institutions <br />
                where capital, complexity, and responsibility converge.
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT BORDER STRIP — DESKTOP ONLY */}
        <div className="hidden md:flex w-[4%] h-full flex-col">
          {/* Top Black */}
          <div className="h-1/2 bg-gradient-to-b from-[#000000] via-[#231A3D] to-[#231A3D]"></div>

          {/* Bottom Purple */}
          <div className="h-1/2 bg-[#000614]"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
