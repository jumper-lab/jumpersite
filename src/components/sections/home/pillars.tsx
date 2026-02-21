"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const pillars = [
  {
    title: "Arquitetura de Performance",
    description:
      "Gestão de tráfego pago com a máquina completa: Meta Ads, Google Ads, tracking server-side e CRM integrado. Não é rodar anúncio — é construir a infraestrutura de aquisição inteira.",
    href: "/servicos/arquitetura-de-performance",
    borderClass: "card-border-orange",
    roleLabel: "Core · Recorrente",
    roleClass: "text-jumper-orange bg-jumper-orange/10",
  },
  {
    title: "Tracking Avançado",
    description:
      "Server-Side GTM, Meta CAPI, Google Enhanced Conversions. Seus dados ficam limpos, o algoritmo recebe sinal de qualidade, e suas campanhas otimizam de verdade.",
    href: "/servicos/tracking-avancado",
    borderClass: "card-border-purple",
    roleLabel: "Técnico · Alto valor",
    roleClass: "text-jumper-purple bg-jumper-purple/15",
  },
  {
    title: "JumperChat",
    description:
      "Atendimento via WhatsApp com CRM integrado. Cada lead que chega sabe de qual anúncio veio. Histórico completo, múltiplos atendentes, automações.",
    href: "/servicos/jumperchat",
    borderClass: "card-border-gray",
    roleLabel: "Diferencial · Integrado",
    roleClass: "text-[var(--text-secondary)] bg-[rgba(153,153,153,0.1)]",
  },
];

export function PillarsSection() {
  return (
    <Section className="bg-[var(--bg-secondary)]">
      <FadeIn>
        <SectionHeader
          label="01 — Serviços"
          title='Os 3 <span class="text-jumper-orange">Pilares</span>'
        />
      </FadeIn>

      <StaggerContainer className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <Link href={pillar.href} className="group block h-full">
              <div
                className={`editorial-card h-full rounded-[14px] p-8 flex flex-col overflow-hidden relative ${pillar.borderClass}`}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  className={`font-mono text-[9px] uppercase tracking-[2px] px-2.5 py-1 rounded inline-block mb-4 w-fit ${pillar.roleClass}`}
                >
                  {pillar.roleLabel}
                </span>
                <h3
                  className="text-[20px] font-semibold text-white mb-3"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.75] flex-grow"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pillar.description}
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                  <span className="text-sm font-medium text-jumper-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
