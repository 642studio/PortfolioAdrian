import type { ProjectContent } from "../../types";

export default {
  title: "VeridisClip",
  theme: "dark",
  tags: ["ai-automation", "media-intelligence", "async-api", "typescript", "saas"],
  description:
    "Plataforma de clipeo de video con IA que transforma contenido largo en pipelines de clips estructurados, puntuados y listos para publicar.",
  components: [
    {
      type: "list",
      props: {
        title: "Pipeline",
        items: [
          "Importación desde archivos locales y plataformas externas",
          "Generación de subtítulos y segmentación semántica",
          "Scoring con LLM, títulos y clustering",
          "Render de clips y empaquetado publish-ready",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Objetivo Operativo",
        text: "Reducir tiempos editoriales combinando automatización con puntos de control humano de calidad.",
      },
    },
  ],
} as const satisfies ProjectContent;
