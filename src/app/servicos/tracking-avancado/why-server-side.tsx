"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { AlertTriangle, Shield, TrendingUp } from "lucide-react";

export function WhyServerSideSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* O que mudou */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-fluid-h3 font-bold text-white">O que mudou</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-jumper-orange font-bold">iOS 14-17:</span>
                Intelligent Tracking Prevention bloqueia cookies de terceiros
              </li>
              <li className="flex gap-3">
                <span className="text-jumper-orange font-bold">Ad blockers:</span>
                30%+ dos usuários bloqueiam scripts de tracking client-side
              </li>
              <li className="flex gap-3">
                <span className="text-jumper-orange font-bold">Cookies 3P:</span>
                Chrome em 2024, o resto antes disso
              </li>
              <li className="flex gap-3">
                <span className="text-jumper-orange font-bold">Consequência:</span>
                Pixel perde 30-40% dos eventos. O algoritmo otimiza com dados incompletos. Você paga mais caro por resultado pior.
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* O que resolve */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-jumper-orange/10">
                <Shield className="h-5 w-5 text-jumper-orange" />
              </div>
              <h2 className="text-fluid-h3 font-bold text-white">O que o server-side resolve</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gray-300 mb-6">
              O tracking server-side envia os dados do seu servidor — não do navegador do visitante. Isso significa:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-jumper-orange" />
                Sem perda por bloqueador ou ITP
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-jumper-orange" />
                First-party cookies com validade de 2 anos (vs 7 dias no client-side)
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-jumper-orange" />
                Qualidade de dados 3-5x melhor para o algoritmo
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-jumper-orange" />
                Mais conversões atribuídas = algoritmo otimiza melhor = CAC mais baixo
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* Resultado prático */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-fluid-h3 font-bold text-white">Resultado prático</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Clientes que migram para server-side veem, em média,{" "}
              <span className="text-jumper-orange font-semibold">
                +25-40% de conversões atribuídas
              </span>{" "}
              sem mudar nada nas campanhas. O investimento é o mesmo — a
              inteligência é que melhora.
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
