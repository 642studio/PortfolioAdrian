<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";
import { lenis } from "../../../composables/useScroll";
import Button from "../../../components/Button.vue";
import Link from "../../../components/Link.vue";

const content = computed(() => useHomeContent().hero);

const handleAnchorClick = (href: string) => {
  if (!lenis.value) return;
  lenis.value.scrollTo(href);
};
</script>

<template>
  <section class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-panel">
          <img src="/brand/642-logo-white.png" alt="642 Studio" class="hero-logo" />

          <div class="hero-copy">
            <h1 class="hero-title">{{ content.name }}</h1>
            <p class="hero-role">{{ content.role }}</p>
            <p class="hero-value">{{ content.valueProp }}</p>
          </div>

          <div class="hero-ctas">
            <template v-for="cta in content.ctas" :key="cta.label">
              <button
                v-if="cta.type === 'anchor'"
                type="button"
                class="hero-cta-btn"
                @click="handleAnchorClick(cta.href)"
                data-cursor="circle-white"
                data-sound="click"
                data-hoversound="hover"
              >
                <Button renderAs="div" variant="accent" size="sm" class="children-unclickable">{{ cta.label }}</Button>
              </button>

              <Link
                v-else-if="cta.type === 'external'"
                :href="cta.href"
                external
                class="hero-cta-link children-unclickable"
                data-cursor="arrow-external"
                data-sound="click"
                data-hoversound="hover"
              >
                <Button renderAs="div" variant="border" size="sm">{{ cta.label }}</Button>
              </Link>

              <div v-else class="hero-cta-disabled" aria-disabled="true">
                <Button renderAs="div" variant="theme" size="sm">{{ cta.label }}</Button>
                <span>{{ cta.note }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--dvh) * 100);
  min-height: calc(var(--dvh) * 100);
  height: calc(var(--dvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  pointer-events: none;

  &-content {
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    align-content: flex-start;

    @include mixins.mq("md") {
      align-items: center;
      justify-content: center;
      align-content: center;
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: var(--space-sm);
      position: absolute;
      top: calc(env(safe-area-inset-top) + 12px);
      left: clamp(10px, 3vw, 16px);
      right: clamp(10px, 3vw, 16px);
      width: auto;
      max-width: none;
      min-width: 0;
      box-sizing: border-box;
      padding-top: 0;
      padding-bottom: calc(env(safe-area-inset-bottom) + 12px);
      pointer-events: none;

      @include mixins.mq("md") {
        position: relative;
        top: auto;
        left: auto;
        right: auto;
        width: auto;
        max-width: none;
        grid-column: 2 / 10;
        align-items: flex-start;
        justify-content: center;
        gap: var(--space-md);
        padding-top: clamp(56px, 8vh, 96px);
        padding-bottom: 0;
      }

      @include mixins.mq("xl") {
        grid-column: 2 / 9;
      }
    }
  }

  &-panel {
    pointer-events: auto;
    width: 100%;
    max-width: min(640px, 100%);
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    background: linear-gradient(145deg, rgba(8, 10, 13, 0.86), rgba(8, 10, 13, 0.62));
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 18px;
    backdrop-filter: blur(8px);
    box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    padding: clamp(12px, 2vw, 20px);
    overflow: hidden;
  }

  &-logo {
    width: clamp(104px, 8vw, 148px);
    height: auto;
    object-fit: contain;
    align-self: center;
    margin-bottom: 0;
    filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));
  }

  &-copy {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    max-width: 100%;
  }

  &-title {
    color: var(--color-text-100);
    font-weight: 900;
    letter-spacing: 0.02em;
    line-height: 1.02;
    font-size: clamp(32px, 4.8vw, 64px);
    text-wrap: balance;
  }

  &-role {
    color: var(--color-accent-300);
    font-size: clamp(13px, 1.5vw, 15px);
    letter-spacing: 0.02em;
    max-width: 100%;
    font-weight: 700;
    line-height: 1.25;
    text-wrap: pretty;
    overflow-wrap: anywhere;
  }

  &-value {
    color: var(--color-text-200);
    line-height: var(--line-height-copy);
    max-width: 100%;
    text-wrap: pretty;
    overflow-wrap: anywhere;
  }

  &-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-top: 4px;
    pointer-events: auto;
    min-width: 0;

    @include mixins.mq("md") {
      gap: var(--space-sm);
    }
  }

  &-cta-btn,
  &-cta-link {
    border: 0;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  &-cta-disabled {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.7;
    cursor: not-allowed;
    min-width: 0;

    span {
      font-size: var(--font-size-xs);
      color: var(--color-text-300);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      white-space: normal;
      line-height: 1.1;
    }
  }
}
</style>
