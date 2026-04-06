import type { StaticJsRealm, StaticJsTaskIterator, StaticJsTaskRunner } from "@suntime-js/core";

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

export function createStaticJsDebugger(options: StaticJsDebuggerOptions): StaticJsDebugger {
  return new StaticJsDebuggerImpl(options.realm, options.runTask);
}

export default function defaultTaskRunner(task: StaticJsTaskIterator): void {
  let result = task.next();
  while (!result.done) {
    result = task.next();
  }
}
