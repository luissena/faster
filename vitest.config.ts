import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vitest/config"
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["ClientOnly", "Icon"].includes(tag),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
})
