import {
  Monitor,
  Gauge,
  Wifi,
  Router,
  Printer,
  Mail,
  Smartphone,
  ShieldCheck,
  Tv,
  Camera,
  Building2,
  Briefcase,
  Cloud,
  HardDrive,
  Wrench,
  Settings,
  Clock,
  Home,
} from "lucide-react";

const homeServices = [
  { icon: Monitor, title: "Computer & Laptop Troubleshooting", desc: "Windows & Mac diagnosis, repair and optimisation" },
  { icon: Gauge, title: "Slow PC & Performance Optimisation", desc: "Speed up slow computers and improve startup times" },
  { icon: Wifi, title: "WiFi & Internet Setup and Repairs", desc: "Fix dropouts, slow speeds and connection issues" },
  { icon: Router, title: "Smart Home WiFi & Mesh Network Installation", desc: "Whole-home coverage with seamless mesh WiFi" },
  { icon: Printer, title: "Printer & Scanner Setup", desc: "Install, configure and troubleshoot printers & scanners" },
  { icon: Mail, title: "Email & Apple ID Recovery", desc: "Gmail, Outlook, Apple ID setup and account recovery" },
  { icon: Smartphone, title: "iPhone & Android Setup & Data Transfer", desc: "Setup, transfers and ongoing mobile support" },
  { icon: ShieldCheck, title: "Virus & Malware Removal", desc: "Detection, removal and ongoing protection" },
  { icon: Tv, title: "Smart TV & Device Setup", desc: "Connect and configure smart TVs and streaming devices" },
  { icon: Camera, title: "IP Camera Installation & Configuration", desc: "Home security cameras setup and remote viewing" },
];

const businessServices = [
  { icon: Briefcase, title: "Office Computer & Laptop Support", desc: "Reliable support for your office workstations" },
  { icon: Router, title: "Business WiFi & Network Setup", desc: "Secure, fast business networks and WiFi" },
  { icon: Printer, title: "Printer, Scanner & Shared Device Configuration", desc: "Shared office devices setup for your team" },
  { icon: Cloud, title: "Microsoft 365 & Email Setup", desc: "Business email, Microsoft 365 and cloud setup" },
  { icon: Monitor, title: "New PC & Workstation Installation", desc: "Deploy and configure new computers for staff" },
  { icon: HardDrive, title: "File & Data Backup Solutions", desc: "Protect your business data with reliable backups" },
  { icon: Wifi, title: "Network Troubleshooting", desc: "Diagnose and fix business network problems" },
  { icon: Camera, title: "IP Camera & CCTV Setup", desc: "Business security camera systems installation" },
  { icon: Wrench, title: "Remote & On-site Technical Support", desc: "Flexible support wherever you need it" },
  { icon: Settings, title: "Ongoing IT Maintenance", desc: "Regular maintenance to keep systems running smoothly" },
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center max-w-sm w-full">
    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 mx-auto">
      <Icon className="h-6 w-6 text-accent-foreground" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional on-site IT support for homes and businesses across Perth
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Home className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Home IT Services</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center justify-items-center">
          {homeServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Small Business IT Support</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
