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
        sourceText: "const value = 1;\nvalue + 1;",
      }),
    );

    const nextSeq = session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    const nextResponsePromise = session.collector.waitFor(isResponse("next", nextSeq));
    const continuedPromise = session.collector.waitFor(isEvent("continued"));
    const stoppedPromise = session.collector.waitFor(isStoppedEvent("step"));

    await nextResponsePromise;
    await continuedPromise;
    await stoppedPromise;

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

  it.skip("known failing: advances to the next statement line on each next request", async () => {
    const session = createSession();

    await session.initialize();
    await session.launchStoppedScript(
      createScriptLaunchArgs({
        sourceName: "staticjs:///script/web-step-lines.js",
        sourceText: "const a = 1;\nconst b = 2;\nconst c = 3;",
      }),
    );

    let stackTrace = await session.requestStackTrace();
    expect(stackTrace.body?.stackFrames[0]?.line).toBe(1);

    let continuedPromise = session.collector.waitFor(isEvent("continued"));
    let stoppedPromise = session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await continuedPromise;
    await stoppedPromise;

    stackTrace = await session.requestStackTrace();
    expect(stackTrace.body?.stackFrames[0]?.line).toBe(2);

    continuedPromise = session.collector.waitFor(isEvent("continued"));
    stoppedPromise = session.collector.waitFor(isStoppedEvent("step"));
    session.sendRequest("next", { threadId: MAIN_THREAD_ID });
    await continuedPromise;
    await stoppedPromise;

    stackTrace = await session.requestStackTrace();
    expect(stackTrace.body?.stackFrames[0]?.line).toBe(3);
  });
});
