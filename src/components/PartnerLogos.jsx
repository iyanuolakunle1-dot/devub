// Clean vector SVG brand logos for the partner strip
export const PartnerLogos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
      {/* AppMaster */}
      <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 group-hover:text-[#2563EB] fill-current transition-colors">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span className="font-extrabold text-[15px] tracking-tight text-gray-700 group-hover:text-[#0F172A]">
          AppMaster
        </span>
      </div>

      {/* Segment */}
      <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 group-hover:text-[#52BD95] fill-current transition-colors">
          <circle cx="5" cy="12" r="3" fill="#52BD95" />
          <circle cx="19" cy="6" r="3" fill="#52BD95" />
          <circle cx="19" cy="18" r="3" fill="#52BD95" />
          <path d="M5 12h8m0 0l6-6m-6 6l6 6" stroke="#52BD95" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-bold text-[15px] tracking-tight text-gray-700 group-hover:text-[#0F172A]">
          Segment
        </span>
      </div>

      {/* Webflow */}
      <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 group-hover:text-[#146EF5] fill-current transition-colors">
          <path d="M22 6.5l-4.5 11h-4l2.5-6h-2.5l-2.5 6h-4L9 6.5h3.5l-1.5 5h2l2-5h3l-2 5h2z" fill="currentColor" />
        </svg>
        <span className="font-extrabold text-[15px] tracking-tight text-gray-700 group-hover:text-[#0F172A]">
          webflow
        </span>
      </div>

      {/* Intercom */}
      <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 group-hover:text-[#2563EB] fill-current transition-colors">
          <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 8v8M10 6v12M14 6v12M17 8v8M7 16a5 5 0 0010 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-bold text-[15px] tracking-tight text-gray-700 group-hover:text-[#0F172A]">
          Intercom
        </span>
      </div>

      {/* Retool */}
      <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 group-hover:text-[#3C3C3C] fill-current transition-colors">
          <path d="M4 5h6v4H4zm0 6h10v4H4zm0 6h16v4H4z" fill="currentColor" />
        </svg>
        <span className="font-extrabold text-[15px] tracking-tight text-gray-700 group-hover:text-[#0F172A]">
          Retool
        </span>
      </div>
    </div>
  );
};

export default PartnerLogos;

