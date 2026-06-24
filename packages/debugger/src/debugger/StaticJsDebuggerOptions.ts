import type { StaticJsTaskRunner } from "@suntime-js/core";

export interface StaticJsDebuggerOptions {
  /**
   * The StaticJsTaskRunner that pumps debug sessions.  This will be used when
   * the debugger is running a task outside of the paused state.
   * Defaults to draining the iterator synchronously.
   */
  readonly runTask?: StaticJsTaskRunner | undefined;
}
