import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import vue from "@astrojs/vue";
import webmanifest from "astro-webmanifest";

import matomo from "astro-matomo";

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
  }), vue(), webmanifest({
    name: 'Frankly Web',
    /**
     * optional
     **/
    icon: 'src/assets/frankly-icon.svg',
    // source for favicon & icons

    short_name: 'Frankly',
    description: 'Vom Code zur Kreativität: Folgen Sie mir auf meinem digitalen Weg',
    start_url: '/',
    theme_color: '#3367D6',
    background_color: '#3367D6',
    display: 'standalone'
  }), matomo({
    enabled: import.meta.env.PROD, // Only load in production
    host: "https://cdn.frankzinsli.ch/matomo/",
    siteId: 2,
    heartBeatTimer: 5,
    disableCookies: true,
    debug: false,
  })]
});