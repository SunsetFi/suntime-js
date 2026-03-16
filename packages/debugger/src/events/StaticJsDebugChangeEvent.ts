import type { StaticJsDebugSessionState } from "../session/StaticJsDebugSessionState.js";

export interface StaticJsDebugChangeEvent {
  readonly sessionId: string;
  readonly state: StaticJsDebugSessionState;
}
