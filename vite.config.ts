import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  root: "src",
  plugins: [tailwindcss()],
});
