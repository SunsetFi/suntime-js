---
sidebar_position: 6
---

# StaticJsSynchronousTaskIncompleteError

Thrown when a synchronous task runner returns without fully draining the task iterator.

**Import**

```ts
import { StaticJsSynchronousTaskIncompleteError } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsSynchronousTaskIncompleteError`

## When thrown

Thrown when the `runTaskSync` runner configured on a realm (or passed per-call) returns before `task.done` is `true`. A synchronous runner **must** call `task.next()` in a loop until the task is done.

Common causes:

- Using an async task runner (e.g. [`createTimeSharingTaskRunner`](../tasks.md#createtimesharingtaskrenneropts)) as the `runTaskSync` option.
- A custom runner that breaks early based on a step count without checking `task.done`.

See [Sync vs. async runners](../tasks.md#sync-vs-async-runners) for guidance on writing a correct synchronous runner.
