import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { portfolioProjects } from "../data/mockData";

const TABS = ["Design", "Development", "Others"];

const ProjectCard = ({ project }) => (
  <div className="bg-white border border-gray-100/90 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
    <div>
      {/* Project image */}
      <div className="w-full h-64 sm:h-72 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="p-7">
        <span className="inline-block px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[11px] font-bold tracking-wide uppercase mb-3">
          {project.category}
        </span>
        <h3 className="font-extrabold text-[#0F172A] text-xl mb-2.5 group-hover:text-[#2563EB] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 font-normal">
          {project.description}
        </p>
      </div>
    </div>

    {/* Footer Link */}
    <div className="px-7 pb-7 pt-0">
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors"
      >
        View Project
        <span className="text-sm font-bold ml-0.5">→</span>
      </a>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <section id="portfolio" className="bg-white py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <SectionLabel text="FEATURED WORK" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            Our Portfolio
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-14">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-gray-100/80 text-gray-600 hover:text-[#2563EB]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid: 6 cards matching design screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
