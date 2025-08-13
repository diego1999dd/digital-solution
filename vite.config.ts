import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <-- 1. Adicione esta linha de importação

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // v-- 2. Adicione esta seção inteira --v
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});