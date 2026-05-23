# StaticJsProxy

A sandboxed `Proxy` object.

**Import**

```ts
import { type StaticJsProxy, isStaticJsProxy } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) + [`StaticJsCallable`](./function.md#staticjscallable) → [`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.proxy(target, handlers)`](../type-factory.md#proxytarget-handlers)

---

## Overview

`StaticJsProxy` is the sandbox equivalent of `new Proxy(target, handler)`. It intercepts all fundamental object operations via trap functions defined in a [`StaticJsProxyHandlers`](../type-factory.md#staticjsproxyhandlers) object.

Proxy objects implement the full [`StaticJsObject`](./object.md) interface. Each operation is routed through the corresponding trap if defined.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"` (or `"function"` if the proxy target is callable)

### runtimeTypeOf

`"proxy"`

### proxyTarget

Type: `StaticJsObject | null`

The unwrapped proxy target, if accessible. May be `null` for revocable proxies that have been revoked.

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### toNative()

```ts
toNative(): object
```

Returns a host-side proxy backed by this sandbox proxy. Every property access passes through both the host proxy wrapper and any sandbox `StaticJsProxyHandlers` traps, meaning it can invoke arbitrary sandboxed code synchronously.

:::danger[Synchronous code invocation]
`toNative()` on a `StaticJsProxy` is particularly dangerous: accessing a property invokes the sandbox Proxy trap, which can in turn execute arbitrary sandboxed code synchronously. Never call this without a time-bounded [`runTaskSync`](../realm.md#runtasksync) configured.

Prefer the [`StaticJsObject`](./object.md) API (`getAsync`, `setAsync`, etc.) for direct property access with explicit async control.
:::

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules.

---

## Type guard

### isStaticJsProxy(value)

```ts
isStaticJsProxy(value: unknown): value is StaticJsProxy
```

---

## See also

- [`StaticJsProxyHandlers`](../type-factory.md#staticjsproxyhandlers): trap function signatures
- [`realm.types.proxy`](../type-factory.md#proxytarget-handlers): creation
