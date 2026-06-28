import { execFileSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const CORE_ROOT = path.resolve(__dirname, "..", "..", "..");

describe("plugin-integration", () => {
  it("reports markable-capture on a file with an uncovered capture", () => {
    // Use a temp src file inside the core src tree so it is part of the lib program.
    const tmpName = `__markable_lint_fixture_${Date.now()}.ts`;
    const tmpPath = path.join(CORE_ROOT, "src", tmpName);
    const relPath = path.join("src", tmpName);
    writeFileSync(
      tmpPath,
      [
        `import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";`,
        `import type { StaticJsValue } from "#types/StaticJsValue.js";`,
        `export function leak(realm: any, stack: StaticJsValue) {`,
        `  return new StaticJsNativeFunctionImpl(realm, "", function* () { return stack; });`,
        `}`,
      ].join("\n"),
    );
    try {
      let output = "";
      try {
        // Run from CORE_ROOT so oxlint.config.ts is auto-discovered.
        // The temp file is in src/ so the TS program (tsconfig.lib.json) picks it up.
        execFileSync("pnpm", ["exec", "oxlint", relPath, "--format", "json"], {
          cwd: CORE_ROOT,
          env: { ...process.env, SUNTIME_MEMORY: "true" },
          encoding: "utf8",
        });
      } catch (e: any) {
        // oxlint exits non-zero when it finds errors; capture stdout.
        output = (e.stdout ?? "") + (e.stderr ?? "");
      }
      expect(output).toContain("markable-capture");
      expect(output).toContain("stack");
      // Assert a real JSON diagnostic object was emitted, not just an error string
      // that happens to mention the rule name. oxlint's `--format json` puts the rule
      // id in a `"code"` field (e.g. `"code": "suntime-memory(markable-capture)"`).
      expect(output).toContain('"code": "suntime-memory(markable-capture)"');
      expect(output).toContain('"severity": "error"');
    } finally {
      rmSync(tmpPath, { force: true });
    }
  });
});
