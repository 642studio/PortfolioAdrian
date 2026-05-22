import thumbnailCardonSense from "../../../assets/thumbnails/cardonsense-thumb.png";
import thumbnailBachejoa from "../../../assets/thumbnails/bachejoa-thumb.png";
import thumbnailVeridisFinance from "../../../assets/thumbnails/veridisfinance-thumb.png";
import thumbnailVeridisClip from "../../../assets/thumbnails/veridisclip-thumb.png";

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
