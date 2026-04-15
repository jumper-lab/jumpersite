import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
} from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jumper Studio — A.I. Power Studio",
    template: "%s | Jumper Studio",
  },
  description:
    "Laboratório criativo de soluções com inteligência artificial. Desenvolvemos AI Agents, automações, estratégia e experiências com IA para empresas que querem operar, crescer e inovar em outro nível.",
  keywords: [
    "inteligência artificial",
    "AI agents",
    "automação com IA",
    "soluções com IA",
    "AI strategy",
    "creative prototyping",
    "AI experiences",
  ],
  authors: [{ name: "Jumper Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jumper.studio",
    siteName: "Jumper Studio",
    title: "Jumper Studio — A.I. Power Studio",
    description:
      "Laboratório criativo de soluções com IA. Agentes, automações, estratégia e experiências com inteligência artificial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumper Studio — A.I. Power Studio",
    description:
      "Laboratório criativo de soluções com IA. Agentes, automações, estratégia e experiências com inteligência artificial.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
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
