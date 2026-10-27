import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.es.projects[0]!;
export default {
  title: p.name,
  theme: "dark",
  tags: [],
  description: p.description,
  components: [
    {
      type: "text",
      props: {
        title: "El contexto",
        text: "Una liga deportiva necesita conectar información, estadísticas y transmisiones con su audiencia. La plataforma CIBAPAC 2026 reúne estos puntos de consulta y suma asistencia basada en IA.",
      },
    },
    {
      type: "text",
      props: {
        title: "Mi participación",
        text: "Participación en la plataforma digital y en la integración de CibaBot, el asistente basado en inteligencia artificial.",
      },
    },
    {
      type: "list",
      props: {
        title: "Alcance del proyecto",
        items: [
          "Consulta de información deportiva.",
          "Acceso a estadísticas y transmisiones.",
          "Integración de CibaBot como asistente de consulta.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El enfoque",
        text: "Conectar la experiencia digital del deporte con información útil para su audiencia. La integración de IA forma parte de una plataforma que también atiende necesidades de comunicación y medios.",
      },
    },
  ],
} satisfies ProjectContent;
