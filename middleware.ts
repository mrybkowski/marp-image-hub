import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/company',
    '/cookies',
    '/privacy-policy',
    '/rules',
    '/(pl|en|de)/:path*'
  ]
};
