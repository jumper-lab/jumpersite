"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const testimonials = [
  {
    quote:
      "A Jumper mudou a forma como a gente olha pra dados. Antes era chute, agora é engenharia.",
    author: "Diretor de Marketing",
    company: "E-commerce Premium",
  },
  {
    quote:
      "Pela primeira vez, consigo provar pro board o ROI exato de cada canal.",
    author: "Head de Growth",
    company: "SaaS B2B",
  },
  {
    quote:
      "O tracking server-side deveria ser obrigatório. Não sei como operava sem antes.",
    author: "CEO",
    company: "Rede de Clínicas",
  },
];

export function TestimonialsSection() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          label="03 — Depoimentos"
          title='O que dizem nossos <span class="text-jumper-orange">clientes</span>'
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.quote}>
            <div
              className="editorial-card rounded-xl p-6 h-full flex flex-col"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="editorial-quote !m-0 !mb-6 flex-grow">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <p className="text-sm font-medium text-foreground">
                  {t.author}
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.5px" }}
                >
                  {t.company}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
