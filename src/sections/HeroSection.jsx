/**
 * HeroSection.jsx
 * ---------------
 * Landing hero with headline, subtext, two CTAs, and stat badges.
 *
 * Data: heroStats are fetched from api.js (or mockData.js when mock is on).
 */
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getHeroStats } from "../services/api";

const HeroSection = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getHeroStats().then(setStats).catch(console.error);
  }, []);

  return (
    <section className="bg-white pt-20 pb-24 px-5 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-brand text-xs font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          Trusted by 120+ technical teams
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          We build software that{" "}
          <span className="text-brand">scales with you.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Devub Technologies designs and delivers custom web applications, cloud
          infrastructure, and system audits for ambitious product teams.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Button variant="primary" className="px-7 py-3 text-base">
            Start a Project
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Button>
          <Button variant="outline" className="px-7 py-3 text-base">
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

