import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen pt-24">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <FAQSection />
    <QuoteFormSection />
    <ContactSection />
  </div>
);

export default Index;
