"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Search,
  TrendingDown,
  Map,
  FileText,
  Clock,
  Shield,
  Users,
  CheckCircle2,
} from "lucide-react";

const includes = [
  {
    icon: Search,
    text: "Análise do tracking atual — O que está funcionando, o que está quebrado, o que falta",
  },
  {
    icon: TrendingDown,
    text: "Estimativa de conversões perdidas — Quanto dado você está deixando na mesa",
  },
  {
    icon: Map,
    text: "Mapa de oportunidades — Onde estão os maiores pontos de alavancagem da sua operação",
  },
  {
    icon: FileText,
    text: "Recomendação personalizada — Plano de ação específico pro seu negócio",
  },
  {
    icon: Clock,
    text: "Tudo em 30 minutos — Call via Google Meet, direto ao ponto",
  },
];

const budgetOptions = [
  { value: "under-5k", label: "Menos de R$5.000/mês" },
  { value: "5k-15k", label: "R$5.000 - R$15.000/mês" },
  { value: "15k-50k", label: "R$15.000 - R$50.000/mês" },
  { value: "over-50k", label: "Mais de R$50.000/mês" },
];

const challengeOptions = [
  { value: "roi", label: "Não sei o retorno real dos meus anúncios" },
  { value: "cac", label: "Quero escalar mas o CAC sobe junto" },
  { value: "whatsapp", label: "Leads chegam pelo WhatsApp sem atribuição" },
  { value: "tracking", label: "Preciso de tracking server-side" },
  { value: "outro", label: "Outro" },
];

const trust = [
  "R$30M+ gerenciados em mídia paga",
  "50+ clientes premium",
  "Tracking server-side incluído em todos os projetos",
  "Sem contrato de fidelidade",
];

export function DiagnosticoContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/gradients/organic-03.png"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-fluid-h1 font-bold text-white text-balance">
              Descubra quanto você está perdendo em conversões — de graça.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Em 30 minutos, analisamos seu tracking, suas campanhas e seu
              funil. Você sai com um mapa claro de onde estão os vazamentos e
              como corrigir.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* O que inclui */}
      <Section>
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-foreground mb-8">
            O que o diagnóstico inclui
          </h2>
        </FadeIn>
        <StaggerContainer className="space-y-4 max-w-2xl">
          {includes.map((item) => (
            <StaggerItem key={item.text}>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-jumper-orange/10">
                  <item.icon className="h-5 w-5 text-jumper-orange" />
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Formulário */}
      <Section className="bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-fluid-h2 font-bold text-white mb-8 text-center">
              Agende seu diagnóstico
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              className="space-y-5 rounded-lg border border-border/50 bg-[#111] p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                label="Nome completo"
                placeholder="Seu nome"
                required
              />
              <Input
                label="Empresa"
                placeholder="Nome da empresa"
                required
              />
              <Input
                label="Site (URL)"
                type="url"
                placeholder="https://suaempresa.com.br"
              />
              <Select
                label="Investimento mensal em mídia paga"
                options={budgetOptions}
                placeholder="Selecione uma faixa"
                required
              />
              <Select
                label="Principal desafio"
                options={challengeOptions}
                placeholder="Selecione seu desafio"
                required
              />
              <Input
                label="WhatsApp"
                type="tel"
                placeholder="(11) 99999-9999"
                required
              />

              <Button
                variant="critical"
                size="lg"
                className="w-full mt-4"
                type="submit"
              >
                Agendar Meu Diagnóstico
              </Button>
            </form>
          </FadeIn>

          {/* Expectativas */}
          <FadeIn delay={0.2}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Clock, text: "Retornamos em até 24h úteis" },
                { icon: Shield, text: "Sem compromisso, sem pegadinha" },
                { icon: Users, text: "Call de 30 min via Google Meet" },
                { icon: CheckCircle2, text: "Você escolhe o melhor horário" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <item.icon className="h-4 w-4 text-jumper-orange shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Trust */}
          <FadeIn delay={0.3}>
            <div className="mt-12 border-t border-border/50 pt-8">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {trust.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-gray-500 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-jumper-orange/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
