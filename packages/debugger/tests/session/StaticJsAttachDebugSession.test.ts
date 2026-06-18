import { StaticJsRealm, type StaticJsTaskIterator } from "@suntime-js/core";

import { StaticJsDebugger } from "../../src/index.js";

/**
 * Capture the task core emits for `sourceText` via a per-evaluation runTask,
 * then build a debugger whose driver is the realm's default (drain) runTask.
 *
 * The per-evaluation runTask intercepts the task without driving it; the
 * debugger's _drive (which wraps realm.config.runTask = drainIterator) acts as
 * the driver when the attach session calls _resumeActiveTask.
 *
 * Note: evaluateScript schedules the task asynchronously (via a microtask), so
 * this helper must await the captured task before returning.
 */
const setupAttach = async (sourceText: string) => {
  const realm = StaticJsRealm();
  const debuggerInstance = StaticJsDebugger({ realm });

  let captureResolve!: (task: StaticJsTaskIterator) => void;
  const capturedPromise = new Promise<StaticJsTaskIterator>((resolve) => {
    captureResolve = resolve;
  });

  // Per-evaluation interceptor: capture without driving.
  void realm.evaluateScript(sourceText, {
    sourceName: "attach-test.js",
    runTask: (task) => {
      captureResolve(task);
    },
  });

  // Wait for the task to be delivered to the interceptor (runs on the next microtask tick).
  const task = await capturedPromise;

  return { realm, debuggerInstance, task };
};

describe("StaticJsAttachDebugSession", () => {
  it("pauses on entry for an attached task", async () => {
    const { debuggerInstance, task } = await setupAttach("const value = 1;\nvalue + 1;");
    const session = debuggerInstance.createSession({
      attach: { task, sourceName: "attach-test.js", stopOnEntry: true },
    });

    const stopEvent = await session.startAndWait();

    expect(stopEvent?.reason).toBe("entry");
  });

  it("stops at a breakpoint on an attached task", async () => {
    const { debuggerInstance, task } = await setupAttach("const a = 1;\nconst b = 2;\na + b;");
    const session = debuggerInstance.createSession({
      attach: {
        task,
        sourceName: "attach-test.js",
        breakpoints: [{ sourceName: "attach-test.js", line: 3 }],
      },
    });

    const stopEvent = await session.startAndWait();

    expect(stopEvent?.reason).toBe("breakpoint");
    expect(stopEvent?.snapshot?.line).toBe(3);
  });

  it("fires a terminal complete event when the attached task finishes", async () => {
    const { debuggerInstance, task } = await setupAttach("const value = 1;\nvalue + 1;");
    const session = debuggerInstance.createSession({
      attach: { task, sourceName: "attach-test.js" },
    });

    const terminate = new Promise<{ state: string; reason: string }>((resolve) => {
      session.onDidTerminate((event) => resolve({ state: event.state, reason: event.reason }));
    });

    await session.start();
    const result = await terminate;

    expect(result.state).toBe("completed");
    expect(result.reason).toBe("complete");
  });

  it("terminates an attached task on terminate()", async () => {
    const { debuggerInstance, task } = await setupAttach("const value = 1;\nvalue + 1;");
    const session = debuggerInstance.createSession({
      attach: { task, sourceName: "attach-test.js", stopOnEntry: true },
    });

    // NOTE: _finishTerminal emits state: "terminated" for any non-"complete" terminal.
    // The attach session calls _finishTerminal("terminate", null) when the task is aborted,
    // which collapses to state: "terminated" / reason: "error" in the event union.
    const terminateStatePromise = new Promise<string>((resolve) => {
      session.onDidTerminate((event) => resolve(event.state));
    });

    await session.startAndWait(); // paused on entry
    session.terminate();

    expect(await terminateStatePromise).toBe("terminated");
    expect(session.state).toBe("terminated");
  });

  it("finalizes immediately when attached to an already-completed task", async () => {
    const { debuggerInstance, task } = await setupAttach("const value = 1;\nvalue + 1;");

    // Drain the task to completion before attaching, simulating a caller that
    // hands over a task which has already settled.
    while (!task.done) {
      task.next();
    }

    const session = debuggerInstance.createSession({
      attach: { task, sourceName: "attach-test.js" },
    });

    const terminate = new Promise<string>((resolve) => {
      session.onDidTerminate((event) => resolve(event.state));
    });

    await session.start();

    expect(await terminate).toBe("completed");
    expect(session.state).toBe("completed");
  });

  it("throws a reentrancy error when the driver is the session-creating callback", async () => {
    // The footgun: realm's default runTask creates+starts a session — the debugger
    // uses that same runTask as its driver. When _drive calls _runTask, the
    // session-creating callback fires a second createSession, which hits the guard.
    //
    // The guard error (from createSession) propagates synchronously through the
    // session-creating callback → _drive → _resumeActiveTask → _begin, but is
    // caught by the async boundary of _startExecution and ends up as the rejection
    // of start().  We capture and assert that rejection.
    //
    // Note: evaluateScriptSync does NOT use the realm's custom runTask option; it
    // uses runTaskSync (defaulting to drainIterator). Instead, we must use
    // evaluateScript (async) or trigger _drive through an attach session so that
    // the reentrancy guard fires inside start().

    const { task } = await setupAttach("1 + 1;");

    // Create a new debugger whose runTask (driver) tries to createSession while driving.
    let reentrancyError: unknown;
    const realm2 = StaticJsRealm();
    const dbg2 = StaticJsDebugger({
      realm: realm2,
      runTask: (drivingTask) => {
        // This callback is called from _drive (which sets _driving = true before calling here).
        // Calling createSession here should therefore throw the reentrancy error.
        try {
          dbg2.createSession({ attach: { task: drivingTask } });
        } catch (e) {
          reentrancyError = e;
        }
        drivingTask.abort();
      },
    });

    // Create and start an attach session — start() calls _begin() → _resumeActiveTask()
    // → _drive (sets _driving=true) → our runTask → createSession throws reentrancy error.
    // The throw is caught in _startExecution (async) and rejects start().
    const session = dbg2.createSession({ attach: { task } });
    await session.start().catch(() => {});

    expect(reentrancyError).toBeDefined();
    expect((reentrancyError as Error).message).toMatch(
      /createSession was called while the debugger was driving a task/,
    );
  });
});
