import { StaticJsTaskCalleeType } from "./StaticJsTaskCalleeType.js";
import type { StaticJsTaskIteratorOperation } from "./StaticJsTaskIteratorOperation.js";
import type { StaticJsTaskIteratorStackFrame } from "./StaticJsTaskIteratorStackFrame.js";
import type { StaticJsTaskType } from "./StaticJsTaskType.js";

/**
 * A task in the StaticJs runtime.
 *
 * Tasks are implemented as generators.  Call .next() to run a single operation in the task.
 * Call it repeatedly until it returns { done: true }.
 *
 * Task execution can be done asynchronously, with pauses between operations,
 */
export interface StaticJsTaskIterator {
  /**
   * The type of the task, either "macrotask" or "microtask".
   */
  readonly type: StaticJsTaskType;

  /**
   * The callee of the task, which indicates how the task was triggered.
   */
  readonly calleeType: StaticJsTaskCalleeType;

  /**
   * Whether the task is for an async operation.
   *
   * Async tasks are allowed to not fully drain their iterator before the runTask call returns.
   */
  readonly async: boolean;

  /**
   * Whether the task has completed execution.
   *
   * This will return true if the task ran to completion, or if it was aborted.
   */
  get done(): boolean;

  /**
   * Whether the task has been aborted.
   */
  get aborted(): boolean;

  /**
   * Information on the current queued operation to be evaluated by a call to `.next()`.
   *
   * If the task is done, this will be null.
   */
  get operation(): StaticJsTaskIteratorOperation | null;

  /**
   * The stack frames of the currently executing task, with the top of the stack at index 0.
   */
  get stack(): ReadonlyArray<StaticJsTaskIteratorStackFrame>;

  /**
   * Evaluate the current operation and proceed the iterator to the next one.
   */
  next(): IteratorResult<void, void>;

  /**
   * Raise an error at the current operation, aborting the task.
   * @param error The error to raise.
   */
  throw(error: unknown): IteratorResult<void, void>;

  /**
   * Abort the evaluation of this task.
   *
   * This will raise a StaticJsTaskAbortedError on the promise that represents this evaluation.
   */
  abort(): void;
}
