import { describe, it, expect, vi } from "vitest";

import {
  StaticJsRealm,
  StaticJsTaskIterator,
  StaticJsTaskIteratorStackFrame,
  StaticJsTypeCode,
  StaticJsNumber,
} from "../../src/index.js";

describe("E2E: Tasks", () => {
  describe("Operation Iteration", () => {
    it("Should step one AST node per task", async () => {
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
            console.log(
              "Found expected frame",
              expectedFrame.functionName,
              "at line",
              expectedFrame.line,
            );
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

  describe("Microtasks", () => {
    it("Should follow up microtasks with new task iterators", async () => {
      const sequence: string[] = [];
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        sequence.push("task");
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

      expect(sequence).toEqual(["task", "task", "resolved", "task"]);
    });
  });

  describe("Reentrancy", () => {
    it("Should evaluate synchronous code immediately when inside a task", async () => {
      const runTask = vi.fn((task: StaticJsTaskIterator) => {
        while (!task.done) {
          task.next();
        }
      });
      const runTaskSync = vi.fn((task: StaticJsTaskIterator) => task.abort());
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
      expect(runTaskSync).toHaveBeenCalledTimes(0);
    });
  });
});
