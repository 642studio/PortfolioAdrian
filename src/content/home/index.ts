import { locale } from "../../i18n/store";

import type { Locale } from "../../i18n/types";
import type { HomeContent } from "./types";

const homeContent: Record<Locale, HomeContent> = {
  en: {
    hero: {
      name: "Adrián Yépiz",
      role: "Founder at 642 Studio · Creative Direction · Software & AI",
      valueProp:
        "I connect business strategy, creativity and software to turn ideas into digital products and better ways of working.",
      ctas: [
        { label: "Explore my work", href: "#systems", type: "anchor" },
        { label: "Let’s talk", href: "#contact", type: "anchor" },

        { label: "Download CV ↓", href: "/cv/Adrian-Yepiz-EN.pdf", type: "external" },
      ],
    },
    whatIBuild: {
      title: "What I Build",
      intro: "I connect creative direction, software development and AI to build digital products and improve how teams work.",
      capabilities: [
        {
          title: "Backend Systems",
          description: "API-first backends with authentication, modular services and resilient data workflows.",
          bullets: ["Node.js", "Fastify", "PostgreSQL", "Zod", "JWT Auth"],
        },
        {
          title: "AI Automation",
          description: "Event-driven automation pipelines with GPT, agents and structured decision layers.",
          bullets: ["GPT APIs", "n8n", "Make", "Webhooks", "Realtime API"],
        },
        {
          title: "Operational Platforms",
          description: "Multi-user operational platforms for visibility, coordination and process control.",
          bullets: ["Next.js", "React", "TypeScript", "Role-based workflows"],
        },
        {
          title: "Infrastructure",
          description: "Linux-based infrastructure for secure deployment, observability and continuous uptime.",
          bullets: ["Docker", "Caddy", "Nginx", "systemd", "Tailscale"],
        },
        {
          title: "Computer Vision",
          description: "Realtime camera intelligence pipelines for detection, monitoring and operational alerting.",
          bullets: ["Python", "OpenCV", "ONNX", "YOLOv8", "RTSP"],
        },
      ],
    },
    featuredVeridis: {
      title: "Featured System: VERIDIS",
      subtitle: "Event-driven operating system for 642 Studio",
      description:
        "VERIDIS centralizes AI automation, computer vision, media workflows, operational memory and infrastructure into a single, scalable execution layer.",
      architectureNodes: [
        "Vision Module / Cameras",
        "VERIDIS Core",
        "Realtime Event Bus",
        "Dashboard · Console · Alerts · Automations",
        "PostgreSQL · n8n · GPT · External APIs",
      ],
      endermites: [
        "Endermite Vision",
        "Endermite News",
        "Endermite Media",
        "Endermite Social",
        "Endermite Meetings",
        "Endermite Tasks",
      ],
      components: [
        {
          name: "VERIDIS Core",
          description: "Core API for events, states, alerts, users, roles and inter-service communication.",
        },
        {
          name: "VERIDIS Vision",
          description:
            "Computer vision module using YOLOv8/OpenCV for motion, person, tamper and camera-offline detection.",
        },
        {
          name: "Console Bridge",
          description: "Voice interface with wake word, visual context and realtime spoken response.",
        },
        {
          name: "VeridisConsole",
          description: "Python terminal interface with reactive ASCII avatar, live metrics and event logs.",
        },
        {
          name: "Web Dashboard",
          description: "Next.js operational dashboard for monitoring, AutoClip and modular service control.",
        },
        {
          name: "AutoClip",
          description: "Decoupled service for intelligent clipping, video processing and asynchronous jobs.",
        },
      ],
    },
    selectedSystems: {
      title: "Selected Systems",
      intro: "Four production systems across govtech, civic operations, financial SaaS and AI-powered media workflows.",
    },
    architectureAutomation: {
      title: "Architecture & Automation",
      intro:
        "Beyond featured platforms, I build modular services that operate independently and integrate through events.",
      flowTitle: "Automation Flow",
      flow: [
        "Operational trigger",
        "Webhook/API ingestion",
        "Validation and orchestration",
        "LLM scoring and rule evaluation",
        "Asynchronous jobs and notifications",
        "Operational memory and audit trail",
      ],
      directoryTitle: "System Directory",
      directory: [
        {
          name: "VeridisMI",
          description:
            "Media intelligence backend that transforms business briefs into scored and optimized production plans.",
        },
        {
          name: "EnvautoAPI",
          description: "Asynchronous orchestration API for AI asset generation pipelines with robust job tracking.",
        },
        {
          name: "VeridisConsole",
          description: "Terminal-based real-time interface for system metrics, events and execution feedback.",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      intro:
        "Infrastructure is treated as product surface: secure, observable and engineered for continuous operations.",
      pillars: [
        "Linux service orchestration with systemd",
        "Dockerized workloads",
        "Reverse proxy architecture with Caddy and Nginx",
        "Private networking with Tailscale",
        "Managed and self-hosted PostgreSQL environments",
        "TLS and HTTPS hardening",
      ],
    },
    technicalStack: {
      title: "Technical Stack",
      groups: [
        {
          name: "Backend",
          items: [
            "Node.js",
            "Fastify",
            "Express",
            "Java",
            "PostgreSQL",
            "Prisma",
            "Drizzle ORM",
            "REST APIs",
            "JWT Auth",
            "Zod",
          ],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
        },
        {
          name: "AI & Automation",
          items: [
            "GPT APIs",
            "n8n",
            "Make",
            "Webhooks",
            "ManyChat",
            "Structured JSON",
            "Realtime API",
            "Agent Workflows",
          ],
        },
        {
          name: "Computer Vision",
          items: ["Python", "OpenCV", "ONNX", "YOLOv8", "RTSP cameras"],
        },
        {
          name: "Infrastructure",
          items: ["Linux", "Docker", "Caddy", "Nginx", "Tailscale", "systemd", "VPS", "SSL/HTTPS"],
        },
        {
          name: "Tools",
          items: ["GitHub", "Postman", "Obsidian", "ClickUp", "Figma", "VS Code", "Supabase", "MapLibre"],
        },
      ],
    },
    about: {
      title: "About",
      description:
        "At 642 Studio, I design and build backend services, automation workflows and digital infrastructure that connect operations, AI, media production and business execution.",
    },
    education: {
      title: "Education",
      description:
        "I am currently studying Software Engineering, focused on backend development, databases, systems architecture, automation and applied artificial intelligence.",
    },
    notes: {
      title: "Technical Notes",
      items: [
        {
          title: "Building VERIDIS",
          description: "Designing an event-driven operating system for internal operations and modular services.",
        },
        {
          title: "Designing Multi-tenant Finance Platforms",
          description: "Practical patterns for tenant isolation, plan limits and secure key management.",
        },
        {
          title: "AI-Powered Media Workflows",
          description: "From long-form content to scored, structured and publish-ready clip systems.",
        },
        {
          title: "Computer Vision for Operations",
          description: "Using OpenCV and YOLO for real-time monitoring and operational decision support.",
        },
      ],
    },
    contact: {
      title: "Let’s build operational systems that scale.",
      description: "Available for collaborations on backend architecture, AI automation and operational platforms.",
    },
  },
  es: {
    hero: {
      name: "Adrián Yépiz",
      role: "Fundador de 642 Studio · Dirección creativa · Software e IA",
      valueProp:
        "Conecto estrategia, creatividad y software para convertir ideas en productos digitales y mejores formas de trabajar.",
      ctas: [
        { label: "Explorar proyectos", href: "#systems", type: "anchor" },
        { label: "Conversemos", href: "#contact", type: "anchor" },

        { label: "Descargar CV ↓", href: "/cv/Adrian-Yepiz-ES.pdf", type: "external" },
      ],
    },
    whatIBuild: {
      title: "Lo que construyo",
      intro: "Conecto dirección creativa, desarrollo de software e IA para construir productos digitales y mejorar cómo trabajan los equipos.",
      capabilities: [
        {
          title: "Sistemas Backend",
          description: "Backends API-first con autenticación, servicios modulares y flujos de datos resilientes.",
          bullets: ["Node.js", "Fastify", "PostgreSQL", "Zod", "JWT Auth"],
        },
        {
          title: "Automatización con IA",
          description: "Pipelines de automatización por eventos con GPT, agentes y capas de decisión estructurada.",
          bullets: ["GPT APIs", "n8n", "Make", "Webhooks", "Realtime API"],
        },
        {
          title: "Plataformas Operativas",
          description: "Plataformas multiusuario para visibilidad, coordinación y control de procesos.",
          bullets: ["Next.js", "React", "TypeScript", "Workflows por roles"],
        },
        {
          title: "Infraestructura",
          description: "Infraestructura Linux para despliegue seguro, observabilidad y continuidad operativa.",
          bullets: ["Docker", "Caddy", "Nginx", "systemd", "Tailscale"],
        },
        {
          title: "Visión Computacional",
          description: "Pipelines de inteligencia con cámaras para detección, monitoreo y alertamiento en tiempo real.",
          bullets: ["Python", "OpenCV", "ONNX", "YOLOv8", "RTSP"],
        },
      ],
    },
    featuredVeridis: {
      title: "Sistema Destacado: VERIDIS",
      subtitle: "Sistema operativo orientado a eventos para 642 Studio",
      description:
        "VERIDIS centraliza automatización con IA, visión computacional, flujos de medios, memoria operativa e infraestructura en una sola capa escalable de ejecución.",
      architectureNodes: [
        "Módulo de Visión / Cámaras",
        "VERIDIS Core",
        "Realtime Event Bus",
        "Dashboard · Console · Alertas · Automatizaciones",
        "PostgreSQL · n8n · GPT · APIs externas",
      ],
      endermites: [
        "Endermite Vision",
        "Endermite News",
        "Endermite Media",
        "Endermite Social",
        "Endermite Meetings",
        "Endermite Tasks",
      ],
      components: [
        {
          name: "VERIDIS Core",
          description: "API núcleo para eventos, estados, alertas, usuarios, roles y comunicación entre servicios.",
        },
        {
          name: "VERIDIS Vision",
          description:
            "Módulo de visión con YOLOv8/OpenCV para movimiento, personas, tamper y detección de cámara offline.",
        },
        {
          name: "Console Bridge",
          description: "Interfaz de voz con wake word, contexto visual y respuesta hablada en tiempo real.",
        },
        {
          name: "VeridisConsole",
          description: "Interfaz terminal en Python con avatar ASCII reactivo, métricas en vivo y bitácora de eventos.",
        },
        {
          name: "Web Dashboard",
          description: "Dashboard operativo en Next.js para monitoreo, AutoClip y control modular.",
        },
        {
          name: "AutoClip",
          description: "Servicio desacoplado para clipeo inteligente, procesamiento de video y trabajos asíncronos.",
        },
      ],
    },
    selectedSystems: {
      title: "Sistemas seleccionados",
      intro:
        "Cuatro sistemas en producción entre govtech, operación cívica, SaaS financiero y workflows de medios con IA.",
    },
    architectureAutomation: {
      title: "Arquitectura y Automatización",
      intro:
        "Además de las plataformas principales, construyo servicios modulares que operan de forma independiente y se integran por eventos.",
      flowTitle: "Flujo de Automatización",
      flow: [
        "Trigger operativo",
        "Ingesta por webhook/API",
        "Validación y orquestación",
        "Scoring con LLM y reglas de decisión",
        "Trabajos asíncronos y notificaciones",
        "Memoria operativa y auditoría",
      ],
      directoryTitle: "Directorio de Sistemas",
      directory: [
        {
          name: "VeridisMI",
          description:
            "Backend de inteligencia de medios que convierte briefs de negocio en planes de producción puntuados y optimizados.",
        },
        {
          name: "EnvautoAPI",
          description:
            "API de orquestación asíncrona para pipelines de generación de assets con IA y trazabilidad de jobs.",
        },
        {
          name: "VeridisConsole",
          description:
            "Interfaz operativa en terminal para métricas del sistema, eventos y retroalimentación de ejecución.",
        },
      ],
    },
    infrastructure: {
      title: "Infraestructura",
      intro:
        "La infraestructura se trata como superficie de producto: segura, observable y lista para operación continua.",
      pillars: [
        "Orquestación de servicios Linux con systemd",
        "Workloads dockerizados",
        "Arquitectura de reverse proxy con Caddy y Nginx",
        "Red privada con Tailscale",
        "Entornos PostgreSQL administrados y self-hosted",
        "Hardening de TLS y HTTPS",
      ],
    },
    technicalStack: {
      title: "Stack Técnico",
      groups: [
        {
          name: "Backend",
          items: [
            "Node.js",
            "Fastify",
            "Express",
            "Java",
            "PostgreSQL",
            "Prisma",
            "Drizzle ORM",
            "REST APIs",
            "JWT Auth",
            "Zod",
          ],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
        },
        {
          name: "IA y Automatización",
          items: [
            "GPT APIs",
            "n8n",
            "Make",
            "Webhooks",
            "ManyChat",
            "JSON estructurado",
            "Realtime API",
            "Agent Workflows",
          ],
        },
        {
          name: "Visión Computacional",
          items: ["Python", "OpenCV", "ONNX", "YOLOv8", "Cámaras RTSP"],
        },
        {
          name: "Infraestructura",
          items: ["Linux", "Docker", "Caddy", "Nginx", "Tailscale", "systemd", "VPS", "SSL/HTTPS"],
        },
        {
          name: "Tools",
          items: ["GitHub", "Postman", "Obsidian", "ClickUp", "Figma", "VS Code", "Supabase", "MapLibre"],
        },
      ],
    },
    about: {
      title: "Sobre Mí",
      description:
        "En 642 Studio diseño y construyo servicios backend, workflows de automatización e infraestructura digital que conectan operación, IA, producción de medios y ejecución de negocio.",
    },
    education: {
      title: "Educación",
      description:
        "Actualmente estudio Ingeniería en Software con enfoque en backend, bases de datos, arquitectura de sistemas, automatización e inteligencia artificial aplicada.",
    },
    notes: {
      title: "Notas Técnicas",
      items: [
        {
          title: "Construyendo VERIDIS",
          description:
            "Diseño de un sistema operativo orientado a eventos para operación interna y servicios modulares.",
        },
        {
          title: "Diseño de plataformas financieras multi-tenant",
          description: "Patrones prácticos para aislamiento por tenant, límites por plan y gestión segura de llaves.",
        },
        {
          title: "Workflows de medios impulsados por IA",
          description: "De contenido largo a sistemas de clips estructurados, puntuados y listos para publicar.",
        },
        {
          title: "Visión computacional para operación",
          description: "Uso de OpenCV y YOLO para monitoreo en tiempo real y soporte a decisiones operativas.",
        },
      ],
    },
    contact: {
      title: "Construyamos sistemas operativos que escalen.",
      description:
        "Disponible para colaboraciones en arquitectura backend, automatización con IA y plataformas operativas.",
    },
  },
};

export const useHomeContent = () => {
  return homeContent[(locale.value ?? "en") as Locale] ?? homeContent.en;
};

export { homeContent };
