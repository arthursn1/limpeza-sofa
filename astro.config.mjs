// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/arthursn1', 
  base: '/limpeza-sofa',
  vite: {
    plugins: [tailwindcss()],
  },
});