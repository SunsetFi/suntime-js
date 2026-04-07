# Tasks

Tasks are the heart of the evaluator, and represent macrotasks (calls to evaluateScript, evaluateExpression, and evaluateModule), microtasks (Promise resolution follow-ups), and host invocations (toNative and similar)

Tasks follow an iterator pattern; each call to `.next()` will evaluate a single 'operation' in the runtime. An operation is loosely defined by the runtime as being a single AST node evaluation step, but this is not a hard rule.

Because of the iterator nature, it is possible to not fully drain the iterator in one go. This allows you to suspend and resume evaluation at any point, even for synchronous sandbox code. This is why the majority of the evaluator functions are async: They may not complete until you call the final `.next()` call on the task.

Tasks also have the ability to be aborted, either through their `.abort()` method, or by passing your own exception through the `.throw()` method. These will reject the promise (or synchronously throw) for the invocation the task was triggered by.

Tasks also expose information on the state of the evaluator, providing debugging and step-through capabilities on the evaluated code. Currently, this exposes some metadata about the current operation, the current file, line, and character, and provides introspection into the stack.

Calls to `.next()` will never throw, even if the evaluating code throws an error. Error handling is internal to the task, and the error will be surfaced through the promise or function that triggered the task.

Additionally, the `value` property of the iterator result will always be `undefined`. Tasks do not expose the purpose or function of their execution to the task runner; it is instead handled internally and surfaced through the promise or call that triggered them.

## Task runners

Task runners are invoked when the evaluator runtime begins evaluating code. Note that this might not be immediately upon calling the `evaluate` functions if the realm is busy evaluating something else. Tasks are created as-needed whenever the realm begins the execution.

Even when passing a task runner for a single operation, the runner may be called more than once. This is because all macrotasks will run queued microtasks to exhaustion, and each microtask will get its own invocation.

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

Or, using the .done property for a more concise implementation:

```ts
function runTask(task) {
  while (!task.done) {
    task.next();
  }
}
```

