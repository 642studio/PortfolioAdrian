<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().infrastructure);
</script>

<template>
  <section class="infrastructure-section">
    <div class="grid">
      <div class="infrastructure-section-heading">
        <h2>{{ content.title }}</h2>
        <p>{{ content.intro }}</p>
      </div>

      <div class="infrastructure-section-list">
        <article v-for="item in content.pillars" :key="item" class="infrastructure-section-item">
          <span></span>
          <p>{{ item }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.infrastructure-section {
  width: 100%;
  padding: 120px var(--space-outer);
  background: var(--color-background-500);
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

    h2 {
      font-size: var(--font-size-title-md);
      color: var(--color-text-100);
      line-height: var(--line-height-title);
    }

    p {
      color: var(--color-text-200);
      line-height: var(--line-height-copy);
    }
  }

  &-list {
    grid-column: 1 / 13;
    margin-top: var(--space-xl);
    display: grid;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-item {
    border: 1px solid var(--color-border-400);
    background: var(--color-panel-500);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-accent-400);
      flex: none;
    }

    p {
      color: var(--color-text-200);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
    }
  }
}
</style>
