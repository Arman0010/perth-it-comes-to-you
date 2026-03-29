import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tipu0010@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Full Name": form.name,
          Email: form.email,
          "Mobile Number": form.phone || "Not provided",
          Address: form.address,
          "Service Description": form.description,
          _subject: `New Quote Request from ${form.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        toast({
          title: "Thanks! We'll contact you shortly.",
          description: "Your quote request has been sent successfully.",
        });
        setForm({ name: "", email: "", phone: "", address: "", description: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at 0424 558 244.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-form" className="section-padding section-alt">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Quote</h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your issue and we'll get back to you ASAP
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md border border-border p-6 md:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
            <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
            <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Mobile Number</label>
            <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0400 000 000" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">Address *</label>
            <Input id="address" name="address" required value={form.address} onChange={handleChange} placeholder="123 Main St, Perth WA" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">Service Description *</label>
            <Textarea id="description" name="description" required value={form.description} onChange={handleChange} placeholder="Describe the issue you're experiencing..." rows={4} />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            <Send className="mr-2 h-5 w-5" />
            {loading ? "Sending..." : "Request a Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuoteFormSection;
