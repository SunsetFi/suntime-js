import type { StaticJsTaskRunner } from "./StaticJsTaskIterator.js";

/**
 * Options for running a macrotask in the StaticJs runtime.
 */

export interface StaticJsRunTaskOptions {
  /**
   * The task runner to use.
   *
   * If specified, this will be used instead of {@link import('./factories/StaticJsRealm').StaticJsRealmOptions.runTask}.
   *
   * This may not be called immediately.  The task will be run when it is reached in the queue.
   * @param task The task to run.
   */
  runTask?: StaticJsTaskRunner;

  /**
   * The name of the source to use for the task.  This is used in stack traces and debugging.
   */
  sourceName?: string;
}
