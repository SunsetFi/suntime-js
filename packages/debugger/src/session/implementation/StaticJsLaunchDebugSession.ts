import {
  StaticJsRealm,
  type StaticJsRunTaskOptions,
  type StaticJsTaskIterator,
  type StaticJsTaskRunner,
  type StaticJsValue,
  type StaticJsModule,
} from "@suntime-js/core";

import type {
  StaticJsDebugLaunchOptions,
  StaticJsDebugSourceKind,
} from "../StaticJsDebugSessionOptions.js";

import { StaticJsDebugSessionBase } from "./StaticJsDebugSessionBase.js";

export class StaticJsLaunchDebugSession extends StaticJsDebugSessionBase {
  private readonly _launchOptions: StaticJsDebugLaunchOptions;

  constructor(launch: StaticJsDebugLaunchOptions, runTask: StaticJsTaskRunner) {
    super(launch, runTask);
    this._launchOptions = Object.assign({}, launch);
    this._sourceName = launch.sourceName;
    this._sourceKind = launch.sourceKind;
  }

  protected override _validateStart(): void {
    if (!this._launchOptions.sourceText) {
      const err = new Error("Launch options requires sourceText to be set.");
      this._finishTerminal("error", err);
      throw err;
    }
  }

  protected override _begin(): void {
    const { realm = StaticJsRealm(), sourceKind, sourceName, sourceText } = this._launchOptions;
    this._launch(realm, sourceKind, sourceName, sourceText)
      .then(this._onSessionComplete.bind(this))
      .catch(this._onSessionError.bind(this));
  }

  private async _launch(
    realm: StaticJsRealm,
    sourceKind: StaticJsDebugSourceKind,
    sourceName: string | undefined,
    sourceText: string,
  ): Promise<StaticJsValue | StaticJsModule> {
    const runTaskOptions: StaticJsRunTaskOptions = {
      runTask: this._handleTask.bind(this),
      ...(sourceName ? { sourceName } : {}),
    };

    switch (sourceKind) {
      case "expression":
        return await realm.evaluateExpression(sourceText, runTaskOptions);
      case "module":
        return await realm.evaluateModule(sourceText, runTaskOptions);
      case "script":
        return await realm.evaluateScript(sourceText, runTaskOptions);
    }
  }

  private _handleTask(task: StaticJsTaskIterator): void {
    if (this._isTerminal()) {
      task.abort();
      return;
    }
    this._activeTask = task;
    this._resumeActiveTask();
  }

  private _onSessionComplete(value: StaticJsValue | StaticJsModule): void {
    this._finishTerminal("complete", value);
  }

  private _onSessionError(error: unknown): void {
    if (
      this.state === "terminated" ||
      (error as { name?: string }).name === "StaticJsTaskAbortedError"
    ) {
      this._finishTerminal("terminate", null);
      return;
    }
    this._finishTerminal("error", error);
  }
}
