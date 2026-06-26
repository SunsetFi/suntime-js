import { mkdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { makeTest262Module, makeTest262Test } from "../spec-utils/vitest-mocks.js";
import BaselineReporter from "./BaselineReporter.js";

const FAKE_ROOT = "/fake/repo/test262/tests/";

let tmpDir: string;
let outputFile: string;

beforeEach(() => {
  tmpDir = join(tmpdir(), `baseline-reporter-${Date.now()}`);
  mkdirSync(tmpDir, { recursive: true });
  outputFile = join(tmpDir, "test262-baseline.txt");
});

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true });
});

function readLines(): string[] {
  return readFileSync(outputFile, "utf-8")
    .split("\n")
    .filter((l) => l.length > 0);
}

function runReporter(
  lang: Parameters<typeof makeTest262Module>[2],
  builtins: Parameters<typeof makeTest262Module>[2] = [],
) {
  const reporter = new BaselineReporter(outputFile);
  reporter.onTestRunEnd([
    makeTest262Module("Test262:Language", FAKE_ROOT + "language/dummy.test.ts", lang),
    makeTest262Module("Test262:Built-ins", FAKE_ROOT + "built-ins/dummy.test.ts", builtins),
  ]);
}

describe("BaselineReporter", () => {
  describe("validation", () => {
    it("passes when both Test262 projects are present", () => {
      const reporter = new BaselineReporter(outputFile);
      expect(() =>
        reporter.onTestRunEnd([
          makeTest262Module("Test262:Language", "/other/path.test.ts"),
          makeTest262Module("Test262:Built-ins", "/other/path.test.ts"),
        ]),
      ).not.toThrow();
    });

    it("throws when Test262:Language is missing", () => {
      const reporter = new BaselineReporter(outputFile);
      expect(() =>
        reporter.onTestRunEnd([makeTest262Module("Test262:Built-ins", "/other/path.test.ts")]),
      ).toThrow("Test262:Language");
    });

    it("throws when Test262:Built-ins is missing", () => {
      const reporter = new BaselineReporter(outputFile);
      expect(() =>
        reporter.onTestRunEnd([makeTest262Module("Test262:Language", "/other/path.test.ts")]),
      ).toThrow("Test262:Built-ins");
    });

    it("throws when no projects ran", () => {
      const reporter = new BaselineReporter(outputFile);
      expect(() => reporter.onTestRunEnd([])).toThrow("Missing:");
    });
  });

  describe("file writing", () => {
    it("only writes passing tests, omitting failing and skipped", () => {
      runReporter([
        makeTest262Test("passing-a.js", "passed"),
        makeTest262Test("failing-b.js", "failed"),
        makeTest262Test("skipped-c.js", "skipped"),
      ]);

      const lines = readLines();
      expect(lines).toContain("language/dummy/passing-a.js");
      expect(lines).not.toContain("language/dummy/failing-b.js");
      expect(lines).not.toContain("language/dummy/skipped-c.js");
    });

    it("writes output sorted lexicographically", () => {
      runReporter([
        makeTest262Test("zebra.js", "passed"),
        makeTest262Test("apple.js", "passed"),
        makeTest262Test("mango.js", "passed"),
      ]);

      const lines = readLines();
      expect(lines).toEqual([...lines].sort());
    });

    it("reconstructs a short path (single-file wrapper)", () => {
      const reporter = new BaselineReporter(outputFile);
      reporter.onTestRunEnd([
        makeTest262Module(
          "Test262:Language",
          FAKE_ROOT + "language/arguments-object/10.5-1-s.test.ts",
          [makeTest262Test("10.5-1-s.js", "passed")],
        ),
        makeTest262Module("Test262:Built-ins", "/other/path.test.ts"),
      ]);

      expect(readLines()).toContain("language/arguments-object/10.5-1-s.js");
    });

    it("reconstructs a directory-wrapper path (multiple files at depth)", () => {
      const reporter = new BaselineReporter(outputFile);
      reporter.onTestRunEnd([
        makeTest262Module("Test262:Language", FAKE_ROOT + "built-ins/Number/prototype.test.ts", [
          makeTest262Test("15.7.3.1-2.js", "passed"),
        ]),
        makeTest262Module("Test262:Built-ins", "/other/path.test.ts"),
      ]);

      expect(readLines()).toContain("built-ins/Number/prototype/15.7.3.1-2.js");
    });

    it("reconstructs a deep path with nested describe (> separator)", () => {
      const reporter = new BaselineReporter(outputFile);
      reporter.onTestRunEnd([
        makeTest262Module(
          "Test262:Language",
          FAKE_ROOT + "language/destructuring/binding.test.ts",
          [makeTest262Test("syntax > array-elements-with-initializer.js", "passed")],
        ),
        makeTest262Module("Test262:Built-ins", "/other/path.test.ts"),
      ]);

      expect(readLines()).toContain(
        "language/destructuring/binding/syntax/array-elements-with-initializer.js",
      );
    });

    it("skips modules without the test262/tests/ marker in moduleId", () => {
      const reporter = new BaselineReporter(outputFile);
      reporter.onTestRunEnd([
        makeTest262Module("Test262:Language", "/unrelated/spec.test.ts", [
          makeTest262Test("should-not-appear.js", "passed"),
        ]),
        makeTest262Module("Test262:Built-ins", "/other/path.test.ts"),
      ]);

      expect(readLines()).toHaveLength(0);
    });
  });
});
