import { describe, it, expect, vitest } from "vitest";

import {
  evaluateScript,
  isStaticJsFunction,
  isStaticJsNumber,
  isStaticJsPromise,
  StaticJsConcurrentEvaluationError,
  StaticJsRealm,
  StaticJsSynchronousTaskIncompleteError,
  StaticJsTaskAbortedError,
  type StaticJsTaskIterator,
} from "../../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
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

    it("Can modify a global setter value", async () => {
      const globalObjectValue = {
        set x(value: number) {
          globalObjectValue._x = value;
        },
        _x: 42,
      };

      const realm = StaticJsRealm({
        global: {
          value: globalObjectValue,
        },
      });

      await evaluateScript("x = 43", { realm });
      expect(globalObjectValue._x).toBe(43);
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

  describe("evaluateScript", () => {
    it("Handles evaluation", async () => {
      const realm = StaticJsRealm({});

      const result = await realm.evaluateScript("2 + 2");
      expect(result.toJsSync()).toBe(4);
    });

    it("Shares the lexical environment for each evaluation", async () => {
      const realm = StaticJsRealm({});

      await realm.evaluateScript("const x = 42;");
      const result = await realm.evaluateScript("x");
      expect(result.toJsSync()).toBe(42);
    });

    describe("runTask", () => {
      it("Handles evaluation with a StaticJsRealm runTask option", async () => {
        const runTask = vitest.fn((task: StaticJsTaskIterator) => {
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
          } while (!result.done);
        });

        const realm = StaticJsRealm({
          runTask: runTask,
        });

        const promise = realm.evaluateScript("2 + 2");

        await delay(0); // Allow the task to be queued

        expect(runTask).toBeCalledTimes(1);

        const result = await promise;
        expect(result.toJsSync()).toBe(4);
      });

      it("Queues evaluations when called synchronously", async () => {
        let queuedTask: StaticJsTaskIterator | undefined;
        function drainTask() {
          if (!queuedTask) {
            throw new Error("No queued task to drain");
          }

          const task = queuedTask;
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
          } while (!result.done);

          if (queuedTask !== task) {
            throw new Error(
              "Queued task changed while draining previous task.",
            );
          }
          queuedTask = undefined;
        }
        const runTask = vitest.fn((task: StaticJsTaskIterator) => {
          queuedTask = task;
        });

        const realm = StaticJsRealm({
          runTask: runTask,
        });

        const promise1 = realm.evaluateScript("2 + 2");

        const promise2 = realm.evaluateScript("3 + 3");

        await delay(0); // Allow the first task to be queued

        expect(runTask).toBeCalledTimes(1);

        drainTask();

        // This will provide the microtask pump to queue the second task
        const result1 = await promise1;

        expect(result1.toJsSync()).toBe(4);

        expect(runTask).toBeCalledTimes(2);

        drainTask();

        const result2 = await promise2;
        expect(result2.toJsSync()).toBe(6);
      });

      it("Allows tasks to be aborted", async () => {
        let iterations = 0;
        const runTask = vitest.fn((task: StaticJsTaskIterator) => {
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
            iterations++;
            if (iterations > 10) {
              console.log("Aborting task after 10 iterations");
              task.abort();
              return;
            }
          } while (!result.done);
        });

        const realm = StaticJsRealm({
          runTask: runTask,
        });

        await expect(() =>
          realm.evaluateScript("for(let i = 0; i < 10000; i++) {  }"),
        ).rejects.toThrow(StaticJsTaskAbortedError);
      });

      it("Resumes the next task after an aborted task", async () => {
        let queuedTask: StaticJsTaskIterator | undefined;
        function drainTask() {
          if (!queuedTask) {
            throw new Error("No queued task to drain");
          }
          const task = queuedTask;
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
          } while (!result.done);
          if (queuedTask !== task) {
            throw new Error(
              "Queued task changed while draining previous task.",
            );
          }
          queuedTask = undefined;
        }
        function abortTask() {
          if (!queuedTask) {
            throw new Error("No queued task to abort");
          }
          queuedTask.abort();
        }
        const runTask = vitest.fn((task: StaticJsTaskIterator) => {
          queuedTask = task;
        });
        const realm = StaticJsRealm({
          runTask: runTask,
        });

        const promise1 = realm.evaluateScript(
          "for(let i = 0; i < 10000; i++) {  }",
        );
        const promise2 = realm.evaluateScript("2 + 2");

        await delay(0); // Allow the first task to be queued
        expect(runTask).toBeCalledTimes(1);

        abortTask();

        await expect(promise1).rejects.toThrow(StaticJsTaskAbortedError);

        expect(runTask).toBeCalledTimes(2);

        drainTask();

        const result2 = await promise2;
        expect(result2.toJsSync()).toBe(4);
      });

      describe("With runTask option", () => {
        it("Is invoked to run the task", async () => {
          const runTask = vitest.fn((task: StaticJsTaskIterator) => {
            let result: ReturnType<typeof task.next>;
            do {
              result = task.next();
            } while (!result.done);
          });
          const realm = StaticJsRealm({});

          const result = await realm.evaluateScript("2 + 2", {
            runTask,
          });
          expect(runTask).toBeCalledTimes(1);
          expect(result.toJsSync()).toBe(4);
        });

        it("Does not invoke the realm runTask handler", async () => {
          const runTaskRealm = vitest.fn();
          const runTaskEvaluate = vitest.fn((task: StaticJsTaskIterator) => {
            let result: ReturnType<typeof task.next>;
            do {
              result = task.next();
            } while (!result.done);
          });

          const realm = StaticJsRealm({
            runTask: runTaskRealm,
          });

          const result = await realm.evaluateScript("2 + 2", {
            runTask: runTaskEvaluate,
          });
          expect(runTaskRealm).toBeCalledTimes(0);
          expect(runTaskEvaluate).toBeCalledTimes(1);
          expect(result.toJsSync()).toBe(4);
        });
      });
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
        expect(invocationCompleted).toBeCalledTimes(0);
        expect(resolver).toBeDefined();
        resolver!();
        await result.toJsSync();
        expect(invocationCompleted).toBeCalledTimes(1);
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
          expect(result.toJsSync()).toBe(42);
        });

        it("Returns a promise if top-level await is used", async () => {
          const realm = StaticJsRealm({});

          const result = await realm.evaluateScript(
            `await Promise.resolve(4);`,
            { topLevelAwait: "auto" },
          );
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
        const finalValue = await result.toJsSync();
        expect(finalValue).toBe(42);
      });
    });
  });

  describe("evaluateScriptSync", () => {
    it("Handles evaluation", () => {
      const realm = StaticJsRealm({});

      const result = realm.evaluateScriptSync("2 + 2");
      expect(result.toJsSync()).toBe(4);
    });

    it("Synchronously resolves microtasks before returning", () => {
      const realm = StaticJsRealm();

      realm.evaluateScriptSync(`
        Promise.resolve(5).then(v => {
          globalThis.result = v;
        })
      `);

      const result = realm.global.getSync("result");
      expect(result.toJsSync()).toBe(5);
    });

    it("Handles evaluation with a StaticJsRealm runTaskSync option", () => {
      const runTaskSync = vitest.fn((task: StaticJsTaskIterator) => {
        let result: ReturnType<typeof task.next>;
        do {
          result = task.next();
        } while (!result.done);
      });

      const realm = StaticJsRealm({
        runTaskSync,
      });

      const result = realm.evaluateScriptSync("2 + 2");

      expect(runTaskSync).toBeCalledTimes(1);

      expect(result.toJsSync()).toBe(4);
    });

    it("Throws if runTaskSync does not complete the task", () => {
      const runTaskSync = vitest.fn();

      const realm = StaticJsRealm({
        runTaskSync,
      });

      expect(() => realm.evaluateScriptSync("2 + 2")).toThrow(
        StaticJsSynchronousTaskIncompleteError,
      );
    });

    it("Throws if called while a task is running from outside the task", () => {
      const realm = StaticJsRealm();
      realm.evaluateScript("2 + 2");
      expect(() => realm.evaluateScriptSync("3 + 3")).toThrow(
        StaticJsConcurrentEvaluationError,
      );
    });

    it("Permits calls when nested inside another evaluateScript task", async () => {
      const realm = StaticJsRealm({
        global: {
          value: {
            callEvaluateScriptSync: () => {
              return realm.evaluateScriptSync("3 + 3").toJsSync();
            },
          },
        },
      });

      const result = await realm.evaluateScript(`
        const result = callEvaluateScriptSync();
        if (result !== 6) {
          throw new Error('Unexpected result: ' + result);
        }
        result;
      `);

      expect(isStaticJsNumber(result)).toBe(true);
      expect(result.toJsSync()).toBe(6);
    });

    it("Permits calls when nested inside a continuation of another evaluateScript task", async () => {
      const realm = StaticJsRealm({
        global: {
          value: {
            callEvaluateScriptSync: () => {
              return realm.evaluateScriptSync("3 + 3").toJsSync();
            },
          },
        },
      });

      const func = await realm.evaluateScript(`
        function fn() {
          return callEvaluateScriptSync();
        }
        fn;
      `);
      if (!isStaticJsFunction(func)) {
        throw new Error("Expected a function");
      }

      func.toJsSync()();
    });
  });

  it("Accepts a runTask option", () => {
    const runTaskRealm = vitest.fn();
    const runTaskEvaluate = vitest.fn((task: StaticJsTaskIterator) => {
      let result: ReturnType<typeof task.next>;
      do {
        result = task.next();
      } while (!result.done);
    });

    const realm = StaticJsRealm({
      runTaskSync: runTaskRealm,
    });

    const result = realm.evaluateScriptSync("2 + 2", {
      runTask: runTaskEvaluate,
    });
    expect(runTaskRealm).toBeCalledTimes(0);
    expect(runTaskEvaluate).toBeCalledTimes(1);
    expect(result.toJsSync()).toBe(4);
  });
});

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
