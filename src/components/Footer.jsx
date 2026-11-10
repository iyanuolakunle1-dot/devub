/**
 * Footer.jsx
 * ----------
 * Dark footer with logo, description, and 3 column link groups.
 * Bottom bar shows copyright and legal links.
 *
 * To add backend: footer data (links, company info) can be fetched from
 * GET /api/site-config and passed in as props.
 */

const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: ["Custom Apps", "System Audit", "Cloud DevOps"],
  },
  {
    heading: "Company",
    links: ["About Us", "Case Studies", "Careers"],
  },
  {
    heading: "Contact Us",
    links: ["hello@devub.io", "Twitter / X", "LinkedIn"],
  },
];

const Footer = () => (
  <footer className="bg-dark text-gray-400">
    {/* Main footer content */}
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Brand column */}
      <div className="md:col-span-1">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-bold text-base">Devub Technologies</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Highly available technical architecture built from custom software solutions that guarantee robust digital growth.
        </p>
      </div>

      {/* Link columns */}
      {FOOTER_COLUMNS.map((col) => (
        <div key={col.heading}>
          <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
          <ul className="space-y-2.5">
            {col.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-600">
          © 2026 Devub Technologies Agency Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">SLA</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

