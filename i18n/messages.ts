import type { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export function getCommonMessages(locale: Locale) {
  switch (locale) {
    case "it":
      return import("../language/COMMON/it.json").then((module) => module.default);
    case "en":
      return import("../language/COMMON/en.json").then((module) => module.default);
  }
}

export async function getMessages(locale: Locale) {
  const common = await getCommonMessages(locale);
  const pageMessages =
    locale === "it"
      ? await Promise.all([
          import("../language/IT/about.json"),
          import("../language/IT/home.json"),
          import("../language/IT/work-together.json"),
        ])
      : await Promise.all([
          import("../language/EN/about.json"),
          import("../language/EN/home.json"),
          import("../language/EN/work-together.json"),
        ]);

  return Object.assign({}, common, ...pageMessages.map((module) => module.default));
}
