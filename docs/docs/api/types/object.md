# StaticJsObject

Base interface for all object-like sandbox values.

**Import**

```ts
import { type StaticJsObject, isStaticJsObject } from "@suntime-js/core";
```

---

## Overview

`StaticJsObject` is the base interface for every object-like value in the sandbox. It extends [`StaticJsPrimitive`](./primitive.md) and adds a full property-manipulation API that mirrors the ECMAScript internal methods (`[[Get]]`, `[[Set]]`, `[[DefineOwnProperty]]`, etc.).

Every method comes in a set of three **triplets**, documented in the section below.

## Implemented by

- [`StaticJsPlainObject`](./plain-object.md): ordinary `{}` objects
- [`StaticJsArray`](./array.md): array instances
- [`StaticJsFunction`](./function.md): functions and callables
- [`StaticJsSymbol`](./symbol.md): symbols (for `Symbol.prototype` access)
- [`StaticJsProxy`](./proxy.md): proxy objects

---

## Method triplets

Every property operation is exposed as three variants:

| Suffix       | Signature                        | When to use                                                                                                                                               |
| ------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*Async`     | Returns `Promise<T>`             | General host code. Drives evaluation via the realm's [`runTask`](../realm.md#runtask).                                                                    |
| `*Sync`      | Returns `T`                      | Host code that must complete synchronously. Drives evaluation via the realm's [`runTaskSync`](../realm.md#runtasksync). Requires a sync-safe task runner. |
| `*Evaluator` | Returns `EvaluationGenerator<T>` | Inside [evaluator functions](../../09-evaluators.md) only. Must be consumed with `yield*`.                                                                |

Both `*Async` and `*Sync` accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) as their final argument, letting you override the task runner per-call.

:::warning[Code invocation]
Property access can invoke sandboxed code (getters, setters, Proxy traps). Always use a time-bounded task runner when calling `*Sync` methods on untrusted objects.
:::

---

## Methods

### getPrototypeOf(opts?)

```ts
getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObject | null>
getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObject | null
```

Returns the prototype of this object, or `null` if it has none.

---

### setPrototypeOf(prototype, opts?)

```ts
setPrototypeOfAsync(prototype: StaticJsObject | null, opts?: StaticJsRunTaskOptions): Promise<boolean>
setPrototypeOfSync(prototype: StaticJsObject | null, opts?: StaticJsRunTaskOptions): boolean
```

Sets the prototype. Returns `true` on success, `false` if the object is non-extensible or the operation is otherwise rejected.

---

### isExtensible(opts?)

```ts
isExtensibleAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>
isExtensibleSync(opts?: StaticJsRunTaskOptions): boolean
```

Returns `true` if new properties can be added to the object.

---

### preventExtensions(opts?)

```ts
preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>
preventExtensionsSync(opts?: StaticJsRunTaskOptions): boolean
```

Seals the object against new properties. Returns `true` on success.

---

### ownPropertyKeys(opts?)

```ts
ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]>
ownPropertyKeysSync(opts?: StaticJsRunTaskOptions): StaticJsPropertyKey[]
```

Returns all own property keys; both string and symbol. String keys are native `string`; symbol keys are [`StaticJsSymbol`](./symbol.md) instances.

---

### ownEnumerableKeys(opts?)

```ts
ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]>
ownEnumerableKeysSync(opts?: StaticJsRunTaskOptions): string[]
```

Returns only own enumerable string property keys, as native strings. Equivalent to `Object.keys(...)`.

---

### hasProperty(key, opts?)

```ts
hasPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>
hasPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean
```

Returns `true` if the key exists on this object **or its prototype chain**. Pass a native `string` or a [`StaticJsSymbol`](./symbol.md) as the key.

---

### hasOwnProperty(key, opts?)

```ts
hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>
hasOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean
```

Returns `true` if the key exists **directly on this object**, not its prototype.

---

### getProperty(key, opts?)

```ts
getPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyDescriptor | undefined>
getPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsPropertyDescriptor | undefined
```

Returns the property descriptor for `key` from this object or its prototype chain, or `undefined` if the key does not exist.

---

### getOwnProperty(key, opts?)

```ts
getOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyDescriptor | undefined>
getOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsPropertyDescriptor | undefined
```

Same as `getProperty` but only searches the object's own properties.

#### StaticJsPropertyDescriptor

Returned by `getProperty` and `getOwnProperty`. One of two forms:

**Data descriptor:**

| Property       | Type            | Description                                       |
| -------------- | --------------- | ------------------------------------------------- |
| `value`        | `StaticJsValue` | The stored value.                                 |
| `writable`     | `boolean`       | Whether the value can be reassigned.              |
| `enumerable`   | `boolean`       | Appears in `for...in` / `Object.keys`.            |
| `configurable` | `boolean`       | Whether the descriptor can be changed or deleted. |

**Accessor descriptor:**

| Property       | Type                            | Description      |
| -------------- | ------------------------------- | ---------------- |
| `get`          | `StaticJsCallable \| undefined` | Getter function. |
| `set`          | `StaticJsCallable \| undefined` | Setter function. |
| `enumerable`   | `boolean`                       | As above.        |
| `configurable` | `boolean`                       | As above.        |

---

### defineOwnProperty(key, descriptor, opts?)

```ts
defineOwnPropertyAsync(
  key: StaticJsPropertyKey,
  descriptor: StaticJsPropertyDescriptorRecord,
  opts?: StaticJsRunTaskOptions,
): Promise<boolean>
defineOwnPropertySync(
  key: StaticJsPropertyKey,
  descriptor: StaticJsPropertyDescriptorRecord,
  opts?: StaticJsRunTaskOptions,
): boolean
```

Defines or redefines an own property. `descriptor` is the record form (all fields optional). Returns `true` on success, `false` if the operation is rejected (e.g. the property is non-configurable).

See [`StaticJsPropertyDescriptorRecord`](../type-factory.md#staticjspropertydescriptorrecord) for the descriptor shape.

---

### get(key, opts?)

```ts
getAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>
getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue
```

Gets the value of `key` on this object or its prototype chain. Invokes getter functions if present. Returns [`StaticJsUndefined`](./undefined.md) if the key does not exist.

---

### set(key, value, opts?)

```ts
setAsync(key: StaticJsPropertyKey, value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>
setSync(key: StaticJsPropertyKey, value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean
```

Sets `key` to `value`. Invokes setter functions if present. Returns `true` on success, `false` if the assignment is rejected (e.g. in strict mode with a non-writable property).

---

### delete(key, opts?)

```ts
deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>
deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean
```

Deletes the property `key` from this object. Returns `true` if the property was deleted or did not exist; `false` if the property is non-configurable.

---

### toNative()

```ts
toNative(): object
```

Returns a host-side proxy that delegates all property accesses back into the sandbox. Reading or writing any property on the returned object may synchronously invoke sandboxed code (getters, setters, Proxy traps).

:::danger[Synchronous code invocation]
Do not call `toNative()` on sandbox objects unless a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured on the realm. Without a bound, sandboxed getters or Proxy traps that contain loops will deadlock the host process.

Prefer the `StaticJsObject` API methods (`getAsync`, `setAsync`, `defineOwnPropertyAsync`, etc.) for direct, controlled access to sandbox object properties.
:::

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules applied when crossing the sandbox boundary.

---

## Type guard

### isStaticJsObject(value)

```ts
isStaticJsObject(value: unknown): value is StaticJsObject
```

Returns `true` for any object-like sandbox value: plain objects, arrays, functions, symbols, and proxies.