Notably, most task runners do _not_ have to fully iterate the task. This allows evaluation to be suspended or resumed at any time. The only exception to this are task runners passed to synchronous functions (either directly or through [runTaskSync](./04-realms.md#runtasksync)).

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

### Synchronous vs Asynchronous

Task runners can be expected to synchronously complete their task, depending on the context.

Tasks passed to the [StaticJsRunTaskOptions.runTask](./04-realms.md#staticjsruntaskoptions) option of the following methods will be asynchronous:

- `realm.evaluateScript`
- `realm.evaluateExpression`
- `realm.evaluateModule`,
- `evaluateScript`
- `evaluateExpression`
- `evaluateModule`

If you do not pass this option, the realm's [runTask](./04-realms.md#runtask) option will be used to run the async task instead.

Tasks passed to the [StaticJsRunTaskOptions.runTask](./04-realms.md#staticjsruntaskoptions) option of the following methods will be synchronous:

- `realm.evaluateScriptSync`
- `realm.evaluateExpressionSync`
- `evaluateScriptSync`
- `evaluateExpressionSync`

If you do not pass this option, the realm's [runTaskSync](./04-realms.md#runtasksync) option will be used to run the sync task instead.

Note that there is no synchronous implementation of `evaluateModule`, as modules are inherently asynchronous.

### Aborting tasks

Tasks have the ability to be aborted by calling `task.abort()`. This will result in the evaluation resolving to an instance of a `StaticJsTaskAbortedError`

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

Note that multiple tasks may be created for a single evaluation request, so for cases of implementing a time limit, you may want to externalize computing the end time in order to catch infinite promise resolution loops.

Keep in mind that the realm might not get to your task immediately, if other evaluations are ongoing.

```ts
function makeRunTask(timeout) {
  // Use a single timeout time for all tasks created by this task runner.
  let end = undefined;
  return (task) => {
    // Capture the timeout time when the first task starts,
    // in case the realm was busy doing other things when this evaluation was requested.
    if (end === undefined) {
      end = Date.now() + timeout
    }

   while(!task.done) {
      task.next();

      if (Date.now() > end) {
        console.warn("Task took longer than 1 minute");
        task.abort();
        return;
      }
    }
  }
}

const realm = StaticJsRealm();

const value = await realm.evaluateScript(
  `
    function resolveLoop() {
      return Promise.resolve().then(resolveLoop);
    }
    Promise.resolve(resolveLoop);
  `,
  { runTask: makeRunTask(60 * 1000); }
)

```

### Throwing errors in task runners

Beyond the `abort()` method, you can also throw your own errors in the task runner using `throw()`, and they will bubble up to a promise rejection of the original request. This has the same effect as aborting tasks, and can be used to expose details on the nature of the evaluation cancellation.

Note that this isn't the same as `throw new Error()`. While that will work for synchronous tasks when no time-sharing is present, this will cause unhandled rejections if the task is ticked beyond the initial invoke of `runTask`.

```ts
function runTask(task) {
  let opBudget = 100000;
  let endTime = Date.now() + 60 * 1000;
  while (!task.done) {
    if (--opBudget <= 0) {
      task.throw(new Error("Script evaluation exceeded 100,000 operations."));
      return;
    }

    if (Date.now() > endTime) {
      task.throw(new Error("Script evaluation exceeded one minute."));
      return;
    }

    task.next();
  }
}
```

### Reusing task runners

If you want to create a task runner function that can reset on new tasks, you may wish to check for and respond to `task.type` equaling `macrotask` or `host-invocation`, both which indicate a new task has been entered.

```ts
function makeRunTask(timeout) {
  // Use a single timeout time for all tasks created by this task runner.
  let end = undefined;
  return (task) => {
    // Start a new timer when we enter a new task.
    if (end === undefined || task === "macrotask" || task === "host-invocation") {
      end = Date.now() + timeout;
    }

    while (!task.done) {
      task.next();

      if (Date.now() > end) {
        console.warn("Task took longer than 1 minute");
        task.abort();
        return;
      }
    }
  };
}
```

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

The evaluation functions (`realm.evaluateExpression`, `realm.evaluateExpressionSync`, `realm.evaluateScript`, `realm.evaluateScriptSync` and `realm.evaluateModule`) all take a second options argument that accepts a `runTask` property. Setting this property will apply a task runner for all tasks created by this invocation (macrotask, microtasks, module evaluations, and so on). This will be used over any `runTask` supplied to the realm.

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

- `type`: The type of task being evaluated:
  - `macrotask`: A top-level entry to an evaluate function
  - `microtask`: A follow-up for a promise resolution
  - `host-invocation`: A call to a host function, such as `toNative` or `callAsync`.
  - `host-invocation-nested`: A call to a host function that occurred during the evaluation of a `macrotask` or `microtask`.
- `done`: Whether the task is completed. This will be `true` if the task has completed by any means, including by `.abort()` or having the controlling task runner throw.
- `aborted`: True if `.abort()` has been called.
- `operation`: Information on the next operation to be evaluated by a call to `.next()`. If the task is done, this will be `null`.
  - `location`: An object containing information for the operation's current location in the source:
    - `sourceName`: The source name provided in the evaluate call. If none was provided, an an auto-generated one will be present instead.
    - `line`: The 1-based line number of the start of the operation on the script being evaluated.
    - `column`: The 0-based character index of the start, or end, of the operation on the given line of the script being evaluated.
    - `character`: The 0-based character index in the raw string of the script being evaluated.
  - `operationType`: The AST node type of the queued operation.
- `stack`: An array containing stack frames for the operation, with the current frame at index 0.
  - `function`: A reference to the StaticJsFunction being invoked, or null if none. Note that this may reference internal functions
    and is not exclusively user code.
  - `functionName`: A getter property that returns the name of the function.
    This getter will fetch and compute the function name on invocation. Taking references to a stack frame and invoking this getter
    at a later time may reflect an updated function name, if the sandbox renamed the function in the interim.
    **WARNING**: This performs synchronous evaluation of sandboxed code, may throw errors, and may cause deadlocks if infinite loops are present.
    You may wish to implement a guard in [runTaskSync](./04-realms.md#runtasksync), which will be used if present.
  - `sourceLocation`: An object containing information in the location in the stack this frame is on.
    - `sourceName`: The source name provided in the evaluate call. If none was provided, an an auto-generated one will be present instead.
      - `line`: The 1-based line number of the start of the operation on the script being evaluated.
      - `column`: The 0-based character index of the start, or end, of the operation on the given line of the script being evaluated.
      - `character`: The 0-based character index in the raw string of the script being evaluated.

### Methods

- `next()`: Invoke the next operation. Returns an IteratorResult where `done` indicates if the task is completed. If the task is already done, a `StaticJsEngineError` is thrown.
- `abort()`: Aborts the task. If the task is already done, a StaticJsEngineError is thrown.
- `throw(value)`: Causes the task to fail its promise or call with the given value as the error.
  For async methods, the promise will reject with the given value.
  For sync methods, the function will throw.
  Note that sandboxed code cannot intercept errors thrown with this using try / catch.
