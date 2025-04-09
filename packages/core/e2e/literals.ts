import { describe, it, expect } from "vitest";

import { evaluateExpression } from "../src/index.js";

describe("E2E: Literals", () => {
  describe("Number", () => {
    it("returns a number", () => {
      const result = evaluateExpression("42");
      expect(result).toEqual(42);
    });
  });

  describe("String", () => {
    it("returns a string", () => {
      const result = evaluateExpression(`"hello"`);
      expect(result).toEqual("hello");
    });
  });

  describe("Boolean", () => {
    it("returns a boolean", () => {
      const result = evaluateExpression("true");
      expect(result).toEqual(true);
    });
    it("returns a false boolean", () => {
      const result = evaluateExpression("false");
      expect(result).toEqual(false);
    });
  });

  describe("Null", () => {
    it("returns null", () => {
      const result = evaluateExpression("null");
      expect(result).toEqual(null);
    });
  });

  describe("Undefined", () => {
    it("returns undefined", () => {
      const result = evaluateExpression("undefined");
      expect(result).toEqual(undefined);
    });
  });
});
