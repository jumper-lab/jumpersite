"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Search, PenTool, FlaskConical, Plug, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos a operação, os gargalos, o contexto e as oportunidades mais relevantes.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Arquitetura",
    description:
      "Definimos o que vale construir, priorizamos casos de uso e desenhamos a solução.",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Prototipagem",
    description:
      "Criamos provas de conceito, fluxos ou experiências para validação rápida.",
  },
  {
    icon: Plug,
    step: "04",
    title: "Implementação",
    description:
      "Conectamos a solução ao negócio, às ferramentas e à rotina da empresa.",
  },
  {
    icon: RefreshCcw,
    step: "05",
    title: "Evolução",
    description:
      "Refinamos, ampliamos e transformamos o que funciona em vantagem contínua.",
  },
];

export function ProcessSection() {
  return (
    <Section id="como-funciona" className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Do problema à solução" subtitle="Como funciona" />
      </FadeIn>

      <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
