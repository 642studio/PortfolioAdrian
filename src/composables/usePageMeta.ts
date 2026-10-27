import { watchEffect } from "vue";
import { locale } from "../i18n/store";
import { projectId } from "./useRouteObserver";
import { projectModules } from "../content/projects";
export const usePageMeta = () => {
  watchEffect(() => {
    const lang = locale.value === "en" ? "en" : "es";
    const project = projectId.value ? projectModules[lang][projectId.value]?.default : null;
    const title = project
      ? `${project.title} · Adrián Yépiz`
      : lang === "es"
        ? "Adrián Yépiz · Creatividad, software e IA"
        : "Adrián Yépiz · Creativity, Software & AI";
    const description =
      project?.description ??
      (lang === "es"
        ? "Fundador de 642 Studio. Desarrollo de software, integración de IA y dirección creativa para productos digitales y negocios."
        : "Founder at 642 Studio. Software development, AI integration and creative direction for digital products and businesses.");
    const url = "https://adrian.642studio.com" + (projectId.value ? "/project/" + projectId.value : "/");
    document.title = title;
    document.documentElement.lang = lang;
    for (const [selector, value] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ])
      document.querySelector(selector!)?.setAttribute("content", value!);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  });
};
