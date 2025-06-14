import { describe, it, expect } from "vitest";

import { evaluateExpression } from "../../src/index.js";

describe("E2E: Literals", () => {
  describe("Number", () => {
    it("returns a number", async () => {
      const result = await evaluateExpression("42");
      expect(result).toEqual(42);
    });
  });

  describe("String", () => {
    it("returns a string", async () => {
      const result = await evaluateExpression(`"hello"`);
      expect(result).toEqual("hello");
    });
  });

  describe("Boolean", () => {
    it("returns a boolean", async () => {
      const result = await evaluateExpression("true");
      expect(result).toEqual(true);
    });
    it("returns a false boolean", async () => {
      const result = await evaluateExpression("false");
      expect(result).toEqual(false);
    });
  });

  describe("Null", () => {
    it("returns null", async () => {
      const result = await evaluateExpression("null");
      expect(result).toEqual(null);
    });
  });

  describe("Undefined", () => {
    it("returns undefined", async () => {
      const result = await evaluateExpression("undefined");
      expect(result).toEqual(undefined);
    });
  });
});
