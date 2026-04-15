"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

/**
 * Seção de credibilidade com logos de clientes.
 * TODO: Adicionar logos reais dos clientes da Jumper em /public/assets/logos/clients/
 */
export function CredibilitySection() {
  return (
    <Section className="border-y border-border">
      <FadeIn>
        <div className="text-center space-y-8">
          {/* Placeholder para logos de clientes */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-28 rounded bg-muted animate-pulse"
              />
            ))}
          </div>

          <p className="text-lg font-medium text-foreground max-w-2xl mx-auto">
            A Jumper existe para fechar essa distância entre promessa e
            aplicação.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
