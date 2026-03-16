import { DebugClient } from "@vscode/debugadapter-testsupport";
import type { DebugProtocol } from "@vscode/debugprotocol";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resolve } from "node:path";

import type { StaticJsLaunchRequestArguments } from "../src";

const packageRoot = resolve(__dirname, "..");
const adapterEntry = resolve(packageRoot, "src", "run.ts");
const tsxRuntime = resolve(
  packageRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsx.cmd" : "tsx",
);

function createDebugClient(): DebugClient {
  return new DebugClient(tsxRuntime, adapterEntry, "staticjs");
}

async function initialize(client: DebugClient): Promise<DebugProtocol.InitializeResponse> {
  return client.initializeRequest({
    adapterID: "staticjs",
    clientID: "vitest",
    columnsStartAt1: true,
    linesStartAt1: true,
    pathFormat: "path",
  });
}

async function initializeAndLaunch(client: DebugClient): Promise<DebugProtocol.StackTraceResponse> {
  const initialized = client.waitForEvent("initialized");

  await initialize(client);

  await initialized;

  const stopped = client.waitForEvent("stopped");
  const launchArgs: StaticJsLaunchRequestArguments = {
    sourceKind: "script",
    sourceName: "staticjs:///script/examples-hello.js",
    sourceText: "const value = 1;\nvalue + 1;",
    stopOnEntry: true,
  };

  await client.launchRequest(launchArgs);
  await client.configurationDoneRequest();

  await expect(stopped).resolves.toMatchObject({
    body: {
      reason: "entry",
      threadId: 1,
    },
  });

  return client.stackTraceRequest({ threadId: 1 });
}

async function launchStoppedScript(
  client: DebugClient,
  launchArgs: StaticJsLaunchRequestArguments,
): Promise<void> {
  await client.launchRequest(launchArgs);
  await client.configurationDoneRequest();
  await client.waitForEvent("stopped");
}

