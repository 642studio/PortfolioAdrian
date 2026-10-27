const thumbnailCardonSense = "/work/cardonsense.jpg";
const thumbnailBachejoa = "/work/bachejoa.jpg";
const thumbnailVeridisFinance = "/work/veridisfinance.jpg";
const thumbnailVeridisClip = "/work/veridisclip.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "CardonSense",
    slug: "cardonsense",
    thumbnail: thumbnailCardonSense,
    description: "Plataforma municipal de inteligencia territorial y decisiones geoespaciales.",
  },
  {
    title: "Bachejoa",
    slug: "bachejoa",
    thumbnail: thumbnailBachejoa,
    description: "Plataforma de operación cívica para reporte y resolución de incidencias urbanas.",
  },
  {
    title: "VeridisFinance",
    slug: "veridisfinance",
    thumbnail: thumbnailVeridisFinance,
    description: "SaaS de operaciones financieras multi-tenant para equipos pyme.",
  },
  {
    title: "VeridisClip",
    slug: "veridisclip",
    thumbnail: thumbnailVeridisClip,
    description: "Plataforma de clipeo con IA para acelerar producción editorial en video.",
  },
] as const satisfies ProjectPreview[];
