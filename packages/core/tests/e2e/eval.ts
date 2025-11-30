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
        let results = [];
        let y = 10;
        function testEval() {
          let y = 15;
          eval("y = 20");
          results.push(y);
        }
        testEval();
        results.push(y);
        results;
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual([20, 10]);
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
    it("Should not affect the calling scope", async () => {
      const code = `
        let results = [];
        let x = 10;
        function indirectEval() {
          let x = "string";
          (1, eval)("x = 12");
          results.push(x);
        }
        indirectEval();
        results.push(x);
        results;
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual(["string", 12]);
    });

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

  describe("Strict", () => {
    it("Should throw a SyntaxError if var is used", async () => {
      const code = `
        'use strict';
        eval("var public = 1;");
        `;
      await expect(evaluateScript(code)).rejects.toHaveProperty(
        "name",
        "SyntaxError",
      );
    });
  });

  describe("Directives", () => {
    it("Returns directives as strings", async () => {
      const code = `
      eval("'use strict'");
    `;
      const result = await evaluateScript(code);
      expect(result).toBe("use strict");
    });
  });
});
