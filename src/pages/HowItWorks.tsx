import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { 
  Link2, 
  Bot, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  Shield,
  Zap,
  Clock,
  CheckCircle2
} from "lucide-react";

const detailedSteps = [
  {
    step: 1,
    icon: Link2,
    title: "Connect Your Google Account",
    description: "Start by securely connecting your Gmail account using Google's official OAuth system.",
    details: [
      "No passwords stored — ever",
      "Industry-standard OAuth 2.0 security",
      "You maintain full control",
      "Revoke access anytime from Google settings",
    ],
  },
  {
    step: 2,
    icon: Bot,
    title: "We Configure Your AI System",
    description: "Our team sets up your custom automation based on your business needs.",
    details: [
      "Define your ideal customer profile",
      "Create personalized email templates",
      "Set up targeting criteria",
      "Configure response triggers",
    ],
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "AI Handles Outreach & Replies",
    description: "The AI sends personalized messages and intelligently handles responses.",
    details: [
      "Personalized emails sent from YOUR Gmail",
      "Natural, human-like conversations",
      "Smart follow-up sequences",
      "Handles objections and questions",
    ],
  },
  {
    step: 4,
    icon: Calendar,
    title: "Qualified Leads Book Automatically",
    description: "Interested prospects are guided to book directly into your calendar.",
    details: [
      "Seamless calendar integration",
      "Automated scheduling links",
      "Confirmation emails sent",
      "You just show up and close",
    ],
  },
];

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most setups are completed within 1-2 business days. We handle everything — you just need to connect your Google account and approve the configuration.",
  },
  {
    question: "Will this look like spam?",
    answer: "No. Emails are sent from your real Gmail address with personalized content. We follow best practices to ensure high deliverability and avoid spam folders.",
  },
  {
    question: "What if leads reply with questions?",
    answer: "The AI handles common questions and objections automatically. For complex queries, it gracefully hands off to you or schedules a call.",
  },
  {
    question: "Can I see what's being sent?",
    answer: "Absolutely. You have full visibility into all communications. Every email goes through your Gmail, so you can see everything in your Sent folder.",
  },
];

export default function HowItWorks() {
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
              How AutomateX Works
            </h1>
            <p className="text-lg text-muted-foreground">
              A simple, transparent process that puts qualified leads on autopilot. 
              No technical skills required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
                    <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                          {step.step}
                        </div>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why This Approach Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Secure & Compliant", desc: "Google OAuth, no stored passwords, CAN-SPAM compliant" },
              { icon: Zap, title: "Fast Setup", desc: "Go live in 1-2 days, not weeks of configuration" },
              { icon: Clock, title: "24/7 Operation", desc: "AI works around the clock while you sleep" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bordered"
              >
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Book a free demo and see how AutomateX can work for your business.
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
