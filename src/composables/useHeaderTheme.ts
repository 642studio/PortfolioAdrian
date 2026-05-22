import { ref, watchEffect } from "vue";
import { lenis } from "./useScroll";
import { sizes } from "../utils/sizes";

export const useHeaderTheme = ({
  onUpdate,
}: {
  onUpdate?: (element: HTMLElement | null, boundingClientRect: DOMRect | null, hasScrolledIntoView: boolean) => void;
} = {}) => {
  let markerElement: HTMLElement | null = null;
  const isDarkTheme = ref(false);
  const hasScrolledIntoView = ref(false);

  const handleScroll = () => {
    if (!markerElement) {
      markerElement = typeof window !== "undefined" ? document.querySelector("#build, #about") : null;
    }

    if (markerElement) {
      const aboutBounding = markerElement.getBoundingClientRect();
      const isLandscape = sizes.isLandscape;
      const isScrolledIntoView = aboutBounding.top - (isLandscape ? sizes.height * 0.225 : 0) < 0;
      const isScrolledPast = aboutBounding.bottom - 36 < 0;

      hasScrolledIntoView.value = isScrolledIntoView;
      isDarkTheme.value = isScrolledIntoView && !isScrolledPast;

      if (typeof onUpdate === "function") {
        onUpdate(markerElement, aboutBounding, isScrolledIntoView);
      }
    }
  };

  watchEffect((onInvalidate) => {
    if (lenis.value) {
      lenis.value.on("scroll", handleScroll);
    }

    onInvalidate(() => {
      if (lenis.value) {
        lenis.value.off("scroll", handleScroll);
      }
    });
  });

  return {
    isDarkTheme,
    hasScrolledIntoView,
  };
};
