import type { ProjectContent } from "../../types";

export default {
  title: "CardonSense",
  theme: "dark",
  tags: ["nextjs", "typescript", "geospatial", "postgresql", "govtech"],
  live: "https://cardonsense.com",
  source: "https://github.com/642studio/cardonsense",
  description:
    "Territorial intelligence platform for municipalities that converts citizen reports and geospatial data into prioritized operational decisions.",
  components: [
    {
      type: "text",
      props: {
        title: "CitySensor",
        text: "CitySensor centralizes citizen reports, field capture and geospatial layers so municipal teams can detect, analyze and prioritize urban incidents with faster response cycles.",
      },
    },
    {
      type: "list",
      props: {
        title: "Product Modules",
        items: ["Bachejoa", "SmartSport", "Field capture mobile app"],
      },
    },
    {
      type: "list",
      props: {
        title: "Technology",
        items: [
          "Next.js 16 + React 19 + TypeScript",
          "Prisma + PostgreSQL/Supabase",
          "MapLibre + Zod + Resend",
          "Vitest + Playwright",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
