import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getPartners } from "../services/api";

const HeroSection = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then(setPartners).catch(console.error);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FF]/70 via-white to-white pt-24 pb-16 px-5 md:px-8">
      {/* Decorative background glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Software Engineering Studio Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-[11px] font-bold tracking-wider uppercase mb-7 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          Software Engineering Studio
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-6">
          Engineering the software <br className="hidden sm:inline" />
          solutions of <span className="text-[#2563EB]">tomorrow</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We architect resilient, high-speed applications and managed cloud environments
          that empower growth-focused teams to scale with clarity.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Button
            variant="primary"
            className="px-7 py-3.5 text-sm bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full font-semibold shadow-md shadow-blue-500/25 flex items-center gap-2"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Build with Devub
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current ml-0.5">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Button>

          <Button
            variant="outline"
            className="px-7 py-3.5 text-sm border border-gray-200 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] rounded-full font-semibold bg-white"
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Services
          </Button>
        </div>

        {/* Partner Logos Strip */}
        <div className="pt-10 border-t border-gray-100">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Empowering modern engineering stacks across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-gray-500 text-sm font-semibold tracking-tight">
            {partners.map((p) => (
              <span key={p.name} className="flex items-center gap-2 hover:text-[#0F172A] transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500/60" />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
