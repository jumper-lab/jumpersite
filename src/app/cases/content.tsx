"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ServiceCTA } from "@/components/sections/service-cta";
import { ArrowRight, TrendingUp, TrendingDown, Zap } from "lucide-react";
import { useState } from "react";

const categories = ["Todos", "E-commerce", "Serviços", "SaaS"];

const cases = [
  {
    slug: "ecommerce-moda",
    client: "E-commerce de Moda",
    category: "E-commerce",
    metric: "+47%",
    metricLabel: "conversões rastreadas",
    icon: TrendingUp,
    description: "Migração para sGTM recuperou conversões invisíveis e permitiu escalar com confiança.",
  },
  {
    slug: "rede-clinicas",
    client: "Rede de Clínicas",
    category: "Serviços",
    metric: "-38%",
    metricLabel: "no CPL",
    icon: TrendingDown,
    description: "Tracking server-side + atribuição de WhatsApp sem alterar criativos.",
  },
  {
    slug: "saas-b2b",
    client: "SaaS B2B",
    category: "SaaS",
    metric: "R$500k → R$1.2M/mês",
    metricLabel: "em receita",
    icon: Zap,
    description: "Integração CRM → Ads com dados de venda real em 6 meses.",
  },
];

export function CasesContent() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/gradients/organic-05.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-fluid-h1 font-bold text-white text-balance">
              Resultados que falam por si.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-gray-300">
              Cada case é uma operação real, com dados reais e impacto
              mensurável.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Grid */}
      <Section>
        <FadeIn>
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-jumper-orange text-white"
                    : "bg-card border border-border text-muted-foreground hover:border-jumper-orange/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <StaggerItem key={c.slug}>
              <Link href={`/cases/${c.slug}`} className="group block h-full">
                <Card className="h-full hover:border-jumper-orange/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-jumper-orange bg-jumper-orange/10 px-2 py-1 rounded">
                        {c.category}
                      </span>
                      <c.icon className="h-5 w-5 text-jumper-orange" />
                    </div>
                    <CardTitle className="text-2xl text-jumper-orange">
                      {c.metric}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {c.metricLabel}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-foreground mb-2">
                      {c.client}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {c.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-medium text-jumper-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver case completo <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <ServiceCTA
        title="Quer resultados assim?"
        ctaText="Agendar Diagnóstico Gratuito"
      />
    </>
  );
}
