import type { Metadata } from "next";
import { DiagnosticoContent } from "./content";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito",
  description:
    "Descubra quanto você está perdendo em conversões. Em 30 minutos, analisamos seu tracking, suas campanhas e seu funil.",
};

export default function DiagnosticoPage() {
  return <DiagnosticoContent />;
}
