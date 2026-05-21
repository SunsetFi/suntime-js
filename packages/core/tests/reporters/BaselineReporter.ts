import type { Reporter, TestModule } from "vitest/node";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REQUIRED_PROJECTS = ["Test262:Language", "Test262:Built-ins"] as const;
const TESTS_MARKER = "test262/tests/";

export default class BaselineReporter implements Reporter {
  constructor(private readonly outputFile: string) {}

  onTestRunEnd(testModules: ReadonlyArray<TestModule>): void {
    const projects = new Set(testModules.map((m) => m.project.name));
    const missing = REQUIRED_PROJECTS.filter((p) => !projects.has(p));

    if (missing.length > 0) {
      throw new Error(
        `Baseline generation requires both Test262 projects to run. Missing: ${missing.join(", ")}.\n` +
          `Run baseline creation with both --project=Test262:Language --project=Test262:Built-ins.`,
      );
    }

    const passing = new Set<string>();

    for (const testModule of testModules) {
      const markerIdx = testModule.moduleId.indexOf(TESTS_MARKER);
      if (markerIdx < 0) continue;

      const relative = testModule.moduleId.slice(markerIdx + TESTS_MARKER.length);
      const base = relative.replace(/\.test\.ts$/, "");
      const baseName = base.split("/").at(-1)!;

      for (const test of testModule.children.allTests()) {
        if (test.result()?.state !== "passed") continue;

        const subpath = test.fullName.replace(/ > /g, "/");
        const test262Path = subpath === `${baseName}.js` ? `${base}.js` : `${base}/${subpath}`;
        passing.add(test262Path);
      }
    }

    const content = [...passing].sort().join("\n") + "\n";
    mkdirSync(dirname(this.outputFile), { recursive: true });
    writeFileSync(this.outputFile, content, "utf-8");
  }
}
