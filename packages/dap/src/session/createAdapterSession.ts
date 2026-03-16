import { StaticJsRealm } from "@suntime-js/core";
import {
  createStaticJsDebugger,
  type StaticJsDebugSession,
  type StaticJsDebugStopEvent,
  type StaticJsDebugTerminateEvent,
} from "@suntime-js/debugger";

import type { NormalizedStaticJsLaunchRequestArguments } from "../adapter/StaticJsLaunchRequestArguments.js";

export interface CreatedAdapterSession {
  readonly debugSession: StaticJsDebugSession;
  readonly disposeListeners: (() => void)[];
}

export interface CreateAdapterSessionOptions {
  readonly launchArgs: NormalizedStaticJsLaunchRequestArguments;
  readonly onDidStop: (event: StaticJsDebugStopEvent) => void;
  readonly onDidTerminate: (event: StaticJsDebugTerminateEvent) => void;
}

export function createAdapterSession(options: CreateAdapterSessionOptions): CreatedAdapterSession {
  const realm = StaticJsRealm();
  const debuggerInstance = createStaticJsDebugger({ realm });
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
