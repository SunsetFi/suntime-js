/**
 * A task in the StaticJs runtime.
 *
 * Tasks are implemented as generators.  Call .next() to run a single operation in the task.
 * Call it repeatedly until it returns { done: true }.
 *
 * Task execution can be done asynchronously, with pauses between operations,
 */

export interface StaticJsTaskSourceLocation {
  /**
   * The 1-based line number of the current location in the source code.
   */
  line: number;

  /**
   * The 0-based column number of the current location in the source code.
   */
  column: number;

  /**
   * The 0-based character index of the current location in the source code.
   */
  character: number;
}

export interface StaticJsTaskIteratorLocation {
  /**
   * The starting location of the current operation in the source code.
   */
  readonly start: Readonly<StaticJsTaskSourceLocation>;

  /**
   * The ending location of the current operation in the source code.
   * This will be one past the last character of the operation.
   */
  readonly end: Readonly<StaticJsTaskSourceLocation>;
}

export interface StaticJsTaskIterator {
  /**
   * Whether the task has completed execution.
   *
   * This will still be false if the task has aborted.
   */
  get done(): boolean;

  /**
   * Whether the task has been aborted.
   */
  get aborted(): boolean;

  /**
   * The location of the current operation queued for evaluation.
   */
  get location(): StaticJsTaskIteratorLocation | null;

  /**
   * Gets the type of the current operation queued for evaluation.
   */
  get operationType(): string | null;

  /**
   * Evaluate the current operation and proceed the iterator to the next one.
   */
  next(): IteratorResult<void, void>;

  /**
   * Abort the evaluation of this task.
   *
   * This will raise a StaticJsTaskAbortedError on the promise that represents this evaluation.
   */
  abort(): void;
}

/**
 * A function to run a task in the realm.
 *
 * The implementation should call .next() on the generator until it is done.
 * This may be done synchronously or asynchronously.
 */
export type StaticJsTaskRunner = (task: StaticJsTaskIterator) => void;
