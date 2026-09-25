import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://caja.work',
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
