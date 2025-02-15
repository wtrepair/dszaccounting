import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Change "build" to "dist" to match Vercel's expected directory
    emptyOutDir: true, // Ensures the folder is cleaned before each build
  },
  plugins: [react()],
});
