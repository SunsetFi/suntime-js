# StaticJsTaskIterator

A task represents a unit of work being evaluated in the runtime. Tasks can be a script, expression, module, or host-triggered invocation. Tasks follow an iterator pattern: each call to `.next()` evaluates one operation.

**Import**

```ts
import { StaticJsTaskIterator } from "@suntime-js/core";
```

---

## Overview

Tasks are passed to [task runners](#staticjstaskrunner) whenever the realm needs to evaluate code. A task runner's job is to call `.next()` until `done` is `true`, either immediately or spread across time.

```ts
function runTask(task: StaticJsTaskIterator) {
  while (!task.done) {
    task.next();
  }
}
```

Calling `.next()` never throws. Instead, errors in sandboxed code are handled internally and surfaced through the promise or function that triggered the task. The `value` of each `IteratorResult` is always `undefined`; tasks communicate their result through the triggering call, not through the iterator.

---

## Properties

### calleeType

Type: `"evaluate" | "host"`

How the task was triggered:

| Value        | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| `"evaluate"` | Triggered by `evaluateScript`, `evaluateExpression`, or `evaluateModule`.                  |
| `"host"`     | Triggered by a host API call such as `toNative()`, `callAsync()`, or `getPropertyAsync()`. |

### async

Type: `boolean`

Whether the task was triggered by an async evaluation. Async tasks runners can return before the iterator is exhausted, allowing it to be resumed later. Sync tasks **must** be fully drained (or aborted) before the task runner returns.

### currentTaskType

Type: `"macrotask" | "microtask" | null`

The class of work currently executing. Within a single evaluation unit, this may change as promise continuations are inlined:

| Value         | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `"macrotask"` | A top-level `evaluate*` invocation or host call.            |
| `"microtask"` | A promise continuation running after the current macrotask. |
| `null`        | The task is done.                                           |

### currentTaskId

Type: `string | null`

A unique identifier for the currently executing macro- or microtask. Changes when microtasks begin. `null` when the task is done.

### done

Type: `boolean`

`true` when the task has finished by any means: ran to completion, was aborted, or the task runner threw.

### aborted

Type: `boolean`

`true` if `.abort()` has been called on this task.

### operation

Type: `StaticJsTaskIteratorOperation | null`

Information about the next operation that will execute on the next `.next()` call. `null` when the task is done.

#### `StaticJsTaskIteratorOperation`

| Property        | Type     | Description                                                                                   |
| --------------- | -------- | --------------------------------------------------------------------------------------------- |
| `operationType` | `string` | The AST node type of the queued operation (e.g. `"ExpressionStatement"`, `"CallExpression"`). |

### location

Type: `StaticJsTaskSourceLocation | null`

The source location of the operation currently queued for `.next()`. `null` when the task is done.

#### `StaticJsTaskSourceLocation`

| Property     | Type     | Description                                                                                              |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------- |
| `sourceName` | `string` | The name passed as `sourceName` in the evaluate options, or an auto-generated name if none was provided. |
| `line`       | `number` | 1-based line number.                                                                                     |
| `column`     | `number` | 0-based column index on the given line.                                                                  |
| `character`  | `number` | 0-based character index in the raw source string.                                                        |

### stack

Type: `ReadonlyArray<StaticJsTaskIteratorStackFrame>`

Stack frames for the currently executing operation, with the innermost frame at index `0`.

#### `StaticJsTaskIteratorStackFrame`

| Property         | Type                                 | Description                                                                                                                                                                                                                                                                                     |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `depth`          | `number`                             | Depth of this frame from the top of the stack (0 = outermost).                                                                                                                                                                                                                                  |
| `sourceLocation` | `StaticJsTaskSourceLocation \| null` | Source location of this frame.                                                                                                                                                                                                                                                                  |
| `function`       | `StaticJsFunction \| null`           | The function being invoked at this frame, or `null` for the top-level script. May include internal runtime functions. Function names can be obtained using `frame.function?.getAsync("name")`, but be sure use a task runner as appropriate since the sandbox can define `name` as an accessor. |

---

## Methods

### next()

```ts
next(): IteratorResult<void, void>
```

Evaluates the current queued operation and advances to the next one. Returns `{ done: true }` when the task is finished. Throws a `StaticJsTaskError` if called on an already-done task (Either a `StaticJsTaskCompletedError` or a `StaticJsTaskAbortedError`).

### abort(error?)

```ts
abort(error?: unknown): void
```

Aborts the task. Sandboxed code **cannot** catch this. The error will bubble up to the evaluation that triggered the task.

- For async tasks: the evaluation promise rejects with `error`.
- For sync tasks: the evaluation function throws `error`.
- If `error` is omitted or is a string, a `StaticJsTaskAbortedError` is used (wrapping the string if provided).

Throws `StaticJsTaskError` if the task is already done.

### throw(error)

```ts
throw(error: unknown): IteratorResult<void, void>
```

Raises an error at the current operation.

- If `error` is a `StaticJsRuntimeError`, sandboxed code **can** catch it (e.g. with `try/catch` inside the sandbox).
- Otherwise, the error bypasses the sandbox and surfaces on the evaluation promise or function.

---

## StaticJsTaskRunner

```ts
type StaticJsTaskRunner = (task: StaticJsTaskIterator) => void;
```

A function that drives a task to completion. The runner calls `.next()` repeatedly (and optionally `.abort()`) until `task.done` is `true`. It may do this synchronously or asynchronously.

Task runners are configured:

- **Per realm** via `runTask` / `runTaskSync` on `StaticJsRealm(opts)`.
- **Per call** via `runTask` in the options of `evaluateScript`, `evaluateScriptSync`, `evaluateExpression`, `evaluateExpressionSync`, and `evaluateModule`.
- **On host functions** via `getSync`, `getAsync`, and similar via the runTask option.

  A per-call `runTask` takes precedence over the realm-level default.

### Sync vs. async runners

Tasks flagged `task.async === false` **must** be drained synchronously before the runner returns. Failing to do so causes `StaticJsSynchronousTaskIncompleteError`. You can gate on `task.async` to decide whether to defer:

```ts
function runTask(task: StaticJsTaskIterator) {
  if (task.async) {
    // Spread across multiple event loop ticks
    const tick = () => {
      for (let i = 0; i < 1000; i++) {
        if (task.done) return;
        task.next();
      }
      setTimeout(tick, 0);
    };
    tick();
  } else {
    // Must complete before returning
    while (!task.done) task.next();
  }
}
```

### Microtasks

Each macrotask invokes `runTask` exactly once. Promise continuations (microtasks) are inlined into the same iterator, and will complete before the evaluation unit is marked complete. You can detect the passage of microtasks by observing the [currentTaskId](#currenttaskid).

---

## Built-in task runners

### createTimeBoundTaskRunner(opts?)

```ts
import { createTimeBoundTaskRunner } from "@suntime-js/core";
```

A **synchronous, blocking** runner that enforces a wall-clock time limit. Suitable for `runTaskSync`. Can be used for `runTask` but will block the host event loop for the duration of evaluation.

```ts
const realm = StaticJsRealm({
  runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
});

// Throws StaticJsTaskAbortedError after 5 seconds
realm.evaluateScriptSync(`while (true) {}`);
```

#### Options

| Option        | Type     | Default    | Description                                                                        |
| ------------- | -------- | ---------- | ---------------------------------------------------------------------------------- |
| `maxRunTime`  | `number` | `5_000`    | Maximum milliseconds the entire evaluation (macro + micro tasks) may run.          |
| `maxTaskTime` | `number` | `Infinity` | Maximum milliseconds a single macro- or microtask may run. For advanced use cases. |

### createTimeSharingTaskRunner(opts?)

```ts
import { createTimeSharingTaskRunner } from "@suntime-js/core";
```

An **asynchronous** runner that interleaves evaluation with host event-loop turns, keeping the host responsive even during infinite loops. **Do not use with `runTaskSync`**, as it will not drain synchronously and will cause a `StaticJsSynchronousTaskIncompleteError`.

```ts
const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({ operationsPerIteration: 10_000 }),
});

// Never hangs; host remains responsive
await realm.evaluateScript(`while (true) {}`);
```

#### Options

| Option                   | Type     | Default    | Description                                                         |
| ------------------------ | -------- | ---------- | ------------------------------------------------------------------- |
| `operationsPerIteration` | `number` | `10_000`   | Operations to evaluate per chunk before yielding to the event loop. |
| `yieldTime`              | `number` | `100`      | Milliseconds to yield between chunks.                               |
| `maxRunTime`             | `number` | `Infinity` | Maximum milliseconds the entire evaluation may run.                 |
| `maxTaskTime`            | `number` | `Infinity` | Maximum milliseconds a single macro- or microtask may run.          |
