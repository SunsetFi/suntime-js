import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "/suntime-js/",
  worker: {
    format: "es",
  },
  plugins: [react(), checker({ typescript: { root: ".", tsconfigPath: "tsconfig.json" } })],
  optimizeDeps: {
    include: ["vscode-textmate", "vscode-oniguruma"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
    dedupe: ["vscode", "monaco-editor"],
  },
  define: {
    "process.env": JSON.stringify({}),
  },
});
