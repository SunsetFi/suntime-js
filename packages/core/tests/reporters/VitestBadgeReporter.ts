import type { Reporter, TestModule } from "vitest/node";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export interface VitestBadgeReporterOptions {
  outputFile?: string;
  label?: string;
  includeSkippedInTotal?: boolean;
}

export default class VitestBadgeReporter implements Reporter {
  private readonly _outputFile: string;
  private readonly _label: string;
  private readonly _includeSkippedInTotal: boolean;

  constructor(options: VitestBadgeReporterOptions = {}) {
    this._outputFile = options.outputFile ?? "badges/vitest-badge.json";
    this._label = options.label ?? "tests";
    this._includeSkippedInTotal = options.includeSkippedInTotal ?? true;
  }

  onTestRunEnd(testModules: ReadonlyArray<TestModule>): void {
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (const testModule of testModules) {
      for (const test of testModule.children.allTests()) {
        const state = test.result()?.state;

        if (state === "passed") {
          passed++;
        } else if (state === "failed") {
          failed++;
        } else if (state === "skipped" || state === "pending") {
          skipped++;
        }
      }
    }

    const total = this._includeSkippedInTotal ? passed + failed + skipped : passed + failed;

    const percent = total === 0 ? 0 : (passed / total) * 100;

    const badge = {
      schemaVersion: 1,
      label: this._label,
      message: `${passed} / ${total} (${percent.toFixed(2)}%)`,
      color: pickColor(percent),
    };

    mkdirSync(dirname(this._outputFile), { recursive: true });
    writeFileSync(this._outputFile, `${JSON.stringify(badge, null, 2)}\n`, "utf8");
  }
}

function pickColor(percent: number): string {
  if (percent >= 99) return "brightgreen";
  if (percent >= 80) return "green";
  if (percent >= 50) return "yellow";
  if (percent >= 25) return "orange";
  return "red";
}
