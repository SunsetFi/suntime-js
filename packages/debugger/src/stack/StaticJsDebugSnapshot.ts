import type { StaticJsDebugSourceKind } from "../session/StaticJsDebugSessionOptions.js";

export interface StaticJsDebugSnapshot {
  /**
   * The name of the source for the current snapshot.
   */
  readonly sourceName: string;

  /**
   * The kind of source for the current snapshot.
   */
  readonly sourceKind: StaticJsDebugSourceKind;

  /**
   * The type of operation that is currently being executed.
   */
  readonly operationType: string;

  /**
   * The 1-based line number for the current snapshot.
   */
  readonly line: number;

  /**
   * The 0-based column number for the current snapshot.
   */
  readonly column: number;

  /**
   * The kind of task that is currently being executed.
   */
  readonly taskKind: "macrotask" | "microtask";
}
