import type { StaticJsRealm, StaticJsTaskRunner } from "@suntime-js/core";

import type { StaticJsDebugSession } from "./session/StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "./session/StaticJsDebugSessionOptions.js";
import { StaticJsDebugSessionImpl } from "./session/implementation/StaticJsDebugSessionImpl.js";

export interface StaticJsDebuggerOptions {
  readonly realm: StaticJsRealm;
  readonly runTask?: StaticJsTaskRunner | undefined;
}

export interface StaticJsDebugger {
  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession;
}

class StaticJsDebuggerImpl implements StaticJsDebugger {
  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _runTask: StaticJsTaskRunner = _realm.config.runTask,
  ) {}

  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession {
    return new StaticJsDebugSessionImpl(this._realm, options, this._runTask);
  }
}

/**
 * Creates a StaticJsRealm
 * @param opts - Options for creating the realm.
 * @returns The created realm.
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
