"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

interface ServiceCTAProps {
  title: string;
  ctaText: string;
  ctaHref?: string;
}

export function ServiceCTA({
  title,
  ctaText,
  ctaHref = "/diagnostico",
}: ServiceCTAProps) {
  return (
    <section
      className="overflow-hidden"
      style={{
        padding: "80px 60px",
        background: `
          radial-gradient(ellipse 60% 60% at 30% 50%, rgba(129,67,167,0.06) 0%, transparent 60%),
          var(--bg-secondary)
        `,
      }}
    >
      <div className="max-w-[720px] max-md:px-0">
        <FadeIn>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(24px, 3vw, 28px)",
              letterSpacing: "-0.5px",
              marginBottom: "32px",
            }}
          >
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <Button variant="critical" size="xl" asChild>
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
