import { describe, it, expect } from "vitest";

import { evaluateExpressionString, StaticJsRealm } from "../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
    it("Sets a global value", () => {
      const env = new StaticJsRealm({
        globals: {
          x: { value: 42 },
        },
      });
      const result = evaluateExpressionString("x", env);
      expect(result).toEqual(42);
    });

    it("Can modify a global value", () => {
      const env = new StaticJsRealm({
        globals: {
          x: { value: 42 },
        },
      });
      evaluateExpressionString("x = 43", env);
      expect(env.globalObject.getProperty("x").toJs()).toEqual(43);
    });
  });
});
