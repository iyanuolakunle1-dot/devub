/**
 * SectionLabel.jsx
 * ----------------
 * The small pill label shown above section headings.
 * Example: "FEATURED WORK", "CASE STUDIES", "BEHIND THE SCENES"
 *
 * Props:
 *  - text (string): label text – all-caps is applied by CSS
 */
const SectionLabel = ({ text }) => (
  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-brand text-[11px] font-semibold tracking-widest uppercase mb-3">
    {text}
  </div>
);

export default SectionLabel;

