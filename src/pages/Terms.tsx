import { PageLayout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <PageLayout>
      <section className="section-padding bg-gradient-hero">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-4">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow prose prose-slate max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing or using AutomateX services, you agree to be bound by 
                these Terms of Service. If you disagree with any part of these terms, 
                you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Services Description
              </h2>
              <p className="text-muted-foreground">
                AutomateX provides AI-powered automation services for client outreach, 
                follow-up communications, and appointment scheduling. We connect to 
                your Google account to send emails and manage calendar events on your 
                behalf.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                User Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate account information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not use our services for spam or illegal purposes</li>
                <li>Maintain the security of your account credentials</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Payment Terms
              </h2>
              <p className="text-muted-foreground">
                Setup fees are due upon agreement. Monthly maintenance fees are billed 
                in advance. Due to the custom nature of our work, setup fees are 
                non-refundable once work has begun. You may cancel monthly maintenance 
                with 30 days notice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                AutomateX shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our 
                services. Our total liability shall not exceed the amount paid by you 
                for our services in the preceding 12 months.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground">
                Either party may terminate this agreement with 30 days written notice. 
                Upon termination, we will disconnect from your Google account and cease 
                all automation activities.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at support@automatex.ai.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
