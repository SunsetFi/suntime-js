import type { StaticJsRealm, StaticJsTaskIterator, StaticJsTaskRunner } from "@suntime-js/core";

import type { StaticJsDebugAttachOptions } from "../StaticJsDebugSessionOptions.js";

import { StaticJsDebugSessionBase } from "./StaticJsDebugSessionBase.js";

export class StaticJsAttachDebugSession extends StaticJsDebugSessionBase {
  constructor(
    realm: StaticJsRealm,
    attach: StaticJsDebugAttachOptions,
    runTask: StaticJsTaskRunner,
  ) {
    super(realm, attach, runTask);
    this._sourceName = attach.sourceName;
    this._sourceKind = attach.sourceKind ?? "script";
    // The task already exists; adopt it so introspection works before start().
    this._activeTask = attach.task;
  }

  override terminate(): void {
    // Unlike launch mode there is no evaluate promise to drive termination after
    // the task is aborted, so finalize the terminal state directly here.
    // _finishTerminal is idempotent (guards against terminal re-entry), so the
    // super call's own _finishTerminal (when there is no active task) is safe.
    super.terminate();
    this._finishTerminal("terminate", null);
  }

  protected override _begin(): void {
    // "Starting" an attach session means beginning to pump the provided task.
    // If the task already settled before we attached, finalize immediately
    // rather than silently hanging in "starting" (_resumeActiveTask no-ops on a
    // done task, and the proxy abort path that normally calls _onTaskSettled is
    // never reached for an already-settled task).
    const task = this._activeTask;
    if (task && task.done) {
      this._onTaskSettled(task);
      return;
    }
    this._resumeActiveTask();
  }

  protected override _onTaskSettled(task: StaticJsTaskIterator): void {
    // No evaluate promise backs an attached task, so report terminal state from
    // the iterator itself. NOTE: the completion value and an error-vs-abort
    // distinction are not available through StaticJsTaskIterator; callers needing
    // the real result/error await the EvaluationTask promise they already hold.
    if (task.aborted) {
      this._finishTerminal("terminate", null);
    } else {
      this._finishTerminal("complete", undefined);
    }
  }
}
