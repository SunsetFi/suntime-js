# StaticJsFunction

A sandboxed function value.

**Import**

```ts
import { type StaticJsFunction, isStaticJsFunction } from "@suntime-js/core";
import { type StaticJsCallable, isStaticJsCallable } from "@suntime-js/core";
```

---

## Overview

`StaticJsFunction` represents both sandbox-defined functions (declared inside evaluated code) and host-defined functions (created with [`realm.types.function`](../type-factory.md#functionname-func-opts)). Both share the same call/construct interface.

The broader interface `StaticJsCallable` covers any object that can be called, including bound functions, arrow functions, and `class` constructors. `StaticJsFunction` extends `StaticJsCallable` and is what you get from `isStaticJsFunction`.

All call and construct methods follow the same [triplet pattern](./object.md#method-triplets) as `StaticJsObject`.

---

## StaticJsCallable

Base interface for any callable sandbox value. Extends [`StaticJsObject`](./object.md).

### Properties

#### isConstructor

Type: `boolean`

`true` if this callable can be invoked with `new`. For host-defined functions, set via the `isConstructor` option in [`realm.types.function`](../type-factory.md#staticjsfunctiontypecreationoptions).

### Methods

#### callAsync(thisArg, args?, opts?) / callSync(...)

```ts
callAsync(
  thisArg: StaticJsValue,
  args?: StaticJsValue[],
  opts?: StaticJsRunTaskOptions,
): Promise<StaticJsValue>

callSync(
  thisArg: StaticJsValue,
  args?: StaticJsValue[],
  opts?: StaticJsRunTaskOptions,
): StaticJsValue
```

Invokes the function. `thisArg` is the `this` value inside the function; pass `realm.types.undefined` when there is no meaningful `this`. `args` is a native array of `StaticJsValue` arguments; omit or pass `[]` for no arguments.

Returns the function's return value, or [`StaticJsUndefined`](./undefined.md) if the function returned nothing.

```ts
const result = await fn.callAsync(realm.types.undefined, [
  realm.types.number(2),
  realm.types.number(3),
]);
```

#### constructAsync(args?, newTarget?, opts?) / constructSync(...)

```ts
constructAsync(
  args?: StaticJsValue[],
  newTarget?: StaticJsCallable,
  opts?: StaticJsRunTaskOptions,
): Promise<StaticJsObject>

constructSync(
  args?: StaticJsValue[],
  newTarget?: StaticJsCallable,
  opts?: StaticJsRunTaskOptions,
): StaticJsObject
```

Invokes the function as a constructor (`new fn(...args)`). Returns the constructed object. `newTarget` defaults to the function itself; override for `Reflect.construct` semantics.

```ts
const instance = await MyClass.constructAsync([realm.types.number(42)]);
```

### Type guard {/_ #isstaticjscallable _/}

```ts
isStaticJsCallable(value: unknown): value is StaticJsCallable
```

---

## StaticJsFunction

Extends `StaticJsCallable`. Represents a concrete function (not a bound wrapper or internal callable).

### Extends

[`StaticJsCallable`](#staticjscallable) → [`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

### Factory

[`realm.types.function(name, func, opts?)`](../type-factory.md#functionname-func-opts)

### Properties

Inherits all properties from [`StaticJsCallable`](#staticjscallable) and [`StaticJsObject`](./object.md).

#### strict

Type: `boolean`

Whether this function evaluates under strict semantics. Always `false` for host-defined functions. For sandbox-defined functions, reflects the strict mode of the surrounding scope.

#### typeOf

`"function"`

#### runtimeTypeOf

`"function"`

### Methods

Inherits `callAsync`, `callSync`, `constructAsync`, `constructSync`, and all [`StaticJsObject`](./object.md) methods.

#### getNameAsync(opts?) / getNameSync(opts?)

```ts
getNameAsync(opts?: StaticJsRunTaskOptions): Promise<string>
getNameSync(opts?: StaticJsRunTaskOptions): string
```

Returns the function's name as a native string. This may invoke sandboxed code if the `name` property has been overridden with an accessor descriptor. Use a time-bounded task runner when calling the sync variant on untrusted functions.

#### toNative()

```ts
toNative(): Function
```

Returns a host-side `Function` wrapper. Calling the wrapper invokes the sandbox function synchronously using the realm's `runTaskSync`.

:::danger[Synchronous invocation via toNative()]
Calling the returned `Function` runs sandboxed code synchronously and can deadlock the host if the sandbox function contains an infinite loop. Ensure a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured before using the returned wrapper.

Prefer [`callAsync`](#callasyncthisarg-args-opts--callsync) or [`callSync`](#callasyncthisarg-args-opts--callsync) on the `StaticJsFunction` directly, which give you explicit control over argument and return value coercion.
:::

See [Type Coercion](../../04-type-coercion.md) for how arguments and return values are coerced when calling the native wrapper.

### Type guard {/_ #isstaticjsfunction _/}

```ts
isStaticJsFunction(value: unknown): value is StaticJsFunction
```
