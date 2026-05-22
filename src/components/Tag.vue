<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-backend,
    &-event-driven,
    &-nextjs,
    &-typescript,
    &-geospatial,
    &-govtech,
    &-supabase,
    &-civic-tech,
    &-security,
    &-fastify,
    &-multi-tenant,
    &-saas,
    &-media-intelligence,
    &-async-api {
      color: var(--color-text-100);
      border-color: var(--color-border-400);
      background-color: rgba(255, 255, 255, 0.04);
    }

    &-ai-automation {
      background-color: rgba(255, 52, 52, 0.2);
      border-color: rgba(255, 82, 82, 0.35);
      color: #ffd8d8;
    }

    &-infrastructure {
      background-color: rgba(95, 154, 255, 0.16);
      border-color: rgba(95, 154, 255, 0.35);
      color: #d9e7ff;
    }

    &-computer-vision {
      background-color: rgba(136, 110, 255, 0.16);
      border-color: rgba(136, 110, 255, 0.35);
      color: #e6dcff;
    }
  }
}
</style>
