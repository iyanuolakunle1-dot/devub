/**
 * CreativeProcessSection.jsx
 * --------------------------
 * Bento-grid photo gallery showing the team's design → build → ship process.
 * Layout: 2 rows of mixed-size tiles (large, medium, small, quote card).
 *
 * Data fetched from api.js → getProcess()
 * When backend is live: GET /api/process
 */
import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getProcess } from "../services/api";

const CreativeProcessSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProcess()
      .then(setItems)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="process" className="bg-white py-24 px-5 md:px-8">
        <div className="flex justify-center">
          <div className="w-8 h-8 border-[3px] border-brand border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  // Split items into two rows: row1 = first 3, row2 = last 3
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);

  return (
    <section id="process" className="bg-white py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel text="Behind the Scenes" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Creative Process</h2>
        </div>

        {/* Row 1: large | medium | small */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1.5fr] gap-4 mb-4">
          {row1.map((item) => <BentoCell key={item.id} item={item} />)}
        </div>

        {/* Row 2: small (quote) | medium | small */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-4">
          {row2.map((item) => <BentoCell key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

// Renders one bento tile — either an image card or a quote card
const BentoCell = ({ item }) => {
  if (item.type === "quote") {
    return (
      <div className="bg-brand rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
        {/* Label */}
        <div className="flex items-center gap-2 text-blue-200 text-[10px] font-bold tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
          {item.label}
        </div>
        {/* Quote */}
        <div>
          <p className="text-white text-lg font-bold leading-snug mb-3">{item.quote}</p>
          <p className="text-blue-300 text-[10px] font-bold tracking-widest">{item.author}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl min-h-[200px] group">
      <img
        src={item.image}
        alt={item.title || item.label || "process"}
        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Dark overlay for text */}
      {(item.title || item.label) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
      {/* Content overlay */}
      {item.label && (
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase">
          {item.label}
        </div>
      )}
      {item.title && (
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-bold text-base leading-tight">{item.title}</p>
          {item.subtitle && (
            <p className="text-white/70 text-xs mt-1">{item.subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreativeProcessSection;

