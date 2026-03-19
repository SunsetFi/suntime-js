import {
  StaticJsRealm,
  type StaticJsTaskIterator,
  type StaticJsTaskIteratorOperation,
} from "@suntime-js/core";

import { createStaticJsDebugger } from "../../src/index.js";

const createDeferredStartSession = () => {
  const capturedTasks: StaticJsTaskIterator[] = [];

  const debuggerInstance = createStaticJsDebugger({
    realm: StaticJsRealm(),
    runTask(task) {
      capturedTasks.push(task);
    },
  });

  const session = debuggerInstance.createSession({
    launch: {
      sourceKind: "script",
      sourceName: "start-immediate-test.js",
      sourceText: "const value = 1;\nvalue + 1;",
    },
  });

  const getCapturedTask = (): StaticJsTaskIterator => {
    const task = capturedTasks[0];
    if (!task) {
      throw new Error("Expected runTask to capture the debug iterator.");
    }

    return task;
  };

  const exhaustEvaluation = (): void => {
    const task = getCapturedTask();
    while (!task.done && !task.aborted) {
      task.next();
    }
  };

  return {
    session,
    capturedTasks,
    getCapturedTask,
    exhaustEvaluation,
  };
};

describe("StaticJsDebugSession", () => {
  describe("entry behavior", () => {
    it("pauses on entry", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "entry-test.js",
          sourceText: "const value = 1;\nvalue + 1;",
          stopOnEntry: true,
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent?.reason).toBe("entry");
      expect(session.state).toBe("paused");
    });

    it("captures the entry source in the snapshot", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "entry-test.js",
          sourceText: "const value = 1;\nvalue + 1;",
          stopOnEntry: true,
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent?.snapshot?.sourceName).toBe("entry-test.js");
    });

    it("exposes a single-frame stack on entry", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "entry-test.js",
          sourceText: "const value = 1;\nvalue + 1;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      expect(session.getStack()).toHaveLength(1);
      expect(session.getStack()[0]?.sourceName).toBe("entry-test.js");
    });
  });

  describe("breakpoint behavior", () => {
    it("stops on a configured line breakpoint", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "breakpoint-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          breakpoints: [
            {
              sourceName: "breakpoint-test.js",
              line: 2,
            },
          ],
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent?.reason).toBe("breakpoint");
    });

    it("captures the paused source location for a breakpoint stop", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "breakpoint-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          breakpoints: [
            {
              sourceName: "breakpoint-test.js",
              line: 2,
            },
          ],
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent?.snapshot?.sourceName).toBe("breakpoint-test.js");
      expect(stopEvent?.snapshot?.line).toBe(2);
    });

    it("continues past a breakpoint instead of stopping on the same line again", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "breakpoint-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          breakpoints: [
            {
              sourceName: "breakpoint-test.js",
              line: 2,
            },
          ],
        },
      });

      const firstStopEvent = await session.startAndWait();
      expect(firstStopEvent?.reason).toBe("breakpoint");

      const secondStopEvent = await session.continueAndWait();

      expect(secondStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });
  });

  describe("stepping behavior", () => {
    it("pauses again after stepping from an entry stop", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();
      const stopEvent = await session.stepOverAndWait();

      expect(stopEvent?.reason).toBe("step");
      expect(session.state).toBe("paused");
    });

    it("captures a snapshot after stepping", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();
      const stopEvent = await session.stepOverAndWait();

      expect(stopEvent?.snapshot).not.toBeNull();
    });

    it("advances to the next statement on each step in a straight-line script", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-lines-test.js",
          sourceText: "const a = 1;\nconst b = 2;\nconst c = 3;",
          stopOnEntry: true,
        },
      });

      const entryStopEvent = await session.startAndWait();
      expect(entryStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 1,
        column: 0,
      });

      const secondStopEvent = await session.stepOverAndWait();
      expect(secondStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 2,
        column: 0,
      });

      const thirdStopEvent = await session.stepOverAndWait();
      expect(thirdStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 3,
        column: 0,
      });

      const completionStopEvent = await session.stepOverAndWait();
      expect(completionStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("skips expression nodes when stepping", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-expression-test.js",
          sourceText: "const a = 1;\na + 1;\nconst b = 4;",
          stopOnEntry: true,
        },
      });

      const entryStopEvent = await session.startAndWait();
      expect(entryStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 1,
        column: 0,
      });

      const expressionStopEvent = await session.stepOverAndWait();
      expect(expressionStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 3,
        column: 0,
      });

      const completionStopEvent = await session.stepOverAndWait();
      expect(completionStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("does not skip call expressions expression nodes when stepping", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-expression-test.js",
          sourceText: "const a = 1;\na + Math.random();\nconst b = 4;",
          stopOnEntry: true,
        },
      });

      const entryStopEvent = await session.startAndWait();
      expect(entryStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 1,
        column: 0,
      });

      const callStopEvent = await session.stepOverAndWait();
      expect(callStopEvent?.snapshot).toMatchObject({
        operationType: "CallExpression",
        line: 2,
        column: 4,
      });

      const expressionStopEvent = await session.stepOverAndWait();
      expect(expressionStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 3,
        column: 0,
      });

      const completionStopEvent = await session.stepOverAndWait();
      expect(completionStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("steps over a function call without pausing in the callee", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-over-call-test.js",
          sourceText: [
            "function addOne(value) {",
            "  const nextValue = value + 1;",
            "  return nextValue;",
            "}",
            "const result = addOne(1);",
            "const final = 1",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      const declarationStopEvent = await session.startAndWait();
      expect(declarationStopEvent?.snapshot).toMatchObject({
        operationType: "FunctionDeclaration",
        line: 1,
        column: 0,
      });

      const callSiteStopEvent = await session.stepOverAndWait();
      expect(callSiteStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 5,
      });

      const callStopEvent = await session.stepOverAndWait();
      expect(callStopEvent?.snapshot).toMatchObject({
        operationType: "CallExpression",
        line: 5,
      });

      const callerStopEvent = await session.stepOverAndWait();
      expect(callerStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 6,
      });
    });

    it("steps into the first visible statement inside a called function", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-into-call-test.js",
          sourceText: [
            "function addOne(value) {",
            "  const nextValue = value + 1;",
            "  return nextValue;",
            "}",
            "const result = addOne(1);",
            "result;",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const callSiteStopEvent = await session.stepOverAndWait();
      expect(callSiteStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(callSiteStopEvent?.snapshot?.line).toBe(5);

      const callStopEvent = await session.stepOverAndWait();
      expect(callStopEvent?.snapshot?.operationType).toBe("CallExpression");
      expect(callStopEvent?.snapshot?.line).toBe(5);

      const calleeStopEvent = await session.stepIntoAndWait();
      expect(calleeStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(calleeStopEvent?.snapshot?.line).toBe(2);
    });

    it("falls back to the next visible statement when stepInto stays in the same frame", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-into-fallback-test.js",
          sourceText: "const a = 1;\nconst b = a + 1;",
          stopOnEntry: true,
        },
      });

      const variableStopEvent = await session.startAndWait();
      expect(variableStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 1,
      });

      const expressionStopEvent = await session.stepIntoAndWait();
      expect(expressionStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 2,
      });
    });

    it("steping behaves correctly in for loops", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm({
          global: {
            value: {
              console: {
                log: (...args: unknown[]) => args,
              },
            },
          },
        }),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-over-loop-repeat-test.js",
          sourceText: ["for (let i = 0; i < 2; i++) {", '  console.log("Hello " + i);', "}"].join(
            "\n",
          ),
          stopOnEntry: true,
        },
      });

      // For statement
      const firstLoopStopEvent = await session.startAndWait();
      expect(firstLoopStopEvent?.snapshot).toMatchObject({
        operationType: "ForStatement",
        line: 1,
        column: 0,
      });

      // Init
      const secondLoopStopEvent = await session.stepOverAndWait();
      expect(secondLoopStopEvent?.snapshot).toMatchObject({
        operationType: "VariableDeclaration",
        line: 1,
        column: 5,
      });

      // Step into hits Condition
      // FIXME: We should make stepOver do this too.
      // That requires knowing what node we are on and what its parent is.
      const conditionStopEvent = await session.stepIntoAndWait();
      expect(conditionStopEvent?.snapshot).toMatchObject({
        operationType: "BinaryExpression",
        line: 1,
        column: 16,
      });

      // Body
      const bodyStopEvent = await session.stepOverAndWait();
      expect(bodyStopEvent?.snapshot).toMatchObject({
        operationType: "CallExpression",
        line: 2,
        column: 2,
      });

      // Update
      const updateStopEvent = await session.stepOverAndWait();
      expect(updateStopEvent?.snapshot).toMatchObject({
        operationType: "UpdateExpression",
        line: 1,
        column: 23,
      });

      // Body
      // stepOver skips condition.  For now.
      const body2StopEvent = await session.stepOverAndWait();
      expect(body2StopEvent?.snapshot).toMatchObject({
        operationType: "CallExpression",
        line: 2,
        column: 2,
      });

      // Update
      const update2StopEvent = await session.stepOverAndWait();
      expect(update2StopEvent?.snapshot).toMatchObject({
        operationType: "UpdateExpression",
        line: 1,
        column: 23,
      });

      // Test again, loop back to body
      const terminalStopEvent = await session.stepOverAndWait();
      expect(terminalStopEvent).toBeNull();
    });

    it("steps out to the next visible statement in the caller", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-out-test.js",
          sourceText: [
            "function addOne(value) {",
            "  const nextValue = value + 1;",
            "  return nextValue;",
            "}",
            "const result = addOne(1);",
            "const next = null;",
          ].join("\n"),
          breakpoints: [
            {
              sourceName: "step-out-test.js",
              line: 2,
            },
          ],
        },
      });

      const calleeStopEvent = await session.startAndWait();
      expect(calleeStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(calleeStopEvent?.snapshot?.line).toBe(2);

      const callerStopEvent = await session.stepOutAndWait();
      expect(callerStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(callerStopEvent?.snapshot?.line).toBe(6);
    });
  });

  describe("other behavior", () => {
    it("transitions to running on start", async () => {
      const { session, capturedTasks } = createDeferredStartSession();

      await session.start();

      expect(session.state).toBe("running");
      expect(capturedTasks).toHaveLength(1);
    });

    it("waitForStop throws when evaluation completes without stopping", async () => {
      const { session, exhaustEvaluation } = createDeferredStartSession();

      await session.start();
      exhaustEvaluation();

      await expect(session.waitForStop()).rejects.toThrow(
        "Debug session terminated before stopping.",
      );
    });

    it("transitions to completed on exhausting the evaluation", async () => {
      const { session, exhaustEvaluation } = createDeferredStartSession();

      const terminationPromise = new Promise<void>((resolve) => {
        session.onDidTerminate(() => {
          resolve();
        });
      });

      await session.start();
      exhaustEvaluation();

      await terminationPromise;

      expect(session.state).toBe("completed");
    });

    it("honors a cooperative pause request while running", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
        runTask(task) {
          const pump = () => {
            if (task.done || task.aborted) {
              return;
            }

            task.next();

            if (!task.done && !task.aborted) {
              setTimeout(pump, 0);
            }
          };

          setTimeout(pump, 0);
        },
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "pause-test.js",
          sourceText: "let total = 0;\nfor (let i = 0; i < 100; i++) { total += i; }\ntotal;",
        },
      });

      const stopPromise = session.startAndWait();
      session.pause();

      const stopEvent = await stopPromise;

      expect(stopEvent?.reason).toBe("pause");
      expect(session.state).toBe("paused");
    });

    it("marks breakpoint stops in promise callbacks as microtasks", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "microtask-test.js",
          sourceText: "Promise.resolve(5).then(value => {\n  globalThis.result = value;\n});",
          breakpoints: [
            {
              sourceName: "microtask-test.js",
              line: 2,
            },
          ],
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent?.reason).toBe("breakpoint");
      expect(stopEvent?.snapshot?.taskKind).toBe("microtask");
      expect(stopEvent?.snapshot?.line).toBe(2);
    });

    it("runs to completion without stopping when no stop conditions are configured", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "expression",
          sourceName: "complete-test.js",
          sourceText: "1 + 1",
        },
      });

      const stopEvent = await session.startAndWait();

      expect(stopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("does not remain in starting after launch validation fails", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
        },
      });

      await expect(session.start()).rejects.toThrow(
        "Phase 2 minimal debugger sessions require launch.sourceText.",
      );
      expect(session.state).toBe("terminated");
    });

    it("stays terminated when a delayed task callback arrives after terminate", async () => {
      const fakeOperation: StaticJsTaskIteratorOperation = {
        operationType: "FakeOp",
        location: {
          sourceName: "fake.js",
          line: 1,
          column: 0,
          character: 0,
        },
      };

      let done = false;
      const fakeTask: StaticJsTaskIterator = {
        type: "macrotask",
        get done() {
          return done;
        },
        get aborted() {
          return false;
        },
        get operation() {
          return done ? null : fakeOperation;
        },
        stack: [],
        next() {
          done = true;
          return { value: undefined, done: true };
        },
        throw(error: unknown) {
          throw error;
        },
        abort() {
          done = true;
        },
      };

      let resolveEvaluation: (() => void) | undefined;
      const evaluationPromise = new Promise<void>((resolve) => {
        resolveEvaluation = resolve;
      });

      const debuggerInstance = createStaticJsDebugger({
        realm: {
          evaluateScript(
            _sourceText: string,
            options: { runTask?: (task: StaticJsTaskIterator) => void },
          ) {
            setTimeout(() => {
              options.runTask?.(fakeTask);
              resolveEvaluation?.();
            }, 10);

            return evaluationPromise;
          },
          evaluateExpression() {
            throw new Error("unused");
          },
          evaluateModule() {
            throw new Error("unused");
          },
        } as never,
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "fake.js",
          sourceText: "1;",
        },
      });

      const startPromise = session.startAndWait();
      session.terminate();

      await expect(startPromise).resolves.toBeNull();
      expect(session.state).toBe("terminated");

      await new Promise((resolve) => setTimeout(resolve, 30));

      expect(session.state).toBe("terminated");
    });

    it("emits a complete termination reason after finishing", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "expression",
          sourceName: "complete-test.js",
          sourceText: "1 + 1",
        },
      });

      let terminateReason: string | null = null;
      session.onDidTerminate((event) => {
        terminateReason = event.reason;
      });

      await session.startAndWait();

      expect(terminateReason).toBe("complete");
    });
  });
});
