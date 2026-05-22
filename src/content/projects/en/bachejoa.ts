import type { ProjectContent } from "../../types";

export default {
  title: "Bachejoa",
  theme: "dark",
  tags: ["nextjs", "supabase", "civic-tech", "security", "typescript"],
  live: "https://bachejoa.com",
  source: "https://github.com/642studio/bachejoa",
  description:
    "Full-stack civic operations platform for reporting and resolving urban incidents in Navojoa through geolocated evidence and operational dashboards.",
  components: [
    {
      type: "list",
      props: {
        title: "Operational Scope",
        items: [
          "Geolocated citizen reports",
          "Photo evidence and incident categorization",
          "Citizen voting and public status tracking",
          "Repair rating and audit history",
          "Admin + official dashboards with zone/category permissions",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Security and Governance",
        items: ["CSRF protection", "Rate limiting", "HttpOnly cookies", "Security headers and CSP", "Operational audit logs"],
      },
    },
  ],
} as const satisfies ProjectContent;
