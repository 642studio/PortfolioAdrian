<script setup lang="ts">
import { computed, ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { useHomeContent } from "../../../content/home";

const point = new Vector3(0.75, 2.75, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

const sectionContent = computed(() => useHomeContent().whatIBuild);

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({ paused: true });

      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.25);
      }

      emit("timeline:created", tl);

      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div class="box-services-content">
        <div class="box-services-title">
          <AppearingText
            :text="sectionContent.title"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        <div class="box-services-list">
          <div class="box-services-list-item" v-for="(service, index) in sectionContent.capabilities" :key="service.title">
            <p class="box-services-list-item-name">
              <AppearingText
                :text="service.title"
                :steps="1"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.15 + index * 0.1)"
              />
            </p>
            <p class="box-services-list-item-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 480px;
    max-width: calc(var(--svw) * 37);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  @include mixins.landscape-large {
    width: 430px;
    max-width: calc(var(--svw) * 39);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-accent-300);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-accent-300);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-border-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, rgba(20, 20, 20, 0.9) 0%, rgba(15, 15, 15, 0.85) 100%);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    &-item {
      display: flex;
      flex-direction: column;
      padding-left: 18px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 6px;
        width: 4px;
        height: 4px;
        background-color: var(--color-accent-300);
        border-radius: 50%;
      }

      &-name {
        font-size: var(--font-size-md);
        font-weight: 700;

        @include mixins.landscape {
          font-size: var(--font-size-sm);
        }

        @include mixins.landscape-large {
          font-size: var(--font-size-lg);
        }
      }

      &-description {
        font-size: var(--font-size-xs);
        color: var(--color-text-300);
        line-height: 1.35;
        margin-top: 2px;

        @include mixins.landscape {
          font-size: 11px;
        }

        @include mixins.landscape-large {
          font-size: var(--font-size-xs);
        }
      }
    }
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }
}
</style>
