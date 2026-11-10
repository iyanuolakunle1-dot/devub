import { useEffect, useState } from "react";
import { getDarkStats } from "../services/api";

const DarkStatsBanner = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getDarkStats().then(setStats).catch(console.error);
  }, []);

  return (
    <section className="bg-[#090D16] text-white py-16 px-5 md:px-8 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, idx) => (
          <div key={idx} className={`${idx > 0 ? "pt-6 md:pt-0" : ""}`}>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
              {s.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DarkStatsBanner;

