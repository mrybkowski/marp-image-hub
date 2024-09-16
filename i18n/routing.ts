import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en', 'de'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
