/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: "#2563EB",         // main blue
        "brand-dark": "#1D4ED8",  // hover blue
        dark: "#0E0E0E",          // footer background
        "dark-card": "#1A1A1A",   // footer card
        muted: "#6B7280",         // grey text
        section: "#EEF2FF",       // light lavender background
      },
    },
  },
  plugins: [],
};

