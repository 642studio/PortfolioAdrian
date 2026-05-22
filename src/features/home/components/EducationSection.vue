<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().education);
</script>

<template>
  <section class="education-section">
    <div class="grid">
      <article class="education-section-content">
        <h2>{{ content.title }}</h2>
        <p>{{ content.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.education-section {
  width: 100%;
  padding: 100px var(--space-outer);
  background: var(--color-background-400);

  &-content {
    grid-column: 1 / 13;
    border-left: 3px solid var(--color-accent-400);
    padding: var(--space-lg);
    background: var(--color-panel-500);
    border-radius: var(--radius-md);

    @include mixins.mq("lg") {
      grid-column: 2 / 10;
    }

    h2 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-sm);
      margin-bottom: var(--space-sm);
    }

    p {
      color: var(--color-text-200);
      line-height: var(--line-height-copy);
      max-width: 70ch;
    }
  }
}
</style>
