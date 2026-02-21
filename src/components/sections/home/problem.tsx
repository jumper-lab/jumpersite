"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

export function ProblemSection() {
  return (
    <Section>
      <div className="max-w-[720px]">
        <FadeIn>
          <div className="editorial-label--orange mb-6">O Problema</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-bold text-foreground"
            style={{
              fontSize: "clamp(24px, 3vw, 28px)",
              letterSpacing: "-0.5px",
              marginBottom: "32px",
            }}
          >
            Você está perdendo até{" "}
            <span className="text-jumper-orange">40% das suas conversões.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-5">
            <p className="editorial-body">
              Pixels client-side não funcionam mais como antes. iOS 17, ad
              blockers e o fim dos cookies de terceiros estão corroendo seus
              dados. Você acha que tem ROAS de 3x — mas o número real pode ser
              1.8x. Cada campanha otimizada com dados sujos é dinheiro jogado
              fora.
            </p>
            <p className="text-foreground font-semibold text-xl">
              A Jumper existe pra resolver isso.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
