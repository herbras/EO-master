import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import compressor from "astro-compressor";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [image(), lottie(), tailwind(), robotsTxt(), compress(), compressor(), mdx(), react(), alpinejs()],
  output: "server",
  adapter: vercel()
});