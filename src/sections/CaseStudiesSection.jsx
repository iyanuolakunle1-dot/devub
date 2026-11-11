import SectionLabel from "../components/SectionLabel";
import { caseStudies } from "../data/mockData";

const CaseCard = ({ study }) => (
  <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
    <div>
      {/* Top Banner Image with clean rounded top corners matching design */}
      <div className="w-full h-52 sm:h-56 overflow-hidden bg-gray-50">
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
        <span className="inline-block px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[11px] font-bold tracking-wide mb-4">
          {study.tag}
        </span>

        <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors tracking-tight">
          {study.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-normal mb-2">
          {study.description}
        </p>
      </div>
    </div>

    {/* Read Case Study Button */}
    <div className="p-7 pt-0">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-xs font-semibold border border-gray-200 text-gray-800 rounded-full px-5 py-2.5 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/30 transition-all bg-white"
      >
        Read Case Study
        <span className="text-sm ml-0.5 font-bold">→</span>
      </a>
    </div>
  </div>
);

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-[#F8FAFC] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="CASE STUDIES" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            Solutions deployed in the real world
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
