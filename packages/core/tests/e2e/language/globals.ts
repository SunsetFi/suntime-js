import { describe, it, expect } from "vitest";

import { StaticJsRealm, evaluateScript } from "../../../src/index.js";

describe("E2E: Globals", () => {
  it("Sets a global value", async () => {
    const realm = StaticJsRealm({
      global: {
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
      global: {
        value: globalObjectValue,
      },
    });

    await evaluateScript("x = 43", { realm });
    expect(globalObjectValue.x).toBe(42);
  });

  it("Can call a global function", async () => {
    const globalObjectValue = {
      fn: function () {
        return 42;
      },
    };

    const realm = StaticJsRealm({
      global: {
        value: globalObjectValue,
      },
    });

    const result = await evaluateScript("fn()", { realm });
    expect(result).toEqual(42);
  });

  it("Persists globals across invocations", async () => {
    const realm = StaticJsRealm();
    await evaluateScript("globalThis.x = 42;", { realm });
    const result = await evaluateScript("x", { realm });
    expect(result).toEqual(42);
  });
});
