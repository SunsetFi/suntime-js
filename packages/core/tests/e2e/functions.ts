import { describe, it, expect } from "vitest";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";

describe("E2E: Functions", () => {
  describe("Declaration", () => {
    it("Can be declared", async () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;
      expect(await evaluateScript(code)).toBeTypeOf("function");
    });

    it("Can be invoked by the engine", async () => {
      const code = `
        function a() {
          return 42;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Can be invoked by the runtime", async () => {
      const code = `
        function a() {
          return 42;
        }
        a;
      `;

      const func = await evaluateScript(code);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
    });

    it("Cascades throws", async () => {
      const code = `
        function a() {
          throw "test";
        }
        a();
      `;
      await expect(evaluateScript(code)).rejects.toThrow("test");
    });

    it("Is hoisted", async () => {
      const code = `
        let result = a();
        function a() {
          return 42;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Keeps top-level functions on the global object", async () => {
      const code = `
          function a() {
            return 42;
          }
          global.a;  
        `;
      expect(await evaluateScript(code)).toBeTypeOf("function");
    });

    it("Can access a function from one evaluation in another", async () => {
      const realm = StaticJsRealm();
      await evaluateScript("function x() { return 42; }", { realm });
      expect(await evaluateScript("x()", { realm })).toEqual(42);
    });

    it("Can contain properties", async () => {
      const code = `
        function a() {
          return 42;
        }
        a.prop = 42;
        a.prop;
      `;
      expect(await evaluateScript(code)).toBe(42);
    });
  });

  describe("Invalid Calls", () => {
    it("Throws the proper error for null functions", async () => {
      const code = `
        function a() {
          return 42;
        }
        a = null;
        a();
      `;
      await expect(evaluateScript(code)).rejects.toThrow(
        "TypeError: a is not a function",
      );
    });

    it("Throws the proper error for undefined functions", async () => {
      const code = `
        a();
      `;
      await expect(evaluateScript(code)).rejects.toThrow("a is not defined");
    });
  });

  describe("External", () => {
    it("Can be invoked by the engine", async () => {
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
      expect(await evaluateScript(code, { realm })).toBe(42);
    });

    it("Can be invoked by the runtime", async () => {
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

      const func = await evaluateScript(code, { realm });
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
    });

    it("Cascades throws", async () => {
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
        await evaluateScript(code, { realm });
        throw new Error("Expected to throw");
      } catch (e) {
        expect(e).toEqual(42);
      }
    });

    it("Is hoisted", async () => {
      const code = `
        let result = a();
        function a() {
          return 42;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });
  });

  describe("Expression", () => {
    it("Can be declared", async () => {
      const code = `
        const a = function() {
          return 42;
        };
        a;
      `;
      expect(await evaluateScript(code)).toBeTypeOf("function");
    });

    it("Does not appear in the global scope", async () => {
      const code = `
        const a = function foo() {
          return 42;
        };
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("foo")).toBe(false);
    });

    it("Can be invoked by the engine", async () => {
      const code = `
        const a = function() {
          return 42;
        };
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Can be invoked by the runtime", async () => {
      const code = `
        const a = function() {
          return 42;
        };
        a;
      `;

      const func = await evaluateScript(code);
      if (typeof func !== "function") {
        throw new Error("Expected a function");
      }
      expect(func()).toBe(42);
    });
  });

  describe("Return values", () => {
    it("Can return a value", async () => {
      const code = `
        function a() {
          return 42;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });
  });

  describe("Arguments", () => {
    // TODO: We want to test LVals in a lot of places, so let's code-gen this.
    it("Supports identifier arguments", async () => {
      const code = `
        function a(x) {
          return x;
        }
        a(42);
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Supports rest arguments", async () => {
      const code = `
        function a(first, ...rest) {
          return {first, rest};
        }
        a(1, 2, 3);
      `;
      expect(await evaluateScript(code)).toEqual({ first: 1, rest: [2, 3] });
    });

    describe("Object Destructuring", () => {
      it("Supports destructuring object arguments", async () => {
        const code = `
          function a({ x }) {
            return x;
          }
          a({ x: 42 });
        `;
        expect(await evaluateScript(code)).toBe(42);
      });

      it("Supports renaming descructured object arguments", async () => {
        const code = `
          function a({ x: y }) {
            return y;
          }
          a({ x: 42 });
        `;
        expect(await evaluateScript(code)).toBe(42);
      });

      it("Supports default values for destructured object arguments", async () => {
        const code = `
          function a({ x: y = 42 }) {
            return y;
          }
          a({});
        `;
        expect(await evaluateScript(code)).toBe(42);
      });
    });

    describe("Array Destructuring", () => {
      it("Supports destructuring array arguments", async () => {
        const code = `
        function a([x]) {
          return x;
        }
        a([42]);
      `;
        expect(await evaluateScript(code)).toBe(42);
      });

      it("Supports default values for destructured array arguments", async () => {
        const code = `
        function a([x = 42]) {
          return x;
        }
        a([]);
      `;
        expect(await evaluateScript(code)).toBe(42);
      });
    });

    it("Supports rest destructuring", async () => {
      const code = `((...{[0]: value}) => value)("test value")`;
      expect(await evaluateScript(code)).toBe("test value");
    });

    it("Supports default arguments", async () => {
      const code = `
        function a(x = 42) {
          return x;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Supports spread calls", async () => {
      const code = `
        function a(x, y, z) {
          return x + y + z;
        }
        a(...[1, 2, 3]);
      `;
      expect(await evaluateScript(code)).toBe(6);
    });
  });

  describe("Scopes", () => {
    it("Can access outer scope", async () => {
      const code = `
        const x = 42;
        function a() {
          return x;
        }
        a();
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Can mutate outer scope", async () => {
      const code = `
        let x = 42;
        function a() {
          x = 43;
        }
        a();
        x;
      `;
      expect(await evaluateScript(code)).toBe(43);
    });

    it("Targets the correct scope", async () => {
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

      expect(await evaluateScript(code)).toEqual([2, 2, "outer"]);
    });
  });

  describe("Prototype", () => {
    describe("Function.prototype.bind", () => {
      it("Exists", async () => {
        const code = `
          function a() {}
          a.bind;
        `;
        expect(await evaluateScript(code)).toBeTypeOf("function");
      });

      it("Binds thisArg", async () => {
        const code = `
          function a() {
            return this.value;
          }
          const bound = a.bind({ value: 42 });
          bound();
        `;
        expect(await evaluateScript(code)).toBe(42);
      });

      it("Binds arguments", async () => {
        const code = `
          function a(x, y) {
            return x + y;
          }
          const bound = a.bind(null, 40, 2);
          bound();
        `;
        expect(await evaluateScript(code)).toBe(42);
      });
    });
  });
});
