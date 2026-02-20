"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { ArrowRight } from "lucide-react";

const loopSteps = [
  "Lead vê anúncio",
  "Clica",
  "Cai no WhatsApp",
  "É atendido rapidamente",
  "Compra",
  "Dado volta pro CRM",
  "CRM envia conversão pro Meta/Google",
  "Algoritmo otimiza melhor",
  "Próximo lead é mais qualificado",
];

export function LoopSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader title="Por que importa pra performance" />
      </FadeIn>

      <div className="max-w-4xl mx-auto space-y-12">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-lg font-semibold text-jumper-orange mb-4">
              O Loop Completo
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-foreground">
              {loopSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full bg-jumper-orange/10 border border-jumper-orange/20 px-3 py-1.5 whitespace-nowrap">
                    {step}
                  </span>
                  {i < loopSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-jumper-orange/40 shrink-0" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="font-semibold text-muted-foreground mb-3">
                Sem JumperChat
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O loop quebra no WhatsApp. O lead entra, mas ninguém sabe de
                onde veio. A venda acontece, mas o algoritmo não aprende. Você
                continua pagando caro por leads que talvez não convertam.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-lg border border-jumper-orange/30 bg-card p-6 shadow-[0_0_20px_rgba(250,71,33,0.05)]">
              <h4 className="font-semibold text-jumper-orange mb-3">
                Com JumperChat
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O loop é completo. Cada venda retroalimenta a máquina. O
                algoritmo fica mais inteligente a cada ciclo.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
