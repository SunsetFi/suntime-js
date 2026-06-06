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

:::tip[Scalar values]
All scalar types in StaticJs have a 'value' property containing the host-native javascript value of the scalar.
:::

See the [type reference table](./api/types/index.md#type-reference) for all guards.

## Creating objects

Pass a property descriptor map to `realm.types.object()`. Every `value` in the descriptor must be a `StaticJsValue`; use the factory (or `toStaticJsValue`) to produce them:

```ts
const proto = realm.types.object({
  foo: {
    value: realm.types.number(42),
    enumerable: true,
    configurable: false,
    writable: false,
  },
});

const obj = realm.types.object({}, proto);
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

[`realm.types.toStaticJsValue(nativeValue)`](./api/type-factory.md#tostaticjsvaluevalue) converts a host value to a sandbox value following the [coercion rules](./04-type-coercion.md) and the realm's default host access policy. This is a convenience shortcut for passing existing host objects or functions into the sandbox:

```ts
const wrapped = realm.types.toStaticJsValue({
  greet(name) {
    return `Hello, ${name}!`;
  },
});

realm.global.setSync("host", wrapped);
```

:::caution
By default. Native objects converted this way are **partially immutable** and **restricted** from the sandbox. Only enumerable properties will be revealed, properties will not be configurable, and data properties will not be writable. Property setters, however, **will** still be invoked, although their this-arg are pinned to the host object. Functions passing through this barrier (such as sandboxed functions passed as a callback argument to a host function) will be invoked synchonously, which opens the risk for deadlocks.

See [Type Coercion](./04-type-coercion.md) for more details, including how to customize this behavior, and [Using synchronous functions](#using-synchronous-functions) below for how to handle deadlocks.
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

## Coercing sandbox values to native

All StaticJs values have a [`toNative()`](./api/types/primitive.md#tonative) method that produces a host-proxied representation.

```ts
const funcSrc = realm.evaluateScriptSync(`
  function add(a, b) {
    return a + b;
  }
  add;
`);

const func = funcSrc.toNative();

const result = func(1, 2);
```

:::danger[toNative() and objects]
While toNative is safe for scalar values, it returns live proxies for objects. Such proxies carry risks, as accessing any property on it may synchronously invoke sandboxed code. Avoid [`toNative()`](./api/types/primitive.md#tonative) on objects unless you have a time-bounded [StaticJsRealm.runTaskSync](./api/realm.md#runtasksync) configured.

Additionally, toNative is by nature bidirectional, and will coerce native values to sandboxed ones through function arguments. This carries the same risks as [Coercing native values](#coercing-native-values) above.

Prefer `.value` on scalars (accessible after an [`isStaticJsScalar`](./api/types/scalar.md#isstaticjsscalarvalue) check) and direct [`StaticJsObject`](./api/types/object.md) API methods on objects.
:::

See [Type Coercion](./04-type-coercion.md) for full coercion rules.
