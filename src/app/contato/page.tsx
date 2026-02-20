import type { Metadata } from "next";
import { ContatoContent } from "./content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Jumper Studio. WhatsApp, email ou formulário — estamos disponíveis de segunda a sexta.",
};

export default function ContatoPage() {
  return <ContatoContent />;
}
