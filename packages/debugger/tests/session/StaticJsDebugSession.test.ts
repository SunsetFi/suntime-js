import {
  StaticJsRealm,
  StaticJsTaskSourceLocation,
  type StaticJsTaskIterator,
  type StaticJsTaskIteratorOperation,
} from "@suntime-js/core";

import { StaticJsDebugger } from "../../src/index.js";

const createDeferredStartSession = () => {
  const capturedTasks: StaticJsTaskIterator[] = [];

  const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
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
      const debuggerInstance = StaticJsDebugger({
        realm: StaticJsRealm(),
      });

      const session = debuggerInstance.createSession({
        launch: {
          sourceText: undefined as any,
          sourceKind: "script",
        },
      });

      await expect(session.start()).rejects.toThrow(
        "Launch options requires sourceText to be set.",
      );
      expect(session.state).toBe("terminated");
    });

    it("stays terminated when a delayed task callback arrives after terminate", async () => {
      const fakeOperation: StaticJsTaskIteratorOperation = {
        operationType: "FakeOp",
      };

      const fakeLocation: StaticJsTaskSourceLocation = {
        sourceName: "fake.js",
        line: 1,
        column: 0,
        character: 0,
      };

      let done = false;
      const fakeTask: StaticJsTaskIterator = {
        calleeType: "evaluate",
        async: true,
        currentTaskType: "macrotask",
        currentTaskId: "0",
        get done() {
          return done;
        },
        get aborted() {
          return false;
        },
        get operation() {
          return done ? null : fakeOperation;
        },
        get location() {
          return done ? null : fakeLocation;
        },
        stack: [],
        scopes: [],
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

      const debuggerInstance = StaticJsDebugger({
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
          config: {},
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
      const debuggerInstance = StaticJsDebugger({
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

  describe("scopes and variables", () => {
    it("returns at least one scope frame when paused", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "scopes-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      expect(session.getScopes(1).length).toBeGreaterThan(0);
    });

    it("returns empty scopes for a nonexistent frame id", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "scopes-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      expect(session.getScopes(999)).toHaveLength(0);
    });

    it("includes a global scope for script execution", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "scopes-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      expect(scopes.some((s) => s.type === "global")).toBe(true);
    });

    it("includes a function scope when paused inside a function", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "scopes-fn-test.js",
          sourceText: [
            "function foo(x) {",
            "  const y = x + 1;",
            "  return y;",
            "}",
            "foo(5);",
          ].join("\n"),
          breakpoints: [{ sourceName: "scopes-fn-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      expect(scopes.some((s) => s.type === "function")).toBe(true);
    });

    it("returns variables for a scope via variablesReference", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "vars-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          breakpoints: [{ sourceName: "vars-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      expect(globalScope).toBeDefined();

      const variables = session.getVariables(globalScope.variablesReference);
      const varA = variables.find((v) => v.name === "a");
      expect(varA).toBeDefined();
      expect(varA!.value).toBe("42");
    });

    it("expands a function to show name and length properties", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "fn-expand-test.js",
          sourceText: "function foo(a, b) { return a + b; }\nconst x = null;",
          breakpoints: [{ sourceName: "fn-expand-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      const variables = session.getVariables(globalScope.variablesReference);
      const varFoo = variables.find((v) => v.name === "foo")!;

      expect(varFoo.variablesReference).toBeGreaterThan(0);

      const fnProps = session.getVariables(varFoo.variablesReference);
      expect(fnProps.find((v) => v.name === "name")?.value).toBe("foo");
      expect(fnProps.find((v) => v.name === "length")?.value).toBe("2");
    });

    it("gives scalar variables a variablesReference of 0", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "scalar-ref-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          breakpoints: [{ sourceName: "scalar-ref-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      const variables = session.getVariables(globalScope.variablesReference);
      const varA = variables.find((v) => v.name === "a")!;

      expect(varA.variablesReference).toBe(0);
    });

    it("gives object variables a non-zero variablesReference", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "object-ref-test.js",
          sourceText: "const obj = { x: 1, y: 2 };\nconst b = 99;",
          breakpoints: [{ sourceName: "object-ref-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      const variables = session.getVariables(globalScope.variablesReference);
      const varObj = variables.find((v) => v.name === "obj")!;

      expect(varObj.variablesReference).toBeGreaterThan(0);
    });

    it("expands object properties via the object's variablesReference", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "object-expand-test.js",
          sourceText: "const obj = { x: 1, y: 2 };\nconst b = 99;",
          breakpoints: [{ sourceName: "object-expand-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      const variables = session.getVariables(globalScope.variablesReference);
      const varObj = variables.find((v) => v.name === "obj")!;

      const objProperties = session.getVariables(varObj.variablesReference);
      expect(objProperties.find((v) => v.name === "x")?.value).toBe("1");
      expect(objProperties.find((v) => v.name === "y")?.value).toBe("2");
    });

    it("expands array elements via the array's variablesReference", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "array-expand-test.js",
          sourceText: "const arr = [10, 20, 30];\nconst b = 99;",
          breakpoints: [{ sourceName: "array-expand-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const globalScope = scopes.find((s) => s.type === "global")!;
      const variables = session.getVariables(globalScope.variablesReference);
      const varArr = variables.find((v) => v.name === "arr")!;

      const arrElements = session.getVariables(varArr.variablesReference);
      expect(arrElements.find((v) => v.name === "0")?.value).toBe("10");
      expect(arrElements.find((v) => v.name === "1")?.value).toBe("20");
      expect(arrElements.find((v) => v.name === "2")?.value).toBe("30");
    });

    it("invalidates variablesReferences after resuming", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "vars-invalidate-test.js",
          sourceText: "const a = 42;\nconst b = 99;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      const scopesBeforeStep = session.getScopes(1);
      const refBeforeStep = scopesBeforeStep[0]!.variablesReference;
      expect(session.getVariables(refBeforeStep).length).toBeGreaterThan(0);

      await session.stepOverAndWait();

      expect(session.getVariables(refBeforeStep)).toHaveLength(0);
    });

    it("returns empty variables for an unknown variablesReference", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "vars-test.js",
          sourceText: "const a = 42;",
          stopOnEntry: true,
        },
      });

      await session.startAndWait();

      expect(session.getVariables(9999)).toHaveLength(0);
    });

    it("shows function-scoped parameters when paused inside a function", async () => {
      const debuggerInstance = StaticJsDebugger({ realm: StaticJsRealm() });
      const session = debuggerInstance.createSession({
        launch: {
          sourceKind: "script",
          sourceName: "fn-params-test.js",
          sourceText: [
            "function foo(x) {",
            "  const y = x + 1;",
            "  return y;",
            "}",
            "foo(5);",
          ].join("\n"),
          breakpoints: [{ sourceName: "fn-params-test.js", line: 2 }],
        },
      });

      await session.startAndWait();

      const scopes = session.getScopes(1);
      const fnScope = scopes.find((s) => s.type === "function")!;
      expect(fnScope).toBeDefined();

      const variables = session.getVariables(fnScope.variablesReference);
      const paramX = variables.find((v) => v.name === "x");
      expect(paramX).toBeDefined();
      expect(paramX!.value).toBe("5");
    });
  });
});
