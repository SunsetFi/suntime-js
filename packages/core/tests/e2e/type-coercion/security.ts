import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";

describe("E2E: Type Coercion / Security", () => {
  it("Does not allow external Object constructors to escape the sandbox", async () => {
    const realm = StaticJsRealm({
      global: {
        properties: {
          externalObject: {
            value: {},
          },
        },
      },
    });

    await realm.evaluateScript(`
      const obj = externalObject;
      obj.constructor.constructor("globalThis.__escapeTest = 42;")();
    `);

    const result = await realm.evaluateScript("__escapeTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__escapeTest).toBeUndefined();
  });

  it("Does not allow external Function constructors to escape the sandbox", async () => {
    const realm = StaticJsRealm({
      global: {
        properties: {
          externalFunction: {
            value: function () {},
          },
        },
      },
    });

    await realm.evaluateScript(`externalFunction.constructor("globalThis.__escapeTest = 42;")();`);

    const result = await realm.evaluateScript("__escapeTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__escapeTest).toBeUndefined();
  });

  // ---------------------------------------------------------------------------
  // GAP COVERAGE (red phase) — audited but previously untested containment.
  // ---------------------------------------------------------------------------

  it("Does not allow the sandbox to construct a host function", async () => {
    const realm = StaticJsRealm({
      global: { value: { hostFn: function hostFn() {} } },
    });

    const result = await realm.evaluateScript(`
      let isTypeError = false;
      try {
        new hostFn();
      } catch (e) {
        isTypeError = e instanceof TypeError;
      }
      isTypeError;
    `);
    expect(result.toNative()).toBe(true);
  });

  it("Does not allow the sandbox to brand an external object with a private field", async () => {
    const realm = StaticJsRealm({
      global: { value: { hostObj: {} } },
    });

    const result = await realm.evaluateScript(`
      class Base { constructor(o) { return o; } }
      class Branded extends Base { #f = 1; constructor(o) { super(o); } }
      let threw = false;
      try {
        new Branded(hostObj);
      } catch (e) {
        threw = e instanceof TypeError;
      }
      threw;
    `);
    expect(result.toNative()).toBe(true);
  });
});
