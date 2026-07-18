import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Perth, WA",
    text: "Arman IT fixed our office WiFi in under an hour. Professional, fast, and explained everything clearly. Highly recommended!",
  },
  {
    name: "Michael T.",
    location: "Canning Vale",
    text: "Our business computers were running painfully slow. Arman optimised them same-day and now everything runs smoothly. Great service.",
  },
  {
    name: "Priya R.",
    location: "Joondalup",
    text: "Reliable and friendly IT support. Set up our home network and smart devices perfectly. Will definitely call again if needed.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Trusted by homeowners and businesses across Perth
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground flex-grow mb-6 leading-relaxed">"{t.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
