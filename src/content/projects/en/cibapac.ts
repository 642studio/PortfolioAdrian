import { portfolio } from "../../portfolio";
import type { ProjectContent } from "../../types";
const p = portfolio.en.projects[0]!;
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
        text: "A sports league needs to connect information, statistics and broadcasts with its audience. The CIBAPAC 2026 platform brings these access points together and adds AI assistance.",
      },
    },
    {
      type: "text",
      props: {
        title: "My contribution",
        text: "Contribution to the digital platform and the integration of CibaBot, an AI-powered assistant.",
      },
    },
    {
      type: "list",
      props: {
        title: "Project scope",
        items: [
          "Sports information access.",
          "Statistics and broadcasts.",
          "CibaBot integration as an information assistant.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Approach",
        text: "Connect the digital sports experience with useful audience information. AI integration sits within a platform that also serves communication and media needs.",
      },
    },
  ],
} satisfies ProjectContent;
