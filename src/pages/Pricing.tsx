import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
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
    question: "Why is there a one-time setup fee for AI automation?",
    answer: "Every business is unique. The setup includes custom workflow design, AI training on your specific industry, email template creation, and thorough testing. This ensures your automation works perfectly for your needs.",
  },
  {
    question: "Why is there no refund policy?",
    answer: "The setup involves custom work specific to your business — time our team invests that can't be recovered. However, we offer a satisfaction guarantee: we'll work with you until the system meets your requirements.",
  },
  {
    question: "Can I cancel the monthly maintenance plan?",
    answer: "Yes, you can cancel anytime with 30 days notice. Your automation will continue to run, but you won't receive monitoring, updates, or support.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. The setup covers everything to get you running. Maintenance is optional but recommended for ongoing support and optimization.",
  },
  {
    question: "Do you offer payment plans for automation setup?",
    answer: "Yes, we can discuss payment plans for the setup fee. Contact us to find an arrangement that works for your budget.",
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AutomateX AI Automation Services",
  "description": "Done-for-you AI automation for lead generation, email outreach, and appointment booking",
  "brand": {
    "@type": "Brand",
    "name": "AutomateX"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "One-Time Setup",
      "description": "Complete done-for-you automation setup including custom workflow design, AI configuration, Google integration, and testing",
      "priceCurrency": "USD",
      "price": "0",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Monthly Maintenance",
      "description": "24/7 monitoring, bug fixes, updates, and email support",
      "priceCurrency": "USD",
      "price": "9",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  ]
};

export default function Pricing() {
  return (
    <PageLayout>
      <SEOHead
        title="AI Automation Pricing | Transparent & Affordable"
        description="Simple, transparent pricing for done-for-you AI automation. Custom setup + $9/month maintenance. No hidden fees, no long-term contracts. Serving USA & Canada businesses."
        canonical="https://automatex.ai/pricing"
        structuredData={pricingSchema}
      />

      {/* Hero */}
      <header className="bg-gradient-hero section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent AI Automation Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No long-term contracts. Just clear pricing for 
              done-for-you AI automation services.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="section-padding bg-background" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">AI Automation Pricing Plans</h2>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* One-Time Setup */}
            <motion.article
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
                    One-Time Automation Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Complete done-for-you AI automation setup tailored to your business.
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-display font-bold text-foreground">Custom</span>
                  <p className="text-muted-foreground mt-2">Based on your requirements</p>
                </div>

                <ul className="space-y-4 mb-8" role="list">
                  {setupFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="cta" className="w-full" size="lg" asChild>
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </motion.article>

            {/* Monthly Maintenance */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border h-full"
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Monthly Maintenance Plan
                </h3>
                <p className="text-muted-foreground">
                  Keep your AI automation running smoothly with ongoing support.
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-foreground">$9</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>

              <ul className="space-y-4 mb-8" role="list">
                {maintenanceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" aria-hidden="true" />
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
            </motion.article>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">All prices in USD • Serving USA & Canada</p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground flex-wrap">
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                No hidden fees
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                No contracts
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                Satisfaction guarantee
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30" aria-labelledby="faq-heading">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Pricing FAQs</span>
            </div>
            <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Common Pricing Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {pricingFAQs.map((faq, index) => (
              <motion.article
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground" aria-labelledby="cta-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl font-bold text-background mb-6">
              Ready to Get Started with AI Automation?
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
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
