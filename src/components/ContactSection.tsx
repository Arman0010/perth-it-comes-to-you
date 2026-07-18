import { Phone, Mail, Globe, MapPin, Facebook, Linkedin } from "lucide-react";

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
        <a href="https://wa.me/61424558244" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <p className="text-primary-foreground/60 text-sm mt-6">
        © {new Date().getFullYear()} Arman IT. All rights reserved.
      </p>
    </div>
  </section>
);

export default ContactSection;
