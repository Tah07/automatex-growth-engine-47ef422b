import { motion } from "framer-motion";
import { Link2, Bot, MessageSquare, Calendar } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Link2,
    title: "Connect Your Google Account",
    description: "Securely link your Gmail using Google OAuth. No passwords stored, full control retained.",
  },
  {
    step: 2,
    icon: Bot,
    title: "AI Finds & Contacts Leads",
    description: "Our AI identifies your ideal prospects and sends personalized outreach from your email.",
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "AI Handles Replies",
    description: "Intelligent follow-ups and responses keep conversations going until they're ready to book.",
  },
  {
    step: 4,
    icon: Calendar,
    title: "Meetings Booked Automatically",
    description: "Qualified leads are booked directly into your calendar. You just show up.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How AutomateX Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple 4-step process that puts your client acquisition on autopilot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
              
              <div className="card-elevated text-center relative bg-card">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 mt-2">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
