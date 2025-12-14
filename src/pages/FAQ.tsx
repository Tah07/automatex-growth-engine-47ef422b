import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "About AutomateX",
    faqs: [
      {
        question: "What exactly does AutomateX do?",
        answer: "AutomateX builds and manages AI-powered automation systems that handle your lead generation, outreach, follow-ups, and appointment booking. We connect to your Gmail, find potential clients, send personalized emails on your behalf, handle replies, and book meetings directly into your calendar — all automatically.",
      },
      {
        question: "Is this spam? Will it hurt my email reputation?",
        answer: "No, this is not spam. Every email is sent from YOUR real Gmail address with personalized, relevant content. We follow strict best practices for deliverability and comply with CAN-SPAM regulations. Our approach focuses on quality over quantity — sending targeted messages to people who are genuinely likely to need your services.",
      },
      {
        question: "Who is AutomateX best for?",
        answer: "AutomateX is ideal for service-based businesses, consultants, coaches, agencies, and professionals who want more clients but don't have time for manual outreach. We're especially popular with real estate agents, marketing consultants, business coaches, financial advisors, and B2B service providers.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    faqs: [
      {
        question: "Is my Google account safe?",
        answer: "Absolutely. We use Google's official OAuth 2.0 system — the same technology used by major apps like Zoom, Calendly, and Slack. We never see or store your password. You can revoke our access anytime directly from your Google Account settings. Our systems are built with enterprise-grade security.",
      },
      {
        question: "What permissions do you need?",
        answer: "We request permission to: send emails on your behalf, read email responses (to handle replies), and access your calendar (to book meetings). We only access what's necessary for the automation to work. You can see all activity in your Gmail sent folder.",
      },
      {
        question: "Can I see what emails are being sent?",
        answer: "Yes! Every email goes through your actual Gmail account, so you can see everything in your Sent folder. You have complete transparency into all communications happening on your behalf.",
      },
    ],
  },
  {
    title: "Setup & Technical",
    faqs: [
      {
        question: "Do I need any technical skills?",
        answer: "No technical skills required. We handle 100% of the setup, configuration, and optimization. All you need to do is connect your Google account (one-click OAuth), approve your campaign settings, and show up to the meetings we book for you.",
      },
      {
        question: "How fast is the setup?",
        answer: "Most setups are completed within 1-2 business days. This includes custom workflow design, AI training, email template creation, and thorough testing. We work efficiently while ensuring quality.",
      },
      {
        question: "What if I need changes after setup?",
        answer: "With our maintenance plan ($9/month), we handle updates and adjustments as needed. Want to target a different audience or change your messaging? Just let us know. Without maintenance, you can request changes at an hourly rate.",
      },
    ],
  },
  {
    title: "Comparison",
    faqs: [
      {
        question: "Why not hire a virtual assistant instead?",
        answer: "VAs typically cost $500-2000+/month, require training, take vacations, make mistakes, and can only work limited hours. AutomateX works 24/7, costs a fraction of a VA, executes consistently, and uses AI to personalize at scale. Plus, you don't have to manage anyone.",
      },
      {
        question: "Why not just use Zapier or other automation tools myself?",
        answer: "You certainly can — if you have weeks to learn the tools, technical skills to build workflows, time to troubleshoot issues, and experience with email deliverability. AutomateX is done-for-you: we handle everything so you can focus on your business. Most clients find the time savings alone worth more than our fee.",
      },
      {
        question: "Why not hire a traditional marketing agency?",
        answer: "Traditional agencies typically charge $2,000-5,000+ per month with long contracts. They often focus on broad marketing rather than direct client acquisition. AutomateX is focused specifically on booking qualified appointments at a fraction of the cost, with no long-term commitment.",
      },
    ],
  },
  {
    title: "Support & Issues",
    faqs: [
      {
        question: "What if something breaks?",
        answer: "With our maintenance plan, we monitor your automation 24/7 and fix issues proactively — often before you notice. If something does go wrong, we typically resolve it within hours. Email support is included with response times of 24-48 hours.",
      },
      {
        question: "What happens if I cancel maintenance?",
        answer: "Your automation will continue running, but you won't have monitoring, support, or updates. If issues arise, you can request fixes at an hourly rate or re-subscribe to maintenance.",
      },
      {
        question: "Do you offer refunds?",
        answer: "Due to the custom nature of our work, we don't offer refunds on completed setup. However, we do offer a satisfaction guarantee: we'll work with you until your automation meets your requirements. We're not happy unless you're happy.",
      },
    ],
  },
];

export default function FAQ() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about AutomateX. Can't find an answer? 
              <Link to="/contact" className="text-primary hover:underline ml-1">
                Contact us
              </Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="card-bordered px-6 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Book a free demo call and we'll answer all your 
              questions personally.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Book Free Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
