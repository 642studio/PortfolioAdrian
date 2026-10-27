<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { locale } from "../i18n/store";
import { projectId } from "../composables/useRouteObserver";
import { lenis } from "../composables/useScroll";
const open = ref(false);
const es = computed(() => locale.value === "es");
const links = computed(() => [
  { id: "systems", label: es.value ? "Proyectos" : "Work" },
  { id: "build", label: es.value ? "Enfoque" : "Approach" },
  { id: "about", label: es.value ? "Sobre mí" : "About" },
  { id: "contact", label: es.value ? "Contacto" : "Contact" },
]);
function navigate(event: MouseEvent, id: string) {
  open.value = false;
  if (projectId.value) return;
  event.preventDefault();
  if (lenis.value) {
    lenis.value.start();
    lenis.value.scrollTo("#" + id, { offset: -90 });
  } else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
watch(open, (value) => {
  if (value) lenis.value?.stop();
  else lenis.value?.start();
});
watch(projectId, () => (open.value = false));
</script>
<template>
  <a class="skip-link" :href="projectId ? '#project-main' : '#main-content'">{{
    es ? "Saltar al contenido" : "Skip to content"
  }}</a>
  <header class="site-header">
    <a class="personal-mark" href="/" aria-label="642 Studio · Inicio"><img src="/brand/642-logo-white.png" alt="642 Studio" width="126" height="126" /></a>
    <nav class="desktop-nav" :aria-label="es ? 'Navegación principal' : 'Main navigation'">
      <a v-for="link in links" :key="link.id" :href="'/#' + link.id" @click="navigate($event, link.id)">{{
        link.label
      }}</a>
    </nav>
    <div class="header-actions">
      <button
        class="language"
        @click="locale = es ? 'en' : 'es'"
        :aria-label="es ? 'Switch to English' : 'Cambiar a español'"
      >
        {{ es ? "EN" : "ES" }} <span aria-hidden="true">↗</span>
      </button>
      <a class="header-mail" href="mailto:adrian@642studio.com"
        >{{ es ? "Conversemos" : "Let’s talk" }} <span aria-hidden="true">↗</span></a
      >
      <button
        class="menu-toggle"
        :aria-expanded="open"
        aria-controls="mobile-navigation"
        @click="open = !open"
        :aria-label="es ? 'Menú de navegación' : 'Navigation menu'"
      >
        {{ open ? "×" : "☰" }}
      </button>
    </div>
    <nav
      v-if="open"
      id="mobile-navigation"
      class="mobile-nav"
      :aria-label="es ? 'Navegación móvil' : 'Mobile navigation'"
      @keydown.esc="open = false"
    >
      <a v-for="link in links" :key="link.id" :href="'/#' + link.id" @click="navigate($event, link.id)"
        >{{ link.label }} <span aria-hidden="true">↗</span></a
      >
      <a :href="es ? '/cv/Adrian-Yepiz-ES.pdf' : '/cv/Adrian-Yepiz-EN.pdf'" target="_blank" rel="noopener"
        >{{ es ? "Descargar CV" : "Download CV" }} ↓</a
      >
    </nav>
  </header>
</template>
<style scoped>
.site-header {
  position: fixed;
  z-index: 95;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 16px 12px 24px;
  border: 1px solid #ffffff24;
  background: #171819ed;
  backdrop-filter: blur(18px);
  border-radius: 16px;
  color: #f6f0e8;
  box-shadow: 0 8px 32px #0002;
}
.personal-mark {
  position: relative;
  display: block;
  width: 88px;
  height: 44px;
  flex-shrink: 0;
  overflow: hidden;
}
.personal-mark img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 126px;
  height: 126px;
  max-width: none;
  transform: translate(-50%, -50%);
}
.desktop-nav {
  display: flex;
  gap: 30px;
}
.desktop-nav a {
  font-size: 13px;
  color: #e1ddd7;
  text-decoration: none;
}
.desktop-nav a:hover {
  color: #ff7777;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}
.language {
  border: 0;
  background: none;
  color: #f6f0e8;
  font: 12px var(--font-mono);
  cursor: pointer;
  min-height: 40px;
  padding: 8px;
}
.language span {
  color: #999;
}
.header-mail {
  padding: 12px 18px;
  border-radius: 9px;
  background: #ff4b4b;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
.header-mail span {
  margin-left: 16px;
}
.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 23px;
  width: 44px;
  height: 44px;
  cursor: pointer;
}
.mobile-nav {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 12px 24px;
  background: #171819;
  border: 1px solid #ffffff24;
  border-radius: 16px;
}
.mobile-nav a {
  padding: 18px 0;
  color: #f5efe7;
  border-bottom: 1px solid #fff2;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.mobile-nav a:last-child {
  border: 0;
  font-size: 14px;
  color: #ff8c8c;
}
@media (max-width: 839px) {
  .site-header {
    top: 10px;
    width: calc(100% - 24px);
    padding: 6px 10px 6px 18px;
    gap: 12px;
    border-radius: 12px;
  }
  .desktop-nav,
  .header-mail {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
  .header-actions {
    gap: 6px;
  }
}
</style>
