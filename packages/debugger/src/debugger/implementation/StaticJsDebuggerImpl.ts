import {
  type StaticJsTaskIterator,
  type StaticJsTaskRunner,
  synchronousDefaultTaskRunner,
} from "@suntime-js/core";

import type { StaticJsDebugSession } from "#session/StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "#session/StaticJsDebugSessionOptions.js";

import { StaticJsAttachDebugSession } from "#session/implementation/StaticJsAttachDebugSession.js";
import { StaticJsLaunchDebugSession } from "#session/implementation/StaticJsLaunchDebugSession.js";

import type { StaticJsDebugger } from "../StaticJsDebugger.js";

export class StaticJsDebuggerImpl implements StaticJsDebugger {
  private _driving = false;

  constructor(private readonly _runTask?: StaticJsTaskRunner) {}

  createSession(options: StaticJsDebugSessionOptions): StaticJsDebugSession {
    if (this._driving) {
      throw new Error(
        "StaticJsDebugger.createSession was called while the debugger was driving a " +
          "task. This usually means the debugger's driver runTask is the same callback " +
          "that creates the debug session — for example, a session-creating function " +
          "set as the realm's default runTask. The task interceptor (which creates the " +
          "session) must be distinct from the driver (which pumps it): capture the task " +
          "via a per-evaluation runTask, or pass an explicit driver to " +
          "StaticJsDebugger({ runTask }).",
      );
    }

    if ("attach" in options && options.attach) {
      return new StaticJsAttachDebugSession(options.attach, this._makeLaunchTask());
    }

    return new StaticJsLaunchDebugSession(
      options.launch,
      this._makeLaunchTask(options.launch.realm?.config.runTask),
    );
  }

  private _makeLaunchTask(fallbackRunner?: StaticJsTaskRunner | undefined): StaticJsTaskRunner {
    return (task: StaticJsTaskIterator) => {
      const taskRunner = this._runTask ?? fallbackRunner ?? synchronousDefaultTaskRunner;
      this._driving = true;
      try {
        taskRunner(task);
      } finally {
        this._driving = false;
      }
    };
  }
}
