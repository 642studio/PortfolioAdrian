export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "backend"
  | "ai-automation"
  | "infrastructure"
  | "computer-vision"
  | "event-driven"
  | "nextjs"
  | "typescript"
  | "geospatial"
  | "govtech"
  | "supabase"
  | "civic-tech"
  | "security"
  | "fastify"
  | "multi-tenant"
  | "saas"
  | "media-intelligence"
  | "async-api";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  backend: "Backend",
  "ai-automation": "AI Automation",
  infrastructure: "Infrastructure",
  "computer-vision": "Computer Vision",
  "event-driven": "Event-Driven",
  nextjs: "Next.js",
  typescript: "TypeScript",
  geospatial: "Geospatial",
  govtech: "GovTech",
  supabase: "Supabase",
  "civic-tech": "Civic Tech",
  security: "Security",
  fastify: "Fastify",
  "multi-tenant": "Multi-Tenant",
  saas: "SaaS",
  "media-intelligence": "Media Intelligence",
  "async-api": "Async API",
} as const satisfies Record<TagVariant, string>;
