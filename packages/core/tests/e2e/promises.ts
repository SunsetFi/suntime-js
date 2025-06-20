import { describe, it, expect, vitest } from "vitest";

import {
  evaluateScript,
  type StaticJsFunction,
  StaticJsRealm,
} from "../../src/index.js";

describe("E2E: Promises", () => {
  it("Exists on the global object", async () => {
    const code = `
      typeof Promise === "function"
    `;

    const result = await evaluateScript(code);
    expect(result).toBe(true);
  });

  it("Can be constructed", async () => {
    const code = `
      const p = new Promise(() => {})
      p instanceof Promise;
    `;

    const result = await evaluateScript(code);
    expect(result).toBe(true);
  });

  it("Calls the resolver with the resolution functions", async () => {
    const code = `
      let stored;
      new Promise((resolve, reject) => {
        stored = [resolve, reject]
      });
      stored;
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual([expect.any(Function), expect.any(Function)]);
  });

  describe(".then", () => {
    it("Returns a promise", async () => {
      const code = `
        const p = new Promise(() => {}).then();
        p instanceof Promise;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(true);
    });

    it("Fulfills when the promise is resolved", async () => {
      const cb = vitest.fn();
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            callback: cb,
          },
        },
      });

      const code = `
        let accept;
        const p = new Promise(r => {accept = r});
        p.then(() => {callback()});
        accept;
      `;

      const fulfill = (await realm.evaluateScript(code)) as StaticJsFunction;

      await realm.enqueueMacrotask(
        fulfill.callEvaluator(realm.types.undefined),
      );

      expect(cb).toBeCalled();
    });

    it("Does not fulfill when the promise is rejected", async () => {
      const cb = vitest.fn();
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            callback: cb,
          },
        },
      });

      const code = `
        let reject;
        const p = new Promise((_, r) => {reject = r});
        p.then(() => {callback()});
        reject;
      `;

      const fulfill = (await realm.evaluateScript(code)) as StaticJsFunction;

      await realm.enqueueMacrotask(
        fulfill.callEvaluator(realm.types.undefined),
      );

      expect(cb).not.toBeCalled();
    });

    it("Rejects when the promise is rejected", async () => {
      const cb = vitest.fn();
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            callback: cb,
          },
        },
      });

      const code = `
        let reject;
        const p = new Promise((_, r) => {reject = r});
        p.then(undefined, () => {callback()});
        reject;
      `;

      const fulfill = (await realm.evaluateScript(code)) as StaticJsFunction;

      await realm.enqueueMacrotask(
        fulfill.callEvaluator(realm.types.undefined),
      );

      expect(cb).toBeCalled();
    });
  });
});
