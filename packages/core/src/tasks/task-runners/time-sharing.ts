import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";

import { StaticJsTaskAbortedError } from "#errors/StaticJsTaskAbortedError.js";

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

  /**
   * The maximum time, in milliseconds, that a single task (macrotask or microtask)
   * is allowed to run for before being aborted.
   * If not specified, the default is no limit.
   */
  maxTaskTime?: number;
}

export function createTimeSharingTaskRunner({
  operationsPerIteration = 10000,
  yieldTime = 100,
  maxRunTime = Number.POSITIVE_INFINITY,
  maxTaskTime = Number.POSITIVE_INFINITY,
}: TimeSharingTaskRunnerOptions = {}): StaticJsTaskRunner {
  return function timeSharingTaskRunner(task) {
    const runEnd = Date.now() + maxRunTime;

    let taskEnd: number | null = null;
    let currentTaskId: string | null = null;
    function doTask() {
      let operations = 0;
      while (!task.done && operations < operationsPerIteration) {
        const now = Date.now();

        if (now >= runEnd!) {
          task.abort(new StaticJsTaskAbortedError(`Evaluation took too long to complete.`));
          return;
        }

        if (taskEnd === null || currentTaskId !== task.currentTaskId) {
          currentTaskId = task.currentTaskId;
          taskEnd = now + maxTaskTime;
        } else if (now >= taskEnd) {
          task.abort(new StaticJsTaskAbortedError(`A single task took too long to complete.`));
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
