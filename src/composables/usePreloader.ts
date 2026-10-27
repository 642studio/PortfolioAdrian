import { ref, onMounted, onUnmounted } from "vue";
import { resources } from "../utils/resources";
export const preloaderVisible = ref(true);
export const usePreloader = () => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  const dismiss = () => {
    if (timeout) clearTimeout(timeout);
    document.body.classList.remove("is-loading");
    document.querySelector(".preloader")?.classList.add("preloader-hidden");
    preloaderVisible.value = false;
  };
  const progress = (value: number) => {
    const rect = document.querySelector(".preloader-rect") as HTMLElement | null;
    if (rect) rect.style.transform = `scaleX(${value})`;
    if (value === 1) dismiss();
  };
  onMounted(() => {
    resources.on("progress", progress);
    if (resources.isReady) dismiss();
    else timeout = setTimeout(dismiss, 1800);
  });
  onUnmounted(() => {
    if (timeout) clearTimeout(timeout);
    resources.off("progress", progress);
  });
};
