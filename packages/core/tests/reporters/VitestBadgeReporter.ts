import type { Reporter, TestModule } from "vitest/node";

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

export interface VitestBadgeReporterOptions {
  outputFile?: string;
  label?: string;
  includeSkippedInTotal?: boolean;
  totalsFile?: string;
}

export default class VitestBadgeReporter implements Reporter {
  private readonly _outputFile: string;
  private readonly _label: string;
  private readonly _includeSkippedInTotal: boolean;
  private readonly _totalsFile: string | undefined;

  constructor(options: VitestBadgeReporterOptions = {}) {
    this._outputFile = options.outputFile ?? "badges/vitest-badge.json";
    this._label = options.label ?? "tests";
    this._includeSkippedInTotal = options.includeSkippedInTotal ?? true;
    this._totalsFile = options.totalsFile;
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

    if (this._totalsFile) {
      this._updateTotals(this._totalsFile);
    }
  }

  private _updateTotals(totalsFile: string): void {
    const badgeDir = resolve(dirname(this._outputFile));
    const totalsPath = resolve(totalsFile);
    const totalsName = basename(totalsPath);

    let totalPassed = 0;
    let totalCount = 0;

    for (const entry of readdirSync(badgeDir)) {
      if (!entry.endsWith(".json") || entry === totalsName) {
        continue;
      }
      try {
        const raw = readFileSync(join(badgeDir, entry), "utf8");
        const data = JSON.parse(raw) as { message?: string };
        const match = /^(\d+) \/ (\d+)/.exec(data.message ?? "");
        if (match) {
          totalPassed += parseInt(match[1], 10);
          totalCount += parseInt(match[2], 10);
        }
      } catch {
        // skip unreadable or malformed badge files
      }
    }

    const totalPercent = totalCount === 0 ? 0 : (totalPassed / totalCount) * 100;

    const totalsBadge = {
      schemaVersion: 1,
      label: "Test262 Totals",
      message: `${totalPassed} / ${totalCount} (${totalPercent.toFixed(2)}%)`,
      color: pickColor(totalPercent),
    };

    mkdirSync(dirname(totalsPath), { recursive: true });
    writeFileSync(totalsPath, `${JSON.stringify(totalsBadge, null, 2)}\n`, "utf8");
  }
}

function pickColor(percent: number): string {
  if (percent >= 99) return "brightgreen";
  if (percent >= 80) return "green";
  if (percent >= 50) return "yellow";
  if (percent >= 25) return "orange";
  return "red";
}
