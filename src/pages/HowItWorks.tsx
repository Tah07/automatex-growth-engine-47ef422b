import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
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
    title: "Connect Your Google Account Securely",
    description: "Start by securely connecting your Gmail account using Google's official OAuth 2.0 system for business automation.",
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
    title: "We Configure Your AI Automation System",
    description: "Our automation experts set up your custom AI workflow based on your business needs and target audience.",
    details: [
      "Define your ideal customer profile",
      "Create personalized email templates",
      "Set up lead targeting criteria",
      "Configure AI response triggers",
    ],
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "AI Handles Lead Outreach & Follow-ups",
    description: "The AI automation sends personalized messages and intelligently handles responses and follow-up sequences.",
    details: [
      "Personalized emails sent from YOUR Gmail",
      "Natural, human-like conversations",
      "Smart automated follow-up sequences",
      "Handles objections and questions",
    ],
  },
  {
    step: 4,
    icon: Calendar,
    title: "Qualified Leads Book Automatically",
    description: "Interested prospects are guided to book appointments directly into your calendar without manual effort.",
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
    question: "How long does AI automation setup take?",
    answer: "Most automation setups are completed within 1-2 business days. We handle everything — you just need to connect your Google account and approve the configuration.",
  },
  {
    question: "Will automated emails look like spam?",
    answer: "No. Emails are sent from your real Gmail address with personalized content. We follow email deliverability best practices to ensure high inbox placement and avoid spam folders.",
  },
  {
    question: "What if leads reply with questions?",
    answer: "The AI handles common questions and objections automatically. For complex queries, it gracefully hands off to you or schedules a call.",
  },
  {
    question: "Can I monitor what's being sent?",
    answer: "Absolutely. You have full visibility into all communications. Every email goes through your Gmail, so you can see everything in your Sent folder.",
  },
];

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AutomateX AI Automation Works",
  "description": "A simple 4-step process to automate your client acquisition with AI-powered lead generation and email automation.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Connect Your Google Account",
      "text": "Securely link your Gmail using Google OAuth 2.0. No passwords stored, full control retained."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "AI Configuration",
      "text": "Our team configures your custom AI automation based on your business needs and target audience."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Automated Outreach",
      "text": "AI sends personalized emails and handles follow-ups automatically from your Gmail account."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Automatic Booking",
      "text": "Qualified leads book directly into your calendar. You just show up and close the deal."
    }
  ]
};

export default function HowItWorks() {
  return (
    <PageLayout>
      <SEOHead
        title="How AI Automation Works | AutomateX"
        description="Learn how AutomateX AI automation handles lead generation, email outreach, and appointment booking in 4 simple steps. No technical skills required. Setup in 1-2 days."
        canonical="https://automatex.ai/how-it-works"
        structuredData={howItWorksSchema}
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
              How Our AI Automation Works
            </h1>
            <p className="text-lg text-muted-foreground">
              A simple, transparent process that puts your client acquisition on autopilot. 
              No technical skills required — setup in just 1-2 days.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Process Steps */}
      <section className="section-padding bg-background" aria-labelledby="process-heading">
        <h2 id="process-heading" className="sr-only">AI Automation Process Steps</h2>
        <div className="container-narrow">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <motion.article
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
                        <step.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                      </div>
                      <ul className="space-y-3" role="list">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-muted/30" aria-labelledby="benefits-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="benefits-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Our AI Automation Approach Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Secure & CAN-SPAM Compliant", desc: "Google OAuth 2.0, no stored passwords, full CAN-SPAM compliance" },
              { icon: Zap, title: "Fast 1-2 Day Setup", desc: "Go live in 1-2 business days, not weeks of configuration" },
              { icon: Clock, title: "24/7 AI Operation", desc: "AI automation works around the clock while you sleep" },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background" aria-labelledby="faq-heading">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common AI Automation Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.article
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary" aria-labelledby="cta-heading">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Automate Your Lead Generation?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Book a free demo and see how AutomateX AI automation can work for your business.
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
