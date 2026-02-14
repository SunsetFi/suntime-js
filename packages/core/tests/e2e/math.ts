import { describe, it, expect, vitest } from "vitest";

import { StaticJsRealm, evaluateExpression } from "../../src/index.js";

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

  describe("Random", () => {
    it("Returns a number between 0 and 1", async () => {
      const result = await evaluateExpression("Math.random()");
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(1);
    });

    it("Supports the hook override", async () => {
      const random = vitest.fn().mockReturnValue(0.5);
      const realm = StaticJsRealm({
        hooks: {
          math: {
            random,
          },
        },
      });
      const result = await evaluateExpression("Math.random()", { realm });
      expect(result).toBe(0.5);
      expect(random).toHaveBeenCalled();
    });
  });
});
