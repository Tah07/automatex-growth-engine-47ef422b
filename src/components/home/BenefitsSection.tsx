import { motion } from "framer-motion";
import { Clock, Users, Zap, Mail, Shield, Check } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Every Week",
    description: "No more manual outreach. Let AI handle the repetitive work while you focus on closing.",
  },
  {
    icon: Users,
    title: "Get More Qualified Clients",
    description: "AI-powered targeting finds prospects who actually need your services.",
  },
  {
    icon: Zap,
    title: "No Technical Skills Needed",
    description: "We handle everything from setup to optimization. You just approve and go.",
  },
  {
    icon: Mail,
    title: "Emails Sent From YOUR Gmail",
    description: "Messages go out from your real email address for maximum trust and deliverability.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Industry-standard security. Your data stays private. CAN-SPAM compliant.",
  },
  {
    icon: Check,
    title: "Done-For-You Service",
    description: "We build, test, and manage your automation. You focus on your business.",
  },
];

export function BenefitsSection() {
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
            Why Businesses Choose AutomateX
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to grow your business without the grind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-bordered group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
