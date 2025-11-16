"use client";

import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import { useAuthModalStore } from "./stores/AuthModal.store";
import AuthModal from "./(components)/AuthModal";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PlanService } from "@/services/plan.service";
import { TPlan } from "@/commons/types/TPlan";

export default function Home() {
  const { isAuthModalOpen } = useAuthModalStore();
  const queryClient = new QueryClient();

  const { isPending, error, data } = useQuery<TPlan[]>({
    queryKey: ["fetchPlans"],
    queryFn: async () => {
      const planService = new PlanService();
      return await planService.getPlans();
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {isAuthModalOpen && <AuthModal />}
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <QueryClientProvider client={queryClient}>
        {!isPending && <PricingSection plans={data} />}
      </QueryClientProvider>
      <FAQSection />
    </div>
  );
}
