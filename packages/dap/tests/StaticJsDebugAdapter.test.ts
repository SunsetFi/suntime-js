import { DebugClient } from "@vscode/debugadapter-testsupport";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { StaticJsLaunchRequestArguments } from "../src";
import {
  createDebugClient,
  initialize,
  initializeAndWait,
  launchStoppedScript,
} from "./utils/debugClientTestUtils.js";
import { MAIN_THREAD_ID, createScriptLaunchArgs } from "./utils/staticJsTestUtils.js";

describe("StaticJsDebugAdapter", () => {
  let client: DebugClient;

  beforeEach(async () => {
    client = createDebugClient();
    await client.start();
  });

  afterEach(async () => {
    await client.stop();
  });

  it("advertises supported capabilities", async () => {
    const response = await initialize(client);
    expect(response.body).toBeDefined();

    expect(response.body).toMatchObject({
      supportsConfigurationDoneRequest: true,
      supportsTerminateRequest: true,
    });
    expect(response.body!.supportsEvaluateForHovers).not.toBe(true);
  });

  it("stops on entry and reports the main thread", async () => {
    await initializeAndWait(client);

    const stopped = await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/examples-hello.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    expect(stopped.body).toMatchObject({
      reason: "entry",
      threadId: MAIN_THREAD_ID,
    });

    const threads = await client.threadsRequest();

    expect(threads.body.threads).toMatchObject([
      {
        id: 1,
        name: "Main Thread",
      },
    ]);
  });

  it("returns verified breakpoints once a debug session exists", async () => {
    await initializeAndWait(client);

    await client.launchRequest(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/breakpoints.js",
        sourceText: "const a = 1;\nconst b = 2;\na + b;",
      }),
    );

    const response = await client.setBreakpointsRequest({
      source: {
        path: "staticjs:///script/breakpoints.js",
      },
      breakpoints: [{ line: 2 }, { line: 99 }],
    });

    expect(response.body.breakpoints).toMatchObject([
      { line: 2, verified: true },
      { line: 99, verified: false },
    ]);
  });

  it("continues from entry to a configured breakpoint", async () => {
    await initializeAndWait(client);

    await client.launchRequest(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/continue-breakpoint.js",
        sourceText: "const a = 1;\nconst b = 2;\na + b;",
      }),
    );
    await client.setBreakpointsRequest({
      source: {
        path: "staticjs:///script/continue-breakpoint.js",
      },
      breakpoints: [{ line: 2 }],
    });
    await client.configurationDoneRequest();

    await client.waitForEvent("stopped");

    const continued = client.waitForEvent("continued");
    const stopped = client.waitForEvent("stopped");

    await client.continueRequest({ threadId: 1 });

    await expect(continued).resolves.toMatchObject({
      body: {
        allThreadsContinued: true,
        threadId: MAIN_THREAD_ID,
      },
    });
    await expect(stopped).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        reason: "breakpoint",
        threadId: MAIN_THREAD_ID,
      },
    });

    const stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    expect(stackTrace.body.stackFrames[0]?.line).toBe(2);
  });

  it("reports paused stack frames from the debugger session", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/examples-hello.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    const [frame] = stackTrace.body.stackFrames;

    expect(frame).toMatchObject({
      id: MAIN_THREAD_ID,
      line: 1,
      column: 1,
      source: {
        path: "staticjs:///script/examples-hello.js",
      },
    });
    expect(frame.name).not.toBe("StaticJs Bootstrap");

    const terminated = client.waitForEvent("terminated");

    await client.continueRequest({ threadId: MAIN_THREAD_ID });
    await terminated;
  });

  it("rejects unsupported inspection requests", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/unsupported.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    await expect(client.scopesRequest({ frameId: 1 })).rejects.toThrow(/scopes are not supported/i);
    await expect(client.variablesRequest({ variablesReference: 1 })).rejects.toThrow(
      /variables are not supported/i,
    );
    await expect(
      client.evaluateRequest({
        context: "repl",
        expression: "1 + 1",
        frameId: 1,
      }),
    ).rejects.toThrow(/evaluate is not supported/i);
  });

  it("rejects unsupported stepping requests", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/unsupported-step.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    await expect(client.stepInRequest({ threadId: MAIN_THREAD_ID })).rejects.toThrow(
      /stepIn is not supported/i,
    );
    await expect(client.stepOutRequest({ threadId: 1 })).rejects.toThrow(
      /stepOut is not supported/i,
    );
  });

  it("rejects unsupported attach-style requests", async () => {
    await initializeAndWait(client);

    await expect(
      client.setExceptionBreakpointsRequest({
        filters: [],
      }),
    ).rejects.toThrow(/exception breakpoints are not supported/i);
    await expect(
      client.attachRequest({
        sourceKind: "script",
        sourceText: "const value = 1;",
      } as StaticJsLaunchRequestArguments),
    ).rejects.toThrow(/attach is not supported/i);
  });

  it("rejects pause when no session is active", async () => {
    await initializeAndWait(client);

    await expect(client.pauseRequest({ threadId: MAIN_THREAD_ID })).rejects.toThrow(
      /no active staticjs debug session/i,
    );
  });

  it("emits a pause stop after a pending pause request is observed", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/pause.js",
        sourceText: "let total = 0;\nfor (let i = 0; i < 100; i++) { total += i; }\ntotal;",
      }),
    );

    await client.pauseRequest({ threadId: MAIN_THREAD_ID });

    const continued = client.waitForEvent("continued");
    const paused = client.waitForEvent("stopped");

    await client.continueRequest({ threadId: MAIN_THREAD_ID });
    await expect(continued).resolves.toMatchObject({
      body: {
        allThreadsContinued: true,
        threadId: MAIN_THREAD_ID,
      },
    });

    await expect(paused).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        reason: "pause",
        threadId: MAIN_THREAD_ID,
      },
    });
  });

  it("emits a step stop for next", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/step.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const continued = client.waitForEvent("continued");
    const stopped = client.waitForEvent("stopped");

    await client.nextRequest({ threadId: MAIN_THREAD_ID });

    await expect(continued).resolves.toMatchObject({
      body: {
        allThreadsContinued: true,
        threadId: MAIN_THREAD_ID,
      },
    });
    await expect(stopped).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        description: "Paused after one StaticJs operation.",
        reason: "step",
        text: "operation step",
        threadId: MAIN_THREAD_ID,
      },
    });

    const stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    expect(stackTrace.body.stackFrames[0]?.source?.path).toBe("staticjs:///script/step.js");

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
  });

  it("advances to the next operation on each next request", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/step.js",
        sourceText: "const a = 1; const b = 2; const c = 3;",
      }),
    );

    // Stopped at: Program
    let continued = client.waitForEvent("continued");
    let stopped = client.waitForEvent("stopped");
    await client.nextRequest({ threadId: MAIN_THREAD_ID });
    await continued;
    await stopped;

    // Stopped at: VariableDeclaration
    let stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    const { column: varDeclColumn } = stackTrace.body?.stackFrames[0] ?? {};
    expect(varDeclColumn).toBe(1);

    continued = client.waitForEvent("continued");
    stopped = client.waitForEvent("stopped");
    await client.nextRequest({ threadId: MAIN_THREAD_ID });
    await continued;
    await stopped;

    // Stopped at: NumericLiteral
    stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    const { column: numericLiteralColumn } = stackTrace.body?.stackFrames[0] ?? {};
    expect(numericLiteralColumn).toBe(11);

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
    // await initializeAndWait(client);
    // await launchStoppedScript(
    //   client,
    //   createScriptLaunchArgs({
    //     sourceName: "staticjs:///script/step-lines.js",
    //     sourceText: "const a = 1; const b = 2; const c = 3;",
    //   }),
    // );

    // let stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    // const { column: firstColumn } = stackTrace.body?.stackFrames[0] ?? {};
    // expect(firstColumn).toBeDefined();

    // let continued = client.waitForEvent("continued");
    // let stopped = client.waitForEvent("stopped");
    // await client.nextRequest({ threadId: MAIN_THREAD_ID });
    // await continued;
    // await stopped;

    // stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    // const { column: secondColumn } = stackTrace.body?.stackFrames[0] ?? {};
    // expect(secondColumn).toBeGreaterThan(firstColumn);

    // continued = client.waitForEvent("continued");
    // stopped = client.waitForEvent("stopped");
    // await client.nextRequest({ threadId: MAIN_THREAD_ID });
    // await continued;
    // await stopped;

    // stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    // const { column: thirdColumn } = stackTrace.body?.stackFrames[0] ?? {};
    // expect(thirdColumn).toBeGreaterThan(secondColumn);

    // const terminated = client.waitForEvent("terminated");
    // await client.terminateRequest();
    // await terminated;
  });

  it("synthesizes one stable sourceName when launch omits it", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const stackTrace = await client.stackTraceRequest({ threadId: MAIN_THREAD_ID });
    const sourcePath = stackTrace.body.stackFrames[0]?.source?.path;

    expect(sourcePath).toMatch(/^staticjs:\/\/\/script\/session-\d+\.js$/);

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
  });

  it("disconnects and emits termination cleanup", async () => {
    await initializeAndWait(client);
    await launchStoppedScript(
      client,
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/disconnect.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const terminated = client.waitForEvent("terminated");

    await client.disconnectRequest({});

    await expect(terminated).resolves.toMatchObject({
      event: "terminated",
      type: "event",
    });
  });

  it("rejects launch requests that do not provide sourceText and sourceKind", async () => {
    await initializeAndWait(client);

    await expect(
      client.launchRequest({
        stopOnEntry: true,
      } as StaticJsLaunchRequestArguments),
    ).rejects.toThrow(/sourceText and sourceKind/i);
  });
});
