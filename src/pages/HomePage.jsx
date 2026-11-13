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
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <DarkStatsBanner />
    <CaseStudiesSection />
    <CreativeProcessSection />
    <TestimonialsSection />
    <EngagementSection />
    <FAQSection />
    <ContactSection />
  </main>
);

export default HomePage;
