---
title: Runtime Types
sidebar_label: Runtime Types
sidebar_position: 6
---

Every value inside a StaticJs sandbox is a [`StaticJsValue`](./api/types/value.md). The type system mirrors JavaScript's own primitives and objects, but wraps them so the host can inspect, create, and manipulate sandbox values without executing untrusted code directly.

For the complete type hierarchy, type guard index, and per-type API reference, see [Types](./api/types/index.md).

## The type factory

Each realm exposes a `types` property for creating sandbox values directly, without coercion or round-tripping through evaluation.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const num = realm.types.number(42);
const str = realm.types.string("hello");
const bool = realm.types.boolean(true);
const nil = realm.types.null; // singleton
const undef = realm.types.undefined; // singleton
```

For the full factory API including `object`, `array`, `function`, `symbol`, `error`, and `proxy`, see the [StaticJsTypeFactory reference](./api/type-factory.md).

## Narrowing with type guards

Every type ships a corresponding guard function importable from `@suntime-js/core`. Use these to narrow a `StaticJsValue` after evaluation:

```ts
import { isStaticJsString, isStaticJsNumber, isStaticJsObject } from "@suntime-js/core";

const result = realm.evaluateScriptSync(`Math.random() < 0.5 ? "heads" : 1`);

if (isStaticJsString(result)) {
  console.log("Got string:", result.value);
} else if (isStaticJsNumber(result)) {
  console.log("Got number:", result.value);
}
```

Scalar types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`) all expose a `.value` property holding the native equivalent. Object-like types do not.

See the [type reference table](./api/types/index.md#type-reference) for all guards.

## Creating objects

Pass a property descriptor map to `realm.types.object()`. Every `value` in the descriptor must be a `StaticJsValue`; use the factory (or `toStaticJsValue`) to produce them:

```ts
const obj = realm.types.object({
  foo: {
    value: realm.types.number(42),
    enumerable: true,
    configurable: false,
    writable: false,
  },
});

// Then expose it to the sandbox:
realm.global.setSync("myObj", obj);
```

An optional second argument sets the sandbox prototype. If omitted, `Object.prototype` from the realm's intrinsics is used.

For accessor descriptors, `get` and `set` must be [`StaticJsFunction`](./api/types/function.mdx) values, not native functions.

## Creating functions

Use `realm.types.function(name, callback, options?)` to expose host logic to the sandbox:

```ts
realm.global.setSync(
  "add",
  realm.types.function("add", (a, b) => {
    // Arguments arrive as StaticJsValues.
    return realm.types.number(a.value + b.value);
  }),
);
```

For functions that need to participate in time-sharing (i.e. can be paused and resumed by the task runner), define the callback as a **generator function** and delegate internal `*Evaluator` calls with `yield*`:

```ts
import { isStaticJsObject, isStaticJsNumber, StaticJsRuntimeError } from "@suntime-js/core";

const compare = realm.types.function("compare", function* (a, b) {
  if (!isStaticJsObject(a) || !isStaticJsObject(b)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "Arguments must be objects"));
  }

  const va = yield* a.getEvaluator("value");
  const vb = yield* b.getEvaluator("value");

  if (!isStaticJsNumber(va) || !isStaticJsNumber(vb)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "Object values must be numbers"));
  }

  return realm.types.number(va.value - vb.value);
});

realm.global.setAsync("compare", compare);
```

Generator functions that are used in the service of evaluating sandboxed code are called Evaluators. See [Evaluators](./09-evaluators.md) for detailed instructions on how they work and how to write them.

## Coercing native values

`realm.types.toStaticJsValue(nativeValue)` converts a host value to a sandbox value following the [coercion rules](./04-type-coercion.md). This is a convenience shortcut for passing existing host objects or functions into the sandbox:

```ts
const wrapped = realm.types.toStaticJsValue({
  greet(name) {
    return `Hello, ${name}!`;
  },
});

realm.global.setSync("host", wrapped);
```

:::caution
Native objects converted this way are **not mutable** from the sandbox. Property setters are not invoked and properties appear non-configurable. Getters and function calls still work, including the risk of synchronous deadlocks. See [Using synchronous functions](#using-synchronous-functions) below.
:::

## Reading object properties

[`StaticJsObject`](./api/types/object.md) exposes all ECMAScript internal methods as async/sync/evaluator triplets. Prefer the `*Async` variants in host code:

```ts
const val = await obj.getAsync("foo");
const keys = await obj.ownPropertyKeysAsync();
await obj.setAsync("bar", realm.types.number(99));
```

The `*Sync` variants work but share the same deadlock caveats as synchronous evaluation. The `*Evaluator` variants are for use inside generator callbacks only.

## Using synchronous functions

Several APIs execute sandboxed code synchronously. If that code contains an infinite loop, the host deadlocks. Examples of such functions are `toStringSync()`, `toNative()`, and the `*Sync()` family of object methods

Guard against this by passing a `runTask` option with a time limit:

```ts
const name = func.getNameSync({
  runTask: createTimeBoundTaskRunner({ maxRunTime: 1_000 }),
});
```

For synchronous task runners, the runner **must** fully drain the iterator or call `.abort()` / `.throw()`. Failing to do so throws a [StaticJsSynchronousTaskIncompleteError](./api/errors/synchronous-task-incomplete-error.md).

See [Tasks](./08-tasks.md) for more on task runners.
