<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().technicalStack);
</script>

<template>
  <section id="stack" class="technical-stack-section">
    <div class="grid">
      <div class="technical-stack-section-heading">
        <h2>{{ content.title }}</h2>
      </div>

      <div class="technical-stack-section-groups">
        <article v-for="group in content.groups" :key="group.name" class="technical-stack-section-group">
          <h3>{{ group.name }}</h3>
          <div class="technical-stack-section-tags">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technical-stack-section {
  width: 100%;
  padding: 120px var(--space-outer);
  background: var(--color-background-400);

  &-heading {
    grid-column: 1 / 13;
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }

    h2 {
      font-size: var(--font-size-title-md);
      color: var(--color-text-100);
      line-height: var(--line-height-title);
    }
  }

  &-groups {
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

  &-group {
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
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
      border: 1px solid var(--color-border-400);
      background: var(--color-background-600);
      color: var(--color-text-200);
      border-radius: 999px;
      font-size: var(--font-size-xs);
      padding: 4px 10px;
      white-space: nowrap;
    }
  }
}
</style>
