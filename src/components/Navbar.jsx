import { useState } from "react";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo with blue icon */}
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-lg text-[#0F172A] tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm5 8h-2v-4h2v4zm0-6h-2V7h2v4z"/>
            </svg>
          </div>
          <span>Devub Technologies</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[#2563EB] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" className="text-xs px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8]">
            Talk to an Expert
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 space-y-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-semibold text-gray-700 hover:text-[#2563EB] py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" className="mt-2 w-full justify-center bg-[#2563EB]">
            Talk to an Expert
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
