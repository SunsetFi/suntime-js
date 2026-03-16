import type { StaticJsDebugSessionState } from "../session/StaticJsDebugSessionState.js";

export interface StaticJsDebugStartEvent {
  readonly sessionId: string;
  readonly state: Extract<StaticJsDebugSessionState, "starting" | "running" | "paused">;
}
