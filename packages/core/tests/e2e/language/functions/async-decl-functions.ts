import { describe, it, expect } from "vitest";

import {
  StaticJsRealm,
  isStaticJsPromise,
  type StaticJsPromise,
  type StaticJsObject,
  evaluateScript,
} from "../../../../src/index.js";

describe("E2E: Async declared functions", () => {
  describe("Globals", () => {
    it("Provides an async function constructor", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = await realm.global.getAsync("AsyncFunction");
      expect(AsyncFunction).toBeDefined();
    });

    it("Provides an async function prototype", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = (await realm.evaluateExpression(
        "(async function() {}).constructor",
      )) as StaticJsObject;
      const AsyncFunctionPrototype = await AsyncFunction.getAsync("prototype");
      expect(AsyncFunctionPrototype).toBeDefined();
    });
  });

  it("Have the async function constructor", async () => {
    const realm = new StaticJsRealm();
    const AsyncFunction = (await realm.evaluateExpression(
      "(async function() {}).constructor",
    )) as StaticJsObject;
    const code = `
      async function test() {}
      test.constructor;
    `;
    const result = await realm.evaluateScript(code);
    expect(result).toBe(AsyncFunction);
  });

  it("Have the async function prototype", async () => {
    const realm = new StaticJsRealm();
    const AsyncFunction = (await realm.evaluateExpression(
      "(async function() {}).constructor",
    )) as StaticJsObject;
    const AsyncFunctionPrototype = await AsyncFunction.getAsync("prototype");
    const code = `
      async function test() {}
      Object.getPrototypeOf(test);
    `;
    const result = await realm.evaluateScript(code);
    expect(result).toBe(AsyncFunctionPrototype);
  });

  it("Returns a promise", async () => {
    const realm = StaticJsRealm();
    const code = `
      async function test() {
        return 42;
      }
      test();
    `;

    const result = await realm.evaluateScript(code);
    expect(isStaticJsPromise(result)).toBe(true);

    const promise = staticJsPromiseToPromise(result as StaticJsPromise, realm);
    await expect(promise).resolves.toBe(42);
  });

  it("Rejects a promise on error", async () => {
    const realm = StaticJsRealm();
    const code = `
      async function test() {
        throw new Error("Test error");
      }
      const result = test();
      // Prevent unhandled rejection
      result.catch(() => {});
      result;
    `;

    const result = await realm.evaluateScript(code);

    expect(isStaticJsPromise(result)).toBe(true);
    const promise = staticJsPromiseToPromise(result as StaticJsPromise, realm);
    await expect(promise).rejects.toThrow("Test error");
  });

  it("Can receive an awaited value", async () => {
    const realm = StaticJsRealm();
    const code = `
      const awaitable = Promise.resolve(42);
      async function test() {
        const result = await awaitable;
        return result;
      }
      test();
    `;

    const result = await realm.evaluateScript(code);
    expect(isStaticJsPromise(result)).toBe(true);

    const promise = staticJsPromiseToPromise(result as StaticJsPromise, realm);
    await expect(promise).resolves.toBe(42);
  });

  it("Can catch a thrown error", async () => {
    const realm = StaticJsRealm();
    const code = `
      const awaitable = Promise.reject(new Error("Test error"));
      async function test() {
        try {
          await awaitable;
          return "uncaught";
        } catch (e) {
         return "caught";
        }
      }
      test();
    `;

    const result = await realm.evaluateScript(code);

    expect(isStaticJsPromise(result)).toBe(true);
    const promise = staticJsPromiseToPromise(result as StaticJsPromise, realm);
    await expect(promise).resolves.toBe("caught");
  });

  it("Can inherit a promise", async () => {
    const realm = StaticJsRealm();
    const code = `
      const awaitable = Promise.resolve(42);
      async function test() {
        return awaitable;
      }
      test();
    `;

    const result = await realm.evaluateScript(code);
    expect(isStaticJsPromise(result)).toBe(true);

    const promise = staticJsPromiseToPromise(result as StaticJsPromise, realm);
    await expect(promise).resolves.toBe(42);
  });

  it("provides a source string", async () => {
    const funcSource = ["async function test() {", "  return 42;", "}"].join("\n");
    const result = await evaluateScript(`
      ${funcSource}
      test.toString();
    `);
    expect(result).toBe(funcSource);
  });
});

function staticJsPromiseToPromise(
  promise: StaticJsPromise,
  realm: StaticJsRealm,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    realm.invokeEvaluatorSync(
      promise.thenEvaluator(
        realm.types.toStaticJsValue(resolve),
        realm.types.toStaticJsValue(reject),
      ),
    );
  });
}
