import React from "react";
import heroBg from "../../assets/HeroImage/hero-bg.png";
import SectionZoom from "../../components/SectionZoom";

const HeroSection = () => {
  return (
    
    <section id="hero" className="w-full bg-black h-screen flex items-center" >
      {/* <SectionZoom> */}
      {/* ===== HERO FRAME ===== */}
      <div className="relative flex h-[80vh] md:h-screen pl-0 md:pl-16">

        {/* LEFT IMAGE AREA */}
        <div className="relative w-full md:w-[98%] h-full">
          <img
            src={heroBg}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

          {/* TEXT */}
          <div className="absolute inset-0 flex items-end pb-16 md:pb-28">
            <div className="px-8 md:px-14 md:pl-20 text-white">

              <h1
                className="
                            max-w-7xl
                            font-instrument
                            font-normal
                            text-[34px] sm:text-[44px] md:text-[64px] lg:text-[80px]
                            leading-[1.1] lg:leading-[1.05]
                            tracking-[-0.01em]
                            mb-6 md:mb-8 
                            text-white"                        
              >
                Structured Financing <br />
                for Long-Term Wealth Decisions
              </h1>


              <p
                className="
                            max-w-5xl
                            font-montserrat
                            font-normal
                            text-[30px]
                            leading-[38px]
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
        <div className="hidden md:block w-[2%] h-full bg-gradient-to-b from-black via-[#231A3D] to-[#231A3D]" />

      </div>
      {/* </SectionZoom> */}
    </section>
  );
};

export default HeroSection;
