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
    description: "Municipal territorial intelligence and geospatial decision platform.",
  },
  {
    title: "Bachejoa",
    slug: "bachejoa",
    thumbnail: thumbnailBachejoa,
    description: "Civic operations platform for urban incident reporting and resolution.",
  },
  {
    title: "VeridisFinance",
    slug: "veridisfinance",
    thumbnail: thumbnailVeridisFinance,
    description: "Multi-tenant financial operations SaaS for SMB teams.",
  },
  {
    title: "VeridisClip",
    slug: "veridisclip",
    thumbnail: thumbnailVeridisClip,
    description: "AI-powered video clipping and editorial acceleration platform.",
  },
] as const satisfies ProjectPreview[];
