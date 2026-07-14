import { Phone, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="IT support technician in Perth" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            On-site IT Support – We Come to You
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed">
            Fast, reliable IT support delivered directly to your home or business in Perth. From network setup to office tech solutions — we keep you connected and productive.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:0424558244">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToForm}>
              Get Help Today
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:0424558244"
          className="animate-float flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/61424558244"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-float-delay flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-primary-foreground shadow-xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <button
          onClick={scrollToForm}
          className="animate-float-delay-2 flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-xl hover:scale-110 transition-transform"
          aria-label="Request a quote"
        >
          <FileText className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
