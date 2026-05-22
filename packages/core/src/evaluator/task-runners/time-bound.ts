import { StaticJsTaskAbortedError } from "../../errors/StaticJsTaskAbortedError.js";
import type { StaticJsTaskRunner } from "../../runtime/tasks/StaticJsTaskRunner.js";

export interface TimeBoundTaskRunnerOptions {
  /**
   * The maximum time, in milliseconds, that a synchronous task is allowed to run for.
   * @default 5_000
   */
  maxRunTime?: number;

  /**
   * The maximum time, in milliseconds, that a single task (macrotask or microtask)
   * is allowed to run for before being aborted.
   * If not specified, the default is no limit.
   * @default Infinity
   */
  maxTaskTime?: number;
}
export function createTimeBoundTaskRunner({
  maxRunTime = 5000,
  maxTaskTime = Number.POSITIVE_INFINITY,
}: TimeBoundTaskRunnerOptions = {}): StaticJsTaskRunner {
  return function timeBoundTaskRunner(task) {
    const runEnd = Date.now() + maxRunTime;

    let currentTaskId: string | null = null;
    let taskEnd: number | null = null;
    while (!task.done) {
      const now = Date.now();

      if (now >= runEnd) {
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
    }
  };
}
