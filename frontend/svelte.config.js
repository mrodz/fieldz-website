import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],
  prerender: {
    crawl: true,
  },
  kit: {
    adapter: adapter({
      precompress: true,
      strict: true,

    })
  },
};

export default config;
