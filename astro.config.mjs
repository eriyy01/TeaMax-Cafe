import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import critters from 'astro-critters';
import compress from '@playform/compress';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    critters(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
});
