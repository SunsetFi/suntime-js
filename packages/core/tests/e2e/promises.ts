import { describe, it, expect, vi } from "vitest";

import { evaluateScript, type StaticJsFunction, StaticJsRealm } from "../../src/index.js";

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
      const cb = vi.fn();
      const realm = StaticJsRealm({
        global: {
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
      await fulfill.callAsync(realm.types.undefined);

      expect(cb).toHaveBeenCalledTimes(1);
    });

    it("Invokes the fulfillment handler exactly once", async () => {
      const cb = vi.fn();
      const realm = StaticJsRealm({
        global: {
          value: {
            callback: cb,
          },
        },
      });

      const code = `
      let count = 0;
      Promise.resolve(4).then(callback);
    `;

      await realm.evaluateScript(code);
      expect(cb).toHaveBeenCalledTimes(1);
    });

    it("Does not fulfill when the promise is rejected", async () => {
      const cb = vi.fn();
      const realm = StaticJsRealm({
        global: {
          value: {
            callback: cb,
          },
        },
      });

      const code = `
        let reject;
        const p = new Promise((_, r) => {reject = r});
        p.then(() => {callback()}, () => {});
        reject;
      `;

      const fulfill = (await realm.evaluateScript(code)) as StaticJsFunction;
      await fulfill.callAsync(realm.types.undefined);

      expect(cb).not.toHaveBeenCalledTimes(1);
    });

    it("Rejects when the promise is rejected", async () => {
      const cb = vi.fn();
      const realm = StaticJsRealm({
        global: {
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
      await fulfill.callAsync(realm.types.undefined);

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  it("Captures unhandled rejections", async () => {
    const code = `
      const p = Promise.resolve(1);
      p.then(() => { throw new Error("Rejected!") });
    `;

    const realm = StaticJsRealm();

    await expect(() => realm.evaluateScript(code)).rejects.toThrow(
      expect.objectContaining({
        name: "StaticJsUnhandledRejectionError",
        // FIXME: Enabling this deadlocks the test runner???
        // Its definitely not error.message itself, because letting realm.evaluateScript throw into the test records the message fine.
        // message: expect.stringContaining("Rejected!"),
      }),
    );
  });

  it("Continues on the same task", async () => {
    const code = `
      Promise.resolve(1)
        .then(() => Promise.resolve(2))
        .then(() => Promise.resolve(3))
        .then(() => done())
    `;

    const runTask = vi.fn((iter) => {
      while (!iter.done) {
        iter.next();
      }
    });
    const done = vi.fn();

    const realm = StaticJsRealm({
      runTask,
      global: {
        properties: {
          done: {
            value: done,
          },
        },
      },
    });

    await realm.evaluateExpression(code);

    expect(runTask).toHaveBeenCalledTimes(1);
    expect(done).toHaveBeenCalledTimes(1);
  });
});
