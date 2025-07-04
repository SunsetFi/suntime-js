/**
 * A task in the StaticJs runtime.
 *
 * Tasks are implemented as generators.  Call .next() to run a single operation in the task.
 * Call it repeatedly until it returns { done: true }.
 *
 * Task execution can be done asynchronously, with pauses between operations,
 */

export interface StaticJsTaskIterator {
  get done(): boolean;
  get aborted(): boolean;

  get line(): number;
  get column(): number;

  next(): IteratorResult<void, void>;
  abort(): void;
}

/**
 * A function to run a task in the realm.
 *
 * The implementation should call .next() on the generator until it is done.
 * This may be done synchronously or asynchronously.
 */
export type StaticJsTaskRunner = (task: StaticJsTaskIterator) => void;
