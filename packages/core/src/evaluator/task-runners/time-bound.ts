import { StaticJsTaskAbortedError } from "../../errors/StaticJsTaskAbortedError.js";
import type { StaticJsTaskRunner } from "../../runtime/tasks/StaticJsTaskRunner.js";

export interface TimeBoundTaskRunnerOptions {
  /**
   * The maximum time, in milliseconds, that a synchronous task is allowed to run for.
   * @default 5_000
   */
  maxRunTime?: number;
}
export function createTimeBoundTaskRunner({
  maxRunTime = 5000,
}: TimeBoundTaskRunnerOptions = {}): StaticJsTaskRunner {
  return function timeBoundTaskRunner(task) {
    const runEnd = Date.now() + maxRunTime;

    while (!task.done) {
      const now = Date.now();

      if (now >= runEnd) {
        task.throw(new StaticJsTaskAbortedError(`Evaluation took too long to complete.`));
        return;
      }

      task.next();
    }
  };
}
