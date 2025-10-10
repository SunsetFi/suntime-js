import { describe, it, expect } from "vitest";

import {
  StaticJsRealm,
  isStaticJsPromise,
  type StaticJsPromise,
} from "../../src/index.js";

describe("E2E: Async functions", () => {
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
      test();
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
});

function staticJsPromiseToPromise(
  promise: StaticJsPromise,
  realm: StaticJsRealm,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    // FIXME: It would be nice to do it this way, but we currently don't support
    // enqueuing microtasks outside of a realm.
    realm.invokeEvaluatorSync(
      promise.thenEvaluator(
        realm.types.toStaticJsValue(resolve),
        realm.types.toStaticJsValue(reject),
      ),
    );
  });
}
