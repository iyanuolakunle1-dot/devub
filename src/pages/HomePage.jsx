import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import PortfolioSection from "../sections/PortfolioSection";
import DarkStatsBanner from "../sections/DarkStatsBanner";
import CaseStudiesSection from "../sections/CaseStudiesSection";
import CreativeProcessSection from "../sections/CreativeProcessSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import EngagementSection from "../sections/EngagementSection";
import FAQSection from "../sections/FAQSection";
import ContactSection from "../sections/ContactSection";

const HomePage = () => (
  <main className="w-full">
    {/* 1. Hero with partner logos strip */}
    <HeroSection />

    {/* 2. About section with 'Fragile' punch illustration */}
    <AboutSection />

    {/* 3. 4-Card capabilities grid */}
    <ServicesSection />

    {/* 4. Portfolio with filter tabs */}
    <PortfolioSection />

    {/* 5. High-contrast Dark Stats Banner */}
    <DarkStatsBanner />

    {/* 6. Case Studies Cards */}
    <CaseStudiesSection />

    {/* 7. Bento Grid Creative Process */}
    <CreativeProcessSection />

    {/* 8. Client Testimonials */}
    <TestimonialsSection />

    {/* 9. Engagement / Pricing Models */}
    <EngagementSection />

    {/* 10. Clarify Uncertainties Accordion FAQ */}
    <FAQSection />

    {/* 11. Contact Form */}
    <ContactSection />
  </main>
);

export default HomePage;
