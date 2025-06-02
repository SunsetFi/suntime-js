import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../../src/index.js";

describe("E2E: Arrow Functions", () => {
  it("can be declared", () => {
    const result = evaluateProgram(`
      const a = () => 42;
      a;
    `);
    expect(result).toBeTypeOf("function");
  });

  it("can be invoked", () => {
    const result = evaluateProgram(`
      const a = () => 42;
      a();
    `);
    expect(result).toBe(42);
  });

  it("can be invoked with arguments", () => {
    const result = evaluateProgram(`
      const a = (x) => x;
      a(42);
    `);
    expect(result).toBe(42);
  });

  it("can be invoked with multiple arguments", () => {
    const result = evaluateProgram(`
      const a = (x, y) => x + y;
      a(40, 2);
    `);
    expect(result).toBe(42);
  });
});
