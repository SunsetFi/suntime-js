import { describe, it, expect } from "vitest";

import { evaluateString, StaticJsEnvironment } from "static-js";

describe("E2E: Functions", () => {
  describe("Declaration", () => {
    it("Can be declared", () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;
      expect(evaluateString(code)).toBeInstanceOf(Function);
    });

    it("Can be invoked by the engine", () => {
      const code = `
        function a() {
          return 42;
        }
        a();
      `;
      expect(evaluateString(code)).toBe(42);
    });

    it("Can be invoked by the runtime", () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;

      const env = new StaticJsEnvironment();
      const func = evaluateString(code, env);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func(env)).toBe(42);
    });
  });

  describe("Expression", () => {
    it("Can be declared", () => {
      const code = `
        const a = function() {
          return 42;
        };
        a;
      `;
      expect(evaluateString(code)).toBeInstanceOf(Function);
    });

    it("Does not appear in the global scope", () => {
      const code = `
        const a = function foo() {
          return 42;
        };
      `;
      const env = new StaticJsEnvironment();
      evaluateString(code, env);
      expect(env.currentScope.hasProperty("foo")).toBe(false);
    });

    it("Can be invoked by the engine", () => {
      const code = `
        const a = function() {
          return 42;
        };
        a();
      `;
      expect(evaluateString(code)).toBe(42);
    });

    it("Can be invoked by the runtime", () => {
      const code = `
        const a = function() {
          return 42;
        };
        a;
      `;

      const env = new StaticJsEnvironment();
      const func = evaluateString(code, env);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func(env)).toBe(42);
    });
  });

  describe("Return values", () => {
    it("Can return a value", () => {
      const code = `
        function a() {
          return 42;
        }
        a();
      `;
      expect(evaluateString(code)).toBe(42);
    });
  });

  describe("Arguments", () => {
    // TODO: We want to test LVals in a lot of places, so let's code-gen this.
    it("Supports identifier arguments", () => {
      const code = `
        function a(x) {
          return x;
        }
        a(42);
      `;
      expect(evaluateString(code)).toBe(42);
    });

    it("Supports rest arguments", () => {
      const code = `
        function a(first, ...rest) {
          return {first, rest};
        }
        a(1, 2, 3);
      `;
      expect(evaluateString(code)).toEqual({ first: 1, rest: [2, 3] });
    });

    describe("Object Destructuring", () => {
      it("Supports destructuring object arguments", () => {
        const code = `
          function a({ x }) {
            return x;
          }
          a({ x: 42 });
        `;
        expect(evaluateString(code)).toBe(42);
      });

      it("Supports renaming descructured object arguments", () => {
        const code = `
          function a({ x: y }) {
            return y;
          }
          a({ x: 42 });
        `;
        expect(evaluateString(code)).toBe(42);
      });

      it("Supports default values for destructured object arguments", () => {
        const code = `
          function a({ x: y = 42 }) {
            return y;
          }
          a({});
        `;
        expect(evaluateString(code)).toBe(42);
      });
    });

    describe("Array Destructuring", () => {
      it("Supports destructuring array arguments", () => {
        const code = `
        function a([x]) {
          return x;
        }
        a([42]);
      `;
        expect(evaluateString(code)).toBe(42);
      });

      it("Supports default values for destructured array arguments", () => {
        const code = `
        function a([x = 42]) {
          return x;
        }
        a([]);
      `;
        expect(evaluateString(code)).toBe(42);
      });
    });

    it("supports default arguments", () => {
      const code = `
        function a(x = 42) {
          return x;
        }
        a();
      `;
      expect(evaluateString(code)).toBe(42);
    });
  });
});
