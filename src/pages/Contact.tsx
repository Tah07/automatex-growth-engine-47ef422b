import { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", business: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's Talk About Your Growth
            </h1>
            <p className="text-lg text-muted-foreground">
              Book a free demo or send us a message. No pressure, just a 
              conversation about how AI automation can help your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-elevated">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name</Label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Your Company Inc."
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Info & Booking */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Book a Call */}
              <div className="card-bordered">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Prefer a Call?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 15-minute demo call. We'll discuss your needs and 
                  show you exactly how AutomateX can work for your business.
                </p>
                <Button variant="default" className="w-full" size="lg" asChild>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Free Demo Call
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      Email Support
                    </h4>
                    <a 
                      href="mailto:support@automatex.ai" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@automatex.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      Response Time
                    </h4>
                    <p className="text-muted-foreground">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Message */}
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      Your Information is Safe
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We respect your privacy. Your contact information is only 
                      used to respond to your inquiry and will never be sold or 
                      shared with third parties.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3">
                  {[
                    "Quick response within 24 hours",
                    "No pushy sales tactics",
                    "Honest assessment of if we're a fit",
                    "Clear pricing with no hidden fees",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
