import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.es.projects[1]!;
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
        text: "La gestión interna necesita información organizada y herramientas que correspondan a los procesos del negocio. 642 Core parte de la definición de módulos y estructuras de datos para conectar esa operación.",
      },
    },
    {
      type: "text",
      props: {
        title: "Mi participación",
        text: "Definición de módulos de gestión, integraciones, estructuras de datos y automatización de procesos internos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Alcance del proyecto",
        items: [
          "Definición de módulos de gestión.",
          "Diseño de estructuras de datos.",
          "Integración de herramientas y automatización de procesos internos.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El enfoque",
        text: "Entender la operación antes de definir la herramienta: qué información se necesita, cómo se relaciona y qué tareas pueden conectarse mediante integraciones.",
      },
    },
  ],
} satisfies ProjectContent;
