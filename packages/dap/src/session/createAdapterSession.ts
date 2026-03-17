import { StaticJsRealm, type StaticJsTaskRunner } from "@suntime-js/core";
import {
  createStaticJsDebugger,
  type StaticJsDebugSession,
  type StaticJsDebuggerOptions,
  type StaticJsDebugStopEvent,
  type StaticJsDebugTerminateEvent,
} from "@suntime-js/debugger";

import type { NormalizedStaticJsLaunchRequestArguments } from "../adapter/types/NormalizedStaticJsLaunchRequestArguments.js";

export interface CreatedAdapterSession {
  readonly debugSession: StaticJsDebugSession;
  readonly disposeListeners: (() => void)[];
}

export interface CreateAdapterSessionOptions {
  readonly launchArgs: NormalizedStaticJsLaunchRequestArguments;
  readonly onDidStop: (event: StaticJsDebugStopEvent) => void;
  readonly onDidTerminate: (event: StaticJsDebugTerminateEvent) => void;
  readonly realm?: StaticJsDebuggerOptions["realm"];
  readonly createRealm?: () => StaticJsDebuggerOptions["realm"];
  readonly runTask?: StaticJsTaskRunner;
}

export function createAdapterSession(options: CreateAdapterSessionOptions): CreatedAdapterSession {
  const realm = options.realm ?? options.createRealm?.() ?? StaticJsRealm();
  const debuggerInstance = createStaticJsDebugger({
    realm,
    runTask: options.runTask,
  });
  const debugSession = debuggerInstance.createSession({
    launch: options.launchArgs,
  });

  return {
    debugSession,
    disposeListeners: [
      debugSession.onDidStop(options.onDidStop),
      debugSession.onDidTerminate(options.onDidTerminate),
    ],
  };
}
