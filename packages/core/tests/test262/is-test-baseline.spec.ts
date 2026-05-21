import { describe, expect, it } from "vitest";

import { parseBaselineText } from "./is-test-baseline.js";

describe("parseBaselineText", () => {
  it("parses a single passing test path", () => {
    const index = parseBaselineText("language/arguments-object/10.5-1-s.js\n");
    expect(index.has("language/arguments-object/10.5-1-s.js")).toBe(true);
  });

  it("parses multiple passing test paths", () => {
    const index = parseBaselineText(
      "built-ins/Array/from.js\nlanguage/types/typeof/S11.4.3_A1.js\n",
    );
    expect(index.has("built-ins/Array/from.js")).toBe(true);
    expect(index.has("language/types/typeof/S11.4.3_A1.js")).toBe(true);
  });

  it("ignores empty lines", () => {
    const index = parseBaselineText("\nlanguage/foo/bar.js\n\n");
    expect(index.size).toBe(1);
    expect(index.has("language/foo/bar.js")).toBe(true);
  });

  it("returns an empty set for empty content", () => {
    expect(parseBaselineText("").size).toBe(0);
    expect(parseBaselineText("\n").size).toBe(0);
  });
});
