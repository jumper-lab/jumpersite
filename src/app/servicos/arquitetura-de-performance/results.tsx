"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const results = [
  { value: "+25-40%", label: "de conversões rastreadas após migração para sGTM" },
  { value: "-30%", label: "no CAC médio com dados limpos" },
  { value: "+50%", label: "de precisão na atribuição de canais" },
  { value: "2-3 sem.", label: "tempo médio de setup" },
];

export function ResultsSection() {
  return (
    <Section>
      <SectionHeader title="Resultados Típicos" />

      <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {results.map((r) => (
          <StaggerItem key={r.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-jumper-orange">
              {r.value}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
