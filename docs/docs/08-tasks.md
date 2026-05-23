---
title: Tasks
sidebar_label: Tasks
sidebar_position: 7
---

Tasks are the heart of the evaluator. They represent macrotasks (calls to `evaluateScript`, `evaluateExpression`, and `evaluateModule`), microtasks (Promise resolution follow-ups), and host invocations (`toNative` and similar).

Tasks follow an iterator pattern: each call to `.next()` evaluates a single operation in the runtime. An operation is loosely defined as a single AST node evaluation step.

Because of the iterator nature, it is possible to not fully drain the iterator in one go. This lets you suspend and resume evaluation at any point, even for synchronous sandbox code. It is why the majority of the evaluator functions are async: they may not complete until you call the final `.next()` on the task.

Calls to `.next()` never throw, even if evaluating code throws an error. Error handling is internal to the task, and errors are surfaced through the promise or function that triggered the task. Similarly, the `value` of each `IteratorResult` is always `undefined`.

For the full [`StaticJsTaskIterator`](./api/tasks.md) API, see the API reference.

## Task runners

Task runners are invoked when the evaluator runtime begins evaluating code. Note that this might not be immediately upon calling the `evaluate` functions. Tasks are created as-needed once the realm begins execution.

For most use cases, the [built-in task runners](#built-in-task-runners) are sufficient without writing a custom runner.

### Implementing task runners

A task runner receives a [`StaticJsTaskIterator`](./api/tasks.md) and is responsible for calling `.next()` until the task completes:

```ts
function runTask(task) {
  while (!task.done) {
    task.next();
  }
}
```

Most task runners do _not_ have to fully iterate the task. This allows evaluation to be suspended or resumed at any time. The only exception is task runners passed to synchronous evaluation methods, which must fully drain or abort the task before returning. You can check `task.async` to distinguish the two cases.

Here is an example runner that pauses every 1000 operations to let the browser do other work, preventing deadlocks for large loops:

```ts
function runTask(task) {
  const run = () => {
    for (let i = 0; i < 1000; i++) {
      if (task.done) return;
      task.next();
    }
    setTimeout(run, 10);
  };

  run();
}
```

### Microtasks

Each macrotask invokes `runTask` exactly once. If the macrotask spawns microtasks (e.g. Promise continuations), they are merged into the same iterator. You can observe the switch from macrotask to microtask using `task.currentTaskType`.

### Synchronous vs. asynchronous

Tasks passed to the following methods are **asynchronous**, and the runner may return before the iterator is exhausted:

- `realm.evaluateScript`, `realm.evaluateExpression`, `realm.evaluateModule`
- The top-level `evaluateScript`, `evaluateExpression`, `evaluateModule` exports
- `*Async()` methods on `StaticJsValue`

Tasks passed to the following methods are **synchronous**. The runner must fully drain or abort the task before returning, or a `StaticJsSynchronousTaskIncompleteError` is thrown:

- `realm.evaluateScriptSync`, `realm.evaluateExpressionSync`
- The top-level `evaluateScriptSync`, `evaluateExpressionSync` exports
- `*Sync()` methods on `StaticJsValue`

There is no synchronous `evaluateModule`, as modules are inherently asynchronous.

If you do not pass a `runTask` option to an evaluation call, the realm's `runTask` or `runTaskSync` option (set on the constructor) is used as the default.

### Aborting tasks

Tasks can be aborted by calling `task.abort(err?)`. Sandboxed code cannot catch an abort; it bypasses the sandbox's try/catch and surfaces directly on the evaluation promise or function. By default, `task.abort()` rejects or throws with a `StaticJsTaskAbortedError`.

```ts
function runTask(task) {
  const end = Date.now() + 60 * 1000;
  while (!task.done) {
    task.next();
    if (Date.now() > end) {
      task.abort("Task took longer than 1 minute");
    }
  }
}
```

:::tip
You can pass your own error objects to task.abort() to have them bubble up. If you pass a string, a new [StaticJsTaskAbortedError](./api/errors/task-aborted.md) is created with the given message.
:::

### Specifying task runners

Task runners can be set at two levels:

**Per realm**: set `runTask` and/or `runTaskSync` on the `StaticJsRealm` constructor. These serve as the default for all evaluations on that realm. See the [StaticJsRealm API reference](./api/realm.md#runtask) for details.

**Per call**: pass `runTask` in the options argument of any evaluation method. This overrides the realm default for that single invocation.

```ts
await realm.evaluateScript(`while(true) {}`, {
  runTask(task) {
    for (let i = 0; i < 100_000; i++) {
      if (task.done) return;
      task.next();
    }
    task.abort();
  },
});
```

The `runTask` per-call option is also accepted on `*Sync()` and `*Async()` methods of `StaticJsValue` objects, letting you apply time or operation limits to individual property accesses or function calls.

## Built-in task runners

StaticJs provides two built-in task runners that cover the most common use cases.

### createTimeBoundTaskRunner

A **synchronous, blocking** runner that enforces a wall-clock time limit. Suitable for `runTaskSync`. Can be used for `runTask` but will block the host event loop for the duration of evaluation.

```ts
import { StaticJsRealm, createTimeBoundTaskRunner } from "@suntime-js/core";

const realm = StaticJsRealm({
  runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
});

// Throws StaticJsTaskAbortedError after 5 seconds.
realm.evaluateScriptSync(`while(true) {}`);
```

See the [API reference](./api/tasks.md#createtimeboundtaskrunneropts) for all options.

### createTimeSharingTaskRunner

An **asynchronous** runner that interleaves evaluation with host event-loop turns, keeping the host responsive even for infinite loops. **Do not use with `runTaskSync`**, as it will result in a [StaticJsSynchronousTaskIncompleteError](./api/errors/synchronous-task-incomplete.md).

```ts
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({ operationsPerIteration: 10_000 }),
});

// Does not hang the runtime; the host remains responsive.
// With no maxRunTime set, this promise never resolves for an infinite loop.
await realm.evaluateScript(`while(true) {}`);
```

See the [API reference](./api/tasks.md#createtimesharingtaskrunneropts) for all options.
