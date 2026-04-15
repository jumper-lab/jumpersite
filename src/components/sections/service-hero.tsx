"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref?: string;
  gradient?: string;
}

export function ServiceHero({
  headline,
  subheadline,
  ctaText,
  ctaHref = "https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!",
  gradient = "/assets/gradients/organic-04.png",
}: ServiceHeroProps) {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={gradient}
          alt=""
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-fluid-h1 font-bold text-white leading-[1.1] text-balance">
            {headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
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
