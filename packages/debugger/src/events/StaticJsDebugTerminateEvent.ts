import type { StaticJsDebugSessionStateTerminal } from "../session/StaticJsDebugSessionState.js";
import type { StaticJsDebugStopReasonTerminal } from "../session/StaticJsDebugStopReason.js";

export interface StaticJsDebugTerminateEvent {
  readonly sessionId: string;
  readonly state: StaticJsDebugSessionStateTerminal;
  readonly reason: StaticJsDebugStopReasonTerminal;
  readonly error: unknown;
}
