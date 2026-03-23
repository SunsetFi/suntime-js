import { describe, it, expect } from "vitest";

import { StaticJsRealm, evaluateScript } from "../../../src/index.js";

describe("E2E: External Functions", () => {
  it("Can be invoked by the engine", async () => {
    const realm = StaticJsRealm({
      global: {
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
      global: {
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
      global: {
        value: {
          a: function () {
            throw { message: "Hello World" };
          },
        },
      },
    });
    const code = `
      try {
        a();
      } catch (e) {
        "Received: " + e.message;
      }
    `;

    const result = await evaluateScript(code, { realm });
    expect(result).toEqual("Received: Hello World");
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
