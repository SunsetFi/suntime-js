---
title: Tasks
sidebar_label: Tasks
sidebar_position: 7
---

Tasks are the heart of the evaluator, and represent macrotasks (calls to evaluateScript, evaluateExpression, and evaluateModule), microtasks (Promise resolution follow-ups), and host invocations (toNative and similar)

Tasks follow an iterator pattern; each call to `.next()` will evaluate a single 'operation' in the runtime. An operation is loosely defined by the runtime as being a single AST node evaluation step, but this is not a hard rule.

Because of the iterator nature, it is possible to not fully drain the iterator in one go. This allows you to suspend and resume evaluation at any point, even for synchronous sandbox code. This is why the majority of the evaluator functions are async: They may not complete until you call the final `.next()` call on the task.

Tasks also have the ability to be aborted through their `.abort(err?)` method. These will reject the promise (or synchronously throw) for the invocation the task was triggered by.

Tasks also expose information on the state of the evaluator, providing debugging and step-through capabilities on the evaluated code. Currently, this exposes some metadata about the current operation, the current file, line, and character, and provides introspection into the stack.

Calls to `.next()` will never throw, even if the evaluating code throws an error. Error handling is internal to the task, and the error will be surfaced through the promise or function that triggered the task.

Additionally, the `value` property of the iterator result will always be `undefined`. Tasks do not expose the purpose or function of their execution to the task runner; it is instead handled internally and surfaced through the promise or call that triggered them.

## Task runners

Task runners are invoked when the evaluator runtime begins evaluating code. Note that this might not be immediately upon calling the `evaluate` functions if the realm is busy evaluating something else. Tasks are created as-needed whenever the realm begins the execution.

### Implementing task runners

Task runners are responsible for calling .next() until the task completes:

```ts
function runTask(task) {
  while (true) {
    const { done } = task.next();
    if (done) {
      break;
    }
  }
}
```

Or, using the `.done` property for a more concise implementation:

```ts
function runTask(task) {
  while (!task.done) {
    task.next();
  }
}
```

