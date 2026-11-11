import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getServices } from "../services/api";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(console.error);
  }, []);

  return (
    <section id="services" className="bg-[#F8FAFC] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel text="SERVICES" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            We build tech infrastructure engineered to succeed
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Modular software architectures and managed engineering teams designed to accelerate release cycles.
          </p>
        </div>

        {/* 2x2 Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header row: solid blue badge + tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {item.badge}
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-6 border-t border-gray-50">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:gap-2.5 transition-all"
                >
                  Learn how we build this
                  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
