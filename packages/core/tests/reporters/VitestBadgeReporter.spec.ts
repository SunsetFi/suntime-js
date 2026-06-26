import { existsSync, mkdirSync, rmSync } from "node:fs";
import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { makeModule, makeTest } from "../spec-utils/vitest-mocks.js";
import VitestBadgeReporter from "./VitestBadgeReporter.js";

let tmpDir: string;

beforeEach(() => {
  tmpDir = join(tmpdir(), `badge-reporter-${Date.now()}`);
  mkdirSync(tmpDir, { recursive: true });
});

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true });
});

function readJson(path: string) {
  return JSON.parse(readFileSync(path, "utf8"));
}

describe("VitestBadgeReporter", () => {
  describe("single badge (legacy mode)", () => {
    it("writes a badge with correct pass ratio", () => {
      const out = join(tmpDir, "badge.json");
      const reporter = new VitestBadgeReporter({ outputFile: out, label: "My Suite" });

      reporter.onTestRunEnd([
        makeModule("proj", [makeTest("passed"), makeTest("passed"), makeTest("failed")]),
      ]);

      const badge = readJson(out);
      expect(badge.label).toBe("My Suite");
      expect(badge.message).toMatch(/^2 \/ 3/);
    });
  });

  describe("multi-badge mode", () => {
    it("writes separate badge files per project", () => {
      const langOut = join(tmpDir, "lang.json");
      const builtinsOut = join(tmpDir, "builtins.json");

      const reporter = new VitestBadgeReporter({
        badges: [
          { project: "Test262:Language", outputFile: langOut, label: "Language" },
          { project: "Test262:Built-ins", outputFile: builtinsOut, label: "Built-ins" },
        ],
      });

      reporter.onTestRunEnd([
        makeModule("Test262:Language", [makeTest("passed"), makeTest("failed")]),
        makeModule("Test262:Built-ins", [makeTest("passed"), makeTest("passed")]),
      ]);

      const lang = readJson(langOut);
      expect(lang.label).toBe("Language");
      expect(lang.message).toMatch(/^1 \/ 2/);

      const builtins = readJson(builtinsOut);
      expect(builtins.label).toBe("Built-ins");
      expect(builtins.message).toMatch(/^2 \/ 2/);
    });

    it("writes a totals file summing all projects", () => {
      const langOut = join(tmpDir, "lang.json");
      const builtinsOut = join(tmpDir, "builtins.json");
      const totalsOut = join(tmpDir, "totals.json");

      const reporter = new VitestBadgeReporter({
        badges: [
          { project: "Test262:Language", outputFile: langOut, label: "Language" },
          { project: "Test262:Built-ins", outputFile: builtinsOut, label: "Built-ins" },
        ],
        totalsFile: totalsOut,
      });

      reporter.onTestRunEnd([
        makeModule("Test262:Language", [makeTest("passed"), makeTest("failed")]),
        makeModule("Test262:Built-ins", [makeTest("passed"), makeTest("passed")]),
      ]);

      const totals = readJson(totalsOut);
      expect(totals.message).toMatch(/^3 \/ 4/);
    });

    it("does not write totals when no totalsFile is given", () => {
      const langOut = join(tmpDir, "lang.json");
      const totalsOut = join(tmpDir, "totals.json");

      const reporter = new VitestBadgeReporter({
        badges: [{ project: "Test262:Language", outputFile: langOut, label: "Language" }],
      });

      reporter.onTestRunEnd([makeModule("Test262:Language", [makeTest("passed")])]);

      expect(existsSync(totalsOut)).toBe(false);
    });

    it("skips modules not matching any configured project", () => {
      const langOut = join(tmpDir, "lang.json");

      const reporter = new VitestBadgeReporter({
        badges: [{ project: "Test262:Language", outputFile: langOut, label: "Language" }],
      });

      reporter.onTestRunEnd([
        makeModule("Test262:Language", [makeTest("passed")]),
        makeModule("spec", [makeTest("failed"), makeTest("failed")]),
      ]);

      const lang = readJson(langOut);
      expect(lang.message).toMatch(/^1 \/ 1/);
    });
  });
});
