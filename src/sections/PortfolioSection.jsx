/**
 * PortfolioSection.jsx
 * --------------------
 * Tabbed portfolio grid: Design | Development | Others.
 *
 * Data fetched from api.js → getPortfolio(category).
 * When backend is live, getPortfolio() will hit GET /api/portfolio?category=Design
 */
import { useState, useEffect } from "react";
import SectionLabel from "../components/SectionLabel";
import { getPortfolio } from "../services/api";

const TABS = ["Design", "Development", "Others"];

// Individual project card
const ProjectCard = ({ project }) => (
  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
    {/* Project image */}
    <div className="h-52 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    {/* Card body */}
    <div className="p-5">
      {/* Category badge */}
      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-brand text-[11px] font-semibold mb-3">
        {project.category}
      </span>

      <h3 className="font-bold text-gray-900 text-base mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
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
    <section id="portfolio" className="bg-white py-24 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="Featured Work" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Portfolio</h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-600 hover:text-brand"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-[3px] border-brand border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

