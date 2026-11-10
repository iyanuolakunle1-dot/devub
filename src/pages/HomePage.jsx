/**
 * HomePage.jsx
 * ------------
 * The main (and only) page of the Devub Technologies website.
 * All sections are assembled here in order.
 *
 * To add more pages later (e.g. /services, /about), create a new file in src/pages/
 * and add a Route in App.jsx.
 */
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import PortfolioSection from "../sections/PortfolioSection";
import CaseStudiesSection from "../sections/CaseStudiesSection";
import CreativeProcessSection from "../sections/CreativeProcessSection";
import FAQSection from "../sections/FAQSection";
import ContactSection from "../sections/ContactSection";

const HomePage = () => (
  <main>
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <CaseStudiesSection />
    <CreativeProcessSection />
    <FAQSection />
    <ContactSection />
  </main>
);

export default HomePage;

