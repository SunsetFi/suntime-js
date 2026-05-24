# StaticJsUnhandledRejectionError

Thrown when a sandbox `Promise` is rejected with no rejection handler.

**Import**

```ts
import { StaticJsUnhandledRejectionError } from "@suntime-js/core";
```

---

## Extends

`Error` → [`StaticJsRuntimeError`](./runtime-error.md) → `StaticJsUnhandledRejectionError`

## When thrown

Thrown after the realm's microtask queue has been fully drained and one or more `Promise` rejections were never handled. Typically surfaces during [`realm.awaitIdle()`](../realm.md#awaitidle) or at the end of an async evaluation. The `thrown` property (inherited from [`StaticJsRuntimeError`](./runtime-error.md)) holds the rejection reason as a sandboxed value.

See [Realms](../realm.md#awaitidle) for guidance on using `awaitIdle()` and [Tasks](../../08-tasks.md) for how evaluation lifecycles work.

## Properties

Inherits [`thrown`](./runtime-error.md#thrown) from [`StaticJsRuntimeError`](./runtime-error.md).
