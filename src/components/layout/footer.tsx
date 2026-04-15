import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";

const solutions = [
  "AI Strategy",
  "AI Agents",
  "AI Automation",
  "AI-Powered Growth",
  "AI Experiences",
  "Creative Prototyping",
];

const footerLinks = {
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Cases", href: "/cases" },
    { label: "Contato", href: "/contato" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/assets/logos/jumper-white.png"
                alt="Jumper Studio"
                width={120}
                height={32}
                className="h-7 w-auto hidden dark:block"
              />
              <Image
                src="/assets/logos/jumper-black.png"
                alt="Jumper Studio"
                width={120}
                height={32}
                className="h-7 w-auto dark:hidden"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A.I. Power Studio — Transformamos problemas complexos em soluções
              únicas com inteligência artificial.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Soluções
            </h4>
            <ul className="space-y-2">
              {solutions.map((name) => (
                <li key={name}>
                  <span className="text-sm text-muted-foreground">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-jumper-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5521964369191?text=Ol%C3%A1%2C%20Jumper!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-jumper-orange transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@jumper.studio"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-jumper-orange transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@jumper.studio
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jumper.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-jumper-orange transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @jumper.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jumper Studio. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
