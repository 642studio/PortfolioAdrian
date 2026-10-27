import type { ProjectContent } from "../../types";

export default {
  title: "VERIDIS",
  theme: "dark",
  tags: ["backend", "ai-automation", "infrastructure", "computer-vision", "event-driven"],
  description:
    "VERIDIS es un sistema operativo modular orientado a eventos que centraliza automatización con IA, visión computacional, flujos de medios, memoria operativa e infraestructura para 642 Studio.",
  components: [
    {
      type: "text",
      props: {
        title: "Alcance Estratégico",
        text: "VERIDIS unifica eventos operativos, orquestación con IA e interfaces de monitoreo en una sola plataforma donde los módulos operan de forma independiente con un contrato de eventos estricto.",
      },
    },
    {
      type: "list",
      props: {
        title: "Módulos Principales",
        items: [
          "VERIDIS Core: API, eventos, estado, roles y orquestación de alertas.",
          "VERIDIS Vision: pipelines con OpenCV y YOLOv8 para inteligencia de cámaras.",
          "Console Bridge: interfaz de voz con wake word y respuestas en tiempo real.",
          "Web Dashboard: centro operativo para módulos, alertas y control.",
          "AutoClip: servicio desacoplado para clipeo y tareas de media asíncronas.",
          "VeridisConsole: interfaz terminal con estados ASCII reactivos y métricas en vivo.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Flujo de Arquitectura",
        items: [
          "Módulo de Visión / Cámaras",
          "VERIDIS Core",
          "Realtime Event Bus",
          "Dashboard / Console / Alertas / Automatizaciones",
          "PostgreSQL / n8n / GPT / APIs externas",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
