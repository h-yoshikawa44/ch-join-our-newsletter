import { defineConfig } from 'vite';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/ch-join-our-newsletter/' : './',
  server: {
    open: true,
  },
});
