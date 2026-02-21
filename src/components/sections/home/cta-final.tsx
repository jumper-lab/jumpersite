"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 60px",
        background: `
          radial-gradient(ellipse 80% 60% at 50% 50%, rgba(250,71,33,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 70%, rgba(129,67,167,0.06) 0%, transparent 60%),
          var(--bg-secondary)
        `,
      }}
    >
      <div className="max-w-[720px] max-md:px-6">
        <FadeIn>
          <div className="editorial-label--orange mb-6">Próximo passo</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(24px, 3vw, 28px)",
              letterSpacing: "-0.5px",
              marginBottom: "20px",
            }}
          >
            Descubra quanto você está{" "}
            <span className="text-jumper-orange">perdendo</span> em conversões.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="editorial-body">
            Em 30 minutos, analisamos seu setup e mostramos onde estão os
            vazamentos. Sem compromisso.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button variant="critical" size="xl" asChild>
              <Link href="/diagnostico">Agendar Diagnóstico Gratuito</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
