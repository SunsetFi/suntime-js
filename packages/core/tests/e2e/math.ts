import { describe, it, expect } from "vitest";

import { evaluateExpression } from "../../src/index.js";

describe("E2E: Math", () => {
  describe("Properties", () => {
    it("Defines E", () => {
      const result = evaluateExpression("Math.E");
      expect(result).toBeCloseTo(Math.E);
    });

    it("Defines LN10", () => {
      const result = evaluateExpression("Math.LN10");
      expect(result).toBeCloseTo(Math.LN10);
    });

    it("Defines LN2", () => {
      const result = evaluateExpression("Math.LN2");
      expect(result).toBeCloseTo(Math.LN2);
    });

    it("Defines LOG10E", () => {
      const result = evaluateExpression("Math.LOG10E");
      expect(result).toBeCloseTo(Math.LOG10E);
    });

    it("Defines LOG2E", () => {
      const result = evaluateExpression("Math.LOG2E");
      expect(result).toBeCloseTo(Math.LOG2E);
    });

    it("Defines PI", () => {
      const result = evaluateExpression("Math.PI");
      expect(result).toBeCloseTo(Math.PI);
    });

    it("Defines SQRT1_2", () => {
      const result = evaluateExpression("Math.SQRT1_2");
      expect(result).toBeCloseTo(Math.SQRT1_2);
    });

    it("Defines SQRT2", () => {
      const result = evaluateExpression("Math.SQRT2");
      expect(result).toBeCloseTo(Math.SQRT2);
    });
  });
});
