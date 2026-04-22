import { describe, it, expect, vi } from "vitest";

import {
  isStaticJsFunction,
  StaticJsConcurrentEvaluationError,
  StaticJsRealm,
  StaticJsSynchronousTaskIncompleteError,
  StaticJsTaskAbortedError,
  StaticJsTaskIterator,
  StaticJsTaskIteratorStackFrame,
  StaticJsTypeCode,
  StaticJsNumber,
} from "../../src/index.js";

describe("E2E: Tasks", () => {
  describe("Operation Iteration", () => {
    it("Should step one AST node per next call", async () => {
      const seenNodes: string[] = [];
      function runTask(task: StaticJsTaskIterator) {
        while (true) {
          const { done } = task.next();
          if (done) {
            break;
          }
          seenNodes.push(task.operation?.operationType ?? "<missing>");
        }
      }

      const realm = StaticJsRealm({
        runTask,
        global: {
          properties: {
            func: {
              value: () => {},
            },
          },
        },
      });

      const code = `func("Hello, world!");`;

      await realm.evaluateScript(code);

      expect(seenNodes).toEqual([
        "File",
        "Program",
        "ExpressionStatement",
        "CallExpression",
        "Identifier",
        "StringLiteral",
      ]);
    });
  });

  describe("Stack frames", () => {
    it("Should provide a stack frame for the top-level code", async () => {
      let capturedFrames: StaticJsTaskIteratorStackFrame[] = [];
      function runTask(task: StaticJsTaskIterator) {
        while (true) {
          const { done } = task.next();
          if (done) {
            break;
          }
          capturedFrames.push(task.stack[0]);
        }
      }

      const code = `const a = 1;\nconst b = 2;\nconst c = 3;`;

      const realm = StaticJsRealm({
        runTask,
      });

      await realm.evaluateScript(code);

      // Captured frames may contain duplicate entry, because we can spend more than one operation
      // at the same location where AST nodes are nested.

      // const a = 1;
      expect(capturedFrames).toContainEqual(
        expect.objectContaining({
          functionName: null,
          sourceLocation: expect.objectContaining({
            character: 0,
            column: 0,
            line: 1,
          }),
        }),
      );

      // const b = 2;
      expect(capturedFrames).toContainEqual(
        expect.objectContaining({
          functionName: null,
          sourceLocation: expect.objectContaining({
            character: 13,
            column: 0,
            line: 2,
          }),
        }),
      );

      // const c = 3;
      expect(capturedFrames).toContainEqual(
        expect.objectContaining({
          functionName: null,
          sourceLocation: expect.objectContaining({
            character: 26,
            column: 0,
            line: 3,
          }),
        }),
      );
    });

    it("Should provide stack frames for nested function calls", async () => {
      let capturedFrames: StaticJsTaskIteratorStackFrame[] = [];
      function runTask(task: StaticJsTaskIterator) {
        while (true) {
          const { done } = task.next();
          if (done) {
            break;
          }
          capturedFrames.push(task.stack[0]);
        }
      }

      const code = `
        function outer() {
          function inner() {
            return 42;
          }
          return inner();
        }
        function after() {
          return 64;
        }
        outer();
        after();
      `;

      const realm = StaticJsRealm({
        runTask,
      });

      await realm.evaluateScript(code);

      interface ExpectedFrame {
        functionName: string | null;
        line: number;
      }

      let expected: ExpectedFrame[] = [
        // outer()
        { functionName: null, line: 11 },
        // inner()
        { functionName: "outer", line: 6 },
        // return 42
        { functionName: "inner", line: 4 },
        // after()
        { functionName: null, line: 12 },
        // return 64
        { functionName: "after", line: 9 },
      ];

      const captured = [...capturedFrames];
      while (expected.length > 0) {
        const expectedFrame = expected.shift()!;
        while (captured.length > 0) {
          const capturedFrame = captured.shift()!;
          if (
            capturedFrame.functionName === expectedFrame.functionName &&
            capturedFrame.sourceLocation?.line === expectedFrame.line
          ) {
            break;
          }
        }
        if (captured.length === 0) {
          throw new Error(
            `Expected frame not found: ${expectedFrame.functionName} at line ${expectedFrame.line}`,
          );
        }
      }

      if (expected.length > 0) {
        throw new Error(
          `Expected frames not found: ${expected
            .map((f) => `${f.functionName} at line ${f.line}`)
            .join(", ")}`,
        );
      }
    });
  });

  describe("Task types", () => {
    it("Should trigger runTask with correct types", async () => {
      const sequence: string[] = [];
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        sequence.push(task.type);
        while (!task.done) {
          task.next();
        }
      });

      const resolved = vi.fn(() => sequence.push("resolved"));

      const realm = StaticJsRealm({
        runTask,
        global: {
          properties: {
            resolve: {
              value: resolved,
            },
          },
        },
      });

      const code = `
      Promise.resolve().then(() => {
        resolve();
      }).then(() => {});
    `;

      await realm.evaluateScript(code);

      expect(sequence).toEqual(["macrotask", "microtask", "resolved", "microtask"]);
    });
  });

  describe("Callee types", () => {
    it("Should trigger evaluate with the right callee type", async () => {
      let calleeType: string | null = null;
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        if (!calleeType) {
          calleeType = task.calleeType;
        }
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

    it("Should trigger host tasks with the right callee type", async () => {
      let calleeType: string | null = null;
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        if (!calleeType) {
          calleeType = task.calleeType;
        }
        while (!task.done) {
          task.next();
        }
      });
      const realm = StaticJsRealm({
        runTask,
      });

      await realm.global.setAsync("test", realm.types.number(42));

      expect(runTask).toHaveBeenCalledTimes(1);
      expect(calleeType).toBe("host");
    });
  });

  describe("Task sources", () => {
    it("Should pass sourceName through task operation metadata", async () => {
      const runTask = vi.fn();
      const realm = StaticJsRealm({
        runTask,
      });

      realm.evaluateScript("2 + 2", {
        sourceName: "test.js",
      });

      await nextTick();

      expect(runTask).toHaveBeenCalledOnce();

      const task = runTask.mock.calls[0][0] as StaticJsTaskIterator;
      task.next();

      expect(task).toMatchObject({
        operation: expect.objectContaining({
          location: expect.objectContaining({
            sourceName: "test.js",
          }),
        }),
      });
    });
  });

  describe("Task runners", () => {
    it("Should run evaluations with the realm runTask handler", async () => {
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });

      const realm = StaticJsRealm({
        runTask,
      });

      const promise = realm.evaluateScript("2 + 2");

      await nextTick();

      expect(runTask).toHaveBeenCalledTimes(1);

      const result = await promise;
      expect(result.toNative()).toBe(4);
    });

    it("Should allow per-evaluation runTask overrides", async () => {
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const realm = StaticJsRealm({});

      const result = await realm.evaluateScript("2 + 2", {
        runTask,
      });

      expect(runTask).toHaveBeenCalledTimes(1);
      expect(result.toNative()).toBe(4);
    });

    it("Should prefer per-evaluation runTask over the realm handler", async () => {
      const runTaskRealm = vi.fn();
      const runTaskEvaluate = vi.fn((task: StaticJsTaskIterator) => {
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

      expect(runTaskRealm).toHaveBeenCalledTimes(0);
      expect(runTaskEvaluate).toHaveBeenCalledTimes(1);
      expect(result.toNative()).toBe(4);
    });
  });

  describe("Task cancellation", () => {
    it("Should abort a task", async () => {
      let iterations = 0;
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        let result: ReturnType<typeof task.next>;
        do {
          result = task.next();
          iterations++;
          if (iterations > 10) {
            task.abort();
            return;
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

    it("Should resume the next queued task after an abort", async () => {
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

      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        queuedTask = task;
      });

      const realm = StaticJsRealm({
        runTask,
      });

      const promise1 = realm.evaluateScript("for(let i = 0; i < 10000; i++) {  }");
      const promise2 = realm.evaluateScript("2 + 2");

      await nextTick();

      expect(runTask).toHaveBeenCalledTimes(1);

      abortTask();

      await expect(promise1).rejects.toThrow(StaticJsTaskAbortedError);

      await nextTick();

      expect(runTask).toHaveBeenCalledTimes(2);

      drainTask();

      const result2 = await promise2;
      expect(result2.toNative()).toBe(4);
    });
  });

  describe("Synchronous tasks", () => {
    it("Should resolve microtasks before returning from evaluateScriptSync", () => {
      const realm = StaticJsRealm();

      realm.evaluateScriptSync(`
        Promise.resolve(5).then(v => {
          globalThis.result = v;
        })
      `);

      const result = realm.global.getSync("result");
      expect(result.toNative()).toBe(5);
    });

    it("Should run evaluateScriptSync with the realm runTaskSync handler", () => {
      const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
        let result: ReturnType<typeof task.next>;
        do {
          result = task.next();
        } while (!result.done);
      });

      const realm = StaticJsRealm({
        runTaskSync,
      });

      const result = realm.evaluateScriptSync("2 + 2");

      expect(runTaskSync).toHaveBeenCalledTimes(1);
      expect(result.toNative()).toBe(4);
    });

    it("Should throw if runTaskSync does not complete the task", () => {
      const runTaskSync = vi.fn();

      const realm = StaticJsRealm({
        runTaskSync,
      });

      expect(() => realm.evaluateScriptSync("2 + 2")).toThrow(
        StaticJsSynchronousTaskIncompleteError,
      );
    });

    it("Should prefer the per-call runTask override for sync evaluation", () => {
      const runTaskRealm = vi.fn();
      const runTaskEvaluate = vi.fn((task: StaticJsTaskIterator) => {
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

      expect(runTaskRealm).toHaveBeenCalledTimes(0);
      expect(runTaskEvaluate).toHaveBeenCalledTimes(1);
      expect(result.toNative()).toBe(4);
    });
  });

  describe("Reentrancy", () => {
    it("Should evaluate synchronous code immediately when inside a task", async () => {
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const realm = StaticJsRealm({
        runTask,
        runTaskSync,
        global: {
          properties: {
            doReentrancy: {
              value: function () {
                return realm.evaluateScriptSync("2 + 2");
              },
            },
          },
        },
      });

      const code = `
        doReentrancy();
      `;

      const result = await realm.evaluateScript(code);

      expect(result.runtimeTypeCode).toBe(StaticJsTypeCode.Number);
      expect((result as StaticJsNumber).value).toBe(4);

      expect(runTask).toHaveBeenCalledTimes(1);
      expect(runTaskSync).toHaveBeenCalledTimes(1);
    });

    it("Should reject synchronous evaluation ouside the current async task", async () => {
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const runTaskSync = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const realm = StaticJsRealm({
        runTask,
        runTaskSync,
      });

      const taskPromise = realm.evaluateExpression("2 + 2");

      expect(() => realm.evaluateExpressionSync("2 + 2")).toThrow(
        StaticJsConcurrentEvaluationError,
      );

      await taskPromise;

      expect(runTaskSync).not.toHaveBeenCalled();
      expect(runTask).toHaveBeenCalledTimes(1);
    });

    it("Should allow reentrancy from a continuation resumed after evaluateScript", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            callEvaluateScriptSync: {
              value: () => realm.evaluateScriptSync("3 + 3").toNative(),
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

      expect(func.toNative()()).toBe(6);
    });
  });
});

function nextTick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
