# StaticJsSet

A sandboxed `Set` value.

**Import**

```ts
import { type StaticJsSet, isStaticJsSet } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsSet` represents a `Set` object inside the sandbox, such as those created by `new Set(...)`. It exposes the standard ECMAScript `Set` operations — including the ES2024 set-composition methods — as full triplets following the same [triplet pattern](./object.md#method-triplets) used by `StaticJsObject`.

All `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) as their last argument. `*Evaluator` variants do not.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"set"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### size(opts?)

```ts
sizeSync(opts?: StaticJsRunTaskOptions): number
sizeAsync(opts?: StaticJsRunTaskOptions): Promise<number>
sizeEvaluator(): EvaluationGenerator<number>
```

Returns the number of values in the set as a native number.

### keys(opts?)

```ts
keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
keysEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over the set's values (identical to `values` — sets have no distinct keys).

### values(opts?)

```ts
valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
valuesEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over the set's values in insertion order.

### entries(opts?)

```ts
entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator
entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>
entriesEvaluator(): EvaluationGenerator<StaticJsIterator>
```

Returns a [`StaticJsIterator`](./iterator.md) over `[value, value]` pairs in insertion order, matching the ECMAScript `Set.prototype.entries()` shape.

### has(value, opts?)

```ts
hasSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
hasAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>
```

Returns `true` if `value` is present in the set. Value equality follows the ECMAScript SameValueZero algorithm.

### addValue(value, opts?)

```ts
addValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): void
addValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void>
addValueEvaluator(value: StaticJsValue): EvaluationGenerator<void>
```

Adds `value` to the set. Has no effect if the value is already present.

### deleteValue(value, opts?)

```ts
deleteValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
deleteValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>
```

Removes `value` from the set. Returns `true` if the value existed and was removed, `false` otherwise.

### clear(opts?)

```ts
clearSync(opts?: StaticJsRunTaskOptions): void
clearAsync(opts?: StaticJsRunTaskOptions): Promise<void>
clearEvaluator(): EvaluationGenerator<void>
```

Removes all values from the set.

### forEach(callback, thisArg?, opts?)

```ts
forEachSync(callback: StaticJsFunction, thisArg?: StaticJsValue, opts?: StaticJsRunTaskOptions): void
forEachAsync(callback: StaticJsFunction, thisArg?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void>
forEachEvaluator(callback: StaticJsFunction, thisArg?: StaticJsValue): EvaluationGenerator<void>
```

Calls `callback` once for each value in insertion order. `callback` receives `(value, value, set)` as sandbox arguments (the key and value are the same, per the ECMAScript spec). `thisArg` is bound as `this` inside the callback; defaults to [`StaticJsUndefined`](./undefined.md) if omitted.

---

## Set composition methods

The following methods implement the ES2024 set-composition proposals. Each accepts another set-like sandbox value and returns a new `StaticJsSet` (as a `StaticJsValue`).

### difference(otherSet, opts?)

```ts
differenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue
differenceAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
differenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>
```

Returns a new set containing values in this set that are not in `otherSet`.

### intersection(otherSet, opts?)

```ts
intersectionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue
intersectionAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
intersectionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>
```

Returns a new set containing only values present in both this set and `otherSet`.

### symmetricDifference(otherSet, opts?)

```ts
symmetricDifferenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue
symmetricDifferenceAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
symmetricDifferenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>
```

Returns a new set containing values present in either this set or `otherSet`, but not both.

### union(otherSet, opts?)

```ts
unionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue
unionAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>
```

Returns a new set containing all values from both this set and `otherSet`.

### isDisjointFrom(otherSet, opts?)

```ts
isDisjointFromSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
isDisjointFromAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
isDisjointFromEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>
```

Returns `true` if this set and `otherSet` share no common values.

### isSubsetOf(otherSet, opts?)

```ts
isSubsetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
isSubsetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>
```

Returns `true` if every value in this set is also in `otherSet`.

### isSupersetOf(otherSet, opts?)

```ts
isSupersetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
isSupersetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>
```

Returns `true` if every value in `otherSet` is also in this set.

---

## Type guard

### isStaticJsSet(value)

```ts
isStaticJsSet(value: unknown): value is StaticJsSet
```

---

## See also

- [`StaticJsMap`](./map.md): the map counterpart
- [`StaticJsIterator`](./iterator.md): type returned by `entries`, `keys`, `values`
