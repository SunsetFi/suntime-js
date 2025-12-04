import StaticJsTaskAbortedError from "../../errors/StaticJsTaskAbortedError.js";

import type { StaticJsTaskRunner } from "../../runtime/realm/StaticJsTaskIterator.js";

export interface TimeBoundTaskRunnerOptions {
  /**
   * The maximum time, in milliseconds, that the task is allowed to run for.
   * If not specified, the default is 5000 (5 seconds).
   */
  maxRunTime?: number;

  /**
   * The maximum time, in milliseconds, that a synchronous task is allowed to run for.
   * If not specified, the default is no limit.
   */
  maxTaskTime?: number;
}
export function createTimeBoundTaskRunner({
  maxRunTime = 5000,
  maxTaskTime = Number.POSITIVE_INFINITY,
}: TimeBoundTaskRunnerOptions = {}): StaticJsTaskRunner {
  let runEnd: number | undefined;
  return function timeBoundTaskRunner(task) {
    if (runEnd === undefined) {
      runEnd = Date.now() + maxRunTime;
    }

    const taskEnd = Date.now() + maxTaskTime;

    while (!task.done) {
      const now = Date.now();
      if (now >= taskEnd) {
        task.throw(
          new StaticJsTaskAbortedError(`Task took too long to complete.`),
        );
        return;
      }

      if (now >= runEnd) {
        task.throw(
          new StaticJsTaskAbortedError(`Evaluation took too long to complete.`),
        );
        return;
      }

      task.next();
    }
  };
}
