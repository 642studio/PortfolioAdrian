import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.es.projects[2]!;
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
        text: "La temporada 2026 de Paskolas Navojoa combina necesidades de presencia digital, comunicación y operación comercial. El proyecto conecta estas áreas mediante desarrollo web e integraciones.",
      },
    },
    {
      type: "text",
      props: {
        title: "Mi participación",
        text: "Coordinación del desarrollo del sitio web, los flujos comerciales y las integraciones para la temporada 2026.",
      },
    },
    {
      type: "list",
      props: {
        title: "Alcance del proyecto",
        items: [
          "Coordinación del desarrollo web.",
          "Organización de flujos comerciales.",
          "Integraciones digitales para la temporada 2026.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El enfoque",
        text: "Alinear la comunicación de un equipo deportivo con las herramientas digitales que apoyan su operación, coordinando los requerimientos y el desarrollo.",
      },
    },
  ],
} satisfies ProjectContent;
