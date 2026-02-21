import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceCTA } from "@/components/sections/service-cta";
import { IncludesSection } from "./includes";
import { ComparisonSection } from "./comparison";
import { ResultsSection } from "./results";
import { AudienceSection } from "./audience";

export const metadata: Metadata = {
  title: "Arquitetura de Performance",
  description:
    "Gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp. A máquina completa de aquisição digital.",
};

export default function ArquiteturaDePerformancePage() {
  return (
    <>
      <ServiceHero
        headline="Não é rodar anúncio. É construir a máquina de aquisição inteira."
        subheadline="Arquitetura de Performance = Tráfego Pago + Tracking Server-Side + CRM + JumperChat. Tudo integrado, com dados limpos e otimização real."
        ctaText="Agendar Diagnóstico"
      />
      <IncludesSection />
      <ComparisonSection />
      <ResultsSection />
      <AudienceSection />
      <ServiceCTA
        title="Quer saber se Arquitetura de Performance faz sentido pro seu negócio?"
        ctaText="Agendar conversa — 30 minutos, sem compromisso"
      />
    </>
  );
}
