import type { StaticJsRealm, StaticJsTaskRunner } from "@suntime-js/core";

export interface StaticJsDebuggerOptions {
  /** The realm this debugger will operate within. */
  readonly realm: StaticJsRealm;
  /**
   * The *driver* that pumps debug sessions — i.e. the `StaticJsTaskRunner`
   * that receives and executes the stepping proxy tasks produced by the
   * debugger.  Defaults to `realm.config.runTask`.
   *
   * This must be **distinct** from any task-capturing interceptor.  If you
   * use a per-evaluation `runTask` to capture a task for attach mode, the
   * realm's default `runTask` (or an explicit one passed here) serves as the
   * driver.  Passing the same function for both roles causes
   * `createSession` to throw a reentrancy error.
   */
  readonly runTask?: StaticJsTaskRunner | undefined;
}
