import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../../src/index.js";

describe("E2E: Thrown Error Handling", () => {
  it("Should throw the value", () => {
    const code = `
        throw {message: "Test Error"};
      `;
    expect(() => evaluateProgram(code)).toThrow("Test Error");
  });

  it("Should support declarative enviroments", () => {
    const code = `
      try {
        var test = 1;
        test;
      }
      catch (e) {}
      `;
    expect(evaluateProgram(code)).toBe(1);
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
      expect(evaluateProgram(code)).toBe(1);
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
      expect(evaluateProgram(code)).toBe("f");
    });
  });
});
