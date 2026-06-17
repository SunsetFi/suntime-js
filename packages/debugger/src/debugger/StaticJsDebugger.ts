import type { StaticJsDebugSession } from "../session/StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "../session/StaticJsDebugSessionOptions.js";
import { StaticJsDebuggerImpl } from "./implementation/StaticJsDebuggerImpl.js";
import type { StaticJsDebuggerOptions } from "./StaticJsDebuggerOptions.js";

export interface StaticJsDebugger {
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
