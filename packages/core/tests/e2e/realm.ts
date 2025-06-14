import { describe, it, expect } from "vitest";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
    it("Sets a global value", async () => {
      const realm = StaticJsRealm({
        globalObject: {
          value: { x: 42 },
        },
      });
      const result = await evaluateScript("x", { realm });
      expect(result).toEqual(42);
    });

    it("Cannot modify a global data value", async () => {
      const globalObjectValue = {
        x: 42,
      };

      const realm = StaticJsRealm({
        globalObject: {
          value: globalObjectValue,
        },
      });

      await evaluateScript("x = 43", { realm });
      expect(globalObjectValue.x).toBe(42);
    });

    it("Can modify a global setter value", async () => {
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

      await evaluateScript("x = 43", { realm });
      expect(globalObjectValue._x).toBe(43);
    });

    it("Can call a global function", async () => {
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

      const result = await evaluateScript("fn()", { realm });
      expect(result).toEqual(42);
    });

    it("Persists globals across invocations", async () => {
      const realm = StaticJsRealm();
      await evaluateScript("global.x = 42;", { realm });
      const result = await evaluateScript("x", { realm });
      expect(result).toEqual(42);
    });
  });
});
