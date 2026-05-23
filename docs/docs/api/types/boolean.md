# StaticJsBoolean

A sandboxed boolean value.

**Import**

```ts
import { type StaticJsBoolean, isStaticJsBoolean } from "@suntime-js/core";
```

---

## Extends

[`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.boolean(value)`](../type-factory.md#booleanvalue)

Well-known singletons: [`realm.types.true`](../type-factory.md#well-known-values), [`realm.types.false`](../type-factory.md#well-known-values)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `boolean`

The native host boolean wrapped by this sandbox value.

### typeOf

`"boolean"`

### runtimeTypeOf

`"boolean"`

---

## Methods

### negate()

```ts
negate(): StaticJsBoolean
```

Returns the logical negation of this boolean: `realm.types.true` if this is `false`, `realm.types.false` if this is `true`.

---

## Type guard

### isStaticJsBoolean(value)

```ts
isStaticJsBoolean(value: unknown): value is StaticJsBoolean
```
