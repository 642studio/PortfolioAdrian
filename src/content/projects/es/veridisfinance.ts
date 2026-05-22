import type { ProjectContent } from "../../types";

export default {
  title: "VeridisFinance",
  theme: "dark",
  tags: ["fastify", "postgresql", "multi-tenant", "saas", "ai-automation"],
  live: "https://veridisfinance.example.com",
  source: "https://github.com/642studio/veridisfinance",
  description:
    "SaaS financiero multi-tenant para pymes que integra flujos de transacciones, procesamiento CFDI, planeación y soporte de decisiones asistido por IA.",
  components: [
    {
      type: "list",
      props: {
        title: "Capacidades",
        items: [
          "Organizaciones, roles y estructura de cuentas",
          "Contactos, categorías y movimientos con splits",
          "Importación CFDI 4.0 XML y lectura de estados PDF",
          "Movimientos recurrentes y reportes mensuales",
          "API keys, límites por plan y credenciales de proveedores IA cifradas por tenant",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura",
        text: "Backend en Node.js y Fastify con PostgreSQL como núcleo contable, integrado con una interfaz operativa en Next.js para equipos financieros.",
      },
    },
  ],
} as const satisfies ProjectContent;
