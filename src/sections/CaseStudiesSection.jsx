import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getCaseStudies } from "../services/api";

const CaseCard = ({ study }) => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
    <div>
      {/* Top Banner Image */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="p-7">
        {/* Pill Tag */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[11px] font-bold tracking-wide mb-4">
          {study.tag}
        </span>

        <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-normal">
          {study.description}
        </p>
      </div>
    </div>

    {/* Read Case Study Button */}
    <div className="p-7 pt-0">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-xs font-bold border border-gray-200 text-gray-700 rounded-full px-5 py-2.5 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/40 transition-all group-hover:border-[#2563EB]"
      >
        Read Case Study
        <span className="text-sm">→</span>
      </a>
    </div>
  </div>
);

const CaseStudiesSection = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCaseStudies()
      .then(setStudies)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="case-studies" className="bg-[#EEF2FF] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="CASE STUDIES" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            Solutions deployed in the real world
          </h2>
        </div>

        {/* Cards Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-[3px] border-[#2563EB] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studies.map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
