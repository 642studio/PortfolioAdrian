import type { ProjectContent } from "../../types";

export default {
  title: "VERIDIS",
  theme: "dark",
  tags: ["backend", "ai-automation", "infrastructure", "computer-vision", "event-driven"],
  description:
    "VERIDIS is a modular, event-driven operating system that centralizes AI automation, computer vision, media workflows, operational memory and infrastructure for 642 Studio.",
  components: [
    {
      type: "text",
      props: {
        title: "Strategic Scope",
        text: "VERIDIS unifies operational events, AI orchestration and monitoring interfaces into one platform where modules operate independently while sharing a strict event contract.",
      },
    },
    {
      type: "list",
      props: {
        title: "Core Modules",
        items: [
          "VERIDIS Core: API, events, state, roles and alert orchestration.",
          "VERIDIS Vision: OpenCV and YOLOv8 pipelines for camera intelligence.",
          "Console Bridge: voice interface with wake word and realtime responses.",
          "Web Dashboard: operational center for modules, alerts and controls.",
          "AutoClip: decoupled service for asynchronous clipping and media tasks.",
          "VeridisConsole: terminal interface with reactive ASCII states and live metrics.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture Flow",
        items: [
          "Vision Module / Cameras",
          "VERIDIS Core",
          "Realtime Event Bus",
          "Dashboard / Console / Alerts / Automations",
          "PostgreSQL / n8n / GPT / External APIs",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
