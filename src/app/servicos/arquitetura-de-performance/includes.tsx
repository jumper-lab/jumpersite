"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import {
  BarChart3,
  Server,
  Zap,
  Link as LinkIcon,
  MessageSquare,
  LineChart,
  User,
} from "lucide-react";

const items = [
  {
    icon: BarChart3,
    title: "Gestão de Meta Ads e Google Ads",
    description:
      "Campanhas estruturadas com funil, criativos, audiências e budget optimization",
  },
  {
    icon: Server,
    title: "Tracking server-side (sGTM) incluído",
    description:
      "Não é add-on, é padrão. Seus dados são limpos desde o primeiro dia",
  },
  {
    icon: Zap,
    title: "Meta CAPI + Enhanced Conversions",
    description: "Sinal de qualidade direto pro algoritmo",
  },
  {
    icon: LinkIcon,
    title: "Integração CRM → Plataformas de Ads",
    description:
      "Feedback de vendas reais otimiza suas campanhas automaticamente",
  },
  {
    icon: MessageSquare,
    title: "JumperChat",
    description:
      "Atendimento WhatsApp com atribuição automática de cada lead ao anúncio de origem",
  },
  {
    icon: LineChart,
    title: "Relatórios com dados reais",
    description:
      "Dashboard com métricas que você confia, não estimativas",
  },
  {
    icon: User,
    title: "Gestor dedicado",
    description: "Acesso direto, sem intermediário",
  },
];

export function IncludesSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader title="O que está incluso" align="left" />
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
