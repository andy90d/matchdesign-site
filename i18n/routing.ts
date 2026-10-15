// ===== ROUTING: lingue supportate =====
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  localeCookie: false,
});