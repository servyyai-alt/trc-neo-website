import bgImg from "../../assets/HeroImage/chess-bg.png";
import bottomBorder from "../../assets/HeroImage/bottom-border.png";
import { MdArrowOutward } from "react-icons/md";
import cardBg from "../../assets/HeroImage/mandala.gif";
import SectionZoom from "../../components/SectionZoom";
import Footer from "../../components/Footer";

const cardData = [
  { title: "Disciplined credit\nevaluation" },
  { title: "Bespoke structuring\naligned to client objectives" },
  { title: "Ongoing monitoring\nand governance" },
  { title: "Alignment with broader wealth objectives" },
];

const CuratedSolutionsSection = () => {
  return (<>
  
    <section
      id="curated"
      className="relative w-full overflow-hidden
      bg-gradient-to-b from-white via-[#fff9ef] to-[#FFECBC]"
    >
      {/* ✅ Animated Content Only */}
      
        <div className="px-8 py-8">
          {/* IMAGE AREA */}
          <div className="relative w-full h-[360px] md:h-[620px]">
            <img
              src={bgImg}
              alt="Financing Strategy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 xl:block hidden bg-black/55"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex flex-col justify-end pb-30">
              <h2 className="font-instrument text-4xl lg:text-7xl text-white mb-4">
                Bespoke Financing for <br className="md:block hidden" />
                Your Wealth Management Goals
              </h2>
            </div>
          </div>

          {/* CARD SECTION */}
          <div className="relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl border border-[#d6b36a] shadow-lg h-[260px] flex items-center justify-center text-center overflow-hidden"
                >
                  <img
                    src={cardBg}
                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-76 opacity-20"
                    alt=""
                  />
                  <h4 className="font-instrument text-2xl lg:text-3xl text-[#1c1b3a] relative z-10 px-6 whitespace-pre-line">
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="max-w-7xl mx-auto px-10 mt-16 pb-24 relative z-20">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=NeoNBFC@neo-group.in&su=Business%20Enquiry&body=Hello%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-instrument w-full bg-[#b48b3c] text-white py-5 rounded-lg flex items-center justify-between px-8 text-lg md:text-[40px] font-medium shadow-md hover:bg-[#a47c2f] transition">
                Reach Out To Us
                <MdArrowOutward className="text-3xl" />
              </button>
            </a>
          </div>

          {/* BOTTOM DECOR IMAGE */}
          <img
            src={bottomBorder}
            alt="Decorative Border"
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      

      {/* ✅ FOOTER — SAME SECTION, NO SNAP, NO ANIMATION */}
      
    </section></>
  );
};

export default CuratedSolutionsSection;
