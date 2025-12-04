import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Assignment", () => {
  describe("=", () => {
    it("should handle simple variable assignment", async () => {
      const script = `
        let x;
        x = 42;
        x;
      `;
      const result = await evaluateScript(script);
      expect(result).toBe(42);
    });

    it("should evaluate the rhs before assignment", async () => {
      const script = `
        let target = null;
        let x = 1;
        try {
          target.foo = x += 5;
        }
        catch(e) {}
        x;
      `;
      const result = await evaluateScript(script);
      expect(result).toBe(6);
    });
  });

  describe("+=", () => {
    it("should handle addition assignment", async () => {
      const script = `
        let x = 10;
        x += 5;
        x;
      `;
      const result = await evaluateScript(script);
      expect(result).toBe(15);
    });
  });
});
