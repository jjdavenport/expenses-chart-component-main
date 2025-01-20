import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Required for resolving paths

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/expenses-chart-component-main/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for `src` directory
    },
  },
});
