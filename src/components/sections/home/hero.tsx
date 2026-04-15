"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/gradients/organic-01.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-jumper-orange/30 bg-jumper-orange/10 px-4 py-1.5 text-sm text-jumper-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-jumper-orange animate-pulse" />
              A.I. Power Studio
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-fluid-h1 font-bold text-white leading-[1.1] text-balance">
              Desenvolvemos soluções com IA para empresas que querem{" "}
              <span className="text-jumper-orange">
                operar, crescer e inovar em outro nível.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              A Jumper é um laboratório criativo de soluções com inteligência
              artificial. Transformamos problemas complexos em soluções únicas.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="critical" size="xl" asChild>
                <a href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!" target="_blank" rel="noopener noreferrer">Falar com a Jumper</a>
              </Button>
              <Button variant="ghost" size="xl" asChild>
                <a href="#o-que-fazemos" className="text-white border-white/20 hover:bg-white/10">
                  Ver soluções <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
