import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Thrown Error Handling", () => {
  describe("Scalar throws", () => {
    it("Should throw an error", () => {
      const code = `
        throw 1;
      `;
      expect(() => evaluateString(code)).toThrow();
    });
  });

  describe("Try / Catch / Finally", () => {
    it("Should catch an error", () => {
      const code = `
        function test() {
          try {
            throw 1;
          } catch (e) {
            return e;
          }
        }
        test();
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Should return from finally", () => {
      const code = `
        function test() {
          try {
            throw 1;
          } catch (e) {
            return e;
          } finally {
            return 2;
          }
        }
        test();
      `;
      expect(evaluateString(code)).toBe(2);
    });
  });
});
