import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

const safeStorageGet = () => {
  try {
    return window.localStorage.getItem("portfolio-locale");
  } catch {
    return null;
  }
};

export const useTranslations = () => {
  onMounted(() => {
    const stored = safeStorageGet() as Locale | null;
    if (stored && stored in LOCALES) {
      locale.value = stored;
    } else {
      const preferredLocale = navigator.language.split("-")[0] as Locale;

      if (preferredLocale in LOCALES) {
        locale.value = preferredLocale;
      } else {
        locale.value = "en";
      }
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    try {
      window.localStorage.setItem("portfolio-locale", locale.value);
    } catch {}
    document.documentElement.lang = locale.value;
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      const loaded = (await loadTranslations("common", newLocale)) ?? {};
      if (locale.value === newLocale) translations.value = loaded;
    },
    { immediate: true },
  );
};
