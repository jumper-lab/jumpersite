"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Analisamos seu tracking atual, suas campanhas e seu funil. Identificamos onde estão os vazamentos de dados e as oportunidades.",
    borderClass: "card-border-orange",
  },
  {
    step: "02",
    title: "Setup Técnico",
    description:
      "Implementamos tracking server-side (sGTM), Meta CAPI, Enhanced Conversions e integramos seu CRM com as plataformas de ads.",
    borderClass: "card-border-purple",
  },
  {
    step: "03",
    title: "Gestão Ativa",
    description:
      "Estruturamos e gerenciamos suas campanhas com dados limpos. Criativos, audiências, budget — tudo otimizado com sinal de qualidade.",
    borderClass: "card-border-orange",
  },
  {
    step: "04",
    title: "Otimização Contínua",
    description:
      "Relatórios com dados reais, reuniões regulares, ajustes constantes. O algoritmo aprende com dados melhores, e o resultado compõe mês a mês.",
    borderClass: "card-border-gray",
  },
];

export function ProcessSection() {
  return (
    <Section id="como-funciona" className="bg-[var(--bg-secondary)]">
      <FadeIn>
        <SectionHeader
          label="00 — Processo"
          title='Como <span class="text-jumper-orange">funciona</span>'
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StaggerItem key={step.title}>
            <div
              className={`editorial-card relative overflow-hidden rounded-xl p-7 ${step.borderClass}`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                className="font-mono text-[9px] uppercase tracking-[2px] mb-3.5"
                style={{ color: "var(--text-muted)" }}
              >
                Etapa {step.step}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-3 leading-[1.4]">
                {step.title}
              </h3>
              <p
                className="text-[13px] leading-[1.7]"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
