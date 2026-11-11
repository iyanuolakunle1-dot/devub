import SectionLabel from "../components/SectionLabel";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-5 md:px-8 border-t border-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Story & Highlights */}
        <div>
          <SectionLabel text="About Devub" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-5">
            Bridging complexity with user-facing intelligence
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
            We architect and build bespoke software applications that bridge the gap between complex backend infrastructures and clean, human-centric user experiences.
          </p>

          {/* Checklist matching design */}
          <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
            {[
              "Modular frontend design systems engineered for scale",
              "Resilient cloud pipelines and high-throughput APIs",
              "Continuous automated testing with zero-downtime deployments",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: 3D Blue Geometric Sculpture Card matching the design */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#C7D2FE]/30 p-8 aspect-[4/3] flex items-center justify-center relative">
            {/* Ambient backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#93C5FD]/40 to-[#E0E7FF]/20 pointer-events-none" />

            {/* 3D Geometric Blue Origami Flower Icon */}
            <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="bluePetal1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                  <linearGradient id="bluePetal2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="bluePetal3" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>

                {/* Layered curved origami geometric leaves */}
                <path d="M100 20 C130 50, 150 80, 100 100 C70 80, 70 50, 100 20 Z" fill="url(#bluePetal1)" opacity="0.95" />
                <path d="M180 100 C150 130, 120 150, 100 100 C120 70, 150 70, 180 100 Z" fill="url(#bluePetal2)" opacity="0.9" />
                <path d="M100 180 C70 150, 50 120, 100 100 C130 120, 130 150, 100 180 Z" fill="url(#bluePetal3)" opacity="0.95" />
                <path d="M20 100 C50 70, 80 50, 100 100 C80 130, 50 130, 20 100 Z" fill="url(#bluePetal1)" opacity="0.9" />
                
                {/* Diagonal interleaving folds */}
                <path d="M156 44 C140 85, 115 95, 100 100 C105 85, 115 60, 156 44 Z" fill="url(#bluePetal2)" opacity="0.85" />
                <path d="M156 156 C115 140, 105 115, 100 100 C115 105, 140 115, 156 156 Z" fill="url(#bluePetal3)" opacity="0.85" />
                <path d="M44 156 C60 115, 85 105, 100 100 C95 115, 85 140, 44 156 Z" fill="url(#bluePetal1)" opacity="0.85" />
                <path d="M44 44 C85 60, 95 85, 100 100 C85 95, 60 85, 44 44 Z" fill="url(#bluePetal2)" opacity="0.85" />

                {/* Central glossy node */}
                <circle cx="100" cy="100" r="14" fill="#1E3A8A" opacity="0.9" />
                <circle cx="98" cy="98" r="6" fill="#93C5FD" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
