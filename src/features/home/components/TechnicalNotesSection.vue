<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().notes);
</script>

<template>
  <section class="technical-notes-section">
    <div class="grid">
      <div class="technical-notes-section-heading">
        <h2>{{ content.title }}</h2>
      </div>

      <div class="technical-notes-section-list">
        <article v-for="item in content.items" :key="item.title" class="technical-notes-section-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technical-notes-section {
  width: 100%;
  padding: 120px var(--space-outer);
  background: var(--color-background-500);
  border-top: 1px solid var(--color-border-400);

  &-heading {
    grid-column: 1 / 13;
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }

    h2 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-md);
      line-height: var(--line-height-title);
    }
  }

  &-list {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-md);
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-item {
    border: 1px solid var(--color-border-400);
    border-radius: var(--radius-md);
    background: var(--color-panel-500);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    h3 {
      color: var(--color-text-100);
      font-size: var(--font-size-lg);
      line-height: 1.25;
    }

    p {
      color: var(--color-text-200);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
    }
  }
}
</style>
