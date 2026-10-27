import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.en.projects[1]!;
export default {
  title: p.name,
  theme: "dark",
  tags: [],
  description: p.description,
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "Internal operations need organized information and tools that reflect business processes. 642 Core starts with management modules and data structures to connect those operations.",
      },
    },
    {
      type: "text",
      props: {
        title: "My contribution",
        text: "Definition of management modules, integrations, data structures and internal process automation.",
      },
    },
    {
      type: "list",
      props: {
        title: "Project scope",
        items: [
          "Management module definition.",
          "Data structure design.",
          "Tool integration and internal process automation.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Understand operations before defining the tool: what information is needed, how it relates and which tasks can be connected through integrations.",
      },
    },
  ],
} satisfies ProjectContent;
