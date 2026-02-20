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
    <section className="py-20 sm:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-white text-balance">
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-8">
            <Button variant="critical" size="xl" asChild>
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
