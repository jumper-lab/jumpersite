"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end overflow-hidden"
      style={{
        padding: "80px 60px",
        background: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(250,71,33,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 70%, rgba(129,67,167,0.08) 0%, transparent 60%),
          #000
        `,
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/gradients/organic-01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 max-w-[900px] max-md:px-0">
        <FadeIn delay={0.1}>
          <div className="editorial-label--orange mb-6">
            Arquitetura de Performance Digital
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            className="text-white font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-1.5px",
              marginBottom: "20px",
            }}
          >
            Seus anúncios estão rodando.{" "}
            <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>
              Suas conversões estão sumindo.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p
            className="max-w-[600px]"
            style={{
              fontSize: "17px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            Gestão de tráfego pago com tracking server-side, CRM integrado e
            atendimento via WhatsApp. Tudo numa máquina só.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="critical" size="xl" asChild>
              <Link href="/diagnostico">Agendar Diagnóstico Gratuito</Link>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a
                href="#como-funciona"
                className="text-white border-white/20 hover:bg-white/10"
              >
                Ver como funciona <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p
            className="font-mono mt-10"
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "1px",
            }}
          >
            +34% de conversões recuperadas · Tracking Server-Side · R$30M+
            investidos
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
