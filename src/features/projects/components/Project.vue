<script setup lang="ts">
import { computed } from "vue";
import { recentProjectId } from "../../../composables/useRouteObserver";
import { projectModules } from "../../../content/projects";
import { locale } from "../../../i18n/store";
import { portfolio, productImages } from "../../../content/portfolio";
import type { ProjectContent } from "../../../content/types";
import Footer from "../../../components/Footer.vue";
import Tag from "../../../components/Tag.vue";
import Link from "../../../components/Link.vue";
const es = computed(() => locale.value === "es");
const lang = computed(() => (es.value ? "es" : "en"));
const content = computed<ProjectContent | null>(
  () => projectModules[lang.value][recentProjectId.value ?? ""]?.default ?? null,
);
const image = computed(() => productImages[recentProjectId.value as keyof typeof productImages]);
const otherProjects = computed(() => portfolio[lang.value].projects.filter((p) => p.slug !== recentProjectId.value));
</script>
<template>
  <main id="project-main" class="case-page">
    <div v-if="content" class="case-inner">
      <a href="/#systems" class="back-link">← {{ es ? "Todos los proyectos" : "All projects" }}</a>
      <div class="case-heading">
        <p class="case-eyebrow">{{ es ? "PROYECTO / ADRIÁN YÉPIZ" : "PROJECT / ADRIÁN YÉPIZ" }}</p>
        <h1>{{ content.title }}</h1>
        <p class="case-description">{{ content.description }}</p>
        <div class="case-tags"><Tag v-for="tag in content.tags" :key="tag" :variant="tag" /></div>
      </div>
      <img v-if="image" class="case-image" :src="image" :alt="content.title" width="1200" height="700" />
      <div v-else class="case-title-art" :class="'art-' + recentProjectId" aria-hidden="true">
        <span>{{ content.title }}</span
        ><span>642 / {{ es ? "CREATIVIDAD + TECNOLOGÍA" : "CREATIVITY + TECHNOLOGY" }}</span>
      </div>
      <div class="case-sections">
        <section v-for="(component, index) in content.components" :key="index">
          <template v-if="component.type === 'text'"
            ><h2>{{ component.props.title }}</h2>
            <p>{{ component.props.text }}</p></template
          ><template v-else-if="component.type === 'list'"
            ><h2>{{ component.props.title }}</h2>
            <ul>
              <li v-for="item in component.props.items" :key="item">{{ item }}</li>
            </ul></template
          >
        </section>
      </div>
      <aside class="case-contact">
        <h2>{{ es ? "¿Un reto parecido?" : "Working on a similar challenge?" }}</h2>
        <p>{{ es ? "Hablemos de lo que necesitas construir." : "Let’s talk about what you need to build." }}</p>
        <a href="mailto:adrian@642studio.com">{{ es ? "Conversemos" : "Let’s talk" }} ↗</a>
      </aside>
      <div class="related">
        <h2>{{ es ? "Más proyectos" : "More projects" }}</h2>
        <div>
          <Link v-for="p in otherProjects" :key="p.slug" :to="'/project/' + p.slug"
            ><span>{{ p.name }}</span> ↗</Link
          >
        </div>
      </div>
    </div>
    <div v-else class="case-inner missing">
      <h1>{{ es ? "Proyecto no encontrado" : "Project not found" }}</h1>
      <a href="/">{{ es ? "Volver al inicio" : "Back to home" }} →</a>
    </div>
  </main>
  <Footer :withSocial="false" />
</template>
<style scoped>
.case-page {
  min-height: 100svh;
  background: #121314;
  color: #eee9e2;
  padding: 130px 24px 72px;
}
.case-inner {
  max-width: 1060px;
  margin: auto;
}
a {
  color: inherit;
  text-decoration: none;
}
.back-link {
  font-size: 13px;
  color: #c9c1b8;
}
.case-heading {
  padding: 56px 0 40px;
}
.case-eyebrow {
  font: 11px var(--font-mono);
  letter-spacing: 0.1em;
  color: #ff8888;
}
.case-heading h1 {
  font-size: clamp(42px, 7vw, 88px);
  line-height: 1.08;
  letter-spacing: -0.06em;
  margin: 20px 0 24px;
  overflow-wrap: anywhere;
}
.case-description {
  font-size: clamp(17px, 2vw, 23px);
  line-height: 1.7;
  max-width: 65ch;
  color: #c8c3bc;
}
.case-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
}
.case-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  border: 1px solid #ffffff20;
}
.case-title-art {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 16px;
  border: 1px solid #fff2;
  background: radial-gradient(ellipse at 50% 20%, #463032, #1c1d20);
  padding: 28px;
  text-align: center;
}
.case-title-art > span:first-child {
  font-size: clamp(32px, 6vw, 80px);
  letter-spacing: -0.055em;
  font-weight: 600;
}
.case-title-art > span:last-child {
  font: 10px var(--font-mono);
  letter-spacing: 0.1em;
  color: #d2b7b7;
}
.art-642-core {
  background: radial-gradient(ellipse at 50% 20%, #34483d, #19251f);
}
.art-paskolas {
  background: radial-gradient(ellipse at 50% 20%, #66472f, #261d17);
}
.case-sections {
  max-width: 760px;
  margin: 56px auto;
}
.case-sections section {
  border-top: 1px solid #fff2;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 36px;
}
.case-sections h2 {
  font-size: 21px;
  line-height: 1.3;
  letter-spacing: -0.025em;
}
.case-sections p,
.case-sections ul {
  color: #bbb7b1;
  line-height: 1.8;
  font-size: 16px;
}
.case-sections li {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 12px;
}
.case-contact {
  padding: 40px;
  border: 1px solid #fff2;
  border-radius: 16px;
  background: #201c1c;
}
.case-contact h2,
.related h2 {
  font-size: 28px;
  letter-spacing: -0.04em;
}
.case-contact p {
  margin-top: 12px;
  color: #bbb7b1;
}
.case-contact a {
  display: inline-block;
  margin-top: 24px;
  padding: 14px 22px;
  background: #ff5050;
  border-radius: 8px;
}
.related {
  margin-top: 56px;
}
.related > div {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}
.related a {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 20px;
  border: 1px solid #fff2;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
}
.related a:hover {
  border-color: #ff7777;
}
.missing {
  min-height: 60vh;
}
.missing h1 {
  font-size: 36px;
  margin-bottom: 30px;
}
@media (max-width: 699px) {
  .case-page {
    padding-top: 100px;
  }
  .case-heading {
    padding-top: 36px;
  }
  .case-sections section {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .case-title-art {
    min-height: 240px;
  }
  .case-contact {
    padding: 24px;
  }
  .case-description {
    font-size: 17px;
  }
}
</style>
