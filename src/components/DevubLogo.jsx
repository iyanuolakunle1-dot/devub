// Sharp, vector-crisp Devub Technologies Brand Logo
export const DevubLogo = ({ mode = "light", size = "default" }) => {
  const isDark = mode === "dark";
  const iconSize = size === "small" ? "w-6 h-6" : "w-7 h-7";
  const textSize = size === "small" ? "text-base" : "text-[19px]";

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Devub Emblem */}
      <div className={`${iconSize} rounded-full bg-[#2563EB] flex items-center justify-center shadow-xs shrink-0 ring-2 ring-[#2563EB]/20`}>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
          {/* Distinct modern stylized 'D' logo mark */}
          <path d="M6 4h6.5a7.5 7.5 0 0 1 7.5 7.5 7.5 7.5 0 0 1-7.5 7.5H6V4zm3.5 3v9H12a4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 12 7H9.5z" />
          <circle cx="12" cy="11.5" r="1.5" fill="#2563EB" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <span className={`font-extrabold ${textSize} tracking-tight transition-colors ${
        isDark ? "text-white" : "text-[#0F172A] group-hover:text-[#2563EB]"
      }`}>
        Devub Technologies
      </span>
    </div>
  );
};

export default DevubLogo;

