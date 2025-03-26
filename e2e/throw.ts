import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Thrown Error Handling", () => {
  it("Should throw the value", () => {
    const code = `
        throw {message: "Test Error"};
      `;
    expect(() => evaluateString(code)).toThrow("Test Error");
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

    it("Should give precedence to finally over catch", () => {
      const code = `
        function test() {
          try {
            throw 1;
          } catch (e) {
            return "c";
          } finally {
            return "f";
          }
        }
        test();
      `;
      expect(evaluateString(code)).toBe("f");
    });
  });
});
