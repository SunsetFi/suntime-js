import { describe, it, expect } from "vitest";

import { evaluateExpressionString, StaticJsEnvironment } from "static-js";

describe("E2E: Environment", () => {
  describe("Globals", () => {
    it("Sets a global read-only identifier", () => {
      const env = new StaticJsEnvironment({
        globals: {
          x: { declare: "const", value: 42 },
        },
      });
      const result = evaluateExpressionString("x", env);
      expect(result).toEqual(42);
    });

    it("Sets the variable as read-only", () => {
      const env = new StaticJsEnvironment({
        globals: {
          x: { declare: "const", value: 42 },
        },
      });
      expect(() => {
        evaluateExpressionString("x = 43", env);
      }).toThrowError(/Cannot set const variable \"x\"/);
    });

    it("Defaults to read-only variables", () => {
      const env = new StaticJsEnvironment({
        globals: {
          x: { value: 42 },
        },
      });
      expect(() => {
        evaluateExpressionString("x = 43", env);
      }).toThrowError(/Cannot set const variable \"x\"/);
    });

    it("Sets a global mutatable identifier", () => {
      const env = new StaticJsEnvironment({
        globals: {
          x: { declare: "let", value: 42 },
        },
      });
      const result = evaluateExpressionString("x = 43", env);
      expect(result).toEqual(43);
    });

    it("Can modify a global mutatable identifier", () => {
      const env = new StaticJsEnvironment({
        globals: {
          x: { declare: "let", value: 42 },
        },
      });
      evaluateExpressionString("x = 43", env);
      expect(env.currentScope.getProperty("x").toJs()).toEqual(43);
    });
  });
});
