'use client';

import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
        <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
