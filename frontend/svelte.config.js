import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],
  prerender: {
    default: true,
  },
  kit: {
    adapter: adapter({
      precompress: true,
      strict: true,
      fallback: 'index.html'
    }),
  },
};

export default config;
