"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Users, Target, Database, History, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Múltiplos atendentes, um número",
    description:
      "Toda a equipe comercial atende pelo mesmo número do WhatsApp, com distribuição automática de leads",
  },
  {
    icon: Target,
    title: "Atribuição automática",
    description:
      'Cada lead é rastreado até o anúncio, campanha e criativo que o trouxe. Sem perguntar "como nos conheceu?"',
  },
  {
    icon: Database,
    title: "CRM integrado",
    description:
      "Pipeline de vendas nativo. Lead → Qualificação → Proposta → Fechamento. Tudo dentro da plataforma",
  },
  {
    icon: History,
    title: "Histórico completo",
    description:
      "Todas as conversas gravadas, pesquisáveis, organizadas por cliente",
  },
  {
    icon: Bot,
    title: "Automações",
    description:
      "Respostas automáticas, follow-up programado, notificações internas",
  },
  {
    icon: BarChart3,
    title: "Integração com Ads",
    description:
      "Dados de venda voltam pro Meta Ads e Google Ads como conversões offline. O algoritmo aprende com vendas reais",
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Funcionalidades" />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="rounded-lg border border-border/50 bg-[#111] p-6 h-full hover:border-jumper-orange/30 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 mb-4">
                <feature.icon className="h-6 w-6 text-jumper-orange" />
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
