"use client";

import {
  Compass,
  Bot,
  Zap,
  TrendingUp,
  Sparkles,
  FlaskConical,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const services = [
  {
    icon: Compass,
    title: "AI Strategy",
    description:
      "Mapeamos oportunidades, priorizamos casos de uso e desenhamos a aplicação certa de IA para o seu negócio.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Criamos agentes inteligentes para atendimento, vendas, suporte, operação e fluxos internos.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description:
      "Automatizamos tarefas, processos e jornadas para reduzir atrito, aumentar eficiência e liberar tempo do time.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Growth",
    description:
      "Conectamos IA com marketing, CRM, conteúdo, dados e aquisição para gerar crescimento com mais inteligência.",
  },
  {
    icon: Sparkles,
    title: "AI Experiences",
    description:
      "Desenhamos experiências, interfaces e interações com IA para marcas que querem criar algo novo ou elevar o padrão do que já existe.",
  },
  {
    icon: FlaskConical,
    title: "Creative Prototyping",
    description:
      "Transformamos oportunidades em protótipos rápidos para validar ideias antes de grandes investimentos.",
  },
];

export function ServicesSection() {
  return (
    <Section id="o-que-fazemos" className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader
          title="IA aplicada ao que realmente move uma empresa"
          subtitle="O que fazemos"
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <Card className="h-full bg-[#111] border-[#222] hover:border-jumper-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,71,33,0.1)]">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 text-jumper-orange">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
