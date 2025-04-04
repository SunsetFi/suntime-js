import { describe, it, expect } from "vitest";

import {
  evaluateExpressionString,
  evaluateProgram,
  StaticJsRealm,
} from "../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
    it("Sets a global value", () => {
      const env = StaticJsRealm({
        globalObject: {
          value: { x: 42 },
        },
      });
      const result = evaluateExpressionString("x", env);
      expect(result).toEqual(42);
    });

    it("Cannot modify a global data value", () => {
      const globalObjectValue = {
        x: 42,
      };

      const env = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      evaluateExpressionString("x = 43", env);
      expect(globalObjectValue.x).toBe(42);
    });

    it("Can modify a global setter value", () => {
      const globalObjectValue = {
        set x(value: number) {
          globalObjectValue._x = value;
        },
        _x: 42,
      };

      const env = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      evaluateExpressionString("x = 43", env);
      expect(globalObjectValue._x).toBe(43);
    });

    it("Can call a global function", () => {
      const globalObjectValue = {
        fn: function () {
          return 42;
        },
      };

      const env = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      const result = evaluateProgram("fn()", env);
      expect(result).toEqual(42);
    });

    it("Preserves the global this reference", () => {
      const globalObjectValue = {
        fn: function () {
          return this;
        },
      };

      const env = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      const result = evaluateProgram("fn()", env);
      expect(result).toBe(globalObjectValue);
    });
  });
});
