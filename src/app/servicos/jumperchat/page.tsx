import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceCTA } from "@/components/sections/service-cta";
import { WhatIsSection } from "./what-is";
import { FeaturesSection } from "./features";
import { LoopSection } from "./loop";
import { AudienceSection } from "./audience";

export const metadata: Metadata = {
  title: "JumperChat",
  description:
    "Plataforma de atendimento via WhatsApp Business API com CRM integrado, atribuição automática de anúncios e múltiplos atendentes.",
};

export default function JumperChatPage() {
  return (
    <>
      <ServiceHero
        headline="Cada lead que chega no WhatsApp vira dado no seu CRM."
        subheadline="Plataforma de atendimento via WhatsApp Business API com CRM integrado, atribuição automática de anúncios e múltiplos atendentes num único número."
        ctaText="Agendar Demo"
        gradient="/assets/gradients/organic-06.png"
      />
      <WhatIsSection />
      <FeaturesSection />
      <LoopSection />
      <AudienceSection />
      <ServiceCTA
        title="Quer ver o JumperChat funcionando?"
        ctaText="Agendar Demo — 15 minutos, te mostramos ao vivo"
      />
    </>
  );
}
