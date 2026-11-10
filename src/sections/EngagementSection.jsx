import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { getEngagementModels } from "../services/api";

const EngagementSection = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    getEngagementModels().then(setModels).catch(console.error);
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel text="Flexible Models" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Flexible ways to collaborate with our teams
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Choose the collaboration model that fits your product roadmap and engineering velocity.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, idx) => {
            const isFeatured = idx === 1; // Middle card featured
            return (
              <div
                key={m.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-white border-2 border-[#2563EB] shadow-xl shadow-blue-500/10 relative"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
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
                  className={`w-full justify-center text-xs py-2.5 ${
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

