"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Soluções", href: "#o-que-fazemos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logos/jumper-white.png"
            alt="Jumper Studio"
            width={120}
            height={32}
            className="h-7 w-auto hidden dark:block"
            priority
          />
          <Image
            src="/assets/logos/jumper-black.png"
            alt="Jumper Studio"
            width={120}
            height={32}
            className="h-7 w-auto dark:hidden"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="critical" size="default" asChild>
            <a href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!" target="_blank" rel="noopener noreferrer">Falar com a Jumper</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent/50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button variant="critical" size="lg" className="w-full" asChild>
                <a href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  Falar com a Jumper
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
