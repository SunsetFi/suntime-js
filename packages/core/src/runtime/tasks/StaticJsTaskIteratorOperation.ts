import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";

export interface StaticJsTaskIteratorOperation {
  // TODO: Remove this?  Redundant with stack.
  /**
   * The location of the current operation queued for evaluation.
   */
  readonly location: StaticJsTaskSourceLocation | null;

  /**
   * Gets the type of the current operation queued for evaluation.
   */
  readonly operationType: string;
}
