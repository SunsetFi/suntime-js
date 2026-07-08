import type { StaticJsDebugStopReason } from "#session/StaticJsDebugStopReason.js";
import type { StaticJsDebugSnapshot } from "#stack/StaticJsDebugSnapshot.js";

export interface StaticJsDebugStopEvent {
  readonly sessionId: string;
  readonly reason: StaticJsDebugStopReason;
  readonly snapshot: StaticJsDebugSnapshot | null;
}
