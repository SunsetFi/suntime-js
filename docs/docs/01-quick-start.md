---
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 1
---

## StaticJs Basics

### Evaluating code

The API functions `evaluateScriptSync(string)` and `evaluateExpressionSync(string)` will evaluate the given script synchronously, and return the script's result.

:::warning
Using StaticJs in this way will try to run the code until completion, which is vulnurable to infinite loops. For solutions to this, see [Putting time limits on evaluation](#putting-time-limits-on-evaluation).
:::

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const result = evaluateExpressionSync("2 + 2");
```

The result will be converted to a native representation. For scalars, this will be the primitive, but for objects, it will be a complex proxy into the StaticJs runtime. For more information on how values are proxied, see [Type Coercion](./03-type-coercion.md).

### Caveats of native objects

#### Sandboxed objects can invoke further sandbox code

Returned object and function proxies can invoke sandboxed code when used:

```ts
import { evaluateScriptSync } from "@suntime-js/core";

const code = `
  const obj = {};
  Object.defineProperty(obj, "foo", {
    get: () => {
      return Math.random();
    }
  });
  obj;
`;
const result = evaluateScriptSync(code);

// Calling result.foo will invoke the StaticJs evaluator again.
// The evaluation will be done synchronously, and will be
// vulnurable to deadlocks on infinite loops unless a task
// runner is provided.
console.log(result.foo);
```

#### Sandboxed objects contain a unique prototype chain

Objects returned by the runtime will keep their entire prototype chain. This means that native intrinsics will not be recognized with instanceOf or Array.isArray.

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const proxiedArray = evaluateExpressionSync("[1, 2, 3]");

// Returns false, as the resulting object is
// using the StaticJs runtime array prototype,
// and is not a native array.
console.log(Array.isArray(proxiedArray));

// Returns undefined, as the sandboxed object
// contains its own prototype chain.
Object.prototype.foo = true;
const proxiedObject = evaluateExpressionSync("{}");
console.log(proxiedObject.foo);
```

#### Sandboxed functions coerce their arguments and return values

If the runtime result is callable, the proxy will also be callable. Calling the proxy will automatically convert any input (arguments and the 'this' arg) into StaticJs values, and the result will be converted back to native values.

```ts
import { evaluateScriptSync } from "@suntime-js/core";

const code = `
  function add(a, b) {
    return a + b;
  }
  add;
`;

const result = evaluateScriptSync(code);

console.log(result(2, 4)); // 6
```

#### Object mutations

Note that for security, objects passed in this way are not mutatable by the StaticJs code. See [Type Coercion](./03-type-coercion.md).

```ts
const code = `
  function mutate(x) {
    x.foo = true;
  }
`;

const mutate = evaluateScriptSync(code);

const value = {
  foo: false,
};

mutate(value);

// Returns false, as the sandbox will reject the mutation of a proxied object.
console.log(value.foo);
```

If you want to allow mutation of values, you will need to [produce a StaticJs-native object](./06-types.md#object).

On the other hand, mutating values on returned objects will reflect the mutation in the sandbox. Mutations from the native side will [coerce the native value](./03-type-coercion.md) when sent to the sandbox.

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const code = `
  const obj = {
    amount: 1,
    increment(value) {
      return value + this.amount;
    }
  };
  obj;
`;
const result = evaluateExpressionSync(code);

// Mutations will be passed to the sandbox.
// If the property is a setter, it will be invoked.
result.amount = 4;

console.log(result.increment(10)); // Results in 14
```

## Putting time limits on evaluation

Tasks can be used to enforce limits on how long an evaluation can run for. This can be handy for guarding against infinite loops and deadlocks. To specify a task runner, set the `runTask` argument, and consume the [Task Iterator](./07-tasks.md#implementing-task-runners)

Note that in this simple example, the start time is computed outside of `runTask`. This is because any given evaluation may result in more than one task, as microtasks will also be invoked if the evaluated code runs promise completions.

Because of this, this type of task implementation is one use only. More advanced recipes exist that can make a task runner multi-use.

```ts
const code = `while(true) {}`;
const start = Date.now();
const result = evaluateScriptSync(code, {
  runTask(task) {
    const end = start + 10 * 1000;
    while (true) {
      if (end <= Date.now()) {
        task.abort();
        return;
      }
      const { done } = task.next();
      if (done) {
        return;
      }
    }
  },
});
```

Calling task.abort() will result in the function throwing a `StaticJsTaskAbortedError`. If desired, you can use other exception types using task.throw().

## Library-provided task runners

### Time-bound

For convienence, the `createTimeBoundTaskRunner` utility function is provided to enforce both task and total time limits.

```ts
import { evaluateScriptSync, createTimeBoundTaskRunner } from "@suntime-js/core";

const code = `while(true) {}`;

const result = evaluateScriptSync(code, {
  runTask: createTimeBoundTaskRunner({
    // Maximum time in milliseconds to run the script for before halting execution.
    // Defaults to 5 seconds.
    maxRunTime: 10 * 1000,

    // Maximum time in milliseconds to run any given task (main evaluation or promise resolutions)
    // Defaults to infinite.  The entire operation will still be time-bound by maxRunTime.
    maxTaskTime: 1 * 1000,
  }),
});
```

Tasks that exceed the limit will have their evaluation halted and throw a `StaticJsTaskAbortedError` error.

See [Tasks](./07-tasks.md) for more information.

### Time-sharing

Rather than putting hard limits on operation count or time taken, the evaluator can be freely paused and resumed on an interval in order to allow unbounded evaluation without deadlocking the underlying application:

In order to do this, however, we must switch to the asynchronous API: `evaluateScript` and `evaluateExpression`.

```ts
const code = `while(true) {}`;

const result = await evaluateScript(code, {
  runTask(task) {
    const operationsPerIteration = 10000;
    const yieldTime = 100;

    function doTask() {
      for (let i = 0; i < operationsPerIteration; i++) {
        const { done } = task.next();
        if (done) {
          return;
        }
      }

      setTimeout(doTask, yieldTime);
    }

    doTask();
  },
});
```

This method of operation is provided by the builtin `createTimeSharingTaskRunner` function:

```ts
const code = `while(true) {}`;

const result = await evaluateScript(code, {
  runTask: createTimeSharingTaskRunner({
    // Number of operations to perform per iteration of the task.
    // Defaults to 10,000
    operationsPerIteration: 50000,

    // Time in milliseconds to yield between iterations.
    // Defaults to 500
    yieldTime: (1 / 60) * 1000,

    // Maximum time the entire evaluation is allowed to run for.
    // Defaults to infinite
    maxRunTime: 5 * 60 * 1000,

    // Maximum time in milliseconds to run any given task (main evaluation or promise resolutions)
    // Defaults to infinite
    maxTaskTime: 1000,
  }),
});
```

It is up to you to experiment with operation limits and yield times to find a mix that best supports your performance goals.

See [Tasks](./07-tasks.md) for more information.

## Promises and the async API

Special care must be taken when using the async API. For async functions, JavaScript will always call `.then()` on awaited values and return values if this property exists. Promise resolutions likewise will do this. Because of this, the resulting API-returned promise will **always** fully resolve and unwrap any sandbox-returned promise proxies:

```ts
import { evaluateScript } from "@suntime-js/core";

const result = await evaluateScript(`Promise.resolve("Hello World")`);

// Results in "Hello World", not a promise, as the inner promise is awaited by the host.
console.log(result);
```

If you want to capture promises returned by the code for your own use, you can wrap it by using the callback argument.

```ts
import { evaluateScript } from "@suntime-js/core";

const result = await evaluateScript(`Promise.resolve(5)`, {}, (value, err) => {
  if (err) {
    throw err;
  }

  // If we got a promise, wrap it.
  if (value && typeof value.then === "function") {
    return { promise: value };
  }

  return value;
});

if (result.promise) {
  // Do whatever you want with the promise
  console.log("Script returned a promise");
  await result.promise;
}
```

Note that the callback can be asynchronous, and its return value will be resolved to by the outer promise returned by the evaluation function. This can be used to capture and wrap sandbox promise errors if desired:

```ts
const result = await evaluateScript(
  `Promise.reject(new Error("Fail!"))`,
  {},
  async (value, err) => {
    if (err) {
      throw err;
    }

    try {
      return await value;
    } catch (e) {
      return { error: e };
    }
  },
);
```
