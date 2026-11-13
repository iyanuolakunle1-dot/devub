import { useState } from "react";
import Button from "./Button";
import DevubLogo from "./DevubLogo";
import { NAV_LINKS, BUTTON_LABELS } from "../constants/text";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <DevubLogo mode="light" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 text-[13px] font-medium text-gray-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[#2563EB] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={() => console.log("Sign In clicked")}
            className="text-sm font-semibold text-gray-700 hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            {BUTTON_LABELS.signIn}
          </button>
          <Button
            variant="primary"
            className="text-xs px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full font-semibold shadow-sm text-white"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {BUTTON_LABELS.getStarted}
          </Button>
        </div>

        {/* Mobile toggle */}
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
          <Button
            variant="primary"
            className="mt-2 w-full justify-center bg-[#2563EB]"
            onClick={() => {
              setMenuOpen(false);
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {BUTTON_LABELS.talkToExpert}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
