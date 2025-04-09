import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "/suntime-js/",
  plugins: [
    react(),
    checker({ typescript: { root: ".", tsconfigPath: "tsconfig.json" } }),
  ],
  define: {
    "process.env": JSON.stringify({}),
  },
});
