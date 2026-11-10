import SectionLabel from "../components/SectionLabel";
import fragileManImg from "../assets/fragile_man.jpg";

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
            Most software products collapse under technical debt or fragmented teams. Devub Technologies operates as an elite product lab — engineering clear data architectures, automated testing pipelines, and pixel-precise frontends.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
            {[
              "Full-cycle product design from wireframes to cloud hosting",
              "Production-grade code delivered with zero bloat",
              "Direct collaboration with senior engineers — no account-manager delays",
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

        {/* Right Column: Visual Feature Box */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#0F172A] aspect-[4/3] flex items-center justify-center relative">
            <img 
              src={fragileManImg} 
              alt="System fragility vs stability"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
                System Stability
              </span>
              <p className="text-white text-lg font-bold mt-1">
                Engineering that withstands scale and sudden growth spikes
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

