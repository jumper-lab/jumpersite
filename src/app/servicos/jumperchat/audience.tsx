"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { CheckCircle2 } from "lucide-react";

const audience = [
  "Negócios onde o WhatsApp é canal principal de vendas",
  "Equipes comerciais com 2+ atendentes",
  "Quem recebe leads de anúncios mas não consegue atribuir",
  "Quem quer integrar vendas do WhatsApp com campanhas de ads",
];

export function AudienceSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Para quem é" align="left" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <ul className="space-y-4 max-w-2xl">
          {audience.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-jumper-orange mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
