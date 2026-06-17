import { StaticJsDebugSessionImpl } from "../../session/implementation/StaticJsDebugSessionImpl.js";
import type { StaticJsDebugSession } from "../../session/StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "../../session/StaticJsDebugSessionOptions.js";
import type { StaticJsDebugger } from "../StaticJsDebugger.js";

import { StaticJsRealm, type StaticJsTaskRunner } from "@suntime-js/core";

export class StaticJsDebuggerImpl implements StaticJsDebugger {
  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _runTask: StaticJsTaskRunner = _realm.config.runTask,
  ) {}

  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession {
    return new StaticJsDebugSessionImpl(this._realm, options, this._runTask);
  }
}
