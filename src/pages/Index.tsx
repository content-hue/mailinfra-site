import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import PainPoints from "@/components/PainPoints";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";


import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TrustSecurity from "@/components/TrustSecurity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <PainPoints />
        <SolutionSection />
        <HowItWorks />
        <Testimonials />
        
        
        <PricingSection />
        <FAQSection />
        <TrustSecurity />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
