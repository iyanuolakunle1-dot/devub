/**
 * CaseStudiesSection.jsx
 * ----------------------
 * Three case study cards with cover image, tag, title, description and CTA.
 * Background: light lavender (#EEF2FF)
 *
 * Data fetched from api.js → getCaseStudies()
 * When backend is live: GET /api/case-studies
 */
import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getCaseStudies } from "../services/api";

// Individual case study card
const CaseCard = ({ study }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
    {/* Cover image */}
    <div className="h-52 overflow-hidden">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    {/* Card body */}
    <div className="p-6">
      {/* Tag */}
      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-brand text-[11px] font-semibold mb-4">
        {study.tag}
      </span>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">{study.description}</p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold border border-gray-200 rounded-full px-4 py-2 hover:border-brand hover:text-brand transition-all"
      >
        Read Case Study
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
        </svg>
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
    <section id="case-studies" className="bg-[#EEF2FF] py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="Case Studies" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Solutions deployed in the real world
          </h2>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-[3px] border-brand border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

