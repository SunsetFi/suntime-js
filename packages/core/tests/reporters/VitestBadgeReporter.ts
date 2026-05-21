import type { Reporter, TestModule } from "vitest/node";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export interface BadgeConfig {
  project: string;
  outputFile: string;
  label: string;
  includeSkippedInTotal?: boolean;
}

export interface VitestBadgeReporterOptions {
  /** Multi-badge mode: one badge per project. */
  badges?: BadgeConfig[];
  /** Single-badge mode (legacy): write one badge from all modules. */
  outputFile?: string;
  label?: string;
  includeSkippedInTotal?: boolean;
  /** Written once after all badges, summing across all configured badges. */
  totalsFile?: string;
}

export default class VitestBadgeReporter implements Reporter {
  private readonly _options: VitestBadgeReporterOptions;

  constructor(options: VitestBadgeReporterOptions = {}) {
    this._options = options;
  }

  onTestRunEnd(testModules: ReadonlyArray<TestModule>): void {
    if (this._options.badges) {
      this._writeMultiBadges(testModules, this._options.badges);
    } else {
      this._writeSingleBadge(testModules);
    }
  }

  private _writeMultiBadges(testModules: ReadonlyArray<TestModule>, badges: BadgeConfig[]): void {
    let totalPassed = 0;
    let totalCount = 0;

    for (const config of badges) {
      const modules = testModules.filter((m) => m.project.name === config.project);
      const { passed, total } = countTests(modules, config.includeSkippedInTotal ?? true);
      writeBadge(config.outputFile, config.label, passed, total);
      totalPassed += passed;
      totalCount += total;
    }

    if (this._options.totalsFile) {
      writeBadge(this._options.totalsFile, "Test262 Totals", totalPassed, totalCount);
    }
  }

  private _writeSingleBadge(testModules: ReadonlyArray<TestModule>): void {
    const outputFile = this._options.outputFile ?? "badges/vitest-badge.json";
    const label = this._options.label ?? "tests";
    const { passed, total } = countTests(testModules, this._options.includeSkippedInTotal ?? true);
    writeBadge(outputFile, label, passed, total);
  }
}

function countTests(
  testModules: ReadonlyArray<TestModule>,
  includeSkipped: boolean,
): { passed: number; total: number } {
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const testModule of testModules) {
    for (const test of testModule.children.allTests()) {
      const state = test.result()?.state;
      if (state === "passed") passed++;
      else if (state === "failed") failed++;
      else if (state === "skipped" || state === "pending") skipped++;
    }
  }

  const total = includeSkipped ? passed + failed + skipped : passed + failed;
  return { passed, total };
}

function writeBadge(outputFile: string, label: string, passed: number, total: number): void {
  const percent = total === 0 ? 0 : (passed / total) * 100;
  const badge = {
    schemaVersion: 1,
    label,
    message: `${passed} / ${total} (${percent.toFixed(2)}%)`,
    color: pickColor(percent),
  };
  mkdirSync(dirname(outputFile), { recursive: true });
  writeFileSync(outputFile, `${JSON.stringify(badge, null, 2)}\n`, "utf8");
}

function pickColor(percent: number): string {
  if (percent >= 99) return "brightgreen";
  if (percent >= 80) return "green";
  if (percent >= 50) return "yellow";
  if (percent >= 25) return "orange";
  return "red";
}
