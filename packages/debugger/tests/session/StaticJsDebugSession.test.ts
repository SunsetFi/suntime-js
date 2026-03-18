import {
  StaticJsRealm,
  StaticJsSyntaxError,
  type StaticJsTaskIterator,
  type StaticJsTaskIteratorOperation,
} from "@suntime-js/core";

import { createStaticJsDebugger } from "../../src/index.js";

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

    it("marks a reachable breakpoint as verified during construction", () => {
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

      expect(session.breakpoints[0]?.verified).toBe(true);
    });

    it("marks a clearly invalid breakpoint line as unverified during construction", () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "invalid-breakpoint-test.js",
          sourceText: "const a = 1;\nconst b = 2;\na + b;",
          breakpoints: [
            {
              sourceName: "invalid-breakpoint-test.js",
              line: 99,
            },
          ],
        },
      });

      expect(session.breakpoints[0]?.verified).toBe(false);
    });
  });

  describe("parsing", () => {
    it("surfaces parser failures as StaticJsSyntaxError during session creation", () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      expect(() =>
        debuggerInstance.createSession({
          launch: {
            sourceKind: "script",
            sourceName: "syntax-error-test.js",
            sourceText: "const = ;",
          },
        }),
      ).toThrow(StaticJsSyntaxError);
    });
  });

  describe("other behavior", () => {
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
          sourceText: "const a = 1; const b = 2; const c = 3;",
          stopOnEntry: true,
        },
      });

      const entryStopEvent = await session.startAndWait();
      // Verify program node
      expect(entryStopEvent?.snapshot?.operationType).toBe("Program");

      const firstVariableStopEvent = await session.stepOverAndWait();
      expect(firstVariableStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");

      const secondVariableStopEvent = await session.stepOverAndWait();
      expect(secondVariableStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");

      const thirdVariableStopEvent = await session.stepOverAndWait();
      expect(thirdVariableStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");

      const completionStopEvent = await session.stepOverAndWait();
      expect(completionStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("skips nested expression nodes when stepping", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "step-expression-test.js",
          sourceText: "const a = 1; a + 1;",
          stopOnEntry: true,
        },
      });

      const entryStopEvent = await session.startAndWait();
      expect(entryStopEvent?.snapshot?.operationType).toBe("Program");

      const variableStopEvent = await session.stepOverAndWait();
      expect(variableStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");

      const expressionStopEvent = await session.stepOverAndWait();
      expect(expressionStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");

      const completionStopEvent = await session.stepOverAndWait();
      expect(completionStopEvent).toBeNull();
      expect(session.state).toBe("completed");
    });

    it("keeps next as an alias for stepOver", async () => {
      const debuggerInstance = createStaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "next-alias-test.js",
          sourceText: "const a = 1; const b = 2;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const stopEvent = await session.nextAndWait();

      expect(stopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
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
            "result;",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const declarationStopEvent = await session.stepOverAndWait();
      expect(declarationStopEvent?.snapshot?.operationType).toBe("FunctionDeclaration");

      const callSiteStopEvent = await session.stepOverAndWait();
      expect(callSiteStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(callSiteStopEvent?.snapshot?.line).toBe(5);

      const callerStopEvent = await session.stepOverAndWait();
      expect(callerStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(callerStopEvent?.snapshot?.line).toBe(6);
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
      await session.stepOverAndWait();

      const callSiteStopEvent = await session.stepOverAndWait();
      expect(callSiteStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(callSiteStopEvent?.snapshot?.line).toBe(5);

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
          sourceText: "const a = 1; a + 1;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const variableStopEvent = await session.stepIntoAndWait();
      expect(variableStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");

      const expressionStopEvent = await session.stepIntoAndWait();
      expect(expressionStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
    });

    it("steps over to the next loop iteration when the visible stop location repeats", async () => {
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
          sourceText: [
            "function doThing() {",
            "  for (let i = 0; i < 2; i++) {",
            '    console.log("Hello " + i);',
            "  }",
            "}",
            "",
            "doThing();",
            "42;",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      await session.startAndWait();
      await session.stepOverAndWait();
      await session.stepOverAndWait();
      await session.stepIntoAndWait();
      await session.stepOverAndWait();
      await session.stepOverAndWait();

      const firstLoopStopEvent = session.getSnapshot();
      expect(firstLoopStopEvent?.operationType).toBe("ExpressionStatement");
      expect(firstLoopStopEvent?.line).toBe(3);

      const secondLoopStopEvent = await session.stepOverAndWait();
      expect(secondLoopStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(secondLoopStopEvent?.snapshot?.line).toBe(3);

      const afterLoopStopEvent = await session.stepOverAndWait();
      expect(afterLoopStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(afterLoopStopEvent?.snapshot?.line).toBe(8);
    });

    it("lets stepInto fall back to the next loop iteration when the call stays in the same frame", async () => {
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
          sourceName: "step-into-loop-repeat-test.js",
          sourceText: [
            "function doThing() {",
            "  for (let i = 0; i < 2; i++) {",
            '    console.log("Hello " + i);',
            "  }",
            "}",
            "",
            "doThing();",
            "42;",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      await session.startAndWait();
      await session.stepOverAndWait();
      await session.stepOverAndWait();
      await session.stepIntoAndWait();
      await session.stepOverAndWait();
      await session.stepOverAndWait();

      const firstLoopStopEvent = session.getSnapshot();
      expect(firstLoopStopEvent?.operationType).toBe("ExpressionStatement");
      expect(firstLoopStopEvent?.line).toBe(3);

      const secondLoopStopEvent = await session.stepIntoAndWait();
      expect(secondLoopStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(secondLoopStopEvent?.snapshot?.line).toBe(3);

      const afterLoopStopEvent = await session.stepIntoAndWait();
      expect(afterLoopStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(afterLoopStopEvent?.snapshot?.line).toBe(8);
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
            "result;",
          ].join("\n"),
          stopOnEntry: true,
        },
      });

      await session.startAndWait();
      await session.stepOverAndWait();
      await session.stepOverAndWait();

      const calleeStopEvent = await session.stepIntoAndWait();
      expect(calleeStopEvent?.snapshot?.operationType).toBe("VariableDeclaration");
      expect(calleeStopEvent?.snapshot?.line).toBe(2);

      const callerStopEvent = await session.stepOutAndWait();
      expect(callerStopEvent?.snapshot?.operationType).toBe("ExpressionStatement");
      expect(callerStopEvent?.snapshot?.line).toBe(6);
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
          start: { line: 1, column: 0, character: 0 },
          end: { line: 1, column: 1, character: 1 },
        },
      };

      let done = false;
      const fakeTask: StaticJsTaskIterator = {
        get done() {
          return done;
        },
        get aborted() {
          return false;
        },
        get operation() {
          return done ? null : fakeOperation;
        },
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