Notably, most task runners do _not_ have to fully iterate the task. This allows evaluation to be suspended or resumed at any time. The only exception to this are task runners passed to synchronous functions (either directly or through [runTaskSync](./04-realms.md#runtasksync)). You can detect whether a task expects to complete synchronously or asynchronously by checking the `task.async` boolean.

As an example, here is a task runner that will pause every 1000 operations to allow the browser to do other work, preventing deadlocking for large loops while still allowing them to evaluate.

```ts
function runTask(task) {
  const run = () => {
    for (let i = 0; i < 1000; i++) {
      const { done } = task.next();
      if (done) {
        return;
      }
    }

    setTimeout(run, 10);
  };

  run();
}
```

### Microtasks

Each macrotask will invoke runTask exactly once. If the macrotask has additional microtasks, they will be merged into the singular task iterator.

You can observe the switch from macrotask to microtask using the `type` property on the [task iterator](#staticjstaskiterator).

### Synchronous vs Asynchronous

Task runners can be expected to synchronously complete their task, depending on the context.

Tasks passed to the [StaticJsRunTaskOptions.runTask](./04-realms.md#staticjsruntaskoptions) option of the following methods will be asynchronous:

- `realm.evaluateScript`
- `realm.evaluateExpression`
- `realm.evaluateModule`,
- `evaluateScript`
- `evaluateExpression`
- `evaluateModule`
- `*Async()` StaticJsValue methods.

If you do not pass this option, the realm's [runTask](./04-realms.md#runtask) option will be used to run the async task instead.

Tasks passed to the [StaticJsRunTaskOptions.runTask](./04-realms.md#staticjsruntaskoptions) option of the following methods will be synchronous:

- `realm.evaluateScriptSync`
- `realm.evaluateExpressionSync`
- `evaluateScriptSync`
- `evaluateExpressionSync`
- `*Sync()` StaticJsValue methods.

If you do not pass this option, the realm's [runTaskSync](./04-realms.md#runtasksync) option will be used to run the sync task instead.

Note that there is no synchronous implementation of `evaluateModule`, as modules are inherently asynchronous.

### Aborting tasks

Tasks have the ability to be aborted by calling `task.abort(err?)`. By default, this will result in the evaluation resolving to an instance of a `StaticJsTaskAbortedError`. However, you are able to pass your own errors.

```ts
function runTask(task) {
  const end = Date.now() + 60 * 1000;
  while (!task.done) {
    task.next();

    if (Date.now() > end) {
      console.warn("Task took longer than 1 minute");
      task.abort();
    }
  }
}
```

Keep in mind that the realm might not get to your task immediately, if other evaluations are ongoing.

### Specifying task runners

Task runners can be specified in a few ways:

#### `runTask` option on the StaticJsRealm constructor

The `runTask` option passed to the `StaticJsRealm` constructor provides the default callback for running a task using `realm.evaluateScript`, `realm.evaluateExpression`, `realm.evaluateModule`, and the `resolveImportedModule` realm option.

```ts
const realm = StaticJsRealm({
  runTask(task) {
    for (let i = 0; i < 100000; i++) {
      const { done } = task.next();
      if (done) {
        return;
      }
    }

    console.warn("Task exceeded 100000 operations.");
    task.abort();
  },
});

await realm.evaluateScript(`while(true) {}`);
```

#### `runTaskSync` option on the StaticJsRealm constructor

The `runTaskSync` option passed to the `StaticJsRealm` constructor provides the default callback for running a task using `realm.evaluateScriptSync` and `realm.evaluateExpressionSync`. Note that this task runner is expected to be synchronous, and an error will be thrown if it does not either fully drain or abort the task.

```ts
const realm = StaticJsRealm({
  runTask(task) {
    for (let i = 0; i < 100000; i++) {
      const { done } = task.next();
      if (done) {
        return;
      }
    }

    console.warn("Task exceeded 100000 operations.");
    task.abort();
  },
});

realm.evaluateScriptSync(`while(true) {}`);
```

#### `runTask` option on realm evaluation methods

The evaluation functions (`realm.evaluateExpression`, `realm.evaluateExpressionSync`, `realm.evaluateScript`, `realm.evaluateScriptSync` and `realm.evaluateModule`) all take a second options argument that accepts a `runTask` property. Setting this property will specify a task runner to use for this invocation. This will be used over any `runTask` or `runTaskSync` supplied to the realm.

Note that the synchronous variants all expect their task runner to complete synchronously, and will throw a `StaticJsEngineError` if they do not.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const value = await realm.evaluateScript(
  'while(true) {}`,
  {
    runTask(task) {
      for (let i = 0; i < 100000; i++) {
        const { done } = task.next();
        if (done) {
          return;
        }
      }

      console.warn("Task exceeded 100000 operations.");
      task.abort();
    }
  }
)
```

### `runTask` option on the quickstart evaluation methods.

The exports `evaluateScript`, `evaluateScriptSync`, `evaluateExpression`, `evaluateExpressionSync`, and `evaluateModule` all accepts a `runTask` option in their second argument.

Note that the synchronous variants all expect their task runner to complete synchronously, and will throw a `StaticJsEngineError` if they do not.

```ts
import { evaluateScript } from "@suntime-js/core";

const value = await evaluateScript(
  'while(true) {}`,
  {
    runTask(task) {
      for (let i = 0; i < 100000; i++) {
        const { done } = task.next();
        if (done) {
          return;
        }
      }

      console.warn("Task exceeded 100000 operations.");
      task.abort();
    }
  }
)
```

### `runTask` option on sync and async methods

Most methods on StaticJs objects contain methods ending with Sync and Async. Both of these variations accept a runTask argument as the option to the last argument. This lets you provide time and timesharing guards on individual operations.

For examples of this, see [StaticJsObject](./06-types.md#object).

## StaticJsTaskIterator

All instances of task are a StaticJsTaskIterator

### Properties

- `calleeType`: The type of invoker that triggered this task
  - `evaluate`: A standard `evaluteScript` / `evaluateExpression` / `evaluteModule` call.
  - `host`: A call `toNative`, or other API function.
- `async`: Whether this task is for an asynchronous invocation.
  Async tasks are able to not be fully drained during the initial runTask call, and can instead iterate at their lesure.
  Sync tasks **must fully drain** during the scope of the runTask call.
- `currentTaskType`: The type of the current task being evaluated. Note that this can change through the scope of a single evaluation unit.
  - `macrotask`: A top-level entry to an evaluate function
  - `microtask`: A follow-up for a promise resolution
- `currentTaskId`: The ID of the current macro or micro task being evaluated.
  This can change during the scope of a single evaluation unit.
- `done`: Whether the task is completed. This will be `true` if the task has completed by any means, including by `.abort()` or having the controlling task runner throw.
- `aborted`: True if `.abort()` has been called.
- `operation`: Information on the next operation to be evaluated by a call to `.next()`. If the task is done, this will be `null`.
  - `operationType`: The AST node type of the queued operation.
- `location`: An object containing information for the operation's current location in the source:
  - `sourceName`: The source name provided in the evaluate call. If none was provided, an an auto-generated one will be present instead.
  - `line`: The 1-based line number of the start of the operation on the script being evaluated.
  - `column`: The 0-based character index of the start, or end, of the operation on the given line of the script being evaluated.
  - `character`: The 0-based character index in the raw string of the script being evaluated.
- `stack`: An array containing stack frames for the operation, with the current frame at index 0.
  - `function`: A reference to the StaticJsFunction being invoked, or null if none. Note that this may reference internal functions
    and is not exclusively user code.
    For reflection, you may wish to use `function?.getAsync("name")` to get the function name. Take care to use a task runner as appropriate,
    as the sandbox may set function names to getters which can invoke sandboxed code when accessed.
  - `sourceLocation`: An object containing information in the location in the stack this frame is on.
    - `sourceName`: The source name provided in the evaluate call. If none was provided, an an auto-generated one will be present instead.
      - `line`: The 1-based line number of the start of the operation on the script being evaluated.
      - `column`: The 0-based character index of the start, or end, of the operation on the given line of the script being evaluated.
      - `character`: The 0-based character index in the raw string of the script being evaluated.

### Methods

- `next()`
  Invoke the next operation. Returns an IteratorResult where `done` indicates if the task is completed. If the task is already done, a `StaticJsEngineError` is thrown.
- `abort(err?)`
  Aborts the task, yielding the specified error on the task's promise.
  The evaluating code will NOT be able to catch the error.
  For async methods, the promise will reject with the given value.
  For sync methods, the function will throw.
  If no error is specified, a StaticJsTaskAbortedError will be used.
  If the task is already done, a StaticJsEngineError is thrown.
- `throw(err)`
  If the provided error is a StaticJsRuntimeError, the evaluating code **will** be able to capture the thrown error.
  Otherwise, the error will bubble up to the promise or call for the evaluation.
