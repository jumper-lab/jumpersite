"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { CheckCircle2 } from "lucide-react";

const audience = [
  "Empresas que investem R$10k+/mês em mídia paga",
  "E-commerces que precisam de atribuição precisa",
  "Negócios com equipe comercial (leads via WhatsApp/telefone)",
  "Quem já roda tráfego mas sente que está perdendo dado",
  "Quem quer escalar mas não confia nos números atuais",
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
            <li
              key={item}
              className="flex items-start gap-3 text-gray-300"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-jumper-orange mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
