import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";

// Accepts AU mobile/landline: allows spaces, dashes, optional +61 prefix.
// Must contain 8-15 digits total.
const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'.-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number")
    .refine((v) => v.replace(/\D/g, "").length >= 8, "Phone number is too short"),
  address: z
    .string()
    .trim()
    .min(5, "Please enter a valid address")
    .max(200, "Address must be less than 200 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Please describe your issue (at least 10 characters)")
    .max(1000, "Description must be less than 1000 characters")
    .refine((v) => !/https?:\/\//i.test(v), "Links are not allowed in the description"),
});

type FormState = z.infer<typeof quoteSchema>;
type Errors = Partial<Record<keyof FormState, string>>;

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });
  // Honeypot field — real users leave blank, bots fill it in.
  const [website, setWebsite] = useState("");
  // Timestamp when form mounted — reject submissions faster than 3s (bots).
  const mountedAt = useRef<number>(Date.now());
  const lastSubmitAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (website.trim() !== "") {
      // Silently pretend success to avoid tipping off bots.
      toast({
        title: "Thanks! We'll contact you shortly.",
        description: "Your quote request has been sent successfully.",
      });
      return;
    }

    // Minimum time-on-form check (bots submit instantly)
    if (Date.now() - mountedAt.current < 3000) {
      toast({
        title: "Please take a moment to review your request",
        description: "Submission was too fast. Try again in a few seconds.",
        variant: "destructive",
      });
      return;
    }

    // Rate limit: max one submission per 15s from this browser
    if (Date.now() - lastSubmitAt.current < 15000) {
      toast({
        title: "Please wait a moment",
        description: "You've just submitted a request. Please wait a few seconds before trying again.",
        variant: "destructive",
      });
      return;
    }

    // Zod validation
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast({
        title: "Please check the form",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    lastSubmitAt.current = Date.now();

    try {
      const idempotencyKey = `quote-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quote-request",
          idempotencyKey,
          templateData: result.data,
        },
      });

      if (error) throw error;

      toast({
        title: "Thanks! We'll contact you shortly.",
        description: "Your quote request has been sent successfully.",
      });
      setForm({ name: "", email: "", phone: "", address: "", description: "" });
      setErrors({});
    } catch (err) {
      console.error("Quote form error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at 0424 558 244.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldError = (name: keyof FormState) =>
    errors[name] ? (
      <p className="text-sm text-destructive mt-1">{errors[name]}</p>
    ) : null;

  return (
    <section id="quote-form" className="section-padding section-alt">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Quote</h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your issue and we'll get back to you ASAP
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-card rounded-xl shadow-md border border-border p-6 md:p-8 space-y-5"
        >
          {/* Honeypot — visually hidden, off-screen, not tab-reachable */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-5000px",
              width: 0,
              height: 0,
              overflow: "hidden",
            }}
          >
            <label htmlFor="website">Website (leave blank)</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
            <Input
              id="name"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              aria-invalid={!!errors.name}
            />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              aria-invalid={!!errors.email}
            />
            {fieldError("email")}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Mobile Number *</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={20}
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="0400 000 000"
              aria-invalid={!!errors.phone}
            />
            {fieldError("phone")}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">Address *</label>
            <Input
              id="address"
              name="address"
              required
              maxLength={200}
              autoComplete="street-address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Main St, Perth WA"
              aria-invalid={!!errors.address}
            />
            {fieldError("address")}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">Service Description *</label>
            <Textarea
              id="description"
              name="description"
              required
              maxLength={1000}
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue you're experiencing..."
              rows={4}
              aria-invalid={!!errors.description}
            />
            <div className="flex justify-between mt-1">
              <div>{fieldError("description")}</div>
              <p className="text-xs text-muted-foreground">
                {form.description.length}/1000
              </p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            <Send className="mr-2 h-5 w-5" />
            {loading ? "Sending..." : "Request a Quote"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Protected against spam. We'll only use your details to respond to your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
};

export default QuoteFormSection;
