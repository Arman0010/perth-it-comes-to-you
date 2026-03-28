import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <span className="text-xl font-extrabold text-primary tracking-tight">Arman IT</span>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo("quote-form")} className="hover:text-primary transition-colors">Get a Quote</button>
        </nav>

        <Button size="sm" asChild>
          <a href="tel:0424558244">
            <Phone className="mr-1.5 h-4 w-4" /> Call Now
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
