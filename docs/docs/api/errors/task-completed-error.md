# StaticJsTaskCompletedError

Thrown when a task method is called after the task has already finished.

**Import**

```ts
import { StaticJsTaskCompletedError } from "@suntime-js/core";
```

---

## Extends

`Error` → [`StaticJsTaskError`](./task-error.md) → `StaticJsTaskCompletedError`

## When thrown

Thrown by [`task.next()`](../tasks.md#next), [`task.abort()`](../tasks.md#aborterror), and [`task.throw()`](../tasks.md#throwerror) when called on a task whose `done` property is already `true`. Check `task.done` before calling these methods if task completion may race with your runner loop.
