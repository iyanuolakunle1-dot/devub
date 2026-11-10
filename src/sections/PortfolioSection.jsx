import { useState, useEffect } from "react";
import SectionLabel from "../components/SectionLabel";
import { getPortfolio } from "../services/api";

const TABS = ["Design", "Development", "Others"];

const ProjectCard = ({ project }) => (
  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
    <div>
      {/* Project image */}
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] text-[11px] font-bold tracking-wide uppercase mb-3">
          {project.category}
        </span>
        <h3 className="font-bold text-[#0F172A] text-lg mb-2 group-hover:text-[#2563EB] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>
    </div>

    {/* Footer Link */}
    <div className="px-6 pb-6 pt-0">
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:gap-2.5 transition-all"
      >
        View Project
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
        </svg>
      </a>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Design");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPortfolio(activeTab)
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [activeTab]);

  return (
    <section id="portfolio" className="bg-white py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="Featured Work" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Our Portfolio
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:text-[#2563EB]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-[3px] border-[#2563EB] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;
