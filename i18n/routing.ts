import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export type Locale = "en" | "pl";
type LocalePrefix = "always" | "as-needed" | "never";

function getEnv<T>(envVar: string, validValues: readonly T[], fallback: T): T {
  const value = process.env[envVar];
  return validValues.includes(value as T) ? (value as T) : fallback;
}

const locales: Locale[] = ["en", "pl"];

const defaultLocale = getEnv<Locale>("DEFAULT_NEXT_APP_LOCALE", locales, "pl");

const localePrefix = getEnv<LocalePrefix>(
  "DEFAULT_NEXT_APP_LOCALE_PREFIX_MODE",
  ["always", "as-needed", "never"],
  "as-needed"
);

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
