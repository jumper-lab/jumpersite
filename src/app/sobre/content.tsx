"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { ServiceCTA } from "@/components/sections/service-cta";
import { Database, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Database,
    title: "Dado limpo acima de tudo",
    description:
      "Se o dado está sujo, a decisão está errada. Não importa quanto talento tem na equipe — garbage in, garbage out. Por isso tracking é o primeiro passo, não o último.",
  },
  {
    icon: Target,
    title: "Resultado é o único KPI",
    description:
      "Não vendemos impressões, cliques ou relatórios bonitos. Vendemos crescimento de receita mensurável. Se o cliente não cresce, a gente falhou.",
  },
  {
    icon: Eye,
    title: "Transparência radical",
    description:
      "Nossos clientes têm acesso total aos dados, às campanhas e ao racional por trás de cada decisão. Sem caixa preta.",
  },
];

const stats = [
  { value: "R$30M+", label: "investidos em mídia paga" },
  { value: "50+", label: "clientes premium atendidos" },
  { value: "3 países", label: "atendidos" },
  { value: "9+ anos", label: "de experiência em performance digital" },
];

export function SobreContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/gradients/organic-04.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-fluid-h1 font-bold text-white text-balance">
              Dados limpos. Resultados reais.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              A Jumper Studio nasceu da convicção de que tracking não é detalhe
              técnico — é a fundação de toda operação de performance digital.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* A História */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-fluid-h2 font-bold text-foreground mb-6">
              A História
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Jumper começou quando Bruno Maya percebeu que o maior problema
                das operações de tráfego pago não era criativo, budget ou
                audiência — era dado.
              </p>
              <p>
                Depois de anos gerenciando milhões em mídia paga, o padrão era
                sempre o mesmo: empresas investindo pesado em anúncios, mas
                tomando decisões com dados incompletos. Pixels quebrando,
                conversões sumindo, WhatsApp virando buraco negro.
              </p>
              <p>
                A resposta não era rodar mais anúncio. Era construir a
                infraestrutura certa.
              </p>
              <p>
                Assim nasceu a Jumper Studio: uma empresa de performance digital
                onde tracking server-side não é add-on — é o ponto de partida.
                Onde o dado de venda real retroalimenta a campanha. Onde cada
                lead do WhatsApp é rastreado até o anúncio que o trouxe.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* O que nos move */}
      <Section className="bg-[#0a0a0a]">
        <FadeIn>
          <SectionHeader title="O que nos move" />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="rounded-lg border border-border/50 bg-[#111] p-6 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 mb-4">
                  <v.icon className="h-6 w-6 text-jumper-orange" />
                </div>
                <h3 className="font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Números */}
      <Section className="border-y border-border">
        <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-jumper-orange">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <ServiceCTA
        title="Quer trabalhar com a gente?"
        ctaText="Agendar Diagnóstico Gratuito"
      />
    </>
  );
}
