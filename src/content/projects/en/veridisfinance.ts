import type { ProjectContent } from "../../types";

export default {
  title: "VeridisFinance",
  theme: "dark",
  tags: ["fastify", "postgresql", "multi-tenant", "saas", "ai-automation"],
  live: "https://veridisfinance.example.com",
  source: "https://github.com/642studio/veridisfinance",
  description:
    "Multi-tenant financial operations SaaS for SMBs, integrating transaction workflows, CFDI processing, planning and AI-assisted decision support.",
  components: [
    {
      type: "list",
      props: {
        title: "Platform Capabilities",
        items: [
          "Organizations, roles and account structures",
          "Contacts, categories and split movements",
          "CFDI 4.0 XML import and PDF statement parsing",
          "Recurring movements and monthly reports",
          "API keys, plan limits and encrypted AI-provider credentials per tenant",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture",
        text: "Node.js and Fastify backend with PostgreSQL as core ledger storage, paired with a Next.js operational interface for finance teams.",
      },
    },
  ],
} as const satisfies ProjectContent;
