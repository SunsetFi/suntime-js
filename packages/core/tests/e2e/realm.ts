import { describe, it, expect, vitest, vi } from "vitest";

import { isStaticJsPromise, StaticJsRealm, StaticJsSyntaxError } from "../../src/index.js";
import { StaticJsTaskCalleeType } from "../../src/runtime/tasks/StaticJsTaskCalleeType.js";
import { StaticJsTaskIterator } from "../../src/runtime/tasks/StaticJsTaskIterator.js";

describe("E2E: Realm", () => {
  describe("Instance", () => {
    it("Supports instanceof checks", () => {
      const realm = StaticJsRealm();
      expect(realm instanceof StaticJsRealm).toBe(true);
    });
  });

  describe("Creation", () => {
    it("Supports direct calls", () => {
      const realm = StaticJsRealm();
      expect(realm).toBeInstanceOf(StaticJsRealm);
    });

    it("Supports new calls", () => {
      const realm = new StaticJsRealm();
      expect(realm).toBeInstanceOf(StaticJsRealm);
    });
  });

  describe("evaluateScript", () => {
    it("Handles evaluation", async () => {
      const realm = StaticJsRealm({});

      const result = await realm.evaluateScript("const result = 2 + 2; result");
      expect(result.toNative()).toBe(4);
    });

    it("Handles syntax errors", async () => {
      const realm = StaticJsRealm({});

      try {
        await realm.evaluateScript("const result = ;");
        throw new Error("Expected syntax error was not thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(StaticJsSyntaxError);
      }
    });

    it("Shares the lexical environment for each evaluation", async () => {
      const realm = StaticJsRealm({});

      await realm.evaluateScript("const x = 42;");
      const result = await realm.evaluateScript("x");
      expect(result.toNative()).toBe(42);
    });

    describe("Top-level await", () => {
      it("Handles top-level await", async () => {
        let resolver: (() => void) | undefined = undefined;
        const invocationCompleted = vitest.fn();
        const realm = StaticJsRealm({
          global: {
            value: {
              invocationCompleted,
              setResolver: (r: () => void) => {
                resolver = r;
              },
            },
          },
        });

        const result = await realm.evaluateScript(
          `
          const value = await new Promise(resolve => {
            setResolver(resolve);
          });
          invocationCompleted();
        `,
          { topLevelAwait: true },
        );
        expect(isStaticJsPromise(result)).toBe(true);
        expect(invocationCompleted).toHaveBeenCalledTimes(0);
        expect(resolver).toBeDefined();
        resolver!();
        await result.toNative();
        expect(invocationCompleted).toHaveBeenCalledTimes(1);
      });

      describe("Auto", () => {
        it("Does not return a promise if no top-level await is used", async () => {
          const realm = StaticJsRealm();

          const result = await realm.evaluateScript(
            `
            const value = 42;
            value;
          `,
            { topLevelAwait: "auto" },
          );

          expect(isStaticJsPromise(result)).toBe(false);
          expect(result.toNative()).toBe(42);
        });

        it("Returns a promise if top-level await is used", async () => {
          const realm = StaticJsRealm({});

          const result = await realm.evaluateScript(`await Promise.resolve(4);`, {
            topLevelAwait: "auto",
          });
          expect(isStaticJsPromise(result)).toBe(true);
        });
      });

      it("Resolves the promise to the script last value", async () => {
        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(
          `
          const value = await new Promise(resolve => {
            resolve(42)
          });
          value;
        `,
          { topLevelAwait: true },
        );

        expect(isStaticJsPromise(result)).toBe(true);
        const finalValue = await result.toNative();
        expect(finalValue).toBe(42);
      });
    });

    it("Queues multiple evaluations in order", async () => {
      const realm = StaticJsRealm();

      const code = `
        if (typeof globalThis.__orderTest === "undefined") {
          globalThis.__orderTest = 0;
        }
        globalThis.__orderTest = globalThis.__orderTest + 1;
      `;

      // Note: This test is sensitive to the async / awaits done within the realm.
      // This works because evaluateScript is not async and returns a direct promise.

      const promise1 = realm.evaluateScript(code);
      const promise2 = realm.evaluateScript(code);
      const promise3 = realm.evaluateScript(code);

      expect(realm.global.getSync("__orderTest")?.toNative()).toBeUndefined();

      await promise1;
      expect(realm.global.getSync("__orderTest")?.toNative()).toBe(1);

      await promise2;
      expect(realm.global.getSync("__orderTest")?.toNative()).toBe(2);

      await promise3;
      expect(realm.global.getSync("__orderTest")?.toNative()).toBe(3);
    });

    describe("Tasks", () => {
      it("Uses the realm's runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateScript("2 + 2");
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Accepts a custom runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask: () => {
            throw new Error("Unexpected call of realm runTask");
          },
        });

        await realm.evaluateScript("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Marks the task async", async () => {
        let async: boolean | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          async = task.async;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateScript("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
        expect(async).toBe(true);
      });

      it("Uses the evaluate callee type", async () => {
        let calleeType: StaticJsTaskCalleeType | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          calleeType = task.calleeType;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateScript("2 + 2");
        expect(runTask).toHaveBeenCalledTimes(1);
        expect(calleeType).toBe("evaluate");
      });
    });
  });

  describe("evaluateScriptSync", () => {
    it("Handles evaluation", () => {
      const realm = StaticJsRealm({});

      const result = realm.evaluateScriptSync("2 + 2");
      expect(result.toNative()).toBe(4);
    });

    describe("Tasks", () => {
      it("Uses the realm's runTaskSync", () => {
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateScriptSync("2 + 2");
        expect(runTaskSync).toHaveBeenCalledTimes(1);
      });

      it("Accepts a custom runTaskSync", () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync: () => {
            throw new Error("Unexpected call of realm runTaskSync");
          },
        });

        realm.evaluateScriptSync("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Uses the evaluate callee type", async () => {
        let calleeType: StaticJsTaskCalleeType | null = null;
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          calleeType = task.calleeType;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateScriptSync("2 + 2");
        expect(runTaskSync).toHaveBeenCalledTimes(1);
        expect(calleeType).toBe("evaluate");
      });

      it("Marks the task sync", async () => {
        let async: boolean | null = null;
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          async = task.async;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateScriptSync("2 + 2", { runTask: runTaskSync });
        expect(runTaskSync).toHaveBeenCalledTimes(1);
        expect(async).toBe(false);
      });
    });
  });

  describe("evaluateExpression", () => {
    it("Handles evaluation", async () => {
      const realm = StaticJsRealm({});

      const result = await realm.evaluateExpression("2 + 2");
      expect(result.toNative()).toBe(4);
    });

    it("Handles syntax errors", async () => {
      const realm = StaticJsRealm({});

      try {
        await realm.evaluateExpression(";");
        throw new Error("Expected syntax error was not thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(StaticJsSyntaxError);
      }
    });

    it("Shares the lexical environment", async () => {
      const realm = StaticJsRealm({});

      await realm.evaluateScript("const x = 42;");
      const result = await realm.evaluateExpression("x");
      expect(result.toNative()).toBe(42);
    });

    describe("Tasks", () => {
      it("Uses the realm's runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateExpression("2 + 2");
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Accepts a custom runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask: () => {
            throw new Error("Unexpected call of realm runTask");
          },
        });

        await realm.evaluateExpression("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Uses the evaluate callee type", async () => {
        let calleeType: StaticJsTaskCalleeType | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          calleeType = task.calleeType;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateExpression("2 + 2");
        expect(runTask).toHaveBeenCalledTimes(1);
        expect(calleeType).toBe("evaluate");
      });

      it("Marks the task async", async () => {
        let async: boolean | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          async = task.async;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateExpression("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
        expect(async).toBe(true);
      });
    });
  });

  describe("evaluateExpressionSync", () => {
    it("Handles evaluation", () => {
      const realm = StaticJsRealm({});

      const result = realm.evaluateExpressionSync("2 + 2");
      expect(result.toNative()).toBe(4);
    });

    describe("Tasks", () => {
      it("Uses the realm's runTaskSync", () => {
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateExpressionSync("2 + 2");
        expect(runTaskSync).toHaveBeenCalledTimes(1);
      });

      it("Accepts a custom runTaskSync", () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync: () => {
            throw new Error("Unexpected call of realm runTaskSync");
          },
        });

        realm.evaluateExpressionSync("2 + 2", { runTask });
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("Uses the evaluate callee type", async () => {
        let calleeType: StaticJsTaskCalleeType | null = null;
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          calleeType = task.calleeType;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateExpressionSync("2 + 2");
        expect(runTaskSync).toHaveBeenCalledTimes(1);
        expect(calleeType).toBe("evaluate");
      });

      it("Marks the task sync", async () => {
        let async: boolean | null = null;
        const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
          async = task.async;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTaskSync,
        });

        realm.evaluateExpressionSync("2 + 2", { runTask: runTaskSync });
        expect(runTaskSync).toHaveBeenCalledTimes(1);
        expect(async).toBe(false);
      });
    });
  });

  describe("evaluateModule", () => {
    it("Handles evaluation", async () => {
      const realm = StaticJsRealm({});

      const module = await realm.evaluateModule("export const result = 2 + 2;");
      const result = await module.getExportAsync("result");
      expect(result?.toNative()).toBe(4);
    });

    it("Handles syntax errors", async () => {
      const realm = StaticJsRealm({});

      try {
        await realm.evaluateModule("export const result = ;");
        throw new Error("Expected syntax error was not thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(StaticJsSyntaxError);
      }
    });

    describe("Tasks", () => {
      it("Uses the realm's runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateModule("export const result = 2 + 2;");

        // Note: Used to be 1, but now we use asyncBlockStart which ticks a promise resolution.
        expect(runTask).toHaveBeenCalledTimes(2);
      });

      it("Accepts a custom runTask", async () => {
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask: () => {
            throw new Error("Unexpected call of realm runTask");
          },
        });

        await realm.evaluateModule("export const result = 2 + 2;", { runTask });

        // Note: Used to be 1, but now we use asyncBlockStart which ticks a promise resolution.
        expect(runTask).toHaveBeenCalledTimes(2);
      });

      it("Uses the evaluate callee type", async () => {
        let calleeType: StaticJsTaskCalleeType | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          calleeType = task.calleeType;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateModule("export const result = 2 + 2;");

        // Note: Used to be 1, but now we use asyncBlockStart which ticks a promise resolution.
        expect(runTask).toHaveBeenCalledTimes(2);

        expect(calleeType).toBe("evaluate");
      });

      it("Marks the task async", async () => {
        let async: boolean | null = null;
        const runTask = vi.fn((task: StaticJsTaskIterator) => {
          async = task.async;
          while (!task.done) {
            task.next();
          }
        });
        const realm = StaticJsRealm({
          runTask,
        });

        await realm.evaluateModule("export const result = 2 + 2;", { runTask });

        // Note: Used to be 1, but now we use asyncBlockStart which ticks a promise resolution.
        expect(runTask).toHaveBeenCalledTimes(2);
        expect(async).toBe(true);
      });
    });
  });
});
