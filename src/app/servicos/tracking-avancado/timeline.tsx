"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Search, Wrench, ShieldCheck, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    week: "Semana 1",
    title: "Auditoria",
    description:
      "Diagnóstico completo do tracking atual. O que está funcionando, o que está quebrado, o que falta. Relatório com prioridades.",
  },
  {
    icon: Wrench,
    week: "Semanas 2-3",
    title: "Implementação",
    description:
      "Setup do sGTM, configuração de CAPI, Enhanced Conversions, data layer. Tudo documentado e testado.",
  },
  {
    icon: ShieldCheck,
    week: "Semana 4",
    title: "Validação",
    description:
      "Período de testes. Comparação client-side vs server-side. Garantia de que os dados estão corretos antes de desligar o tracking antigo.",
  },
  {
    icon: Settings,
    week: "Ongoing",
    title: "Monitoramento",
    description:
      "Manutenção contínua, ajustes conforme novas atualizações das plataformas, suporte técnico.",
  },
];

export function TimelineSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader title="Como funciona o projeto" />
      </FadeIn>

      <StaggerContainer className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="flex gap-6 sm:ml-0">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-jumper-orange/10 border border-jumper-orange/20">
                  <step.icon className="h-5 w-5 text-jumper-orange" />
                </div>
                <div>
                  <span className="text-xs font-mono text-jumper-orange/60 uppercase tracking-wider">
                    {step.week}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
}
