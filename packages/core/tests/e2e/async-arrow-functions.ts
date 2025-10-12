import { describe, it, expect } from "vitest";

import {
  isStaticJsFunction,
  isStaticJsPromise,
  type StaticJsPromise,
  StaticJsRealm,
} from "../../src/index.js";

describe("E2E: Async arrow functions", () => {
  it("can be declared", async () => {
    const realm = StaticJsRealm();
    const result = await realm.evaluateScript(`
        const a = async () => 42;
        a;
      `);
    expect(isStaticJsFunction(result)).toBe(true);
  });

  it("returns a promise", async () => {
    const realm = StaticJsRealm();
    const result = await realm.evaluateScript(
      `
        const a = async () => 42;
        a();
      `,
    );

    expect(isStaticJsPromise(result)).toBe(true);
  });

  it("Can await non-promises", async () => {
    const realm = StaticJsRealm();
    const result = await realm.evaluateScript(
      `
        const a = async () => await 42;
        a();
      `,
    );

    expect(isStaticJsPromise(result)).toBe(true);
    const promise = result as StaticJsPromise;
    const nativePromise = promise.toJsSync();

    // Weirdly, we get a bizare chai error if we try to use expect.resolves
    // on the proxy.  Looks like somehow chai thinks runtimeTypeOf is its own
    // FIXME: I think this is our bug, as somewhere we are calling runtimeTypeOf
    // on a chai instance instead of a StaticJsValue.
    // await expect(nativePromise).resolves.toBeDefined();

    const nativePromiseResult = await nativePromise;
    expect(nativePromiseResult).toBe(42);
  });
});
