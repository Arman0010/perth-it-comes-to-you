import { MapPin, Clock, Heart, BadgeCheck, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "On-site service", desc: "We come to you — home or office" },
  { icon: Clock, title: "Same-day service available", desc: "Fast response when you need us most" },
  { icon: Heart, title: "Friendly, reliable & professional", desc: "We explain everything in plain language" },
  { icon: BadgeCheck, title: "Affordable pricing", desc: "Competitive rates with no hidden fees" },
  { icon: ShieldCheck, title: "No fix, no fee*", desc: "You only pay if we solve your problem" },
];

const WhyChooseUsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Arman IT?</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <r.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">{r.title}</h3>
            <p className="text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-center bg-primary/5 rounded-xl p-6 border border-primary/10">
        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
        <p className="text-lg font-semibold text-foreground">Servicing all areas in Perth</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
