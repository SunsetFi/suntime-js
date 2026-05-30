---
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 1
---

# Quick Start

All StaticJs usage begins with a realm.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();
```

A realm provides a persistent global environment for JavaScript. Each realm is unique, and constructs from one realm generally cannot be shared in another without proxying.

## Invoking synchronous code

Synchronous code can be invoked with [`evaluateScriptSync`](./api/realm.md#evaluatescriptsyncscript-opts) and [`evaluateExpressionSync`](./api/realm.md#evaluateexpressionsyncexpression-opts).

```ts live-staticjs include-runtime
import { StaticJsRealm, isStaticJsNumber } from "@suntime-js/core";

const realm = StaticJsRealm();

const result = realm.evaluateScriptSync(`
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result += i;
  }
  result;
`);

if (isStaticJsNumber(result)) {
  console.log("Result is", result.value);
}
```

:::danger
Invoking code this way can hang the host if the code does not terminate:

```ts
const realm = StaticJsRealm();
// Hangs forever
const result = realm.evaluateScriptSync(`while(true) {}`);
```

See [Enforcing Time Limits](#enforcing-time-limits) below for solutions.
:::

## Working with types

Each StaticJsRealm contains its own definitons of all core JavaScript APIs, and has unique types. To create types, use the [Type Factory](./api/type-factory.md) associated with a given StaticJsRealm:

```ts live-staticjs include-runtime
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const obj = realm.types.object({
  foo: {
    value: realm.types.number(42),
    enumerable: true,
    writable: false,
    configurable: false,
  },
  bar: {
    value: realm.types.string("baz"),
  },
});

console.log("properties are", obj.ownPropertyKeysSync());
console.log("foo is", obj.getSync("foo").runtimeTypeOf);
console.log("bar is", obj.getSync("bar").runtimeTypeOf);
```

Additionally, [type guard functions](./api/types/index.md#type-reference) are supplied for checking resultant types.

```ts live-staticjs include-runtime
import { StaticJsRealm, isStaticJsString, isStaticJsNumber } from "@suntime-js/core";

const realm = StaticJsRealm();

const result = realm.evaluateScriptSync(`
  function rand() {
    if (Math.random() < 0.5) {
      return "Hello";
    }
    else {
      return 42;
    }
  }
  rand();
`);

if (isStaticJsString(result)) {
  console.log("Got string", result.value);
} else if (isStaticJsNumber(result)) {
  console.log("Got number", result.value);
}
```

## Providing globals

You can expose host functionality to sandboxed code by defining values on the global object.

```ts live-staticjs include-runtime
import { StaticJsRealm, isStaticJsScalar } from "@suntime-js/core";

const realm = StaticJsRealm();

const consoleMock = realm.types.object({
  log: {
    value: realm.types.function("log", function (arg) {
      const str = isStaticJsScalar(arg) ? String(arg.value) : "[object]";
      console.log("[sandbox]", str);
      return realm.types.undefined;
    }),
  },
});

realm.global.setSync("console", consoleMock);

realm.evaluateScriptSync(`console.log("Hello from sandbox!")`);
```

For more information, see [Working with Types](./07-types.md)

## Enforcing time limits

Time limits can be enforced on synchronous and asynchronous code

```ts live-staticjs include-runtime
import { StaticJsRealm, createTimeBoundTaskRunner } from "@suntime-js/core";

const realm = StaticJsRealm({
  runTaskSync: createTimeBoundTaskRunner({
    maxRunTime: 3_000,
  }),
});

// Hangs for 3 seconds, then aborts with a thrown StaticJsTaskAbortedError
const result = realm.evaluateScriptSync(`while(true) {} `);
```

## Running asynchronous code

StaticJs can perform time-sharing by halting and resuming the running script at arbitrary points. This allows for a form of running scripts asynchronously.

Such time sharing can **only** be performed by async methods. Trying to pass a time sharing task runner to a synchronous method will result in a [StaticJsSynchronousTaskIncompleteError](./api/errors/synchronous-task-incomplete-error.md).

```ts
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";
const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({
    // The number of operations to evaluate per cycle.
    operationsPerIteration: 1000,
    // How long to yield between each cycle.
    yieldTime: 100,
  }),
});

// Will run forever, but not hang the browser or engine.
const resultPromise = realm.evaluateScript(`
  let count = 0;
  while(true) {
    if (count++ % 1000) {
      console.log("Running...", count / 1000);
    }
  }
`);
```

## Next steps

For a complete tour of the type system, task runners, modules, and writing host functions, see the following sections:

- [Detailed Walkthrough](./02-detailed-walkthrough.md) - Conceptual guide with worked examples
- [Security](./03-security.md) - What is safe to expose to sandboxed code and how to avoid escapes
- [Realms](./05-realms.md) - Full realm options and method reference
- [Runtime Types](./07-types.md) - All type factories and APIs
- [Tasks](./08-tasks.md) - Task runner reference and built-in runners
