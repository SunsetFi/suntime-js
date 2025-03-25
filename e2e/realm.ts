import { describe, it, expect } from "vitest";

import { evaluateExpressionString, StaticJsRealm } from "../src/index.js";

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

    it("Cannot modify a global value", () => {
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

    it("Can modify a writeback global value", () => {
      const globalObjValue = {
        x: 42,
      };
      const env = StaticJsRealm({
        globalObject: {
          value: globalObjValue,
          writable: "writeback",
        },
      });
      evaluateExpressionString("x = 43", env);
      expect(env.globalObject.getProperty("x").toJs()).toEqual(43);
      expect(globalObjValue.x).toBe(43);
    });

    it("Can modify a env-only writable global variable", () => {
      const globalObjValue = Object.freeze({
        x: 42,
      });
      const env = StaticJsRealm({
        globalObject: {
          value: globalObjValue,
          writable: "env-only",
        },
      });
      const result = evaluateExpressionString("x = 43", env);
      expect(result).toEqual(43);
      expect(env.globalObject.getProperty("x").toJs()).toEqual(43);
      expect(globalObjValue.x).toEqual(42);
    });
  });
});
