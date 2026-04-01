import { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

/**
 * Options for running scripts in the StaticJs runtime.
 */
export interface StaticJsRealmEvaluateSourceOptions extends StaticJsRunTaskOptions {
  /**
   * The name of the source to use for the task.  This is used in stack traces and debugging.
`   */
  sourceName?: string;
}
