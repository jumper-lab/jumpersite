import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceCTA } from "@/components/sections/service-cta";
import { WhatWeDoSection } from "./what-we-do";
import { WhyServerSideSection } from "./why-server-side";
import { TimelineSection } from "./timeline";

export const metadata: Metadata = {
  title: "Tracking Avançado",
  description:
    "Server-Side GTM, Meta CAPI, Google Enhanced Conversions. Tracking que recupera até 40% das conversões perdidas.",
};

export default function TrackingAvancadoPage() {
  return (
    <>
      <ServiceHero
        headline="Seus dados estão mentindo pra você."
        subheadline="Tracking mal configurado = decisões erradas = dinheiro jogado fora. A gente implementa a infraestrutura de dados que faz suas campanhas funcionarem de verdade."
        ctaText="Solicitar Auditoria de Tracking"
      />
      <WhatWeDoSection />
      <WhyServerSideSection />
      <TimelineSection />
      <ServiceCTA
        title="Quer descobrir o que seu tracking está deixando escapar?"
        ctaText="Solicitar Auditoria de Tracking — gratuita, sem compromisso"
      />
    </>
  );
}
