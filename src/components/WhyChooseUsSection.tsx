import { MapPin, Zap, Heart, BadgeCheck } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "We Come to You", desc: "Mobile service across Perth — home or office" },
  { icon: Zap, title: "Same-Day Service", desc: "Available for urgent issues when you need us most" },
  { icon: Heart, title: "Friendly & Patient", desc: "We explain everything in plain language" },
  { icon: BadgeCheck, title: "No Fix, No Fee", desc: "You only pay if we solve your problem" },
];

const WhyChooseUsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Arman IT?</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  </section>
);

export default WhyChooseUsSection;
