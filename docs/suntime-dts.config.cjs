const path = require("node:path");

const coreRoot = path.resolve(__dirname, "../packages/core");

/** @type {import("dts-bundle-generator/config-schema").BundlerConfig} */
module.exports = {
  compilationOptions: {
    preferredConfigPath: path.join(coreRoot, "tsconfig.lib.json"),
  },
  entries: [
    {
      filePath: path.join(coreRoot, "src/index.ts"),
      outFile: path.resolve(__dirname, "static/suntime-core.d.ts"),
      output: {
        // Banner kept (default) so the file is clearly marked generated.
        // No `umdModuleName` / module wrapping: emit a plain module file. A
        // package.json supplied alongside it maps it to "@suntime-js/core".
        //
        // Keep the bundle's exports mirroring the package's real exports (the
        // barrels already export everything explicitly). Leaving this on also
        // double-exports the merged value+type `StaticJsRealm`, which collides.
        exportReferencedTypes: false,
        sortNodes: true,
      },
    },
  ],
};
