import type { ProjectContent } from "../../types";

export default {
  title: "VeridisClip",
  theme: "dark",
  tags: ["ai-automation", "media-intelligence", "async-api", "typescript", "saas"],
  description:
    "AI-powered video clipping platform that transforms long-form content into structured, scored and publish-ready clip pipelines.",
  components: [
    {
      type: "list",
      props: {
        title: "Pipeline",
        items: [
          "Import from local files and external platforms",
          "Subtitle generation and semantic segmentation",
          "LLM scoring, title generation and clustering",
          "Clip rendering and publish-ready packaging",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Operational Goal",
        text: "Reduce editorial turnaround by combining automation with human quality-control checkpoints.",
      },
    },
  ],
} as const satisfies ProjectContent;
