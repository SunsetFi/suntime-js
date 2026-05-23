# StaticJsTaskError

Base class for all task lifecycle errors.

**Import**

```ts
import { StaticJsTaskError } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsTaskError`

## When thrown

Thrown (or a subclass is thrown) by [`task.next()`](../tasks.md#next), [`task.abort()`](../tasks.md#aborterror), and [`task.throw()`](../tasks.md#throwerror) when they are called in an invalid state. Catch `StaticJsTaskError` when you want to handle any task lifecycle error regardless of its specific cause.

Known subclasses: [`StaticJsTaskCompletedError`](./task-completed-error.md), [`StaticJsTaskAbortedError`](./task-aborted-error.md).
