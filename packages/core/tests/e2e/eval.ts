import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Eval", () => {
  describe("Direct calls", () => {
    it("should evaluate simple expressions", async () => {
      const code = `eval("2 + 2")`;
      const result = await evaluateScript(code);
      expect(result).toBe(4);
    });

    it("should handle variable declarations", async () => {
      const code = `
        var x = 10;
        eval("x + 5");
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(15);
    });

    it("Should affect the calling scope", async () => {
      const code = `
        function testEval() {
          eval("var y = 20");
          return y;
        }
        testEval();
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(20);
    });

    it("Should not affect the global scope when called within an inner scope", async () => {
      const code = `
        function testEval() {
          eval("var z = 30");
        }
        testEval();
        typeof z;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe("undefined");
    });
  });

  describe("Indirect calls", () => {
    it("Should affect the global scope when called indirectly", async () => {
      const code = `
        function indirectEval() {
          (1, eval)("var y = 42");
        }
        indirectEval();
        y;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(42);
    });
  });
});
