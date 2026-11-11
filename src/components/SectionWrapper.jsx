import React from 'react';

/**
 * SectionWrapper
 * ---------------
 * Provides a consistent vertical padding, horizontal padding and max‑width
 * for every top‑level section of the site. The default background is white
 * but callers can override it with the `bg` prop (e.g. "bg‑section‑bg").
 */
export const SectionWrapper = ({
  children,
  bg = "bg-white",
  className = "",
}) => (
  <section className={`py-20 px-5 md:px-8 ${bg} ${className}`}> 
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

export default SectionWrapper;

