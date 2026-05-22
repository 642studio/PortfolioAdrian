export const social = [
  { url: "mailto:adrian@642studio.com?cc=contacto@642studio.com", name: "mail" },
  { url: "https://github.com/642studio", name: "github" },
  { url: "https://www.linkedin.com/in/adrianyepizl/", name: "linkedin" },
  { url: "https://www.instagram.com/642studio/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
