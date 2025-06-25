import { describe, it, expect, vitest } from "vitest";

import {
  StaticJsRealm,
  StaticJsTaskAbortedError,
  type StaticJsTask,
} from "../../src/index.js";

describe("E2E: Tasks", () => {
  describe("StaticJsRealm.evaluateScript", () => {
    it("Handles evaluation without a StaticJsRealm runTask option", async () => {
      const realm = StaticJsRealm({});

      const result = await realm.evaluateScript("2 + 2");
      expect(result.toJsSync()).toBe(4);
    });

    it("Handles evaluation with a StaticJsRealm runTask option", async () => {
      const runTask = vitest.fn((task: StaticJsTask) => {
        let result: ReturnType<typeof task.next>;
        do {
          result = task.next();
        } while (!result.done);
      });

      const realm = StaticJsRealm({
        runTask,
      });

      const promise = realm.evaluateScript("2 + 2");

      await delay(0); // Allow the task to be queued

      expect(runTask).toBeCalledTimes(1);

      const result = await promise;
      expect(result.toJsSync()).toBe(4);
    });

    it("Queues evaluations when called synchronously", async () => {
      let queuedTask: StaticJsTask | undefined;
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
          throw new Error("Queued task changed while draining previous task.");
        }
        queuedTask = undefined;
      }
      const runTask = vitest.fn((task: StaticJsTask) => {
        queuedTask = task;
      });

      const realm = StaticJsRealm({
        runTask,
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
      const runTask = vitest.fn((task: StaticJsTask) => {
        let result: ReturnType<typeof task.next>;
        do {
          result = task.next();
          iterations++;
          if (iterations > 10) {
            console.log("Aborting task after 10 iterations");
            task.abort();
          }
        } while (!result.done);
      });

      const realm = StaticJsRealm({
        runTask,
      });

      await expect(() =>
        realm.evaluateScript("for(let i = 0; i < 10000; i++) {  }"),
      ).rejects.toThrow(StaticJsTaskAbortedError);
    });

    it("Resumes the next task after an aborted task", async () => {
      let queuedTask: StaticJsTask | undefined;
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
          throw new Error("Queued task changed while draining previous task.");
        }
        queuedTask = undefined;
      }
      function abortTask() {
        if (!queuedTask) {
          throw new Error("No queued task to abort");
        }
        queuedTask.abort();
      }
      const runTask = vitest.fn((task: StaticJsTask) => {
        queuedTask = task;
      });
      const realm = StaticJsRealm({
        runTask,
      });

      let promise1Error: unknown | undefined;
      const promise1 = realm
        .evaluateScript("for(let i = 0; i < 10000; i++) {  }")
        .catch((e) => {
          promise1Error = e;
        });
      const promise2 = realm.evaluateScript("2 + 2");

      await delay(0); // Allow the first task to be queued
      expect(runTask).toBeCalledTimes(1);
      abortTask();

      await promise1;
      expect(promise1Error).toBeInstanceOf(StaticJsTaskAbortedError);

      expect(runTask).toBeCalledTimes(2);
      drainTask();
      const result2 = await promise2;
      expect(result2.toJsSync()).toBe(4);
    });

    describe("With taskRunner option", () => {
      it("Is invoked to run the task", async () => {
        const taskRunner = vitest.fn((task: StaticJsTask) => {
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
          } while (!result.done);
        });
        const realm = StaticJsRealm({});

        const result = await realm.evaluateScript("2 + 2", {
          taskRunner,
        });
        expect(taskRunner).toBeCalledTimes(1);
        expect(result.toJsSync()).toBe(4);
      });

      it("Does not invoke the realm runTask handler", async () => {
        const runTask = vitest.fn();
        const taskRunner = vitest.fn((task: StaticJsTask) => {
          let result: ReturnType<typeof task.next>;
          do {
            result = task.next();
          } while (!result.done);
        });

        const realm = StaticJsRealm({
          runTask,
        });

        const result = await realm.evaluateScript("2 + 2", {
          taskRunner,
        });
        expect(runTask).toBeCalledTimes(0);
        expect(taskRunner).toBeCalledTimes(1);
        expect(result.toJsSync()).toBe(4);
      });
    });
  });
});

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
