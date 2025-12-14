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

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <TrustSection />
      <PricingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
