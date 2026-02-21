import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
} from "@/components/structured-data";

const haffer = localFont({
  src: "../../public/fonts/HafferVF.ttf",
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Jumper Studio — Arquitetura de Performance Digital",
    template: "%s | Jumper Studio",
  },
  description:
    "Gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp. Arquitetura de Performance que recupera até 40% das conversões perdidas.",
  keywords: [
    "tráfego pago",
    "tracking server-side",
    "sGTM",
    "Meta CAPI",
    "performance digital",
    "CRM",
    "WhatsApp marketing",
  ],
  authors: [{ name: "Jumper Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jumper.studio",
    siteName: "Jumper Studio",
    title: "Jumper Studio — Arquitetura de Performance Digital",
    description:
      "Gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumper Studio — Arquitetura de Performance Digital",
    description:
      "Gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${haffer.variable} ${dmMono.variable} font-sans antialiased`}
      >
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
