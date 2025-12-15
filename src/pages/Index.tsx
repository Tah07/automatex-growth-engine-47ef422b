import { SEOHead } from "@/components/seo/SEOHead";
import { PageLayout } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  TrustSection,
  PricingSection,
  ComparisonSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const homeFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does AutomateX do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AutomateX builds and manages AI-powered automation systems that handle your lead generation, outreach, follow-ups, and appointment booking. We connect to your Gmail, find potential clients, send personalized emails on your behalf, handle replies, and book meetings directly into your calendar — all automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Is my Google account safe with AutomateX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We use Google's official OAuth 2.0 system — the same technology used by major apps like Zoom, Calendly, and Slack. We never see or store your password. You can revoke our access anytime directly from your Google Account settings."
      }
    },
    {
      "@type": "Question",
      "name": "How fast is the setup process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most setups are completed within 1-2 business days. This includes custom workflow design, AI training, email template creation, and thorough testing."
      }
    },
    {
      "@type": "Question",
      "name": "How much does AutomateX cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a custom one-time setup fee based on your requirements, plus an optional monthly maintenance plan at $9/month for 24/7 monitoring, bug fixes, and email support."
      }
    }
  ]
};

const Index = () => {
  return (
    <PageLayout>
      <SEOHead
        title="AI Automation Agency for Lead Generation | AutomateX"
        description="Done-for-you AI automation that handles outreach, follow-ups & booking. Save 10+ hours weekly. Trusted by 200+ small businesses in USA & Canada. Book a free demo today."
        canonical="https://automatex.ai/"
        structuredData={homeFAQSchema}
      />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TrustSection />
        <PricingSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </PageLayout>
  );
};

export default Index;
