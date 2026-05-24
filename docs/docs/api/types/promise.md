# StaticJsPromise

A sandboxed `Promise` value.

**Import**

```ts
import { type StaticJsPromise, isStaticJsPromise } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsPromise` represents a `Promise` object inside the sandbox. Promises are created by sandboxed code (`new Promise(...)`, `async` functions, `Promise.resolve(...)`, etc.) and drive the sandbox's microtask queue.

The `resolve` and `reject` methods are host-callable synchronous operations that settle the promise. The `thenEvaluator` and `catchEvaluator` methods chain reactions and are intended for use inside [evaluator functions](../../09-evaluators.md).

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"promise"`

---

## Methods

### resolve(value)

```ts
resolve(value: StaticJsValue): void
```

Fulfills the promise with `value`. If the promise is already settled, this is a no-op.

### reject(reason)

```ts
reject(reason: StaticJsValue): void
```

Rejects the promise with `reason`. If the promise is already settled, this is a no-op.

### toNative()

```ts
toNative(): Promise<unknown>
```

Returns a host-side `Promise` that mirrors this sandbox promise's settlement. Resolves or rejects when the sandbox promise does.

See [Type Coercion](../../04-type-coercion.md) for how the resolved value is coerced when crossing the sandbox boundary.

---

## then / catch

These methods follow the same [triplet pattern](./object.md#method-triplets) as `StaticJsObject`. The `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) to override the task runner; the `*Evaluator` variants do not.

### then(onFulfilled?, onRejected?, opts?)

```ts
thenSync(
  onFulfilled?: StaticJsCallable | undefined,
  onRejected?: StaticJsCallable | undefined,
  opts?: StaticJsRunTaskOptions,
): StaticJsPromise
thenAsync(
  onFulfilled?: StaticJsCallable | undefined,
  onRejected?: StaticJsCallable | undefined,
  opts?: StaticJsRunTaskOptions,
): Promise<StaticJsPromise>
thenEvaluator(
  onFulfilled?: StaticJsCallable | undefined,
  onRejected?: StaticJsCallable | undefined,
  resultCapability?: StaticJsPromiseCapabilityRecord | true,
): EvaluationGenerator<StaticJsPromise>
thenEvaluator(
  onFulfilled: StaticJsCallable | undefined,
  onRejected: StaticJsCallable | undefined,
  resultCapability: false,
): EvaluationGenerator<void>
```

Registers fulfillment and/or rejection handlers, mirroring `Promise.prototype.then`. Returns a new `StaticJsPromise` chained from this one.

`thenEvaluator` accepts a `resultCapability` third argument that `thenSync`/`thenAsync` do not:

- Omitted or `true`: a new `StaticJsPromise` is created and returned (default behaviour).
- A [`StaticJsPromiseCapabilityRecord`](#staticjspromisecapabilityrecord): the provided capability's promise is used as the result; no new promise is allocated.
- `false`: no result promise is created; returns `void`. Use this when only the side effects of `onFulfilled`/`onRejected` are needed.

### catch(func?, opts?)

```ts
catchSync(func: StaticJsCallable | undefined, opts?: StaticJsRunTaskOptions): StaticJsPromise
catchAsync(func: StaticJsCallable | undefined, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>
catchEvaluator(func: StaticJsCallable | undefined): EvaluationGenerator<StaticJsPromise>
```

Registers a rejection handler, equivalent to `Promise.prototype.catch`. Returns a new `StaticJsPromise` chained from this one.

---

## Types

### StaticJsPromiseCapabilityRecord

```ts
import { type StaticJsPromiseCapabilityRecord } from "@suntime-js/core";

interface StaticJsPromiseCapabilityRecord {
  promise: StaticJsPromise;
  resolve: StaticJsCallable;
  reject: StaticJsCallable;
}
```

Mirrors the ECMAScript PromiseCapability record. Holds a promise together with its `resolve` and `reject` functions. Passed to `thenEvaluator` when the caller needs to reuse an existing promise rather than allocate a new one.

---

## Type guard

### isStaticJsPromise(value)

```ts
isStaticJsPromise(value: unknown): value is StaticJsPromise
```

---

## See also

- [`StaticJsAsyncGenerator`](./async-generator.md): produces `StaticJsPromise` values per step
