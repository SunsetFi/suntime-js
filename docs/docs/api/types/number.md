# StaticJsNumber

A sandboxed number value.

**Import**

```ts
import { type StaticJsNumber, isStaticJsNumber } from "@suntime-js/core";
```

---

## Extends

[`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.number(value)`](../type-factory.md#numbervalue)

Well-known singletons: [`realm.types.zero`](../type-factory.md#well-known-values), [`realm.types.NaN`](../type-factory.md#well-known-values), [`realm.types.Infinity`](../type-factory.md#well-known-values)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `number`

The native host number wrapped by this sandbox value.

### typeOf

`"number"`

### runtimeTypeOf

`"number"`

---

## Type guard

### isStaticJsNumber(value)

```ts
isStaticJsNumber(value: unknown): value is StaticJsNumber
```
