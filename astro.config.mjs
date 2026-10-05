import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/solvay-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://solvayhydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
