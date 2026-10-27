<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero.vue";
import About from "./About.vue";
import PortfolioSections from "./PortfolioSections.vue";
import Footer from "../../../components/Footer.vue";
import { three } from "../../../three";
import { animations } from "../../../animations";
import { renderer } from "../../../three/core/renderer";
import { preloaderVisible } from "../../../composables/usePreloader";
import { projectVisible } from "../../../composables/useRouteObserver";
import { lenis } from "../../../composables/useScroll";
const canvas = ref<HTMLCanvasElement | null>(null);
const intro = ref<HTMLElement | null>(null);
const scanSpacer = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
let inView = true;
watch([projectVisible, preloaderVisible], async () => {
  renderer.setIsActive(inView && !projectVisible.value);
  await nextTick();
  ScrollTrigger.refresh();
});
const exploreScan = () => {
  const target = window.innerHeight * 0.8;
  if (lenis.value) lenis.value.scrollTo(target);
  else window.scrollTo({top: target, behavior: "smooth"});
};
onMounted(async () => {
  animations.init();
  if (canvas.value) three.init(canvas.value);
  observer = new IntersectionObserver(([entry]) => {
    inView = entry?.isIntersecting ?? false;
    renderer.setIsActive(inView && !projectVisible.value);
  });
  if (intro.value) observer.observe(intro.value);
  await nextTick();
  ScrollTrigger.refresh();
});
onUnmounted(() => {
  observer?.disconnect();
  animations.destroy();
  three.destroy();
});
</script>
<template>
  <main id="main-content" class="portfolio-home">
    <div class="portfolio-intro" id="hero" ref="intro">
      <div class="intro-sticky">
        <canvas ref="canvas" class="portfolio-scene" aria-hidden="true"></canvas>
        <About :spacer-ref="scanSpacer" />
      </div>
      <div class="hero-stage">
        <Hero />
        <button class="discover" @click="exploreScan" aria-label="Explorar escaneo / Explore scan"><span aria-hidden="true">↓</span></button>
      </div>
      <div class="intro-spacer"></div>
      <div class="scan-spacer" ref="scanSpacer" id="scan"></div>
    </div>
    <PortfolioSections />
  </main>
  <Footer :withSocial="false" />
</template>
<style scoped>
.portfolio-intro {position:relative;width:100%;--intro-height:100lvh;background:#101010}
.intro-sticky {position:sticky;top:0;height:var(--intro-height);z-index:5}
.portfolio-scene {width:100%;height:var(--intro-height);display:block}
.hero-stage {position:absolute;top:0;left:0;width:100%;height:var(--intro-height);z-index:6;overflow:hidden;pointer-events:none}
.hero-stage :deep(.hero){height:var(--intro-height);min-height:var(--intro-height);max-height:none}
.intro-spacer {height:200px}
.scan-spacer {height:250lvh}
.discover {position:absolute;bottom:22px;left:50%;transform:translateX(-50%);display:grid;place-items:center;width:40px;height:40px;border:1px solid #3336;border-radius:50%;color:#171717;font-size:24px;background:#fff9;cursor:pointer;pointer-events:auto}
@media(max-width:839px){.portfolio-intro{--intro-height:max(840px,100lvh)}.intro-spacer{height:0}}
@media(min-width:840px) and (max-height:700px){.portfolio-intro{--intro-height:700px}}
</style>
