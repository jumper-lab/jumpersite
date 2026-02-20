import type { Metadata } from "next";
import { CaseDetailContent } from "./content";

const casesData: Record<
  string,
  {
    title: string;
    category: string;
    metric: string;
    metricLabel: string;
    context: string;
    diagnosis: string;
    solution: string;
    results: { label: string; value: string }[];
    quote: string;
    author: string;
  }
> = {
  "ecommerce-moda": {
    title: "E-commerce de Moda",
    category: "E-commerce",
    metric: "+47%",
    metricLabel: "conversões rastreadas",
    context:
      "E-commerce de moda com faturamento mensal de R$2M+ e investimento de R$80k/mês em Meta Ads e Google Ads. Tracking baseado em pixel client-side com perda significativa de dados.",
    diagnosis:
      "Auditoria revelou que 35% dos eventos de conversão estavam sendo perdidos por ad blockers e ITP do Safari. O ROAS reportado de 2.5x era, na realidade, 4.1x — mas a equipe não sabia e tomava decisões conservadoras de budget.",
    solution:
      "Implementamos sGTM completo, Meta CAPI com Event Match Quality 9.2, Enhanced Conversions no Google Ads e integração do CRM com as plataformas de ads.",
    results: [
      { label: "Conversões rastreadas", value: "+47%" },
      { label: "ROAS real descoberto", value: "4.1x (vs 2.5x reportado)" },
      { label: "CAC após otimização", value: "-28%" },
      { label: "Tempo de setup", value: "3 semanas" },
    ],
    quote:
      "Antes, a gente achava que tinha ROAS de 2.5x. Com o tracking da Jumper, descobrimos que era 4.1x — e aí conseguimos escalar com confiança.",
    author: "Diretor de Marketing",
  },
  "rede-clinicas": {
    title: "Rede de Clínicas",
    category: "Serviços",
    metric: "-38%",
    metricLabel: "no CPL",
    context:
      "Rede com 5 unidades, investimento de R$30k/mês em ads. Leads chegavam via WhatsApp sem nenhuma atribuição. A equipe comercial não conseguia reportar de onde vinham os pacientes.",
    diagnosis:
      "Sem rastreamento de WhatsApp, 60% das conversões eram invisíveis. Campanhas eram otimizadas apenas com base em cliques e impressões.",
    solution:
      "JumperChat para atribuição completa de WhatsApp, sGTM para tracking robusto, integração de vendas offline com Meta e Google.",
    results: [
      { label: "CPL", value: "-38%" },
      { label: "Conversões atribuídas", value: "+62%" },
      { label: "Leads com atribuição completa", value: "95%" },
      { label: "Tempo de setup", value: "2 semanas" },
    ],
    quote:
      "Pela primeira vez, consigo provar pro board o ROI exato de cada canal.",
    author: "Head de Marketing",
  },
  "saas-b2b": {
    title: "SaaS B2B",
    category: "SaaS",
    metric: "R$500k → R$1.2M/mês",
    metricLabel: "em receita",
    context:
      "SaaS B2B com ticket médio de R$3k/mês. Investia R$50k/mês em ads mas otimizava campanhas com base em leads, não em vendas efetivadas.",
    diagnosis:
      "CRM completamente desconectado das plataformas de ads. O algoritmo otimizava para volume de leads, não para qualidade. 70% dos leads eram desqualificados.",
    solution:
      "Integração bidirecional CRM → Meta/Google com offline conversions, sGTM, e reestruturação de campanhas com otimização para venda real.",
    results: [
      { label: "Receita mensal", value: "R$500k → R$1.2M" },
      { label: "Leads qualificados", value: "+140%" },
      { label: "CAC por venda", value: "-45%" },
      { label: "Período", value: "6 meses" },
    ],
    quote:
      "A Jumper mudou a forma como a gente olha pra dados. Antes era chute, agora é engenharia.",
    author: "CEO",
  },
};

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return Object.keys(casesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = casesData[params.slug];
  if (!data) return { title: "Case não encontrado" };
  return {
    title: `Case: ${data.title}`,
    description: `${data.metric} ${data.metricLabel} — ${data.context.slice(0, 150)}`,
  };
}

export default function CaseDetailPage({ params }: Props) {
  const data = casesData[params.slug];
  if (!data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Case não encontrado.</p>
      </div>
    );
  }
  return <CaseDetailContent data={data} />;
}
