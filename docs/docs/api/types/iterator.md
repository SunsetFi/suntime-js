# StaticJsIterator

A sandboxed iterator value.

**Import**

```ts
import { type StaticJsIterator, isStaticJsIterator } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsIterator` represents any iterator object inside the sandbox — the result of calling `[Symbol.iterator]()` on a collection, iterating a sandboxed map or set, or consuming a generator's iterator interface. It exposes a single `next` operation in three variants following the same [triplet pattern](./object.md#method-triplets) used by `StaticJsObject`.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"iterator"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### next(opts?)

```ts
nextSync(opts?: StaticJsRunTaskOptions): StaticJsIteratorResult
nextAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>
nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult>
```

Advances the iterator one step. Returns a [`StaticJsIteratorResult`](#staticjsiteratorresult) containing the yielded sandbox value and a `done` flag indicating whether the iterator is exhausted.

Use `nextAsync` in general host code, `nextSync` when synchronous completion is required (ensure a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured), and `nextEvaluator` inside [evaluator functions](../../09-evaluators.md). The `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) to override the task runner; the `*Evaluator` variant does not.

---

## Types

### StaticJsIteratorResult

```ts
import { type StaticJsIteratorResult } from "@suntime-js/core";

interface StaticJsIteratorResult {
  readonly value: StaticJsValue;
  readonly done: boolean;
}
```

The result record returned by `next*`. `value` is the yielded sandbox value for this step; `done` is `true` when the iterator is exhausted and `value` is the final return value (or [`StaticJsUndefined`](./undefined.md) if none).

---

## Type guard

### isStaticJsIterator(value)

```ts
isStaticJsIterator(value: unknown): value is StaticJsIterator
```
