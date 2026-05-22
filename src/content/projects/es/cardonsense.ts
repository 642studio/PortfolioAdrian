import type { ProjectContent } from "../../types";

export default {
  title: "CardonSense",
  theme: "dark",
  tags: ["nextjs", "typescript", "geospatial", "postgresql", "govtech"],
  live: "https://cardonsense.example.com",
  source: "https://github.com/642studio/cardonsense",
  description:
    "Plataforma de inteligencia territorial para municipios que convierte reportes ciudadanos y datos geoespaciales en decisiones operativas priorizadas.",
  components: [
    {
      type: "text",
      props: {
        title: "CitySensor",
        text: "CitySensor centraliza reportes ciudadanos, captura de campo y capas geoespaciales para que los equipos municipales detecten, analicen y prioricen incidencias urbanas con mejores tiempos de respuesta.",
      },
    },
    {
      type: "list",
      props: {
        title: "Módulos de Producto",
        items: ["Bachejoa", "SmartSport", "App móvil de captura en campo"],
      },
    },
    {
      type: "list",
      props: {
        title: "Tecnología",
        items: [
          "Next.js 16 + React 19 + TypeScript",
          "Prisma + PostgreSQL/Supabase",
          "MapLibre + Zod + Resend",
          "Vitest + Playwright",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
