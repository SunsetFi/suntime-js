---
sidebar_position: 2
---

# StaticJsTypeFactory

The type factory is the primary way to create and coerce values within a realm. It is accessible by the `types` property of [StaticJsRealm](./realm.md#types).

**Import**

```ts
import type { StaticJsTypeFactory } from "@suntime-js/core";
```

---

## Overview

Every value used inside the sandbox must be a [StaticJsValue](./types/value.md) owned by the same realm. The type factory creates those values and coerces native host values into their sandbox equivalents.

```ts
const realm = StaticJsRealm();

const n = realm.types.number(42);
const s = realm.types.string("hello");
const obj = realm.types.object({ x: { value: n, enumerable: true } });
```

Values created by one realm **cannot** be shared with another realm.

---

## Well-known values

These properties return the canonical singleton instances for their type. Use them instead of constructing new instances each time.

| Property    | Type                                      | Sandbox equivalent |
| ----------- | ----------------------------------------- | ------------------ |
| `undefined` | [StaticJsUndefined](./types/undefined.md) | `undefined`        |
| `null`      | [StaticJsNull](./types/null.md)           | `null`             |
| `true`      | [StaticJsBoolean](./types/boolean.md)     | `true`             |
| `false`     | [StaticJsBoolean](./types/boolean.md)     | `false`            |
| `zero`      | [StaticJsNumber](./types/number.md)       | `0`                |
| `NaN`       | [StaticJsNumber](./types/number.md)       | `NaN`              |
| `Infinity`  | [StaticJsNumber](./types/number.md)       | `Infinity`         |

---

## Well-known symbols

### symbols

Type: `IntrinsicSymbols`

The realm's well-known `Symbol.*` instances. Use these instead of creating new symbols when you need a spec-defined symbol.

| Key                  | Sandbox equivalent          |
| -------------------- | --------------------------- |
| `asyncDispose`       | `Symbol.asyncDispose`       |
| `asyncIterator`      | `Symbol.asyncIterator`      |
| `dispose`            | `Symbol.dispose`            |
| `hasInstance`        | `Symbol.hasInstance`        |
| `isConcatSpreadable` | `Symbol.isConcatSpreadable` |
| `iterator`           | `Symbol.iterator`           |
| `match`              | `Symbol.match`              |
| `matchAll`           | `Symbol.matchAll`           |
| `replace`            | `Symbol.replace`            |
| `search`             | `Symbol.search`             |
| `species`            | `Symbol.species`            |
| `split`              | `Symbol.split`              |
| `toPrimitive`        | `Symbol.toPrimitive`        |
| `toStringTag`        | `Symbol.toStringTag`        |
| `unscopables`        | `Symbol.unscopables`        |

### symbolRegistry

Type: `Map<string,` [`StaticJsSymbol`](./types/symbol.md)`>`

The realm's global symbol registry. This is the sandbox-side equivalent of `Symbol.for` / `Symbol.keyFor`. Keys are the description strings passed to `Symbol.for(...)` inside the sandbox.

---

## Factory methods

### boolean(value)

```ts
boolean(value: boolean): StaticJsBoolean
```

Creates a [StaticJsBoolean](./types/boolean.md). Prefer `types.true` and `types.false` when the value is a literal.

### number(value)

```ts
number(value: number): StaticJsNumber
```

Creates a [StaticJsNumber](./types/number.md). Prefer `types.zero`, `types.NaN`, and `types.Infinity` for those specific values.

### string(value)

```ts
string(value: string): StaticJsString
```

Creates a [StaticJsString](./types/string.md).

### symbol(description?)

```ts
symbol(description?: string): StaticJsSymbol
```

Creates a fresh [StaticJsSymbol](./types/symbol.md). Equivalent to `Symbol(description)`.

### object(properties?, prototype?)

```ts
object(
  properties?:
    | Record<string, StaticJsPropertyDescriptorRecord>
    | Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>,
  prototype?: StaticJsObject | StaticJsNull | null,
): StaticJsPlainObject
```

Creates a plain object. `properties` is a map of [StaticJsPropertyKey](./types/object.md#staticjspropertykey) keys to descriptor records, which may be strings or [`StaticJsSymbol`](./types/symbol.md) instances. (). `prototype` defaults to the realm's `Object.prototype` when omitted.

```ts
const obj = realm.types.object({
  x: { value: realm.types.number(1), enumerable: true, writable: true, configurable: true },
  y: { value: realm.types.number(2), enumerable: true, writable: true, configurable: true },
});
```

#### StaticJsPropertyDescriptorRecord

| Property        | Type                                                                    | Description                               |
| --------------- | ----------------------------------------------------------------------- | ----------------------------------------- |
| `value?`        | [StaticJsValue](./types/value.md)                                       | Data descriptor value.                    |
| `writable?`     | `boolean`                                                               | Whether the value can be reassigned.      |
| `get?`          | [StaticJsCallable](./types/function.md#staticjscallable) \| `undefined` | Accessor getter.                          |
| `set?`          | [StaticJsCallable](./types/function.md#staticjscallable) \| `undefined` | Accessor setter.                          |
| `enumerable?`   | `boolean`                                                               | Appears in `for...in` / `Object.keys`.    |
| `configurable?` | `boolean`                                                               | Whether the descriptor itself can change. |

### array(itemsOrLength?)

```ts
array(itemsOrLength?: StaticJsValue[] | number): StaticJsArray
```

Creates a [StaticJsArray](./types/array.md). Pass an array of [StaticJsValue](./types/value.md) to pre-populate it, or a number to create a sparse array with the given length.

```ts
const arr = realm.types.array([realm.types.number(1), realm.types.string("hello")]);
```

### function(name, func, opts?)

```ts
function(
  name: string,
  func: (this: StaticJsValue, ...args: StaticJsValue[]) => MaybeEvaluationGenerator<StaticJsValue>,
  opts?: StaticJsFunctionTypeCreationOptions,
): StaticJsFunction
```

Creates a host-defined function that participates in the task runner. For best results, `func` should be a generator function so it can be suspended and resumed by the task runner. See [Evaluator Functions](../09-evaluators.md) for the full authoring guide.

```ts
const add = realm.types.function("add", function* (a, b) {
  // ...
  return realm.types.number(/* result */);
});
```

#### StaticJsFunctionTypeCreationOptions

| Property        | Type                                                                             | Default                      | Description                                                                         |
| --------------- | -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------- |
| `isConstructor` | `boolean`                                                                        | `false`                      | Whether the function can be called with `new`.                                      |
| `length`        | `number`                                                                         | `func.length`                | The function's reported `.length` (formal parameter count).                         |
| `prototype`     | [StaticJsObject](./types/object.md) \| [StaticJsNull](./types/null.md) \| `null` | Function.prototype intrinsic | The prototype for the new function. Not to be confused with the prototype property. |

### error(errorType?, message)

```ts
error(errorType: ErrorTypeName, message: string): StaticJsObject
error(message: string): StaticJsObject
```

Creates a sandbox error object. When called with two arguments, `errorType` sets which error constructor is used. When called with one string argument, defaults to `"Error"`.

```ts
const err = realm.types.error("TypeError", "Expected a number");
throw new StaticJsRuntimeError(err);
```

`ErrorTypeName` is one of: `"Error"`, `"TypeError"`, `"ReferenceError"`, `"SyntaxError"`, `"RangeError"`, `"AggregateError"`.

Note that errors created this way will not have a stack trace.

### proxy(target, handlers)

```ts
proxy(target: StaticJsProxyTarget, handlers: StaticJsProxyHandlers): StaticJsProxy
```

Creates a [StaticJsProxy](./types/proxy.md), the sandbox equivalent of `new Proxy(target, handlers)`. All handler methods may be ordinary functions or `EvaluationGenerator` functions.

`StaticJsProxyTarget` accepts an existing [StaticJsObject](./types/object.md) or [StaticJsCallable](./types/function.md#staticjscallable), a native `object` or `Function`, or the string literals `"object"` or `"function"` to create a fresh empty target of the given shape.

#### StaticJsProxyHandlers

All traps are optional. Each receives a [StaticJsObject](./types/object.md) (or [StaticJsCallable](./types/function.md#staticjscallable) for `apply`/`construct`) as its first argument and may return a value or yield from an `EvaluationGenerator`.

| Trap                       | Signature                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `getPrototypeOf`           | `(target) =>` [StaticJsObject](./types/object.md) \| `null`                                                  |
| `setPrototypeOf`           | `(target, prototype) => boolean`                                                                             |
| `isExtensible`             | `(target) => boolean`                                                                                        |
| `preventExtensions`        | `(target) => boolean`                                                                                        |
| `getOwnPropertyDescriptor` | `(target, key) =>` [StaticJsPropertyDescriptor](./types/object.md#staticjspropertydescriptor) \| `undefined` |
| `defineProperty`           | `(target, key, desc) => boolean`                                                                             |
| `has`                      | `(target, key) => boolean`                                                                                   |
| `get`                      | `(target, key, receiver) =>` [StaticJsValue](./types/value.md)                                               |
| `set`                      | `(target, key, value, receiver) => boolean`                                                                  |
| `deleteProperty`           | `(target, key) => boolean`                                                                                   |
| `ownKeys`                  | `(target) =>` [`StaticJsPropertyKey`](./types/object.md#staticjspropertykey)`[]`                             |
| `apply`                    | `(target, thisArgument, argArray) =>` [StaticJsValue](./types/value.md)                                      |
| `construct`                | `(target, argArray, newTarget) =>` [StaticJsObject](./types/object.md)                                       |

### toStaticJsValue(value)

```ts
toStaticJsValue(value: unknown): StaticJsValue
```

Coerces a native host value into the sandbox. Scalars (`boolean`, `number`, `string`, `symbol`, `null`, `undefined`) are wrapped in their `StaticJs` counterparts. Functions are wrapped as non-generator host functions. Objects and arrays become shallow-on-demand proxies: only own enumerable properties are visible, they are read-only, and the prototype is replaced with the sandbox's `Object.prototype`.

:::danger[Object coercion caveats]
Coerced objects are read-only proxies. Writes made inside the sandbox are silently discarded. If you need a mutable object, create it with `types.object(...)` and set properties explicitly.
:::

See [Type Coercion](../04-type-coercion.md) for the complete coercion rules.
