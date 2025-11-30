import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Eval", () => {
  describe("Direct calls", () => {
    it("should evaluate simple expressions", async () => {
      const code = `eval("2 + 2")`;
      const result = await evaluateScript(code);
      expect(result).toBe(4);
    });

    it("should have access to variable declarations", async () => {
      const code = `
        var x = 10;
        eval("x + 5");
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(15);
    });

    it("Declars var declarations in the caller's variable scope", async () => {
      const code = `
        eval("var value = 99;");
        value;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(99);
    });

    it("Declares let and const declarations in the caller's lexical scope", async () => {
      const code = `
        eval("let value1 = 44; const value2 = 13;");
        [value1, value2];
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual([44, 13]);
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

    it("returns the last evaluated expression", async () => {
      const code = `
        function compute() {
          return eval("({ foo: 1, bar: 2 }).bar");
        }
        compute();
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(2);
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

    it("returns values from indirect eval", async () => {
      const code = `
        function compute() {
          const indirect = (0, eval);
          return indirect("({ value: 21 })").value * 2;
        }
        compute();
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(42);
    });
  });

  describe("Errors", () => {
    it("propagates syntax errors from eval", async () => {
      const code = `
        eval("function {");
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });

    it("propagates reference errors from eval", async () => {
      const code = `
        eval("missingVariable");
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "ReferenceError",
      });
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

  describe("Strict mode", () => {
    it("prevents deleting bindings in strict direct eval", async () => {
      const code = `
        function strictDelete() {
          return eval("'use strict'; var x = 1; delete x;");
        }
        strictDelete();
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });

    it("throws when assigning to arguments in strict eval", async () => {
      const code = `
        function strictArguments() {
          return eval("'use strict'; arguments = 1;");
        }
        strictArguments();
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });

    it("binds this to undefined in strict direct eval", async () => {
      const code = `
        (function () {
          "use strict";
          return eval("'use strict'; this");
        })();
      `;
      const result = await evaluateScript(code);
      expect(result).toBeUndefined();
    });

    it("evaluates indirect calls in the global scope", async () => {
      const code = `
        (function () {
          "use strict";
          const indirect = (0, eval);
          return indirect("'use strict'; this === globalThis");
        })();
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(true);
    });

    it("attaches var declarations from indirect eval to the global object", async () => {
      const code = `
        (function () {
          "use strict";
          const indirect = (0, eval);
          indirect("'use strict'; var leaked = 99;");
          const outcome = [typeof leaked, globalThis.leaked];
          delete globalThis.leaked;
          return outcome;
        })();
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual(["number", 99]);
    });
  });
});
