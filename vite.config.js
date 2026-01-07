import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "static",
    manifest: "manifest.json",
    rollupOptions: {
      input: {
        main: "frontend/js/main.js",
      },
    },
  },
  server: {
    origin: "http://localhost:5173",
  },
});
