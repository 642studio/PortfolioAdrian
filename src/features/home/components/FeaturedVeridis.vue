<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";
import Link from "../../../components/Link.vue";
import Button from "../../../components/Button.vue";
import { locale } from "../../../i18n/store";

const content = computed(() => useHomeContent().featuredVeridis);
const labels = computed(() =>
  locale.value === "es"
    ? {
        kicker: "Sistema destacado",
        architecture: "Arquitectura",
        endermites: "Endermites",
        cta: "Abrir caso VERIDIS",
      }
    : {
        kicker: "Featured system",
        architecture: "Architecture",
        endermites: "Endermites",
        cta: "Open VERIDIS case study",
      },
);
</script>

<template>
  <section id="veridis" class="featured-veridis">
    <div class="grid">
      <div class="featured-veridis-heading">
        <p class="featured-veridis-kicker">{{ labels.kicker }}</p>
        <h2 class="featured-veridis-title">{{ content.title }}</h2>
        <p class="featured-veridis-subtitle">{{ content.subtitle }}</p>
        <p class="featured-veridis-description">{{ content.description }}</p>
        <Link to="/project/veridis" class="children-unclickable" data-cursor="arrow" data-sound="click" data-hoversound="hover">
          <Button renderAs="div" variant="accent">{{ labels.cta }}</Button>
        </Link>
      </div>

      <div class="featured-veridis-architecture">
        <h3>{{ labels.architecture }}</h3>
        <ol>
          <li v-for="node in content.architectureNodes" :key="node">{{ node }}</li>
        </ol>
      </div>

      <div class="featured-veridis-components">
        <article v-for="item in content.components" :key="item.name" class="featured-veridis-component">
          <h4>{{ item.name }}</h4>
          <p>{{ item.description }}</p>
        </article>
      </div>

      <div class="featured-veridis-endermites">
        <h3>{{ labels.endermites }}</h3>
        <div class="featured-veridis-endermites-grid">
          <span v-for="item in content.endermites" :key="item" class="featured-veridis-endermite">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.featured-veridis {
  width: 100%;
  background: radial-gradient(circle at top right, rgba(255, 52, 52, 0.1), transparent 30%), var(--color-background-500);
  padding: 120px var(--space-outer);
  border-top: 1px solid var(--color-border-400);
  border-bottom: 1px solid var(--color-border-400);

  &-heading {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }
  }

  &-kicker {
    color: var(--color-text-300);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: var(--font-size-sm);
  }

  &-title {
    font-size: var(--font-size-title-md);
    line-height: var(--line-height-title);
    color: var(--color-text-100);
  }

  &-subtitle {
    font-size: var(--font-size-xl);
    color: var(--color-accent-400);
    font-weight: 700;
  }

  &-description {
    color: var(--color-text-200);
    line-height: var(--line-height-copy);
    max-width: 65ch;
  }

  &-architecture,
  &-endermites {
    grid-column: 1 / 13;
    margin-top: var(--space-xl);
    background: var(--color-panel-500);
    border: 1px solid var(--color-border-400);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);

    @include mixins.mq("lg") {
      grid-column: 8 / 12;
      margin-top: 0;
    }

    h3 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-xs);
      margin-bottom: var(--space-md);
    }

    ol,
    ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      color: var(--color-text-200);
      padding-left: 1.2rem;
    }
  }

  &-architecture {
    ol li {
      position: relative;

      &:not(:last-child)::after {
        content: "↓";
        color: var(--color-accent-400);
        font-weight: 700;
        margin-left: 8px;
      }
    }
  }

  &-components {
    grid-column: 1 / 13;
    display: grid;
    margin-top: var(--space-xl);
    gap: var(--space-md);
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-component {
    border: 1px solid var(--color-border-400);
    border-radius: var(--radius-md);
    background: var(--color-panel-500);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    h4 {
      color: var(--color-text-100);
      font-size: var(--font-size-lg);
      line-height: 1.2;
    }

    p {
      color: var(--color-text-200);
      line-height: var(--line-height-copy);
      font-size: var(--font-size-sm);
    }
  }

  &-endermites {
    @include mixins.mq("lg") {
      grid-column: 8 / 12;
      margin-top: var(--space-lg);
    }

    &-grid {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }
  }

  &-endermite {
    border: 1px solid var(--color-border-400);
    background: var(--color-background-600);
    border-radius: 999px;
    color: var(--color-text-200);
    padding: 6px 12px;
    font-size: var(--font-size-xs);
    white-space: nowrap;
  }
}
</style>
