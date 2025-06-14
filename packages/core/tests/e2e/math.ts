import { describe, it, expect } from "vitest";

import { evaluateExpression } from "../../src/index.js";

describe("E2E: Math", () => {
  describe("Properties", () => {
    it("Defines E", async () => {
      const result = await evaluateExpression("Math.E");
      expect(result).toBeCloseTo(Math.E);
    });

    it("Defines LN10", async () => {
      const result = await evaluateExpression("Math.LN10");
      expect(result).toBeCloseTo(Math.LN10);
    });

    it("Defines LN2", async () => {
      const result = await evaluateExpression("Math.LN2");
      expect(result).toBeCloseTo(Math.LN2);
    });

    it("Defines LOG10E", async () => {
      const result = await evaluateExpression("Math.LOG10E");
      expect(result).toBeCloseTo(Math.LOG10E);
    });

    it("Defines LOG2E", async () => {
      const result = await evaluateExpression("Math.LOG2E");
      expect(result).toBeCloseTo(Math.LOG2E);
    });

    it("Defines PI", async () => {
      const result = await evaluateExpression("Math.PI");
      expect(result).toBeCloseTo(Math.PI);
    });

    it("Defines SQRT1_2", async () => {
      const result = await evaluateExpression("Math.SQRT1_2");
      expect(result).toBeCloseTo(Math.SQRT1_2);
    });

    it("Defines SQRT2", async () => {
      const result = await evaluateExpression("Math.SQRT2");
      expect(result).toBeCloseTo(Math.SQRT2);
    });
  });
});
