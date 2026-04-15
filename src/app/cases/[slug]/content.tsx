"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { ArrowLeft, Quote } from "lucide-react";

interface CaseData {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  context: string;
  diagnosis: string;
  solution: string;
  results: { label: string; value: string }[];
  quote: string;
  author: string;
}

export function CaseDetailContent({ data }: { data: CaseData }) {
  return (
    <>
      {/* Header */}
      <Section className="bg-[#0a0a0a]">
        <FadeIn>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-jumper-orange transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para cases
          </Link>
          <span className="block text-xs font-medium uppercase tracking-wider text-jumper-orange bg-jumper-orange/10 px-2 py-1 rounded w-fit mb-4">
            {data.category}
          </span>
          <h1 className="text-fluid-h1 font-bold text-white">{data.title}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-4xl sm:text-5xl font-bold text-jumper-orange">
              {data.metric}
            </span>
            <span className="text-lg text-gray-400">{data.metricLabel}</span>
          </div>
        </FadeIn>
      </Section>

      {/* Contexto */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn>
            <div>
              <h2 className="text-fluid-h3 font-bold text-foreground mb-4">
                Contexto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {data.context}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-fluid-h3 font-bold text-foreground mb-4">
                Diagnóstico
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {data.diagnosis}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-fluid-h3 font-bold text-foreground mb-4">
                Solução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {data.solution}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Resultados */}
      <Section className="bg-[#0a0a0a]">
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-white text-center mb-12">
            Resultados
          </h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4 max-w-4xl mx-auto">
          {data.results.map((r) => (
            <StaggerItem key={r.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-jumper-orange">
                {r.value}
              </div>
              <p className="mt-2 text-sm text-gray-400">{r.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Quote + CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <Quote className="h-10 w-10 text-jumper-orange/20 mx-auto mb-4" />
            <blockquote className="text-xl text-foreground leading-relaxed italic">
              &ldquo;{data.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              — {data.author}, {data.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quer resultados assim? Fale com a gente.
              </h3>
              <Button variant="critical" size="xl" asChild>
                <a href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!" target="_blank" rel="noopener noreferrer">Falar com a Jumper</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
