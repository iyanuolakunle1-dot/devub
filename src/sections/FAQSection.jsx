import { useEffect, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { getFaq } from "../services/api";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIds, setOpenIds] = useState([1, 2, 3]); // open all by default matching the screenshot

  useEffect(() => {
    getFaq().then(setFaqs).catch(console.error);
  }, []);

  const toggle = (id) => {
    setOpenIds((prev) =>

      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24 px-5 md:px-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">my brother said this "I always told you stop making it look like you use AI,Why didn't you change the logo,Atleast they are images so change it and also some logos are not there"
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="FREQUENTLY ASKED QUESTIONS" />
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mt-3">
            We clarify the technical uncertainties
          </h2>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-100/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-blue-100 transition-all cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-2">
                      {item.question}
                    </h3>
                    {isOpen && (
                      <p className="text-sm text-gray-500 leading-relaxed font-normal">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[#2563EB] font-bold text-lg hover:bg-blue-50 transition-colors"
                    aria-label="Toggle FAQ"
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
