import mandala from "../../assets/HeroImage/mandala.gif";

const FinanceCard = ({ title, text, isActive }) => {
  return (
    <div
      className={`relative min-w-[320px] md:min-w-[360px] h-[460px] rounded-2xl px-10 py-12 overflow-hidden shadow-xl
      flex flex-col justify-center transition-all duration-500
      ${
        isActive
          ? "bg-gradient-to-b from-[#231A3D] to-black text-white scale-100 opacity-100"
          : "bg-white border border-[#d6b36a] text-[#1c1b3a] opacity-40 blur-[1px]"
      }`}
    >
      <img
        src={mandala}
        alt="Mandala"
        className="absolute -top-12 -right-12 w-56 opacity-15 pointer-events-none"
      />

      <h3 className="font-instrument text-3xl leading-tight mb-6 relative z-10">
        {title}
      </h3>

      <p className="font-montserrat text-sm leading-relaxed relative z-10 max-w-sm">
        {text}
      </p>
    </div>
  );
};

export default FinanceCard;
