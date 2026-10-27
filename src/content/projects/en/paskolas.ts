import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.en.projects[2]!;
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
        text: "The 2026 Paskolas Navojoa season combines digital presence, communication and commercial operations. This project connects those areas through web development and integrations.",
      },
    },
    {
      type: "text",
      props: {
        title: "My contribution",
        text: "Coordination of website development, commercial workflows and integrations for the 2026 season.",
      },
    },
    {
      type: "list",
      props: {
        title: "Project scope",
        items: [
          "Web development coordination.",
          "Commercial workflow organization.",
          "Digital integrations for the 2026 season.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Align team communication with digital tools that support operations, coordinating requirements and development.",
      },
    },
  ],
} satisfies ProjectContent;
