import { defineConfig } from "vite";

export default defineConfig({
  base: "/suntime-js/playground-embed/",

  plugins: [
    {
      // VSCode CSS must be injected as strings, not <link> tags.
      // This plugin intercepts @codingame/* and monaco/vscode CSS imports and marks them inline.
      name: "vscode-css-inline",
      enforce: "pre",
      async resolveId(source, importer, options) {
        const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
        if (
          resolved &&
          resolved.id.match(
            /node_modules\/(@codingame\/monaco-vscode|vscode|monaco-editor).*\.css$/,
          )
        ) {
          return { ...resolved, id: resolved.id + "?inline" };
        }
      },
    },
    // These are nominally required for vscode in browser, but it seems to work without them.
    // We can't set these for github-pages.  Apparently we can have a service worker inject these
    // on the client, but I haven't set that up.
    // Docusaurus is set up to allow service workers here to run, so that might be a todo.
    // {
    //   // SharedArrayBuffer (used by extension host workers) requires COOP/COEP headers.
    //   name: "cross-origin-isolation",
    //   apply: "serve",
    //   configureServer(server) {
    //     server.middlewares.use((_req, res, next) => {
    //       res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    //       res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    //       res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    //       next();
    //     });
    //   },
    // },
  ],
  resolve: {
    dedupe: ["vscode", "monaco-editor"],
    tsconfigPaths: true,
  },
  define: {
    "process.env": JSON.stringify({}),
  },
  worker: {
    format: "es",
  },
  optimizeDeps: {
    include: [
      "@codingame/monaco-vscode-api",
      "@codingame/monaco-vscode-api/extensions",
      "vscode/localExtensionHost",
    ],
  },
});
