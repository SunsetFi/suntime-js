import { createDefaultMapFromNodeModules } from "@typescript/vfs";
import ts from "typescript";
import { describe, expect, it } from "vitest";

import { createBlockLanguageService } from "./block-language-service";

// Built once (reads ~108 lib files from the installed typescript package).
// createBlockLanguageService clones the map internally, so sharing is safe.
const LIB_MAP = createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2022 }, ts);

describe("createBlockLanguageService", () => {
  it("builds an env over the buffer file and reports no errors for valid code", () => {
    const svc = createBlockLanguageService({
      libMap: LIB_MAP,
      typings: [],
      initialDoc: "const x: number = 1;",
      filePath: "/block-test.ts",
    });
    expect(svc.languageService.getSemanticDiagnostics(svc.filePath)).toHaveLength(0);
  });

  it("updateBuffer re-types the file so new errors surface", () => {
    const svc = createBlockLanguageService({
      libMap: LIB_MAP,
      typings: [],
      initialDoc: "const x: number = 1;",
      filePath: "/block-test.ts",
    });
    svc.updateBuffer('const x: number = "nope";');
    expect(svc.languageService.getSemanticDiagnostics(svc.filePath)).toHaveLength(1);
  });

  it("resolves module-imported typings supplied by the caller", () => {
    const svc = createBlockLanguageService({
      libMap: LIB_MAP,
      typings: [
        {
          filePath: "/node_modules/widget-lib/package.json",
          contents: JSON.stringify({ name: "widget-lib", version: "0.0.0", types: "index.d.ts" }),
        },
        {
          filePath: "/node_modules/widget-lib/index.d.ts",
          contents: "export declare const widget: { alpha: number };",
        },
      ],
      initialDoc: 'import { widget } from "widget-lib";\nwidget.alpha;',
      filePath: "/block-test.ts",
    });
    expect(svc.languageService.getSemanticDiagnostics(svc.filePath)).toHaveLength(0);
  });
});
