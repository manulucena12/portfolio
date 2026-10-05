import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// MPA pura: sin View Transitions, sin framework, 0 JS por defecto.
// https://astro.build/config
export default defineConfig({
  // TODO: cambiá por tu dominio real cuando despliegues
  site: 'https://manuellucena.dev',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // sharp corre solo en build, 0 JS al cliente. Genera webp/avif.
    remotePatterns: [],
  },
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