describe("StaticJsDebugAdapter", () => {
  let client: DebugClient;

  beforeEach(async () => {
    client = createDebugClient();
    await client.start();
  });

  afterEach(async () => {
    await client.stop();
  });

  it("advertises supported capabilities and stops on entry", async () => {
    const initialized = client.waitForEvent("initialized");

    const response = await initialize(client);
    expect(response.body).toBeDefined();

    expect(response.body).toMatchObject({
      supportsConfigurationDoneRequest: true,
      supportsTerminateRequest: true,
    });
    expect(response.body!.supportsEvaluateForHovers).not.toBe(true);

    await initialized;

    const stopped = client.waitForEvent("stopped");
    const launchArgs: StaticJsLaunchRequestArguments = {
      sourceKind: "script",
      sourceName: "staticjs:///script/examples-hello.js",
      sourceText: "const value = 1;\nvalue + 1;",
      stopOnEntry: true,
    };

    await client.launchRequest(launchArgs);
    await client.configurationDoneRequest();

    await expect(stopped).resolves.toMatchObject({
      body: {
        reason: "entry",
        threadId: 1,
      },
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
    await initialize(client);

    const launchArgs: StaticJsLaunchRequestArguments = {
      sourceKind: "script",
      sourceName: "staticjs:///script/breakpoints.js",
      sourceText: "const a = 1;\nconst b = 2;\na + b;",
      stopOnEntry: true,
    };

    await client.launchRequest(launchArgs);

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
    await initialize(client);

    const launchArgs: StaticJsLaunchRequestArguments = {
      sourceKind: "script",
      sourceName: "staticjs:///script/continue-breakpoint.js",
      sourceText: "const a = 1;\nconst b = 2;\na + b;",
      stopOnEntry: true,
    };

    await client.launchRequest(launchArgs);
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
        threadId: 1,
      },
    });
    await expect(stopped).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        reason: "breakpoint",
        threadId: 1,
      },
    });

    const stackTrace = await client.stackTraceRequest({ threadId: 1 });
    expect(stackTrace.body.stackFrames[0]?.line).toBe(2);
  });

  it("reports paused stack frames from the debugger session", async () => {
    const stackTrace = await initializeAndLaunch(client);
    const [frame] = stackTrace.body.stackFrames;

    expect(frame).toMatchObject({
      id: 1,
      line: 1,
      column: 1,
      source: {
        path: "staticjs:///script/examples-hello.js",
      },
    });
    expect(frame.name).not.toBe("StaticJs Bootstrap");

    const terminated = client.waitForEvent("terminated");

    await client.continueRequest({ threadId: 1 });
    await terminated;
  });

  it("returns protocol errors for unsupported deferred requests", async () => {
    await initialize(client);
    await launchStoppedScript(client, {
      sourceKind: "script",
      sourceName: "staticjs:///script/unsupported.js",
      sourceText: "const value = 1;\nvalue + 1;",
      stopOnEntry: true,
    });

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
    await expect(client.stepInRequest({ threadId: 1 })).rejects.toThrow(/stepIn is not supported/i);
    await expect(client.stepOutRequest({ threadId: 1 })).rejects.toThrow(
      /stepOut is not supported/i,
    );
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

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
  });

  it("rejects pause when no session is active", async () => {
    await initialize(client);

    await expect(client.pauseRequest({ threadId: 1 })).rejects.toThrow(
      /no active staticjs debug session/i,
    );
  });

  it("emits a pause stop after a pending pause request is observed", async () => {
    await initialize(client);
    await launchStoppedScript(client, {
      sourceKind: "script",
      sourceName: "staticjs:///script/pause.js",
      sourceText: "let total = 0;\nfor (let i = 0; i < 100; i++) { total += i; }\ntotal;",
      stopOnEntry: true,
    });

    await client.pauseRequest({ threadId: 1 });

    const continued = client.waitForEvent("continued");
    const paused = client.waitForEvent("stopped");

    await client.continueRequest({ threadId: 1 });
    await expect(continued).resolves.toMatchObject({
      body: {
        allThreadsContinued: true,
        threadId: 1,
      },
    });

    await expect(paused).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        reason: "pause",
        threadId: 1,
      },
    });
  });

  it("emits a step stop for next", async () => {
    await initialize(client);
    await launchStoppedScript(client, {
      sourceKind: "script",
      sourceName: "staticjs:///script/step.js",
      sourceText: "const value = 1;\nvalue + 1;",
      stopOnEntry: true,
    });

    const continued = client.waitForEvent("continued");
    const stopped = client.waitForEvent("stopped");

    await client.nextRequest({ threadId: 1 });

    await expect(continued).resolves.toMatchObject({
      body: {
        allThreadsContinued: true,
        threadId: 1,
      },
    });
    await expect(stopped).resolves.toMatchObject({
      body: {
        allThreadsStopped: true,
        description: "Paused after one StaticJs operation.",
        reason: "step",
        text: "operation step",
        threadId: 1,
      },
    });

    const stackTrace = await client.stackTraceRequest({ threadId: 1 });
    expect(stackTrace.body.stackFrames[0]?.source?.path).toBe("staticjs:///script/step.js");

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
  });

  it("synthesizes one stable sourceName when launch omits it", async () => {
    await initialize(client);

    const launchArgs: StaticJsLaunchRequestArguments = {
      sourceKind: "script",
      sourceText: "const value = 1;\nvalue + 1;",
      stopOnEntry: true,
    };

    await client.launchRequest(launchArgs);
    await client.configurationDoneRequest();

    await client.waitForEvent("stopped");

    const stackTrace = await client.stackTraceRequest({ threadId: 1 });
    const sourcePath = stackTrace.body.stackFrames[0]?.source?.path;

    expect(sourcePath).toMatch(/^staticjs:\/\/\/script\/session-\d+\.js$/);

    const terminated = client.waitForEvent("terminated");

    await client.terminateRequest();
    await terminated;
  });

  it("disconnects and emits termination cleanup", async () => {
    await initialize(client);
    await launchStoppedScript(client, {
      sourceKind: "script",
      sourceName: "staticjs:///script/disconnect.js",
      sourceText: "const value = 1;\nvalue + 1;",
      stopOnEntry: true,
    });

    const terminated = client.waitForEvent("terminated");

    await client.disconnectRequest({});

    await expect(terminated).resolves.toMatchObject({
      event: "terminated",
      type: "event",
    });
  });

  it("rejects launch requests that do not provide sourceText and sourceKind", async () => {
    await initialize(client);

    await expect(
      client.launchRequest({
        stopOnEntry: true,
      } as StaticJsLaunchRequestArguments),
    ).rejects.toThrow(/sourceText and sourceKind/i);
  });
});
