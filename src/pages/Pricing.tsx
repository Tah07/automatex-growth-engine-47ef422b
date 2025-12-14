import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const setupFeatures = [
  "Custom automation workflow design",
  "AI configuration & training",
  "Google account secure integration",
  "Lead targeting setup",
  "Email template creation & optimization",
  "Full testing & quality assurance",
  "Launch support",
];

const maintenanceFeatures = [
  "24/7 system monitoring",
  "Bug fixes & updates",
  "Performance optimization",
  "Email support (24-48hr response)",
];

const pricingFAQs = [
  {
    question: "Why is there a one-time setup fee?",
    answer: "Every business is unique. The setup includes custom workflow design, AI training on your specific industry, email template creation, and thorough testing. This ensures your automation works perfectly for your needs.",
  },
  {
    question: "Why no refunds?",
    answer: "The setup involves custom work specific to your business — time our team invests that can't be recovered. However, we offer a satisfaction guarantee: we'll work with you until the system meets your requirements.",
  },
  {
    question: "Can I cancel the maintenance plan?",
    answer: "Yes, you can cancel anytime with 30 days notice. Your automation will continue to run, but you won't receive monitoring, updates, or support.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. The setup covers everything to get you running. Maintenance is optional but recommended for ongoing support and optimization.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we can discuss payment plans for the setup fee. Contact us to find an arrangement that works for your budget.",
  },
];

export default function Pricing() {
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No long-term contracts. Just clear pricing for 
              done-for-you AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* One-Time Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-20" />
              <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border h-full">
                <div className="absolute -top-4 left-8 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>

                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    One-Time Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Complete done-for-you automation setup tailored to your business.
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-display font-bold text-foreground">Custom</span>
                  <p className="text-muted-foreground mt-2">Based on your requirements</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {setupFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" className="w-full" size="lg" asChild>
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Monthly Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border h-full"
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Monthly Maintenance
                </h3>
                <p className="text-muted-foreground">
                  Keep your automation running smoothly with ongoing support.
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-foreground">$9</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {maintenanceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Optional but recommended.</strong> Cancel anytime with 30 days notice.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">All prices in USD</p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                No hidden fees
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                No contracts
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Satisfaction guarantee
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Pricing FAQs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Common Questions About Pricing
            </h2>
          </motion.div>

          <div className="space-y-4">
            {pricingFAQs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-background/70 mb-8">
              Book a free demo call to discuss your needs and get a custom quote.
            </p>
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
