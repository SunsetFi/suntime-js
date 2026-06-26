import type { StaticJsTaskCalleeType } from "./StaticJsTaskCalleeType.js";
import type { StaticJsTaskIteratorOperation } from "./StaticJsTaskIteratorOperation.js";
import type { StaticJsTaskIteratorStackFrame } from "./StaticJsTaskIteratorStackFrame.js";
import type { StaticJsTaskScopeFrame } from "./StaticJsTaskScopeFrame.js";
import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";
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
   * The type of the current task, either "macrotask" or "microtask".
   */
  readonly currentTaskType: StaticJsTaskType | null;

  /**
   * The unique identifier for the current task.
   * This will change as more microtasks are ran.
   */
  readonly currentTaskId: string | null;

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
   * The location of the current operation queued for evaluation.
   */
  get location(): StaticJsTaskSourceLocation | null;

  /**
   * The stack frames of the currently executing task, with the top of the stack at index 0.
   */
  get stack(): readonly StaticJsTaskIteratorStackFrame[];

  /**
   * The variable scopes of the currently executing task, with the innermost scope at index 0.
   */
  get scopes(): readonly StaticJsTaskScopeFrame[];

  /**
   * Evaluate the current operation and proceed the iterator to the next one.
   */
  next(): IteratorResult<void, void>;

  /**
   * Raise an error at the current operation.
   *
   * If the error is a StaticJsRuntimeError, the executing code WILL be able to catch it.  Otherwise, the error will bubble up to the promise
   * representing the evaluation of the task.
   * @param error The error to raise.
   */
  throw(error: unknown): IteratorResult<void, void>;

  /**
   * Abort the evaluation of this task.
   *
   * The exception will be raised on the promise representating the evaluation.
   * If no error is specified, a {@link import("../errors/StaticJsTaskAbortedError.js").StaticJsTaskAbortedError} will be used.
   * @param error The error to raise.  If this is a string, it will be wrapped in a {@link import("../errors/StaticJsTaskAbortedError.js").StaticJsTaskAbortedError}.
   */
  abort(error?: unknown): void;
}
