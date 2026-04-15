"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Brain, Palette, Hammer } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Pensamento estratégico",
    description: "Entendemos negócio antes de sugerir ferramenta.",
  },
  {
    icon: Palette,
    title: "Direção criativa",
    description:
      "Não construímos só eficiência. Construímos soluções que fazem sentido para a marca, para a operação e para a experiência.",
  },
  {
    icon: Hammer,
    title: "Capacidade de implementação",
    description: "Tiramos a IA do deck e colocamos no mundo real.",
  },
];

export function DifferentialsSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader title="Estratégia criativa com execução real" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A maioria das empresas de IA cai em um dos extremos:{" "}
            <span className="text-foreground font-medium">
              ou fala de futuro demais e entrega pouco
            </span>
            , ou{" "}
            <span className="text-foreground font-medium">
              executa demais sem pensar grande
            </span>
            .
          </p>
          <p className="mt-4 text-xl font-semibold text-jumper-orange">
            A Jumper cruza os dois lados.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-8 md:grid-cols-3">
        {differentials.map((diff) => (
          <StaggerItem key={diff.title}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-jumper-orange/10 text-jumper-orange">
                <diff.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {diff.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {diff.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
