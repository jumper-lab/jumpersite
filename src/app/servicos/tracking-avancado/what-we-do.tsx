"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Server, Zap, BarChart3, Link as LinkIcon, Search, Layers } from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Server-Side GTM (sGTM)",
    description:
      "Setup completo e manutenção. Seus eventos são enviados do servidor, não do navegador do usuário. Sem perda por bloqueador.",
  },
  {
    icon: Zap,
    title: "Meta Conversions API (CAPI)",
    description:
      "Envio de eventos de conversão direto pro Meta, com qualidade de sinal alta. Event Match Quality 8+.",
  },
  {
    icon: BarChart3,
    title: "Google Enhanced Conversions",
    description:
      "Enriquecimento de dados de conversão com first-party data. O Google Ads otimiza com sinal real.",
  },
  {
    icon: LinkIcon,
    title: "Integração CRM → Plataformas de Ads",
    description:
      "Suas vendas reais (offline, WhatsApp, telefone) retroalimentam as campanhas. Offline Conversions automatizadas.",
  },
  {
    icon: Search,
    title: "Auditoria de tracking existente",
    description:
      "Diagnóstico completo do que está funcionando, o que está quebrado, e o que falta.",
  },
  {
    icon: Layers,
    title: "Data layer estruturado",
    description:
      "Camada de dados padronizada para capturar cada interação relevante.",
  },
];

export function WhatWeDoSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader title="O que fazemos" align="left" />
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex gap-4 rounded-lg border border-border bg-card p-5 h-full hover:border-jumper-orange/30 transition-colors">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-jumper-orange/10">
                <item.icon className="h-5 w-5 text-jumper-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
