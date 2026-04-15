export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    logo: "https://jumper.studio/assets/logos/jumper-white.png",
    description:
      "A.I. Power Studio — laboratório criativo de soluções com inteligência artificial para empresas que querem operar, crescer e inovar em outro nível.",
    email: "contato@jumper.studio",
    sameAs: ["https://instagram.com/jumper.studio"],
    areaServed: ["BR", "PT", "US"],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "AI Automation",
      "AI Strategy",
      "Creative Prototyping",
      "AI-Powered Growth",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    description:
      "Laboratório criativo de soluções com inteligência artificial. AI Agents, automações, estratégia e experiências com IA.",
    email: "contato@jumper.studio",
    priceRange: "$$$$",
    openingHours: "Mo-Fr 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumper Studio",
    url: "https://jumper.studio",
    description:
      "A.I. Power Studio — Transformamos problemas complexos em soluções únicas com inteligência artificial.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jumper.studio/cases?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
