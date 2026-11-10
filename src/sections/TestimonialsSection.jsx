import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getTestimonials } from "../services/api";

const TestimonialsSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTestimonials().then(setItems).catch(console.error);
  }, []);

  return (
    <section className="bg-white py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="Client Feedback" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            What tech leaders say about us
          </h2>
        </div>

        {/* 2-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-base leading-relaxed mb-6 font-normal italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-200/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

