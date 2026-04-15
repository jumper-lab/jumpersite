"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Eye, Lightbulb, Cpu, Rocket } from "lucide-react";

const capabilities = [
  { icon: Eye, label: "Visão estratégica" },
  { icon: Lightbulb, label: "Inteligência criativa" },
  { icon: Cpu, label: "Capacidade técnica" },
  { icon: Rocket, label: "Implementação real" },
];

export function WhoWeAreSection() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeader
            title="Um laboratório criativo de soluções com IA"
            align="left"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            A Jumper nasce para construir soluções com IA que combinem:
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.label}>
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-border bg-card/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 text-jumper-orange">
                  <cap.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {cap.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            Criamos estruturas que ajudam empresas a vender melhor, operar
            melhor, atender melhor, decidir melhor e evoluir com mais velocidade.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
