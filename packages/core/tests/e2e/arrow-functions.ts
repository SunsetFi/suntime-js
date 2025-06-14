import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Arrow Functions", () => {
  it("can be declared", async () => {
    const result = await evaluateScript(`
      const a = () => 42;
      a;
    `);
    expect(result).toBeTypeOf("function");
  });

  it("can be invoked", async () => {
    const result = await evaluateScript(`
      const a = () => 42;
      a();
    `);
    expect(result).toBe(42);
  });

  it("can be invoked with arguments", async () => {
    const result = await evaluateScript(`
      const a = (x) => x;
      a(42);
    `);
    expect(result).toBe(42);
  });

  it("can be invoked with multiple arguments", async () => {
    const result = await evaluateScript(`
      const a = (x, y) => x + y;
      a(40, 2);
    `);
    expect(result).toBe(42);
  });
});
