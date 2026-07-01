import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    port: 4100,
  },
  preview: {
    port: 4100,
  },
  nitro: {
    preset: "node-server",
  },
});
