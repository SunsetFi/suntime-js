import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: instanceof", () => {
  it("should return true for instances", async () => {
    const result = await evaluateScript(`
    const a = new Error();
    a instanceof Error;
    `);
    expect(result).toBe(true);
  });

  it("should return false for non-instances", async () => {
    const result = await evaluateScript(`
    const a = {};
    a instanceof Error;
    `);
    expect(result).toBe(false);
  });

  it("Should support Symbol.hasInstance", async () => {
    const result = await evaluateScript(`
      const MyClass = {
        [Symbol.hasInstance](x) {
          return x % 2 === 0;
        }
      }

      2 instanceof MyClass;
    `);
    expect(result).toBe(true);
  });
});
