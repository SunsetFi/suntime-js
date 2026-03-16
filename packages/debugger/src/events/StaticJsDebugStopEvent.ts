import type { StaticJsDebugSnapshot } from "../stack/StaticJsDebugSnapshot.js";
import type { StaticJsDebugStopReason } from "../session/StaticJsDebugStopReason.js";

export interface StaticJsDebugStopEvent {
  readonly sessionId: string;
  readonly reason: StaticJsDebugStopReason;
  readonly snapshot: StaticJsDebugSnapshot | null;
}
