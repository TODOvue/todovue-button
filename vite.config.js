import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/components/TvButton.vue",
      name: "TvButton",
      fileName: format => `todovue-button.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
