# Tasks

Tasks are the heart of the evaluator, and represent both macrotasks (calls to evaluateScript and so on), and microtasks (Promise resolution follow-ups).

Tasks follow an iterator pattern; each call to `.next()` will evaluate a single 'operation' in the runtime. Because of the iterator nature, it is possible to not fully drain the iterator in one go. This allows you to suspend and resume evaluation at any point, even for synchronous sandbox code.

Tasks also have the ability to be aborted through their `.abort()` method, halting execution and resolving the execution promise to a `StaticJsTaskAbortedError`.

Tasks also expose information on the state of the evaluator, providing debugging and step-through capabilities on the evaluated code. This is currently limited, but the intent is to eventually provide a full debugging experience, including stack and scope inspection.

Under normal operation, calls to `.next()` will never throw, even if the evaluating code throws an error. Additionally, the `value` property of the iterator result will always be `undefined`. Tasks do not deal with the result of any evaluation; the returned promise from `evaluate*` should be used instead.

## Task runners

Task runners are invoked when the evaluator runtime begins evaluating code. Note that this might not be immediately upon calling realm `evaluate*` functions if the realm is busy evaluating something else; tasks are created as-needed whenever the realm begins the execution.

Also note that if an `evaluate*` call results in microtasks (promise resolutions), the task runner function will be invoked multiple times; once for the macrotask and once for each microtask.

### Implementing task runners

Task runners, broadly, are responsible for iterating on the task until it completes:

```ts
function runTask(task) {
  while (!task.done) {
    task.next();
  }
}
```

Note that task is a proper iterable, and that API is usable if desired:

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

Notably, task runners do _not_ have to fully iterate the task. This allows evaluation to be suspended or resumed at any time.

As an example, here is a task runner that will pause every 1000 operations to allow the browser to do other work, preventing deadlocking in the case of infinite loops.

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

### Aborting tasks

Tasks have the ability to be aborted, by calling `task.abort()`. This will result in the evaluation resolving to an instance of a `StaticJsTaskAbortedError`

```ts
function runTask(task) {
  const start = Date.now();
  const end = start + 60 * 1000;
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

Beyond the abort() method, you can simply throw your own errors in the task runner, and they will bubble up to a promise rejection of the original request. This has the same effect as aborting tasks, and can be used to expose details on the nature of the evaluation cancellation.

```ts
function runTask(task) {
  let opBudget = 100000;
  let endTime = Date.now() + 60 * 1000;
  while (!task.done) {
    if (--opBudget <= 0) {
      throw new Error("Script evaluation exceeded 100,000 operations.");
    }

    if (Date.now() > endTime) {
      throw new Error("Script evaluation exceeded one minute.");
    }

    task.next();
  }
}
```

### Specifying task runners

Task runners can be specified in two ways:

### runTask option on the StaticJsRealm constructor

The `runTask` option passed to the `StaticJsRealm` constructor provides the default callback for running a task, for all script invocations that do not themselves specify a task runner.

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

### `runTask` option on evaluation methods

The three evaluation functions (`evaluateExpression`, `evaluateScript`, and `evaluateModule`) all take a second options argument that contains a `taskRunner` property. Setting this property will apply a task runner for all tasks created by this invocation (macrotask, microtasks, module evaluations, and so on). This will be used over any `runTask` supplied to the realm.

```ts
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

## StaticJsTaskIterator

All instances of task are a StaticJsTaskIterator

### Properties

- `done`: Whether the task is completed. This will be `true` if the task has completed by any means, including by `.abort()`.

- `aborted`: True if `.abort()` has been called.

- `operation`: Information on the next operation to be evaluated by a call to `.next()`. If the task is done, this will be `null`.

  - `location`: An object containing the start and end of the operation in the source code to be evaluated. Contains a `start` and `end` property, both with:

    - `line`: The 1-based line number of the start, or end, of the operation on the script being evaluated.
    - `column`: The 0-based character index of the start, or end, of the operation on the given line of the script being evaluated.
    - `character`: The 0-based character index in the raw string of the script being evaluated.

  - `operationType`: The AST node type of the queued operation.

### Methods

- `next()`: Invoke the next operation. Returns an IteratorResult where `done` indicates if the task is completed. If the task is already done, a `StaticJsEngineError` is thrown.
- `abort()`: Aborts the task. If the task is already done, a StaticJsEngineError is thrown.
