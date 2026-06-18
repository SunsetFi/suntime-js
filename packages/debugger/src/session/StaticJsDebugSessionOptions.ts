import type { StaticJsTaskIterator } from "@suntime-js/core";

import type { StaticJsDebugBreakpointInput } from "../breakpoints/StaticJsDebugBreakpoint.js";

export type StaticJsDebugSourceKind = "script" | "expression" | "module";

export interface StaticJsDebugSessionCommonOptions {
  stopOnEntry?: boolean;
  breakpoints?: StaticJsDebugBreakpointInput[];
}

export interface StaticJsDebugLaunchOptions extends StaticJsDebugSessionCommonOptions {
  sourceText: string;
  sourceName?: string;
  sourceKind: StaticJsDebugSourceKind;
}

/**
 * Options for attaching a debug session to an already-captured task.
 *
 * In attach mode the caller is responsible for intercepting the task before
 * handing it to the debugger. Typically this is done via a per-evaluation
 * `runTask` callback:
 *
 * ```ts
 * realm.evaluateScript(code, {
 *   runTask: (task) => dbg.createSession({ attach: { task } }).start(),
 * });
 * ```
 *
 * `breakpoints` and `stopOnEntry` work identically to launch mode.
 *
 * **Limitation:** when the task finishes the terminate event reports
 * `reason: "complete"` or `reason: "error"`, but the actual completion value
 * is never available through the session, and a thrown error cannot be
 * distinguished from an explicit abort — both surface as
 * `{ state: "terminated", reason: "error" }`. Callers that need the real
 * result or error should await the `evaluate*` promise they already hold.
 */
export interface StaticJsDebugAttachOptions extends StaticJsDebugSessionCommonOptions {
  /**
   * The task iterator to attach to and debug. The caller is responsible for
   * capturing this from the realm (typically via a per-evaluation `runTask`).
   */
  task: StaticJsTaskIterator;
  /** Display fallback for source name; otherwise derived from `task.location`. */
  sourceName?: string;
  /** Display source kind; defaults to "script". */
  sourceKind?: StaticJsDebugSourceKind;
}

/**
 * Discriminated union that selects between the two debug session modes:
 * - `{ launch: ... }` — the session evaluates its own source code.
 * - `{ attach: ... }` — the session attaches to a task the caller has already captured.
 *
 * Exactly one of `launch` or `attach` must be provided.
 */
export type StaticJsDebugSessionOptions =
  | { launch: StaticJsDebugLaunchOptions; attach?: never }
  | { attach: StaticJsDebugAttachOptions; launch?: never };
