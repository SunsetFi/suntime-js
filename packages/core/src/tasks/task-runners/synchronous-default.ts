import { drainIterator } from "../../utils/drain-iterator.js";
import type { StaticJsTaskIterator } from "../StaticJsTaskIterator.js";
import type { StaticJsTaskRunner } from "../StaticJsTaskRunner.js";

/**
 * Synchronously drains a task iterator to completion.
 *
 * WARNING: This task runner will never yield control back to the event loop, and will block the thread until the task iterator is complete.  Use with caution.
 * @param task The task iterator to drain.
 */
export const synchronousDefaultTaskRunner: StaticJsTaskRunner = (task: StaticJsTaskIterator) => {
  drainIterator(task);
};
