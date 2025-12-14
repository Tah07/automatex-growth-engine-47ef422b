import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const setupFeatures = [
  "Custom automation workflow",
  "AI configuration & training",
  "Google account integration",
  "Lead targeting setup",
  "Email template creation",
  "Testing & optimization",
];

const maintenanceFeatures = [
  "24/7 system monitoring",
  "Bug fixes & updates",
  "Performance optimization",
  "Email support",
];

export function PricingSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* One-Time Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                One-Time Setup
              </h3>
              <p className="text-sm text-muted-foreground">
                Everything you need to get started with AI automation.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-display font-bold text-foreground">Custom</span>
              <span className="text-muted-foreground ml-2">quote</span>
            </div>

            <ul className="space-y-3 mb-8">
              {setupFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="cta" className="w-full" size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Monthly Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-bordered"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Monthly Maintenance
              </h3>
              <p className="text-sm text-muted-foreground">
                Keep your automation running smoothly.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-display font-bold text-foreground">$9</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
              {maintenanceFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full" size="lg" asChild>
              <Link to="/contact">
                Talk to Us
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All prices in USD. Cancel maintenance anytime.
        </motion.p>
      </div>
    </section>
  );
}
