import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";

export interface StaticJsTaskIteratorOperation {
  /**
   * The location of the current operation queued for evaluation.
   */
  readonly location: StaticJsTaskSourceLocation | null;

  /**
   * Gets the type of the current operation queued for evaluation.
   */
  readonly operationType: string;
}
