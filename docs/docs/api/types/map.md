# StaticJsMap

A sandboxed `Map` value.

**Import**

```ts
import { type StaticJsMap, isStaticJsMap } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsMap` represents a `Map` object inside the sandbox, such as those created by `new Map(...)`. It exposes the standard ECMAScript `Map` operations as full triplets following the same [triplet pattern](./object.md#method-triplets) used by `StaticJsObject`.

All `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) as their last argument. `*Evaluator` variants do not.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"map"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### size(opts?)

```ts
sizeSync(opts?: StaticJsRunTaskOptions): number
sizeAsync(opts?: StaticJsRunTaskOptions): Promise<number>
sizeEvaluator(): EvaluationGenerator<number>
```

Returns the number of key/value pairs in the map as a native number.

### entries(opts?)

```ts
entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
entriesEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over `[key, value]` entry arrays in insertion order.

### keys(opts?)

```ts
keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
keysEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over the map's keys in insertion order.

### values(opts?)

```ts
valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
valuesEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over the map's values in insertion order.

### has(key, opts?)

```ts
hasSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
hasAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>
```

Returns `true` if `key` exists in the map. Key equality follows the ECMAScript SameValueZero algorithm.

### getValue(key, opts?)

```ts
getValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue
getValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue>
```

Returns the value associated with `key`, or [`StaticJsUndefined`](./undefined.md) if the key is not present.

### setValue(key, value, opts?)

```ts
setValueSync(key: StaticJsValue, value: StaticJsValue, opts?: StaticJsRunTaskOptions): void
setValueAsync(key: StaticJsValue, value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void>
setValueEvaluator(key: StaticJsValue, value: StaticJsValue): EvaluationGenerator<void>
```

Inserts or updates the entry for `key` with `value`.

### deleteValue(key, opts?)

```ts
deleteValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
deleteValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>
```

Removes the entry for `key`. Returns `true` if the entry existed and was removed, `false` otherwise.

### clear(opts?)

```ts
clearSync(opts?: StaticJsRunTaskOptions): void
clearAsync(opts?: StaticJsRunTaskOptions): Promise<void>
clearEvaluator(): EvaluationGenerator<void>
```

Removes all entries from the map.

### forEach(callback, thisArg?, opts?)

```ts
forEachSync(callback: StaticJsCallable, thisArg?: StaticJsValue, opts?: StaticJsRunTaskOptions): void
forEachAsync(callback: StaticJsCallable, thisArg?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void>
forEachEvaluator(callback: StaticJsCallable, thisArg?: StaticJsValue): EvaluationGenerator<void>
```

Calls `callback` once for each key/value pair in insertion order. `callback` receives `(value, key, map)` as sandbox arguments. `thisArg` is bound as `this` inside the callback; defaults to [`StaticJsUndefined`](./undefined.md) if omitted.

---

## Type guard

### isStaticJsMap(value)

```ts
isStaticJsMap(value: unknown): value is StaticJsMap
```

---

## See also

- [`StaticJsIterator`](./iterator.md): type returned by `entries`, `keys`, `values`
- [`StaticJsSet`](./set.md): the set counterpart
