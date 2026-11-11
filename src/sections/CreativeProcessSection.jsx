import SectionLabel from "../components/SectionLabel";
import { processItems } from "../data/mockData";

const CreativeProcessSection = () => {
  const row1 = processItems.slice(0, 3);
  const row2 = processItems.slice(3, 6);

  return (
    <section id="process" className="bg-white py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="BEHIND THE SCENES" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            Our Creative Process
          </h2>
        </div>

        {/* Row 1: large (workshop) | medium (monitor) | small (sticky) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1.1fr_0.95fr] gap-5 mb-5">
          {row1.map((item, idx) => (
            <BentoCell key={item.id} item={item} heightClass="h-72" isSticky={idx === 2} />
          ))}
        </div>

        {/* Row 2: blue quote card | medium (laptop desk) | small (team) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.55fr_0.95fr] gap-5">
          {row2.map((item) => (
            <BentoCell key={item.id} item={item} heightClass="h-60" />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoCell = ({ item, heightClass = "h-64", isSticky = false }) => {
  if (item.type === "quote") {
    return (
      <div className={`bg-[#2563EB] rounded-3xl p-8 flex flex-col justify-between ${heightClass} shadow-sm`}>
        <div className="flex items-center gap-2 text-white/90 text-[11px] font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-white" />
          {item.label}
        </div>
        <div>
          <p className="text-white text-xl sm:text-2xl font-bold leading-snug mb-4">
            {item.quote}
          </p>
          <p className="text-white/80 text-[11px] font-bold tracking-widest uppercase">
            {item.author}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl ${heightClass} group shadow-xs bg-gray-100 ${isSticky ? "ring-2 ring-blue-500/80" : ""}`}>
      <img
        src={item.image}
        alt={item.title || item.label || "process"}
        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      
      {/* Dark gradient overlay if title or label present */}
      {(item.title || item.label) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      )}

      {/* Top-left glass label pill */}
      {item.label && (
        <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
          {item.label}
        </div>
      )}

      {/* Bottom text */}
      {item.title && (
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white font-extrabold text-lg sm:text-xl leading-tight drop-shadow-sm mb-1">{item.title}</p>
          {item.subtitle && (
            <p className="text-white/80 text-xs sm:text-sm drop-shadow-sm leading-relaxed">{item.subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreativeProcessSection;
