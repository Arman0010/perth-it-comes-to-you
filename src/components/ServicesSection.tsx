import {
  Monitor, Printer, Wifi, Mail, Smartphone, ShieldCheck, Tv, Network,
} from "lucide-react";

const services = [
  { icon: Monitor, title: "Computer Troubleshooting", desc: "Windows & macOS diagnosis and repair" },
  { icon: Printer, title: "Printer & Scanner Setup", desc: "Install, configure and troubleshoot printers" },
  { icon: Wifi, title: "WiFi & Internet Issues", desc: "Fix dropouts, slow speeds and connectivity" },
  { icon: Network, title: "Mesh WiFi Setup", desc: "Whole-home coverage with mesh systems" },
  { icon: Mail, title: "Email Setup & Recovery", desc: "Gmail, Outlook, Apple ID setup and recovery" },
  { icon: Smartphone, title: "Phone Setup", desc: "iPhone & Android setup, transfers and support" },
  { icon: ShieldCheck, title: "Virus Removal", desc: "Malware detection, removal and protection" },
  { icon: Tv, title: "Smart TV Setup", desc: "Streaming apps, casting and connectivity" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional IT support for homes and businesses across Perth
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
