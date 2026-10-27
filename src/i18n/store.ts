import { ref } from "vue";

import type { Locale } from "./types";

export const locale = ref<Locale | null>("es");
export const translations = ref<Record<string, string>>({});
