import type { Metadata } from "next";
import { CasesContent } from "./content";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Resultados que falam por si. Cada case é uma operação real, com dados reais e impacto mensurável.",
};

export default function CasesPage() {
  return <CasesContent />;
}
