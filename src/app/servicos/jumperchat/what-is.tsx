"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

export function WhatIsSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-foreground mb-6">O que é</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O JumperChat é a plataforma própria da Jumper Studio para
            atendimento comercial via WhatsApp. Não é chatbot genérico — é uma
            ferramenta construída pra resolver o maior buraco negro do marketing
            digital brasileiro: leads que chegam pelo WhatsApp sem nenhuma
            atribuição.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
