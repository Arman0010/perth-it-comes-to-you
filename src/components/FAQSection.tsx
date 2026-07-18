import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer same-day IT support in Perth?",
    answer:
      "Yes. We aim to provide same-day service for urgent IT issues across Perth, depending on availability and your location. Contact us early for the fastest response.",
  },
  {
    question: "What areas in Perth do you service?",
    answer:
      "We service all areas in Perth, including the CBD, northern, southern, eastern, and western suburbs. Our mobile IT support team comes directly to your home or business.",
  },
  {
    question: "Do you support both home users and businesses?",
    answer:
      "Absolutely. We offer Home IT Services for residential customers and Business IT Support for small businesses, including office setups, networks, and ongoing maintenance.",
  },
  {
    question: "What types of IT problems can you fix?",
    answer:
      "We handle computer and laptop repairs, slow PC performance, WiFi and internet issues, printer setup, email problems, virus removal, smart device setup, network troubleshooting, backup solutions, and more.",
  },
  {
    question: "Do I need to bring my computer to you?",
    answer:
      "No. We are a mobile IT support service and come to you. Whether it's your home or office, we bring the expertise and tools needed to resolve most issues on-site.",
  },
  {
    question: "How much does on-site IT support cost?",
    answer:
      "Our pricing is competitive and transparent with no hidden fees. Costs depend on the service required. We also offer a 'No fix, no fee' guarantee, so you only pay if we solve your problem.",
  },
  {
    question: "Can you help set up my business WiFi and network?",
    answer:
      "Yes. We specialise in business WiFi and network setup, including secure routers, mesh systems, shared printers, Microsoft 365, and ongoing network support.",
  },
  {
    question: "How do I request a quote or book a service?",
    answer:
      "You can request a quote through the form on this page, call us, or send an email. We'll respond promptly to discuss your needs and arrange a convenient appointment.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding section-alt">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">
          Common questions about our mobile IT support services in Perth
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-foreground font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
