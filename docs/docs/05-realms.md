---
title: Realms
sidebar_label: Realms
sidebar_position: 4
---

The root unit of sandbox evaluation is `StaticJsRealm`. Each realm is a fully isolated JavaScript environment with its own prototypes, globals, type factory, and task queue. Values from one realm cannot be used directly in another.

For the complete option and method reference, see the [StaticJsRealm API reference](./api/realm.md).

## Creating a realm

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();
```

Realms can be constructed with or without `new`. Once created, a realm persists its global state across all evaluations.

## Customizing the global object

The most common setup task is adding host-defined values to the sandbox's global scope. You can do this either at construction time via the `global.properties` option, or after creation using `realm.global.definePropertySync`.

Defining properties after construction is often more practical because you have access to `realm.types` for building typed values:

```ts
const realm = StaticJsRealm();

realm.global.definePropertySync("version", {
  value: realm.types.string("1.0.0"),
  enumerable: true,
  configurable: false,
  writable: false,
});

realm.global.setSync(
  "log",
  realm.types.function("log", (msg) => {
    console.log("[sandbox]", msg.toStringSync());
  }),
);
```

See the [global option](./api/realm.md#global) and [globalThis option](./api/realm.md#globalthis) for construction-time variants.

## Providing modules

Static modules can be registered at construction time using the `modules` option:

```ts
const realm = StaticJsRealm({
  modules: {
    "my-module": {
      exports: {
        add(a, b) {
          return a + b;
        },
      },
    },
  },
});

await realm.evaluateModule(`
  import { add } from "my-module";
  add(1, 2);
`);
```

For dynamic resolution (e.g. loading from disk or a registry), use `resolveImportedModule`. See the [Modules](./06-modules.md) guide for details.

## Configuring task runners

Task runners control how evaluation is scheduled and time-limited. The realm accepts `runTask` (for async evaluation) and `runTaskSync` (for synchronous evaluation):

```ts
import {
  StaticJsRealm,
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
} from "@suntime-js/core";

const realm = StaticJsRealm({
  // Used by evaluateScriptSync, evaluateExpressionSync, and *Sync() value methods.
  runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),

  // Used by evaluateScript, evaluateExpression, evaluateModule, and *Async() value methods.
  runTask: createTimeSharingTaskRunner({ operationsPerIteration: 10_000 }),
});
```

See the [Tasks](./08-tasks.md) guide for a full explanation of task runners, including how to write custom ones.

## Evaluating code

A realm exposes several evaluation methods. They all return a [`StaticJsValue`](./api/types/value.md) (or a Promise that resolves to one).

```ts
// Async — queues evaluation; returns a Promise
const result = await realm.evaluateScript(`1 + 1`);

// Sync — runs to completion immediately (may deadlock without a time-bound runner)
const result = realm.evaluateScriptSync(`1 + 1`);

// Module — always async; returns a Promise<StaticJsModule>
const mod = await realm.evaluateModule(`export const x = 42`);
```

`evaluateExpression` and `evaluateExpressionSync` work the same way but for single expressions rather than full scripts.

:::danger
Synchronous evaluation can hang indefinitely if the sandboxed code does not terminate. Always configure a `runTaskSync` with a time limit in production:

```ts
const realm = StaticJsRealm({
  runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
});
```

:::

If a synchronous evaluation is attempted while an asynchronous evaluation is already running, a [StaticJsConcurrentEvaluationError](./api/errors/concurrent-evaluation-error.md) is thrown.

## Awaiting completion

Two methods let you wait on realm activity from the host:

- `realm.awaitCurrentTask()`: resolves when the current macrotask and its microtasks finish.
- `realm.awaitIdle()`: resolves when the realm has no remaining tasks or microtasks.

```ts
realm.evaluateScript(`
  setTimeout(() => console.log("later"), 100);
  console.log("now");
`);

await realm.awaitIdle(); // waits for the setTimeout callback to run too
```

## Seeding Math functions

The `hooks.math` option lets you replace any `Math.*` implementation. This is useful for reproducible tests or cross-engine determinism, since many Math functions are implementation-defined:

```ts
import { Random } from "random";

const r = new Random("my-seed");

const realm = StaticJsRealm({
  hooks: {
    math: {
      random: () => r.float(),
    },
  },
});
```

See the [StaticJsRealm API reference](./api/realm.md) for all constructor options, realm properties, and the full `StaticJsRunTaskOptions` / `StaticJsRealmEvaluateSourceOptions` interfaces.
