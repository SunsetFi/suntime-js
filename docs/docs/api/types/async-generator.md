# StaticJsAsyncGenerator

A sandboxed async generator object.

**Import**

```ts
import { type StaticJsAsyncGenerator, isStaticJsAsyncGenerator } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsAsyncGenerator` represents the async generator object returned when a sandboxed async generator function is called (e.g. `async function* gen() { ... }`). It implements the ECMAScript async generator protocol — `next`, `return`, and `throw` — each available in three variants following the same [triplet pattern](./object.md#method-triplets) used by `StaticJsObject`.

Unlike [`StaticJsGenerator`](./generator.md), each step returns a [`StaticJsPromise`](./promise.md) rather than a direct result record. The promise resolves to an iterator result object inside the sandbox once the generator resumes.

The `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) to override the task runner; the `*Evaluator` variants do not.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"async-generator"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### next(value?, opts?)

```ts
nextSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise
nextAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>
nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>
```

Resumes the async generator, passing `value` as the result of the current `await` or `yield` expression. Returns a [`StaticJsPromise`](./promise.md) that resolves inside the sandbox to the next iterator result object.

On the first call, `value` is ignored (as per the ECMAScript spec).

### return(value?, opts?)

```ts
returnSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise
returnAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>
returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>
```

Terminates the async generator early, running any `finally` blocks. Returns a [`StaticJsPromise`](./promise.md) that resolves to a result record with `done: true` and the provided `value`.

### throw(value, opts?)

```ts
throwSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise
throwAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>
throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsPromise>
```

Resumes the async generator by throwing `value` at the current suspension point. Returns a [`StaticJsPromise`](./promise.md) that either resolves to the next iterator result (if the generator handles the error) or rejects with `value` (if unhandled).

---

## Type guard

### isStaticJsAsyncGenerator(value)

```ts
isStaticJsAsyncGenerator(value: unknown): value is StaticJsAsyncGenerator
```

---

## See also

- [`StaticJsGenerator`](./generator.md): the synchronous counterpart
- [`StaticJsPromise`](./promise.md): the promise type returned by each step
