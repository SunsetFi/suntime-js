import type { Reporter, TestModule } from "vitest/node";

const REQUIRED_PROJECTS = ["Test262:Language", "Test262:Built-ins"] as const;

export default class ValidateBaselineReporter implements Reporter {
  onTestRunEnd(testModules: ReadonlyArray<TestModule>): void {
    const projects = new Set(testModules.map((m) => m.project.name));
    const missing = REQUIRED_PROJECTS.filter((p) => !projects.has(p));

    if (missing.length > 0) {
      throw new Error(
        `Baseline generation requires both Test262 projects to run. Missing: ${missing.join(", ")}.\n` +
          `Run baseline creation with both --project=Test262:Language --project=Test262:Built-ins.`,
      );
    }
  }
}
