import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import importMetaUrlPlugin from "@codingame/esbuild-import-meta-url-plugin";

export default defineConfig({
  base: "/suntime-js/",
  worker: {
    format: "es",
  },
  plugins: [
    {
      name: "load-vscode-css-as-string",
      enforce: "pre",
      async resolveId(source, importer, options) {
        const resolved = await this.resolve(source, importer, options);
        if (
          resolved &&
          resolved.id.match(
            /node_modules\/(?:@codingame\/monaco-vscode|vscode|monaco-editor).*\.css$/,
          )
        ) {
          return {
            ...resolved,
            id: `${resolved.id}?inline`,
          };
        }

        return undefined;
      },
    },
    react(),
    checker({ typescript: { root: ".", tsconfigPath: "tsconfig.json" } }),
  ],
  optimizeDeps: {
    include: ["vscode-textmate", "vscode-oniguruma"],
    rolldownOptions: {
      plugins: [importMetaUrlPlugin],
    },
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
