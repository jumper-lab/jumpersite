"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, Clock } from "lucide-react";

const channels = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "Fale conosco",
    href: "https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@jumper.studio",
    href: "mailto:contato@jumper.studio",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jumper.studio",
    href: "https://instagram.com/jumper.studio",
  },
];

export function ContatoContent() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-[#0a0a0a] pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-fluid-h1 font-bold text-white">
              Fale com a gente.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg text-gray-300">
              Prefere conversar antes de agendar o diagnóstico? Sem problema.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Formulário */}
          <FadeIn>
            <form
              className="space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input label="Nome" placeholder="Seu nome" required />
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                required
              />
              <Textarea
                label="Mensagem"
                placeholder="Como podemos ajudar?"
                required
                className="min-h-[120px]"
              />
              <Button variant="critical" size="lg" className="w-full" type="submit">
                Enviar mensagem
              </Button>
            </form>
          </FadeIn>

          {/* Canais diretos */}
          <FadeIn delay={0.15}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Canais diretos
                </h2>
                <div className="space-y-4">
                  {channels.map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-jumper-orange/30 transition-colors group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-jumper-orange/10 group-hover:bg-jumper-orange transition-colors">
                        <ch.icon className="h-5 w-5 text-jumper-orange group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {ch.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {ch.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground rounded-lg border border-border bg-card p-4">
                <Clock className="h-5 w-5 text-jumper-orange shrink-0" />
                <span>Segunda a sexta, 9h às 18h (Brasília)</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
