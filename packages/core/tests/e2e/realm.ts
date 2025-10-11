import { describe, it, expect, vitest } from "vitest";

import {
  evaluateScript,
  StaticJsRealm,
  StaticJsTaskAbortedError,
  type StaticJsTaskIterator,
} from "../../src/index.js";

describe("E2E: Realm", () => {
  describe("Globals", () => {
    it("Sets a global value", async () => {
      const realm = StaticJsRealm({
        globalObject: {
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
        globalObject: {
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
        globalObject: {
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
        globalObject: {
          value: globalObjectValue,
        },
      });

      const result = await evaluateScript("fn()", { realm });
      expect(result).toEqual(42);
    });

    it("Persists globals across invocations", async () => {
      const realm = StaticJsRealm();
      await evaluateScript("global.x = 42;", { realm });
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

        console.log("Aborting task");
        abortTask();

        console.log("Waiting for promise1 to reject");
        await expect(promise1).rejects.toThrow(StaticJsTaskAbortedError);
        console.log("promise1 rejected");

        expect(runTask).toBeCalledTimes(2);

        console.log("Draining second task");
        drainTask();
        console.log("Second task drained");

        console.log("Waiting for promise2 to resolve");
        const result2 = await promise2;
        console.log("promise2 resolved");
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
  });

  describe("evaluateScriptSync", () => {
    it("Handles evaluation", () => {
      const realm = StaticJsRealm({});

      const result = realm.evaluateScriptSync("2 + 2");
      expect(result.toJsSync()).toBe(4);
    });

    it("Throws if a task is already running", () => {
      const realm = StaticJsRealm();
      realm.evaluateScript("2 + 2");

      expect(() => realm.evaluateScriptSync("3 + 3")).toThrow(
        "Cannot run a synchronous task while another task is running.",
      );
    });

    it("Synchronously resolves microtasks before returning", () => {
      const realm = StaticJsRealm();

      realm.evaluateScriptSync(`
        Promise.resolve(5).then(v => {
          global.result = v;
        })
      `);

      const result = realm.globalObject.getPropertySync("result");
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
        "Task did not complete synchronously.",
      );
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
