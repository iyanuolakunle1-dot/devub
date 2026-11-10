/**
 * ServicesSection.jsx
 * -------------------
 * Three service cards: Custom Apps, System Audit, Cloud DevOps.
 *
 * To add backend: fetch service list from GET /api/services
 * and pass the array to this component.
 */
import SectionLabel from "../components/SectionLabel";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Custom Apps",
    description:
      "Full-stack web and mobile applications built on modern frameworks — React, Next.js, Node.js — delivered fast, tested thoroughly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "System Audit",
    description:
      "Deep-dive architecture reviews that identify performance bottlenecks, security gaps, and scalability roadblocks before they hit production.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Cloud DevOps",
    description:
      "CI/CD pipelines, container orchestration, and cloud cost optimisation on AWS, GCP, or Azure — keeping your infrastructure lean and fast.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-gray-50 py-24 px-5 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="What We Do" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Built for teams that need more than a dev shop.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

