import { describe, it, expect } from "vitest";

import {
  isStaticJsFunction,
  isStaticJsPromise,
  type StaticJsPromise,
  StaticJsRealm,
} from "../../../src/index.js";
import { StaticJsObject } from "../../../src/runtime/types/StaticJsObject.js";

describe("E2E: Async arrow functions", () => {
  describe("Functions", () => {
    it("Can be declared", async () => {
      const realm = StaticJsRealm();
      const result = await realm.evaluateScript(`
        const a = async () => 42;
        a;
      `);
      expect(isStaticJsFunction(result)).toBe(true);
    });

    it("Have the async function constructor", async () => {
      const realm = StaticJsRealm();
      const AsyncFunction = await realm.global.getAsync("AsyncFunction");
      const code = `
      const test = async () => {}
      test.constructor;
    `;
      const result = await realm.evaluateScript(code);
      expect(result).toBe(AsyncFunction);
    });

    it("Have the async function prototype", async () => {
      const realm = StaticJsRealm();
      const AsyncFunction = (await realm.global.getAsync("AsyncFunction")) as StaticJsObject;
      const AsyncFunctionPrototype = await AsyncFunction.getAsync("prototype");
      const code = `
      const test = async () => {}
      Object.getPrototypeOf(test);
    `;
      const result = await realm.evaluateScript(code);
      expect(result).toBe(AsyncFunctionPrototype);
    });

    it("Return a promise", async () => {
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
      const nativePromise = promise.toNative();

      // Weirdly, we get a bizzare chai error if we try to use expect.resolves
      // on the proxy.  Looks like somehow chai thinks runtimeTypeOf is its own
      // FIXME: I think this is our bug, as somewhere we are calling runtimeTypeOf
      // on a chai instance instead of a StaticJsValue.
      // await expect(nativePromise).resolves.toBeDefined();

      const nativePromiseResult = await nativePromise;
      expect(nativePromiseResult).toBe(42);
    });
  });
});
