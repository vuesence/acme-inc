import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { htmlInjectionPlugin } from "vite-plugin-html-injection";
import { htmlInjectionConfig } from "./src/utils/injections/injection-config";

// import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/acme-inc/",
  build: {
    target: "esnext",
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    htmlInjectionPlugin(htmlInjectionConfig),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
