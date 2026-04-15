"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/gradients/organic-03.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-white text-balance">
            Vamos descobrir onde a IA pode gerar mais poder no seu negócio?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg text-gray-300">
            Se existe espaço para criar eficiência, escalar operação, melhorar
            experiência ou construir novas soluções com IA, a Jumper pode ajudar
            a desenhar esse próximo passo.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button variant="critical" size="xl" asChild>
              <a href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!" target="_blank" rel="noopener noreferrer">Agendar conversa</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
