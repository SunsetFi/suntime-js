import { StaticJsTaskAbortedError } from "../../errors/StaticJsTaskAbortedError.js";

import type { StaticJsTaskRunner } from "../../runtime/realm/StaticJsTaskIterator.js";

export interface TimeSharingTaskRunnerOptions {
  /**
   * The maximum number of operations to execute before yielding back to the caller.
   * If not specified, the default is 10,000.
   */
  operationsPerIteration?: number;

  /**
   * The amount of time, in milliseconds, to wait before resuming the task.
   * If not specified, the default is 100 milliseconds.
   */
  yieldTime?: number;

  /**
   * The maximum time, in milliseconds, that a task is allowed to run for.
   * If not specified, the default is no limit.
   */
  maxTaskTime?: number;

  /**
   * The maximum time, in milliseconds, that the entire evaluation is allowed to run for.
   * If not specified, the default is no limit.
   */
  maxRunTime?: number;
}

export function createTimeSharingTaskRunner({
  operationsPerIteration = 10000,
  yieldTime = 100,
  maxTaskTime = Number.POSITIVE_INFINITY,
  maxRunTime = Number.POSITIVE_INFINITY,
}: TimeSharingTaskRunnerOptions = {}): StaticJsTaskRunner {
  let runEnd: number | undefined;
  return function timeSharingTaskRunner(task) {
    if (runEnd === undefined) {
      runEnd = Date.now() + maxRunTime;
    }

    const taskEnd = Date.now() + maxTaskTime;
    function doTask() {
      let operations = 0;
      while (!task.done && operations < operationsPerIteration) {
        const now = Date.now();
        if (now >= taskEnd) {
          throw new StaticJsTaskAbortedError(`Task took too long to complete.`);
        }
        if (now >= runEnd!) {
          throw new StaticJsTaskAbortedError(
            `Evaluation took too long to complete.`,
          );
        }

        task.next();
        operations++;
      }

      if (!task.done) {
        setTimeout(doTask, yieldTime);
      }
    }

    doTask();
  };
}
