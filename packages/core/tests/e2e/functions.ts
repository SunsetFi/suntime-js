import { describe, it, expect } from "vitest";

import { evaluateProgram, StaticJsRealm } from "../../src/index.js";

describe("E2E: Functions", () => {
  describe("Declaration", () => {
    it("Can be declared", () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;
      expect(evaluateProgram(code)).toBeInstanceOf(Function);
    });

    it("Can be invoked by the engine", () => {
      const code = `
        function a() {
          return 42;
        }
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Can be invoked by the runtime", () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;

      const func = evaluateProgram(code);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
    });

    it("Cascades throws", () => {
      const code = `
        function a() {
          throw "test";
        }
        a();
      `;
      expect(() => evaluateProgram(code)).toThrow("test");
    });

    it("Is hoisted", () => {
      const code = `
        let result = a();
        function a() {
          return 42;
        }
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Keeps top-level functions on the global object", () => {
      const code = `
          function a() {
            return 42;
          }
          global.a;  
        `;
      expect(evaluateProgram(code)).toBeInstanceOf(Function);
    });

    it("Can access a function from one evaluation in another", () => {
      const realm = StaticJsRealm();
      evaluateProgram("function x() { return 42; }", { realm });
      expect(evaluateProgram("x()", { realm })).toEqual(42);
    });

    it("Can contain properties", () => {
      const code = `
        function a() {
          return 42;
        }
        a.prop = 42;
        a.prop;
      `;
      expect(evaluateProgram(code)).toBe(42);
    });
  });

  describe("Invalid Calls", () => {
    it("Throws the proper error for null functions", () => {
      const code = `
        function a() {
          return 42;
        }
        a = null;
        a();
      `;
      expect(() => evaluateProgram(code)).toThrow(
        "TypeError: a is not a function",
      );
    });

    it("Throws the proper error for undefined functions", () => {
      const code = `
        a();
      `;
      expect(() => evaluateProgram(code)).toThrow("a is not defined");
    });
  });

  describe("External", () => {
    it("Can be invoked by the engine", () => {
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            a: function () {
              return 42;
            },
          },
        },
      });
      const code = `
        a();
      `;
      expect(evaluateProgram(code, { realm })).toBe(42);
    });

    it("Can be invoked by the runtime", () => {
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            a: function () {
              return 42;
            },
          },
        },
      });
      const code = `
        a;
      `;

      const func = evaluateProgram(code, { realm });
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
    });

    it("Cascades throws", () => {
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            a: function () {
              throw 42;
            },
          },
        },
      });
      const code = `
        a();
      `;
      try {
        evaluateProgram(code, { realm });
        throw new Error("Expected to throw");
      } catch (e) {
        expect(e).toEqual(42);
      }
    });

    it("Is hoisted", () => {
      const code = `
        let result = a();
        function a() {
          return 42;
        }
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
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
      expect(evaluateProgram(code)).toBeInstanceOf(Function);
    });

    it("Does not appear in the global scope", () => {
      const code = `
        const a = function foo() {
          return 42;
        };
      `;
      const realm = StaticJsRealm();
      evaluateProgram(code, { realm });
      expect(realm.globalObject.hasProperty("foo")).toBe(false);
    });

    it("Can be invoked by the engine", () => {
      const code = `
        const a = function() {
          return 42;
        };
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Can be invoked by the runtime", () => {
      const code = `
        const a = function() {
          return 42;
        };
        a;
      `;

      const func = evaluateProgram(code);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
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
      expect(evaluateProgram(code)).toBe(42);
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
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Supports rest arguments", () => {
      const code = `
        function a(first, ...rest) {
          return {first, rest};
        }
        a(1, 2, 3);
      `;
      expect(evaluateProgram(code)).toEqual({ first: 1, rest: [2, 3] });
    });

    describe("Object Destructuring", () => {
      it("Supports destructuring object arguments", () => {
        const code = `
          function a({ x }) {
            return x;
          }
          a({ x: 42 });
        `;
        expect(evaluateProgram(code)).toBe(42);
      });

      it("Supports renaming descructured object arguments", () => {
        const code = `
          function a({ x: y }) {
            return y;
          }
          a({ x: 42 });
        `;
        expect(evaluateProgram(code)).toBe(42);
      });

      it("Supports default values for destructured object arguments", () => {
        const code = `
          function a({ x: y = 42 }) {
            return y;
          }
          a({});
        `;
        expect(evaluateProgram(code)).toBe(42);
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
        expect(evaluateProgram(code)).toBe(42);
      });

      it("Supports default values for destructured array arguments", () => {
        const code = `
        function a([x = 42]) {
          return x;
        }
        a([]);
      `;
        expect(evaluateProgram(code)).toBe(42);
      });
    });

    it("supports default arguments", () => {
      const code = `
        function a(x = 42) {
          return x;
        }
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
    });
  });

  describe("Scopes", () => {
    it("Can access outer scope", () => {
      const code = `
        const x = 42;
        function a() {
          return x;
        }
        a();
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Can mutate outer scope", () => {
      const code = `
        let x = 42;
        function a() {
          x = 43;
        }
        a();
        x;
      `;
      expect(evaluateProgram(code)).toBe(43);
    });

    it("Targets the correct scope", () => {
      const code = `
        let x = "outer";
        function createMutator() {
          let x = 1;
          return function() {
            x += 1;
            return x;
          }
        }

        const mutator1 = createMutator();
        const mutator2 = createMutator();

        [mutator1(), mutator2(), x];
      `;

      expect(evaluateProgram(code)).toEqual([2, 2, "outer"]);
    });
  });
});
