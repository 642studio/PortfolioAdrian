<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { previews } from "../../../content/projects/previews";
import { locale } from "../../../i18n/store";
import PreviewCard from "../../projects/components/PreviewCard.vue";
import { useHomeContent } from "../../../content/home";

import type { ProjectPreview } from "../../../content/types";

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const emit = defineEmits<{
  (e: "loaded", previews: ProjectPreview[]): void;
}>();

const content = computed(() => useHomeContent().selectedSystems);
const systemsCount = computed(() => loadedPreviews.value?.length ?? 0);
const labels = computed(() =>
  locale.value === "es"
    ? {
        kicker: "Sistemas seleccionados",
        systems: "sistemas curados",
        catalog: "Backend · IA · Operación",
      }
    : {
        kicker: "Selected systems",
        systems: "curated systems",
        catalog: "Backend · AI · Operations",
      },
);

const loadPreviews = async () => {
  if (!locale.value) return;
  const func = previews[locale.value as keyof typeof previews];
  if (!func) return;
  const module = await func();
  loadedPreviews.value = module.default;
  emit("loaded", module.default);
};

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <section class="selected-systems">
    <div class="grid">
      <div class="selected-systems-heading">
        <p class="selected-systems-kicker">{{ labels.kicker }}</p>
        <div class="selected-systems-meta">
          <span>{{ `${String(systemsCount).padStart(2, "0")} ${labels.systems}` }}</span>
          <span>{{ labels.catalog }}</span>
        </div>
        <h2>{{ content.title }}</h2>
        <p>{{ content.intro }}</p>
      </div>
    </div>
    <div class="grid">
      <div class="selected-systems-cards">
        <PreviewCard v-for="preview in loadedPreviews" :key="preview.title" :preview="preview" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.selected-systems {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  padding: 120px var(--space-outer);
  background: var(--color-background-500);
  border-top: 1px solid var(--color-border-400);
  border-bottom: 1px solid var(--color-border-400);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 10%, rgba(255, 48, 56, 0.12), transparent 40%),
      radial-gradient(circle at 84% 92%, rgba(255, 255, 255, 0.05), transparent 44%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 56px 56px;
    opacity: 0.18;
    pointer-events: none;
  }

  @include mixins.mq("md") {
    gap: var(--space-xxl);
  }

  &-heading {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    position: relative;
    z-index: 1;

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }

    h2 {
      color: var(--color-text-100);
      font-size: var(--font-size-title-md);
      line-height: var(--line-height-title);
    }

    p {
      color: var(--color-text-200);
      line-height: var(--line-height-copy);
    }
  }

  &-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    color: var(--color-text-300);
    font-size: var(--font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;

    span {
      border: 1px solid var(--color-border-400);
      border-radius: 999px;
      background: rgba(10, 10, 10, 0.55);
      padding: 8px 12px;
    }
  }

  &-kicker {
    color: var(--color-text-300);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: var(--font-size-sm);
  }

  &-cards {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(1, minmax(0, 1fr));
    position: relative;
    z-index: 1;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }
}
</style>
