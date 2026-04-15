import { HeroSection } from "@/components/sections/home/hero";
// import { CredibilitySection } from "@/components/sections/home/credibility";
import { WhoWeAreSection } from "@/components/sections/home/who-we-are";
import { ServicesSection } from "@/components/sections/home/services";
import { DifferentialsSection } from "@/components/sections/home/differentials";
import { ProcessSection } from "@/components/sections/home/process";
import { CTASection } from "@/components/sections/home/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CredibilitySection /> */}
      <WhoWeAreSection />
      <ServicesSection />
      <DifferentialsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
