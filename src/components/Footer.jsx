import DevubLogo from "./DevubLogo";

const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Custom Apps", href: "#services" },
      { label: "System Audit", href: "#services" },
      { label: "Cloud DevOps", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Our Process", href: "#process" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { label: "Get in Touch", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-[#090D16] text-gray-400 border-t border-white/5 pt-16 pb-12">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 md:gap-14 pb-14">
        <div className="max-w-xs">
          <div className="mb-5">
            <DevubLogo mode="dark" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Highly available technical architecture built from custom software solutions that guarantee robust digital growth.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 tracking-tight">
              {col.heading}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          © 2026 Devub Technologies Agency Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">SLA</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
