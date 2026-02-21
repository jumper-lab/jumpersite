"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref?: string;
  label?: string;
}

export function ServiceHero({
  headline,
  subheadline,
  ctaText,
  ctaHref = "/diagnostico",
  label,
}: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-end overflow-hidden"
      style={{
        padding: "80px 60px",
        background: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(250,71,33,0.10) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 70%, rgba(129,67,167,0.07) 0%, transparent 60%),
          #000
        `,
      }}
    >
      <div className="relative z-10 max-w-[900px] max-md:px-0">
        {label && (
          <FadeIn>
            <div className="editorial-label--orange mb-6">{label}</div>
          </FadeIn>
        )}

        <FadeIn delay={0.1}>
          <h1
            className="text-white font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-1.5px",
              marginBottom: "20px",
            }}
          >
            {headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="max-w-[600px]"
            style={{
              fontSize: "17px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            {subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button variant="critical" size="xl" asChild>
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
