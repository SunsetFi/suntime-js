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

      const stopEvent = await session.start();

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

      const stopEvent = await session.start();

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

      await session.start();

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

      const stopEvent = await session.start();

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

      const stopEvent = await session.start();

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

      const firstStopEvent = await session.start();
      expect(firstStopEvent?.reason).toBe("breakpoint");

      const secondStopEvent = await session.continue();

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

      await session.start();
      const stopEvent = await session.next();

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

      await session.start();
      const stopEvent = await session.next();

      expect(stopEvent?.snapshot).not.toBeNull();
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

      const stopPromise = session.start();
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

      const stopEvent = await session.start();

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

      const stopEvent = await session.start();

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

      const startPromise = session.start();
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

      await session.start();

      expect(terminateReason).toBe("complete");
    });
  });
});
