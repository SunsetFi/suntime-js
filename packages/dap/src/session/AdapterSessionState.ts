import type { StaticJsDebugSession } from "@suntime-js/debugger";

import type { NormalizedStaticJsLaunchRequestArguments } from "../adapter/StaticJsLaunchRequestArguments.js";

export interface AdapterSessionState {
  configurationDone: boolean;
  launched: boolean;
  terminated: boolean;
  launchArgs: NormalizedStaticJsLaunchRequestArguments | null;
  debugSession: StaticJsDebugSession | null;
  disposeDebugSessionListeners: (() => void)[];
}

export function createAdapterSessionState(): AdapterSessionState {
  return {
    configurationDone: false,
    launched: false,
    terminated: false,
    launchArgs: null,
    debugSession: null,
    disposeDebugSessionListeners: [],
  };
}
