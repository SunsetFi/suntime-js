# StaticJsTaskAbortedError

Thrown when a task method is called on an aborted task, or used as the default abort reason.

**Import**

```ts
import { StaticJsTaskAbortedError } from "@suntime-js/core";
```

---

## Extends

`Error` → [`StaticJsTaskError`](./task-error.md) → `StaticJsTaskAbortedError`

## When thrown

Thrown in two situations:

1. **After abort:** `task.next()` or `task.throw()` is called on a task that was stopped via [`task.abort()`](../tasks.md#aborterror).
2. **As the abort reason:** When `task.abort()` is called without an explicit error argument (or with a string), a `StaticJsTaskAbortedError` is constructed automatically and used as the rejection/throw reason for the evaluation.
