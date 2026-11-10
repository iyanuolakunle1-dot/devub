/**
 * FAQSection.jsx
 * --------------
 * Accordion FAQ section.
 * Background: light lavender (#EEF2FF). Each item expands on click.
 *
 * Data fetched from api.js → getFaq()
 * When backend is live: GET /api/faq
 */
import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getFaq } from "../services/api";

// Single accordion item
const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
    {/* Header row */}
    <button
      className="w-full flex items-center justify-between px-6 py-5 text-left"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
        {item.question}
      </span>
      <span
        className={`shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-brand font-bold text-lg transition-transform duration-200 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </button>

    {/* Expandable answer */}
    {isOpen && (
      <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
        {item.answer}
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(1); // first item open by default
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaq()
      .then(setFaqs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="faq" className="bg-[#EEF2FF] py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            We clarify the technical uncertainties
          </h2>
        </div>

        {/* Accordion list */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-[3px] border-brand border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-3">
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;

