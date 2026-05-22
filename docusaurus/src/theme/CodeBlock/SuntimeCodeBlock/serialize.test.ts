import { describe, expect, it } from "vitest";
import { serialize } from "./serialize";

describe("serialize", () => {
  it("renders null as 'null'", () => {
    expect(serialize(null)).toBe("null");
  });

  it("renders undefined as 'undefined'", () => {
    expect(serialize(undefined)).toBe("undefined");
  });

  it("renders numbers via String()", () => {
    expect(serialize(42)).toBe("42");
    expect(serialize(NaN)).toBe("NaN");
    expect(serialize(Infinity)).toBe("Infinity");
  });

  it("renders booleans via String()", () => {
    expect(serialize(true)).toBe("true");
    expect(serialize(false)).toBe("false");
  });

  it("renders strings via String()", () => {
    expect(serialize("hello")).toBe("hello");
  });

  it("renders plain objects as JSON", () => {
    expect(serialize({ a: 1 })).toBe('{"a":1}');
  });

  it("renders arrays as JSON", () => {
    expect(serialize([1, 2, 3])).toBe("[1,2,3]");
  });

  it("falls back to String() for non-serializable objects", () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    expect(serialize(circular)).toBe("[object Object]");
  });
});
