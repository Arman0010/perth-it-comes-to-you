import { Phone, Mail, Globe, MapPin, Facebook, Instagram } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "0424 558 244", href: "tel:0424558244" },
  { icon: Mail, label: "Email", value: "arman@armanitsolutions.com", href: "mailto:arman@armanitsolutions.com" },
  { icon: Globe, label: "Website", value: "www.armanitsolutions.com", href: "https://www.armanitsolutions.com" },
  { icon: MapPin, label: "Location", value: "Perth, WA", href: undefined },
];

const ContactSection = () => (
  <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-10">Get in Touch</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {contacts.map((c) => {
          const content = (
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
              <c.icon className="h-7 w-7 text-primary-foreground" />
              <span className="text-xs uppercase tracking-wider text-primary-foreground/70 font-medium">{c.label}</span>
              <span className="text-primary-foreground font-semibold text-sm">{c.value}</span>
            </div>
          );

          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={c.label}>{content}</div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <a href="https://facebook.com/armanitsolutions" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
          <Facebook className="h-5 w-5 text-primary-foreground" />
        </a>
      </div>

      <p className="text-primary-foreground/60 text-sm mt-6">
        © {new Date().getFullYear()} Arman IT. All rights reserved.
      </p>
    </div>
  </section>
);

export default ContactSection;
