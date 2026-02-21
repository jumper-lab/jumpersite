"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Search, Wrench, BarChart3, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Analisamos seu tracking atual, suas campanhas e seu funil. Identificamos onde estão os vazamentos de dados e as oportunidades.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Setup Técnico",
    description:
      "Implementamos tracking server-side (sGTM), Meta CAPI, Enhanced Conversions e integramos seu CRM com as plataformas de ads.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Gestão Ativa",
    description:
      "Estruturamos e gerenciamos suas campanhas com dados limpos. Criativos, audiências, budget — tudo otimizado com sinal de qualidade.",
  },
  {
    icon: RefreshCcw,
    step: "04",
    title: "Otimização Contínua",
    description:
      "Relatórios com dados reais, reuniões regulares, ajustes constantes. O algoritmo aprende com dados melhores, e o resultado compõe mês a mês.",
  },
];

export function ProcessSection() {
  return (
    <Section id="como-funciona" className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Como funciona" />
      </FadeIn>

      <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <StaggerItem key={step.title}>
            <div className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-gradient-to-r from-jumper-orange/40 via-jumper-orange/20 to-transparent translate-x-4" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 text-jumper-orange mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono text-jumper-orange/60">
                {step.step}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
