import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { engagementModels } from "../data/mockData";

// Icons for each engagement tier matching the design
const ICONS = [
  // Dedicated Team: Users / team icon
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2563EB] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  // Fixed Scope: Rocket / target delivery icon
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2563EB] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  // Staff Support: Shield / system tools icon
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2563EB] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
];

const EngagementSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel text="FLEXIBLE MODELS" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            Flexible ways to collaborate with our teams
          </h2>
          <p className="text-sm text-gray-500 mt-3 font-normal">
            Choose the collaboration model that fits your product roadmap and engineering velocity.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((m, idx) => {
            const isFeatured = idx === 1; // Middle card featured
            return (
              <div
                key={m.id}
                className={`rounded-[24px] p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-white border-2 border-[#2563EB] shadow-xl shadow-blue-500/10 relative"
                    : "bg-white border border-gray-100/90 shadow-xs hover:shadow-md"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Circular Icon Emblem matching design screenshot */}
                  <div className="w-13 h-13 rounded-2xl bg-[#EFF6FF] border border-blue-100/60 flex items-center justify-center mb-6">
                    {ICONS[idx]}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                    {m.tagline}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">{m.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{m.subtitle}</p>

                  {/* Checklist */}
                  <ul className="space-y-3 pt-4 border-t border-gray-100 mb-8">
                    {m.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={isFeatured ? "primary" : "outline"}
                  className={`w-full justify-center text-xs py-2.5 rounded-full ${
                    isFeatured ? "bg-[#2563EB] text-white" : ""
                  }`}
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Choose {m.title}
                </Button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngagementSection;
