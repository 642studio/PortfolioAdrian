import type { ProjectContent } from "../../types";

export default {
  title: "Bachejoa",
  theme: "dark",
  tags: ["nextjs", "supabase", "civic-tech", "security", "typescript"],
  live: "https://bachejoa.example.com",
  source: "https://github.com/642studio/bachejoa",
  description:
    "Plataforma cívica de operación full-stack para reportar y resolver incidencias urbanas en Navojoa mediante evidencia geolocalizada y dashboards operativos.",
  components: [
    {
      type: "list",
      props: {
        title: "Alcance Operativo",
        items: [
          "Reportes ciudadanos geolocalizados",
          "Evidencia fotográfica y categorización",
          "Votación ciudadana y seguimiento público",
          "Calificación de reparaciones y bitácora",
          "Dashboard administrativo con permisos por zona/categoría",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Seguridad y Gobernanza",
        items: ["Protección CSRF", "Rate limiting", "Cookies HttpOnly", "Headers de seguridad y CSP", "Bitácora de auditoría operativa"],
      },
    },
  ],
} as const satisfies ProjectContent;
