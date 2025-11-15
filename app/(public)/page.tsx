"use client";

import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import { useAuthModalStore } from "./stores/AuthModal.store";
import AuthModal from "./(components)/AuthModal";
import Timeline from "@/components/TimeLine";

export default function Home() {
  const { isAuthModalOpen } = useAuthModalStore();

  return (
    <div className="min-h-screen">
      {isAuthModalOpen && <AuthModal />}
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Timeline/>
      <PricingSection />
      <FAQSection />
    </div>
  );
}
