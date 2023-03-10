import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://frankzinsli.ch',
  integrations: [compress({
    css: true,
    html: true,
    img: false,
    js: true,
    svg: true
  }), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), vue()]
});