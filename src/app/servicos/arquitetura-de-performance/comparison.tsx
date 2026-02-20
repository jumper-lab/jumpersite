"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { X, Check } from "lucide-react";

const traditional = [
  "Roda anúncio com tracking por pixel",
  "Relatório baseado em dados da plataforma (imprecisos)",
  "WhatsApp é buraco negro — lead entra e ninguém sabe de onde veio",
  "CRM desconectado das campanhas",
  "Otimização baseada em métricas de vaidade (impressões, cliques)",
];

const jumper = [
  "Tracking server-side (sGTM) — dado limpo, sem perda por bloqueador",
  "Relatório com dados de venda real, não estimativa de pixel",
  "JumperChat: cada lead do WhatsApp rastreado até o anúncio de origem",
  "CRM integrado — vendas retroalimentam as campanhas automaticamente",
  "Otimização baseada em receita real, não CTR",
];

export function ComparisonSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Por que é diferente" />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="rounded-lg border border-border/50 bg-[#111] p-6">
            <h3 className="text-lg font-semibold text-muted-foreground mb-4">
              Agência Tradicional
            </h3>
            <ul className="space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-400">
                  <X className="h-5 w-5 shrink-0 text-red-500/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-lg border border-jumper-orange/30 bg-[#111] p-6 shadow-[0_0_30px_rgba(250,71,33,0.05)]">
            <h3 className="text-lg font-semibold text-jumper-orange mb-4">
              Jumper — Arquitetura de Performance
            </h3>
            <ul className="space-y-3">
              {jumper.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-300">
                  <Check className="h-5 w-5 shrink-0 text-jumper-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
