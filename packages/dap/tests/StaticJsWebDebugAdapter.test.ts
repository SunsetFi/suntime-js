import type { DebugProtocol } from "@vscode/debugprotocol";
import { StaticJsRealm } from "@suntime-js/core";
import { afterEach, describe, expect, it } from "vitest";

import type { StaticJsWebDebugAdapter } from "../src/web/index.js";
import { MAIN_THREAD_ID, createScriptLaunchArgs } from "./utils/staticJsTestUtils.js";
import {
  createWebAdapterTestSession,
  isEvent,
  isResponse,
  isStoppedEvent,
  messageIndex,
} from "./utils/webDebugAdapterTestUtils.js";

describe("createStaticJsWebDebugAdapter", () => {
  const disposables: StaticJsWebDebugAdapter[] = [];

  function createSession(...args: Parameters<typeof createWebAdapterTestSession>) {
    const session = createWebAdapterTestSession(...args);
    disposables.push(session.adapter);
    return session;
  }

  afterEach(() => {
    while (disposables.length > 0) {
      disposables.pop()?.dispose();
    }
  });

  it("advertises initialize capabilities and emits initialized", async () => {
    const session = createSession();

    const response = await session.initialize();
    const initialized = await session.collector.waitFor(isEvent("initialized"));

    expect(response.success).toBe(true);
    expect(response.body).toMatchObject({
      supportsConfigurationDoneRequest: true,
      supportsTerminateRequest: true,
    });
    expect(initialized.type).toBe("event");
  });

  it("stops on entry after launch", async () => {
    const session = createSession();

    await session.initialize();

    const stopped = await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-session.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    expect(stopped.body).toMatchObject({
      reason: "entry",
      threadId: MAIN_THREAD_ID,
    });
  });

  it("returns stack frames for a paused script", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-session.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const stackTrace = await session.requestStackTrace();
    expect(stackTrace.success).toBe(true);
    expect(stackTrace.body).toMatchObject({
      totalFrames: 1,
    });
    expect(stackTrace.body?.stackFrames[0]).toMatchObject({
      line: 1,
      column: 1,
      source: {
        path: "staticjs:///script/web-session.js",
      },
    });
  });

  it("uses a provided realm factory for host globals", async () => {
    const logs: string[] = [];
    const session = createSession({
      createRealm: () =>
        StaticJsRealm({
          global: {
            value: {
              console: {
                log: (...args: unknown[]) => {
                  logs.push(args.join(" "));
                },
              },
            },
          },
        }),
    });

    await session.initialize();

    session.sendRequest(
      "launch",
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-console.js",
        sourceText: 'console.log("hello", 42);',
        stopOnEntry: false,
      }),
    );
    session.sendRequest("configurationDone", {});

    await session.collector.waitFor(isEvent("terminated"));

    expect(logs).toEqual(["hello 42"]);
  });

  it("emits continued before the follow-up stopped event for next", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step.js",
        sourceText: "const value = 1;\nconst value2 = value + 1;",
      }),
    );

    const nextSeq = session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    const nextResponsePromise = session.collector.waitFor(isResponse("next", nextSeq));
    const continued = session.collector.waitFor(isEvent("continued"));
    const stopped = session.collector.waitFor(isStoppedEvent("step"));

    await nextResponsePromise;
    await continued;
    await stopped;

    const continuedIndex = messageIndex(
      session.collector.messages,
      (message) =>
        message.type === "event" && (message as DebugProtocol.Event).event === "continued",
    );
    const stoppedIndex = messageIndex(
      session.collector.messages,
      (message) =>
        message.type === "event" &&
        (message as DebugProtocol.Event).event === "stopped" &&
        ((message as DebugProtocol.Event).body as DebugProtocol.StoppedEvent["body"] | undefined)
          ?.reason === "step",
    );

    expect(continuedIndex).toBeGreaterThan(-1);
    expect(stoppedIndex).toBeGreaterThan(-1);
    expect(continuedIndex).toBeLessThan(stoppedIndex);
  });

  it("treats stepIn as a single-step request", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step-in.js",
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const stepInSeq = session.sendRequest("stepIn", { threadId: MAIN_THREAD_ID });
    const stepInResponsePromise = session.collector.waitFor(isResponse("stepIn", stepInSeq));
    const continued = session.collector.waitFor(isEvent("continued"));
    const stopped = session.collector.waitFor(isStoppedEvent("step"));

    await stepInResponsePromise;
    await continued;
    await stopped;
  });

  it("supports stepOut", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step-out.js",
        sourceText: [
          "function addOne(value) {",
          "  const nextValue = value + 1;",
          "  return nextValue;",
          "}",
          "const result = addOne(1);",
          "const final = result;",
        ].join("\n"),
      }),
    );

    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("stepIn", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isStoppedEvent("step"));

    const stepOutSeq = session.sendRequest("stepOut", { threadId: MAIN_THREAD_ID });
    const response = await session.collector.waitFor(isResponse("stepOut", stepOutSeq));
    const continued = await session.collector.waitFor(isEvent("continued"));
    const stopped = await session.collector.waitFor(isStoppedEvent("step"));

    expect(response.success).toBe(true);
    expect(continued.type).toBe("event");
    expect(stopped.body.threadId).toBe(MAIN_THREAD_ID);

    const stackTrace = await session.requestStackTrace();
    expect(stackTrace.body?.stackFrames[0]?.line).toBe(6);
  });

  it("advances to the next operation on each next request", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step-lines.js",
        sourceText: "const a = 1; const b = 2; const c = 3;",
      }),
    );

    // Stopped at: VariableDeclaration
    let stackTrace = await session.requestStackTrace();
    const { column: varDeclColumn } = stackTrace.body?.stackFrames[0] ?? {};
    expect(varDeclColumn).toBe(1);

    let continued = session.collector.waitFor(isEvent("continued"));
    let stopped = session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await continued;
    await stopped;

    // Stopped at: VariableDeclaration
    stackTrace = await session.requestStackTrace();
    const { column: secondVarDeclColumn } = stackTrace.body?.stackFrames[0] ?? {};
    expect(secondVarDeclColumn).toBe(14);
  });

  it("steps into the first statement of a user function", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step-into.js",
        sourceText: [
          "function addOne(value) {",
          "  const nextValue = value + 1;",
          "  return nextValue;",
          "}",
          "const result = addOne(1);",
          "result;",
        ].join("\n"),
      }),
    );

    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isStoppedEvent("step"));

    const stepInSeq = session.sendRequest("stepIn", { threadId: MAIN_THREAD_ID });
    await session.collector.waitFor(isResponse("stepIn", stepInSeq));
    await session.collector.waitFor(isEvent("continued"));
    await session.collector.waitFor(isStoppedEvent("step"));

    const stackTrace = await session.requestStackTrace();
    expect(stackTrace.body?.stackFrames[0]?.line).toBe(2);
  });
});
