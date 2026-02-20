import type { Metadata } from "next";
import { SobreContent } from "./content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Jumper Studio nasceu da convicção de que tracking não é detalhe técnico — é a fundação de toda operação de performance digital.",
};

export default function SobrePage() {
  return <SobreContent />;
}
