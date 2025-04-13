import { describe, it, expect } from "vitest";

import { evaluateProgram, StaticJsRealm } from "../../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
    it("Sets a global value", () => {
      const realm = StaticJsRealm({
        globalObject: {
          value: { x: 42 },
        },
      });
      const result = evaluateProgram("x", { realm });
      expect(result).toEqual(42);
    });

    it("Cannot modify a global data value", () => {
      const globalObjectValue = {
        x: 42,
      };

      const realm = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      evaluateProgram("x = 43", { realm });
      expect(globalObjectValue.x).toBe(42);
    });

    it("Can modify a global setter value", () => {
      const globalObjectValue = {
        set x(value: number) {
          globalObjectValue._x = value;
        },
        _x: 42,
      };

      const realm = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      evaluateProgram("x = 43", { realm });
      expect(globalObjectValue._x).toBe(43);
    });

    it("Can call a global function", () => {
      const globalObjectValue = {
        fn: function () {
          return 42;
        },
      };

      const realm = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      const result = evaluateProgram("fn()", { realm });
      expect(result).toEqual(42);
    });

    it("Persists globals across invocations", () => {
      const realm = StaticJsRealm();
      evaluateProgram("global.x = 42;", { realm });
      const result = evaluateProgram("x", { realm });
      expect(result).toEqual(42);
    });
  });
});
