import type { StaticJsDebugSourceKind } from "../session/StaticJsDebugSessionOptions.js";

export interface StaticJsDebugSnapshot {
  readonly sourceName: string;
  readonly sourceKind: StaticJsDebugSourceKind;
  readonly operationType: string;
  readonly line: number;
  readonly column: number;
  readonly taskKind: "macrotask" | "microtask";
}
