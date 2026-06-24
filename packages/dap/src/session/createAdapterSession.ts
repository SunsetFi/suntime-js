import { StaticJsRealm, type StaticJsTaskRunner } from "@suntime-js/core";
import {
  StaticJsDebugger,
  type StaticJsDebugSession,
  type StaticJsDebugStopEvent,
  type StaticJsDebugTerminateEvent,
} from "@suntime-js/debugger";

import type { NormalizedStaticJsLaunchRequestArguments } from "../adapter/types/NormalizedStaticJsLaunchRequestArguments.js";

export interface CreatedAdapterSession {
  readonly debugSession: StaticJsDebugSession;
  readonly disposeListeners: (() => void)[];
}

export interface CreateAdapterSessionOptions {
  realm?: StaticJsRealm;
  launchArgs: NormalizedStaticJsLaunchRequestArguments;
  onDidStop: (event: StaticJsDebugStopEvent) => void;
  onDidTerminate: (event: StaticJsDebugTerminateEvent) => void;
  runTask?: StaticJsTaskRunner | undefined;
}

export function createAdapterSession(options: CreateAdapterSessionOptions): CreatedAdapterSession {
  const debuggerInstance = new StaticJsDebugger({
    runTask: options.runTask,
  });
  const realm = options.realm ?? StaticJsRealm();
  const debugSession = debuggerInstance.createSession({
    launch: {
      ...options.launchArgs,
      realm,
    },
  });

  return {
    debugSession,
    disposeListeners: [
      debugSession.onDidStop(options.onDidStop),
      debugSession.onDidTerminate(options.onDidTerminate),
    ],
  };
}
