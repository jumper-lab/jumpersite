"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const cases = [
  {
    client: "E-commerce de moda",
    metric: "+47%",
    metricLabel: "conversões rastreadas",
    description: "após migração para sGTM",
    quote:
      '"Antes, a gente achava que tinha ROAS de 2.5x. Com o tracking da Jumper, descobrimos que era 4.1x — e aí conseguimos escalar com confiança."',
    borderClass: "card-border-orange",
  },
  {
    client: "Rede de clínicas",
    metric: "-38%",
    metricLabel: "no CPL",
    description: "sem alterar criativos",
    quote:
      "Implementação de tracking server-side + atribuição de WhatsApp recuperou conversões que estavam invisíveis.",
    borderClass: "card-border-purple",
  },
  {
    client: "SaaS B2B",
    metric: "R$500k → R$1.2M/mês",
    metricLabel: "em receita",
    description: "em 6 meses",
    quote:
      "Integração CRM → Ads permitiu otimizar campanhas com dados de venda real, não só leads.",
    borderClass: "card-border-gray",
  },
];

export function CasesSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          label="02 — Resultados"
          title='Resultados <span class="text-jumper-orange">reais</span>'
          subtitle="Cases que mostram o impacto de dados limpos na performance."
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-3">
        {cases.map((c) => (
          <StaggerItem key={c.client}>
            <div
              className={`editorial-card h-full rounded-xl p-7 overflow-hidden relative ${c.borderClass}`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                className="font-mono text-[9px] uppercase tracking-[2px] mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {c.client}
              </div>
              <div className="text-2xl font-bold text-jumper-orange mb-1">
                {c.metric}
              </div>
              <p
                className="text-[13px] mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {c.metricLabel} {c.description}
              </p>
              <div className="editorial-quote !m-0 !p-4">
                <p className="!text-[13px]">{c.quote}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
