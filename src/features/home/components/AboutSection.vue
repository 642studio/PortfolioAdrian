<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().about);
</script>

<template>
  <section class="about-section">
    <div class="grid">
      <article class="about-section-content">
        <h2>{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  width: 100%;
  padding: 120px var(--space-outer);
  background: var(--color-background-500);
  border-top: 1px solid var(--color-border-400);

  &-content {
    grid-column: 1 / 13;
    border: 1px solid var(--color-border-400);
    border-radius: var(--radius-lg);
    background: var(--color-panel-500);
    padding: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("lg") {
      grid-column: 2 / 10;
    }

    h2 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-sm);
      line-height: var(--line-height-title);
    }

    p {
      color: var(--color-text-200);
      line-height: var(--line-height-copy);
      max-width: 70ch;
    }
  }
}
</style>
