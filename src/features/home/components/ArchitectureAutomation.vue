<script setup lang="ts">
import { computed } from "vue";
import { useHomeContent } from "../../../content/home";

const content = computed(() => useHomeContent().architectureAutomation);
</script>

<template>
  <section class="architecture-automation">
    <div class="grid">
      <div class="architecture-automation-heading">
        <h2>{{ content.title }}</h2>
        <p>{{ content.intro }}</p>
      </div>

      <article class="architecture-automation-flow">
        <h3>{{ content.flowTitle }}</h3>
        <ul>
          <li v-for="item in content.flow" :key="item">{{ item }}</li>
        </ul>
      </article>

      <article class="architecture-automation-directory">
        <h3>{{ content.directoryTitle }}</h3>
        <div class="architecture-automation-directory-grid">
          <div v-for="item in content.directory" :key="item.name" class="architecture-automation-card">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.architecture-automation {
  width: 100%;
  padding: 120px var(--space-outer);
  background: var(--color-background-400);

  &-heading {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);

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
      max-width: 70ch;
    }
  }

  &-flow,
  &-directory {
    grid-column: 1 / 13;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border-400);
    background: var(--color-panel-500);
    padding: var(--space-lg);

    h3 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-xs);
      margin-bottom: var(--space-md);
    }
  }

  &-flow {
    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      color: var(--color-text-200);
      padding-left: 1.2rem;

      li {
        list-style: decimal;
      }
    }
  }

  &-directory {
    margin-top: var(--space-lg);

    @include mixins.mq("lg") {
      margin-top: 0;
      grid-column: 6 / 12;
    }

    &-grid {
      display: grid;
      gap: var(--space-md);
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @include mixins.mq("md") {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }

  &-card {
    border: 1px solid var(--color-border-400);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    background: var(--color-background-600);

    h4 {
      color: var(--color-text-100);
      font-size: var(--font-size-lg);
      margin-bottom: var(--space-xs);
    }

    p {
      color: var(--color-text-200);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
    }
  }
}
</style>
