import {
  Monitor, Printer, Wifi, Mail, Smartphone, ShieldCheck,
} from "lucide-react";

const services = [
  { icon: Monitor, title: "Computer & Laptop Troubleshooting", desc: "Windows & Mac diagnosis, repair and optimisation" },
  { icon: Wifi, title: "WiFi & Internet Issues & Mesh WiFi Setup", desc: "Fix dropouts, slow speeds and whole-home mesh coverage" },
  { icon: Printer, title: "Printer & Scanner Setup", desc: "Install, configure and troubleshoot printers & scanners" },
  { icon: Mail, title: "Email & Apple ID Recovery", desc: "Gmail, Outlook, Apple ID setup and account recovery" },
  { icon: Smartphone, title: "Phone Setup (iPhone & Android)", desc: "Setup, data transfers and ongoing support" },
  { icon: ShieldCheck, title: "Virus & Malware Removal", desc: "Detection, removal and ongoing protection" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional on-site IT support for homes and businesses across Perth
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
