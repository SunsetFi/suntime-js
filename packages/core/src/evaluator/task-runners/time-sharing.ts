import { StaticJsTaskAbortedError } from "../../errors/StaticJsTaskAbortedError.js";
import type { StaticJsTaskRunner } from "../../runtime/tasks/StaticJsTaskRunner.js";

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
   * The maximum time, in milliseconds, that the entire evaluation is allowed to run for.
   * If not specified, the default is no limit.
   */
  maxRunTime?: number;
}

export function createTimeSharingTaskRunner({
  operationsPerIteration = 10000,
  yieldTime = 100,
  maxRunTime = Number.POSITIVE_INFINITY,
}: TimeSharingTaskRunnerOptions = {}): StaticJsTaskRunner {
  return function timeSharingTaskRunner(task) {
    const runEnd = Date.now() + maxRunTime;

    function doTask() {
      let operations = 0;
      while (!task.done && operations < operationsPerIteration) {
        const now = Date.now();

        if (now >= runEnd!) {
          task.throw(new StaticJsTaskAbortedError(`Evaluation took too long to complete.`));
          return;
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
