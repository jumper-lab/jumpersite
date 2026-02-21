"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

const stats = [
  { value: "R$30M+", label: "investidos em mídia paga" },
  { value: "50+", label: "clientes premium" },
  { value: "3", label: "países atendidos" },
  { value: "9+", label: "anos de experiência em performance digital" },
];

export function NumbersSection() {
  return (
    <Section className="border-t border-[var(--border-subtle)]">
      <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div
              className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-jumper-orange"
              style={{ lineHeight: 1 }}
            >
              {stat.value}
            </div>
            <p
              className="mt-3 text-[13px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
