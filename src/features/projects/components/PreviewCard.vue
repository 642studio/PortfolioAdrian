<script setup lang="ts">
import Link from "../../../components/Link.vue";
import Notch from "../../../components/Notch.vue";
import ArrowRightLong from "../../../components/icons/ArrowRightLong.vue";
import gsap from "gsap";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonRound from "../../../components/ButtonRound.vue";
import { t } from "../../../i18n/utils/translate";
import { social } from "../../../content/social";
import Plus from "../../../components/icons/Plus.vue";
import { locale } from "../../../i18n/store";

import type { ProjectPreview } from "../../../content/types";

const tlRef = ref<gsap.core.Timeline | null>(null);
const wrapperRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);

const props = defineProps<{
  preview?: ProjectPreview;
}>();

const systemCodes: Record<string, string> = {
  cardonsense: "SYS-01",
  bachejoa: "SYS-02",
  veridisfinance: "SYS-03",
  veridisclip: "SYS-04",
};

const systemCode = computed(() => {
  if (!props.preview) return "SYS";
  return systemCodes[props.preview.slug] ?? "SYS";
});

const openCaseLabel = computed(() => (locale.value === "es" ? "Ver sistema" : "View system"));

onMounted(async () => {
  if (!wrapperRef.value || ScrollTrigger.isInViewport(wrapperRef.value)) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
    },
  });
  tl.fromTo(wrapperRef.value, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  tl.fromTo(imageRef.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);

  tlRef.value = tl;
});

onUnmounted(() => {
  if (tlRef.value) {
    tlRef.value.kill();
    tlRef.value = null;
  }
});
</script>

<template>
  <Link
    class="preview-card children-unclickable"
    :to="`/project/${props.preview.slug}`"
    :aria-label="t('switch-to-project', { project: props.preview.title })"
    data-cursor="arrow"
    data-sound="click"
    data-hoversound="hover"
    v-if="props.preview"
  >
    <div class="preview-card-top" ref="wrapperRef">
      <div class="preview-card-image-wrapper">
        <div class="preview-card-image-container">
          <img :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-image" ref="imageRef" />
        </div>
      </div>
      <div class="preview-card-overlay">
        <div class="preview-card-edge">
          <ButtonRound class="preview-card-button" variant="accent" renderAs="div">
            <ArrowRightLong class="preview-card-button-arrow" />
          </ButtonRound>
        </div>
        <Notch class="preview-card-notch preview-card-notch-left" />
        <Notch class="preview-card-notch preview-card-notch-right" />
      </div>
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <div class="preview-card-title-row">
          <h3 class="preview-card-title">{{ props.preview.title }}</h3>
          <span class="preview-card-code">{{ systemCode }}</span>
        </div>
        <p class="preview-card-description">{{ props.preview.description }}</p>
      </div>
      <div class="preview-card-footer">
        <span class="preview-card-footer-label">{{ openCaseLabel }}</span>
        <ArrowRightLong class="preview-card-footer-icon" />
      </div>
    </div>
  </Link>

  <Link
    v-else
    class="preview-card children-unclickable"
    data-cursor="arrow-external"
    data-hoversound="hover"
    external
    :href="social[0].url"
  >
    <div class="preview-card-top preview-card-top-empty">
      <Plus class="preview-card-top-empty-icon" />
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ t("start-a-new-project") }}</h3>
      </div>
    </div>
  </Link>
</template>

<style scoped lang="scss">
.preview-card {
  --hover: 0;
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);
  border: 1px solid var(--color-border-400);
  background: linear-gradient(160deg, rgba(16, 16, 16, 0.94), rgba(10, 10, 10, 0.92));
  padding: clamp(10px, 1.8vw, 14px);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(120deg, rgba(255, 255, 255, 0.08), transparent 40%),
      radial-gradient(circle at 0% 0%, rgba(255, 48, 56, 0.2), transparent 45%);
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.18s ease-in-out;
  }

  @include mixins.hover {
    &:hover {
      --hover: 1;
      transform: translateY(-4px);
      border-color: rgba(255, 255, 255, 0.24);

      &::after {
        opacity: 1;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-xs) var(--space-xs);
  }

  &-overlay {
    @include mixins.hover {
      display: none;
    }
  }

  &-notch {
    position: absolute;
    color: var(--color-background-500);
    --icon-color: var(--color-background-500);
    transform: scale(-1) rotate(90deg);
    height: var(--radius-lg);

    &-left {
      bottom: 0;
      right: 50px;
    }

    &-right {
      bottom: 50px;
      right: 0;
    }
  }

  &-edge {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-500);
    padding-left: 6px;
    padding-top: 6px;
    border-radius: 32px 0 0 0;
    padding-right: 1px;
    padding-bottom: 1px;
  }

  &-button {
    &-arrow {
      transition: transform 0.1s ease-in-out;
      width: 100%;
      transform: rotate(calc(var(--hover) * -45deg));
    }
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.18) saturate(0.62) contrast(1.08) brightness(0.88);
    transition: filter 0.2s ease-in-out;

    &-container {
      transition: transform 0.1s ease-in-out;
      transform: scale(calc(1 + var(--hover) * 0.02));
      aspect-ratio: 16/9;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(6, 6, 8, 0.62), transparent 50%);
        pointer-events: none;
      }
    }

    &-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-background-600);
      border: 1px solid var(--color-border-400);
      box-shadow: inset 0 -40px 60px rgba(0, 0, 0, 0.28);
    }
  }

  @include mixins.hover {
    &:hover {
      .preview-card-image {
        filter: grayscale(0.05) saturate(0.82) contrast(1.04) brightness(0.95);
      }
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;

    &-empty {
      border: 2px dashed var(--color-border-400);
      border-radius: var(--radius-lg);
      background-color: var(--color-background-600);
      display: flex;
      align-items: center;
      justify-content: center;

      &-icon {
        width: var(--icon-size-lg);
        color: var(--color-text-300);
        --icon-color: var(--color-text-300);
        --stroke-width: 4px;
      }
    }
  }

  &-copys {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    color: var(--color-text-100);
    line-height: 1.1;
  }

  &-description {
    font-size: var(--font-size-md);
    color: var(--color-text-200);
    font-weight: 500;
    line-height: 1.45;
  }

  &-code {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-accent-300);
    border: 1px solid rgba(255, 65, 73, 0.4);
    background: rgba(255, 48, 56, 0.12);
    border-radius: 999px;
    padding: 4px 9px;
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2px;
    border-top: 1px solid var(--color-border-400);

    &-label {
      color: var(--color-text-300);
      font-size: var(--font-size-xs);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    &-icon {
      width: 18px;
      color: var(--color-text-300);
      --icon-color: var(--color-text-300);
      transform: rotate(calc(var(--hover) * -45deg));
      transition: transform 0.18s ease;
    }
  }
}
</style>
