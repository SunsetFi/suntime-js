import type { StaticJsDebugSession } from "../session/StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "../session/StaticJsDebugSessionOptions.js";
import { StaticJsDebuggerImpl } from "./implementation/StaticJsDebuggerImpl.js";
import type { StaticJsDebuggerOptions } from "./StaticJsDebuggerOptions.js";

export interface StaticJsDebugger {
  /**
   * Creates a debug session in one of two modes determined by `options`.
   *
   * **Launch mode** (`{ launch: ... }`) — the session evaluates its own source
   * and drives execution from start to finish.
   *
   * **Attach mode** (`{ attach: { task } }`) — the session attaches to a
   * `StaticJsTaskIterator` that the caller has already captured.  The caller
   * intercepts the task via a *per-evaluation* `runTask`; the debugger's
   * *driver* (its own `runTask`, defaulting to `realm.config.runTask`) then
   * pumps the stepping proxy.  These two functions **must be different**:
   *
   * ```ts
   * // The per-evaluation runTask captures the task; the debugger's
   * // driver (realm.config.runTask by default) pumps it.
   * realm.evaluateScript(code, {
   *   runTask: (task) => dbg.createSession({ attach: { task } }).start(),
   * });
   * ```
   *
   * @throws {Error} If called while the debugger is already driving a task.
   *   This happens when the same callback that creates the session is also used
   *   as the debugger's driver — for example, a session-creating function set
   *   as the realm's default `runTask`.  Use a per-evaluation `runTask` to
   *   capture the task (the interceptor), and keep the realm's default (or an
   *   explicit `runTask` on `StaticJsDebugger`) as the driver.
   */
  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession;
}

/**
 * Creates a StaticJsDebugger
 * @param options - Options for creating the debugger.
 * @returns The created debugger.
 * @public
 */
function fStaticJsDebugger(options: StaticJsDebuggerOptions): StaticJsDebugger {
  return new StaticJsDebuggerImpl(options.realm, options.runTask);
}

// Let the function be used in instanceof checks.
// Delegate to StaticJsDebuggerImpl since it is the actual implementation of the debugger.
const fStaticJsDebuggerProto = {
  [Symbol.hasInstance](instance: unknown) {
    return instance instanceof StaticJsDebuggerImpl;
  },
};
Object.setPrototypeOf(fStaticJsDebuggerProto, Function.prototype);
Object.setPrototypeOf(fStaticJsDebugger, fStaticJsDebuggerProto);

interface fStaticJsDebugger {
  (options: StaticJsDebuggerOptions): StaticJsDebugger;
  new (options: StaticJsDebuggerOptions): StaticJsDebugger;
}

export const StaticJsDebugger: fStaticJsDebugger = fStaticJsDebugger as fStaticJsDebugger;
