import { SEOHead } from "@/components/seo/SEOHead";
import { PageLayout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <PageLayout>
      <SEOHead
        title="Privacy Policy | AutomateX"
        description="AutomateX privacy policy. Learn how we protect your data, use Google OAuth securely, and safeguard your business information."
        canonical="https://automatex.ai/privacy"
      />

      <header className="section-padding bg-gradient-hero">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-4">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </header>

      <main className="section-padding bg-background">
        <article className="container-narrow prose prose-slate max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                AutomateX ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our AI automation services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Name and contact information (email, business name)</li>
                <li>Google account access through OAuth 2.0</li>
                <li>Email communications sent through our automation service</li>
                <li>Calendar and scheduling information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our AI automation services</li>
                <li>Send emails on your behalf as part of our lead generation automation</li>
                <li>Manage calendar bookings and appointments</li>
                <li>Communicate with you about our services</li>
                <li>Provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your data. 
                We use OAuth 2.0 for authentication, ensuring we never store your 
                passwords. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You can revoke our access to your Google account at any time through 
                your Google Account settings. You may also request deletion of your 
                data by contacting us at support@automatex.ai.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at 
                support@automatex.ai.
              </p>
            </section>
          </motion.div>
        </article>
      </main>
    </PageLayout>
  );
}
