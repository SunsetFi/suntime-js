import { describe, it, expect } from "vitest";

import { evaluateExpressionString } from "static-js";

describe("E2E: Literals", function () {
  describe("Number", function () {
    it("returns a number", function () {
      const result = evaluateExpressionString("42");
      expect(result).toEqual(42);
    });
  });

  describe("String", function () {
    it("returns a string", function () {
      const result = evaluateExpressionString(`"hello"`);
      expect(result).toEqual("hello");
    });
  });

  describe("Boolean", function () {
    it("returns a boolean", function () {
      const result = evaluateExpressionString("true");
      expect(result).toEqual(true);
    });
    it("returns a false boolean", function () {
      const result = evaluateExpressionString("false");
      expect(result).toEqual(false);
    });
  });

  describe("Null", function () {
    it("returns null", function () {
      const result = evaluateExpressionString("null");
      expect(result).toEqual(null);
    });
  });

  describe("Undefined", function () {
    it("returns undefined", function () {
      const result = evaluateExpressionString("undefined");
      expect(result).toEqual(undefined);
    });
  });
});
