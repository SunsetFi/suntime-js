import { describe, expect, it } from "vitest";

import { makeModule } from "../spec-utils/vitest-mocks.js";

import ValidateBaselineReporter from "./ValidateBaselineReporter.js";

describe("ValidateBaselineReporter", () => {
  it("passes when both Test262 projects are present", () => {
    const reporter = new ValidateBaselineReporter();
    expect(() =>
      reporter.onTestRunEnd([makeModule("Test262:Language"), makeModule("Test262:Built-ins")]),
    ).not.toThrow();
  });

  it("throws when Test262:Language is missing", () => {
    const reporter = new ValidateBaselineReporter();
    expect(() => reporter.onTestRunEnd([makeModule("Test262:Built-ins")])).toThrow(
      "Test262:Language",
    );
  });

  it("throws when Test262:Built-ins is missing", () => {
    const reporter = new ValidateBaselineReporter();
    expect(() => reporter.onTestRunEnd([makeModule("Test262:Language")])).toThrow(
      "Test262:Built-ins",
    );
  });

  it("throws when no projects ran", () => {
    const reporter = new ValidateBaselineReporter();
    expect(() => reporter.onTestRunEnd([])).toThrow("Missing:");
  });
});
