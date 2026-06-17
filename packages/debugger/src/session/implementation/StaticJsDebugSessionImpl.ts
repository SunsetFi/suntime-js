import { v4 as uuidv4 } from "uuid";

import {
  type StaticJsRealm,
  type StaticJsRunTaskOptions,
  type StaticJsTaskIterator,
  type StaticJsTaskRunner,
  type StaticJsTaskIteratorStackFrame,
  type StaticJsTaskScopeFrame,
  type StaticJsValue,
  type StaticJsObject,
  type StaticJsModule,
  createTaskIteratorProxy,
  isStaticJsScalar,
  isStaticJsObject,
  isStaticJsFunction,
} from "@suntime-js/core";

import createDeferred, { type Deferred } from "../../utils/create-deferred.js";

import type {
  StaticJsDebugBreakpoint,
  StaticJsDebugBreakpointInput,
} from "../../breakpoints/StaticJsDebugBreakpoint.js";

import type { StaticJsDebugChangeEvent } from "../../events/StaticJsDebugChangeEvent.js";
import type { StaticJsDebugStartEvent } from "../../events/StaticJsDebugStartEvent.js";
import type { StaticJsDebugStopEvent } from "../../events/StaticJsDebugStopEvent.js";
import type { StaticJsDebugTerminateEvent } from "../../events/StaticJsDebugTerminateEvent.js";

import type { StaticJsDebugFrame } from "../../stack/StaticJsDebugFrame.js";
import type { StaticJsDebugScope } from "../../stack/StaticJsDebugScope.js";
import type { StaticJsDebugSnapshot } from "../../stack/StaticJsDebugSnapshot.js";
import type { StaticJsDebugVariable } from "../../stack/StaticJsDebugVariable.js";

import type { StaticJsDebugSession } from "../StaticJsDebugSession.js";
import type {
  StaticJsDebugLaunchOptions,
  StaticJsDebugSessionOptions,
  StaticJsDebugSourceKind,
} from "../StaticJsDebugSessionOptions.js";
import {
  isStaticJsDebugSessionStateTerminal,
  type StaticJsDebugSessionState,
} from "../StaticJsDebugSessionState.js";

import { StaticJsDebugSessionEventManager } from "./StaticJsDebugSessionEventManager.js";
import { StaticJsDebugSessionBreakpointManager } from "./StaticJsDebugSessionBreakpointManager.js";
import type {
  StaticJsDebugStopReason,
  StaticJsDebugStopReasonTerminal,
} from "../StaticJsDebugStopReason.js";
import {
  isStepOverTargetOperationType,
  isVisibleStepOperationType,
} from "./step-operation-types.js";

type StepMode = "stepInto" | "stepOut" | "stepOver";
type ResumeMode = "continue" | StepMode;

export class StaticJsDebugSessionImpl implements StaticJsDebugSession {
  readonly id: string = uuidv4();

  private _events = new StaticJsDebugSessionEventManager();
  private _breakpoints = new StaticJsDebugSessionBreakpointManager(this.id);

  private _state: StaticJsDebugSessionState = "idle";

  private readonly _waitForStopRequests: Deferred<StaticJsDebugStopEvent>[] = [];

  private _controlRequest: Deferred<StaticJsDebugStopEvent | null> | null = null;
  private _stopOnEntryPending = false;
  private _pauseRequested = false;
  private _skipBreakpointIdForLine: string | null = null;

  private _activeTask: StaticJsTaskIterator | null = null;
  private _lastStopEvent: StaticJsDebugStopEvent | null = null;

  private _variablesRefMap = new Map<
    number,
    { kind: "scope"; scope: StaticJsTaskScopeFrame } | { kind: "object"; object: StaticJsObject }
  >();
  private _nextVarRef = 1;

  private _activeStepMode: StepMode | null = null;
  private _activeStepFrame: StaticJsTaskIteratorStackFrame | null = null;

  private readonly _launchOptions: StaticJsDebugLaunchOptions;

  constructor(
    private readonly _realm: StaticJsRealm,
    { launch }: StaticJsDebugSessionOptions,
    private readonly _runTask: StaticJsTaskRunner,
  ) {
    this._launchOptions = Object.assign({}, launch);
    for (const breakpoint of launch.breakpoints ?? []) {
      this.addBreakpoint(breakpoint);
    }

    this._events.onDidStop((event) => {
      while (this._waitForStopRequests.length > 0) {
        this._waitForStopRequests.shift()!.resolve(event);
      }
    });

    this._events.onDidTerminate(() => {
      while (this._waitForStopRequests.length > 0) {
        this._waitForStopRequests
          .shift()!
          .reject(new Error("Debug session terminated before stopping."));
      }
    });
  }

  get state(): StaticJsDebugSessionState {
    return this._state;
  }

  get breakpoints(): readonly StaticJsDebugBreakpoint[] {
    return this._breakpoints.breakpoints;
  }

  start(): Promise<void> {
    return this._startExecution(false);
  }

  startAndWait(): Promise<StaticJsDebugStopEvent | null> {
    return this._startExecution(true);
  }

  continue(): Promise<void> {
    return this._resumeExecution("continue", false);
  }

  continueAndWait(): Promise<StaticJsDebugStopEvent | null> {
    return this._resumeExecution("continue", true);
  }

  stepOver(): Promise<void> {
    return this._resumeExecution("stepOver", false);
  }

  stepOverAndWait(): Promise<StaticJsDebugStopEvent | null> {
    return this._resumeExecution("stepOver", true);
  }

  stepInto(): Promise<void> {
    return this._resumeExecution("stepInto", false);
  }

  stepIntoAndWait(): Promise<StaticJsDebugStopEvent | null> {
    return this._resumeExecution("stepInto", true);
  }

  stepOut(): Promise<void> {
    return this._resumeExecution("stepOut", false);
  }

  stepOutAndWait(): Promise<StaticJsDebugStopEvent | null> {
    return this._resumeExecution("stepOut", true);
  }

  pause(): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return;
    }

    this._pauseRequested = true;
  }

  terminate(): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return;
    }

    if (this._activeTask == null) {
      this._finishTerminal("terminate", null);
      return;
    }

    this._activeTask.abort();
  }

  setBreakpoints(sourceName: string, lines: readonly number[]): void {
    this.clearBreakpoints(sourceName);
    for (const line of lines) {
      this.addBreakpoint({ sourceName, line });
    }
  }

  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint {
    return this._breakpoints.addBreakpoint(breakpoint);
  }

  removeBreakpoint(breakpointId: string): boolean {
    return this._breakpoints.removeBreakpoint(breakpointId);
  }

  clearBreakpoints(sourceName?: string): void {
    this._breakpoints.clearBreakpoints(sourceName);
  }

  getSnapshot(): StaticJsDebugSnapshot | null {
    const operation = this._activeTask?.operation;
    const location = this._activeTask?.location;
    const stack = this._activeTask?.stack;

    if (!operation || !location || !stack) {
      return null;
    }

    const { operationType } = operation;

    const { sourceName, sourceKind } = this._launchOptions;

    return {
      sourceName: location.sourceName ?? sourceName ?? "unknown",
      sourceKind: sourceKind,
      operationType,
      line: location.line ?? 0,
      column: location.column ?? 0,
      taskKind: this._activeTask?.currentTaskType === "microtask" ? "microtask" : "macrotask",
    };
  }

  getStack(): readonly StaticJsDebugFrame[] {
    const task = this._activeTask;
    if (!task) {
      return [];
    }

    return task.stack.map((frame) => this._taskFrameToDebugFrame(frame));
  }

  getScopes(frameId: number): StaticJsDebugScope[] {
    if (frameId !== 1 || !this._activeTask) {
      return [];
    }

    return this._activeTask.scopes.map((scope) => {
      const ref = this._nextVarRef++;
      this._variablesRefMap.set(ref, { kind: "scope", scope });
      return {
        name: scope.name,
        type: scope.type,
        variablesReference: ref,
        expensive: scope.type === "global",
      };
    });
  }

  getVariables(variablesReference: number): StaticJsDebugVariable[] {
    const entry = this._variablesRefMap.get(variablesReference);
    if (!entry) {
      return [];
    }

    if (entry.kind === "scope") {
      return entry.scope
        .getVariables({ runTask: debugTaskIterator })
        .map(({ name, value }) => this._toDebugVariable(name, value));
    }

    const opts: StaticJsRunTaskOptions = { runTask: debugTaskIterator };
    const keys = entry.object
      .ownPropertyKeysSync(opts)
      .filter((key): key is string => typeof key === "string");
    const variables = keys.map((key) => {
      const value = entry.object.getSync(key, opts);
      return this._toDebugVariable(key, value);
    });

    const prototype = entry.object.getPrototypeOfSync(opts);
    if (prototype) {
      variables.push(this._toDebugVariable("[[Prototype]]", prototype));
    }

    return variables;
  }

  private _toDebugVariable(name: string, value: StaticJsValue | null): StaticJsDebugVariable {
    let variablesReference = 0;
    if (value !== null && isStaticJsObject(value)) {
      variablesReference = this._nextVarRef++;
      this._variablesRefMap.set(variablesReference, { kind: "object", object: value });
    }
    return {
      name,
      value: formatStaticJsValue(value),
      type: value?.runtimeTypeOf ?? "undefined",
      variablesReference,
    };
  }

  waitForStop(): Promise<StaticJsDebugStopEvent> {
    if (this._lastStopEvent && this._state === "paused") {
      return Promise.resolve(this._lastStopEvent);
    }

    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return Promise.reject(new Error("Debug session has already terminated."));
    }

    const deferred = createDeferred<StaticJsDebugStopEvent>();
    this._waitForStopRequests.push(deferred);
    return deferred.promise;
  }

  onDidStart(listener: (event: StaticJsDebugStartEvent) => void): () => void {
    return this._events.onDidStart(listener);
  }

  onDidStop(listener: (event: StaticJsDebugStopEvent) => void): () => void {
    return this._events.onDidStop(listener);
  }

  onDidTerminate(listener: (event: StaticJsDebugTerminateEvent) => void): () => void {
    return this._events.onDidTerminate(listener);
  }

  onDidChange(listener: (event: StaticJsDebugChangeEvent) => void): () => void {
    return this._events.onDidChange(listener);
  }

  private async _launch(
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
        return await this._realm.evaluateExpression(sourceText, runTaskOptions);
      case "module":
        return await this._realm.evaluateModule(sourceText, runTaskOptions);
      case "script":
        return await this._realm.evaluateScript(sourceText, runTaskOptions);
    }
  }

  private _startExecution(waitForCompletion: false): Promise<void>;
  private _startExecution(waitForCompletion: true): Promise<StaticJsDebugStopEvent>;
  private async _startExecution(
    waitForCompletion: boolean,
  ): Promise<void | StaticJsDebugStopEvent | null> {
    if (this._state !== "idle") {
      throw new Error("Debug session has already started.");
    }

    const { sourceKind, sourceName, sourceText, stopOnEntry } = this._launchOptions;
    if (!sourceText) {
      const err = new Error("Phase 2 minimal debugger sessions require launch.sourceText.");
      this._finishTerminal("error", err);
      throw err;
    }

    this._setState("starting");
    this._events.didStart({ sessionId: this.id, state: "starting" });

    const controlRequest = waitForCompletion ? this._beginControlRequest() : null;
    this._stopOnEntryPending = stopOnEntry === true;

    this._launch(sourceKind, sourceName, sourceText)
      .then(this._onSessionComplete.bind(this))
      .catch(this._onSessionError.bind(this));

    if (controlRequest) {
      return controlRequest.promise;
    }
  }

  private async _resumeExecution(waitMode: ResumeMode, waitForCompletion: false): Promise<void>;
  private async _resumeExecution(
    waitMode: ResumeMode,
    waitForCompletion: true,
  ): Promise<StaticJsDebugStopEvent | null>;
  private async _resumeExecution(
    waitMode: ResumeMode,
    waitForCompletion: boolean,
  ): Promise<void | StaticJsDebugStopEvent | null> {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return waitForCompletion ? null : undefined;
    }

    if (this._state !== "paused") {
      throw new Error("Can only resume execution from a paused state.");
    }

    if (waitMode !== "continue") {
      this._activeStepMode = waitMode;
      // We should always have at least one stack frame.
      this._activeStepFrame = this._activeTask?.stack[0] ?? null;
    }

    const controlRequest = waitForCompletion ? this._beginControlRequest() : null;
    try {
      this._resumeActiveTask();
    } catch (e) {
      this._rejectControlRequest(e);
      throw e;
    }

    if (controlRequest) {
      return controlRequest.promise;
    }
  }

  private _handleTask(task: StaticJsTaskIterator): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      task.abort();
      return;
    }

    this._activeTask = task;

    this._resumeActiveTask();
  }

  private _resumeActiveTask(): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return;
    }

    const task = this._activeTask;
    if (!task || task.done) {
      return;
    }

    const immediateStopReason = this._getStopReason();
    if (immediateStopReason) {
      this._pauseWithReason(immediateStopReason);
      return;
    }

    this._lastStopEvent = null;
    this._variablesRefMap.clear();
    this._setState("running");

    let stopped = false;

    const stop = (reason: StaticJsDebugStopReason): IteratorResult<void, void> => {
      if (stopped) {
        return { done: true, value: undefined };
      }

      stopped = true;
      this._pauseWithReason(reason);
      return { done: true, value: undefined };
    };

    const iterate = (result: IteratorResult<void, void>): IteratorResult<void, void> => {
      if (result.done) {
        this._activeTask = null;
        return result;
      }

      const operation = task.operation;
      if (!operation || !isVisibleStepOperationType(operation.operationType)) {
        return {
          done: false,
          value: undefined,
        };
      }

      const stopReason = this._getStopReason();
      if (stopReason) {
        return stop(stopReason);
      }

      return {
        done: false,
        value: undefined,
      };
    };

    const outerTask = createTaskIteratorProxy(task, {
      next() {
        return iterate(task.next());
      },
      throw(error: unknown) {
        return iterate(task.throw(error));
      },
      abort: () => {
        stopped = true;
        task.abort();
        this._activeTask = null;
      },
    });
    this._runTask(outerTask);
  }

  private _pauseWithReason(reason: StaticJsDebugStopReason): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return;
    }

    this._setState("paused");

    const event: StaticJsDebugStopEvent = {
      sessionId: this.id,
      reason,
      snapshot: this.getSnapshot(),
    };

    this._lastStopEvent = event;
    this._events.didStop(event);
    this._acceptControlRequest(event);
  }

  private _onSessionComplete(value: StaticJsValue | StaticJsModule) {
    this._finishTerminal("complete", value);
  }

  private _onSessionError(error: unknown) {
    if (
      this._state === "terminated" ||
      (error as { name?: string }).name === "StaticJsTaskAbortedError"
    ) {
      this._finishTerminal("terminate", null);
      return;
    }

    this._finishTerminal("error", error);
  }

  private _getStopReason(): StaticJsDebugStopReason | null {
    const operation = this._activeTask?.operation;
    if (!operation || !isVisibleStepOperationType(operation.operationType)) {
      // Don't stop if we aren't on a visible operation.
      return null;
    }

    if (this._stopOnEntryPending) {
      this._stopOnEntryPending = false;
      return "entry";
    }

    if (this._pauseRequested) {
      this._pauseRequested = false;
      return "pause";
    }

    if (this._matchesCurrentBreakpoint()) {
      return "breakpoint";
    }

    if (this._matchesCurrentStep()) {
      return "step";
    }

    return null;
  }

  private _matchesCurrentBreakpoint(): boolean {
    const location = this._activeTask?.location;
    if (!location?.sourceName) {
      return false;
    }

    const breakpointId = this._breakpoints.breakpointIdForLocation(location);

    if (breakpointId && this._skipBreakpointIdForLine === breakpointId) {
      return false;
    }

    this._skipBreakpointIdForLine = null;

    if (!breakpointId) {
      return false;
    }

    this._skipBreakpointIdForLine = breakpointId;

    return true;
  }

  private _matchesCurrentStep(): boolean {
    if (!this._activeStepFrame || !this._activeStepMode) {
      return false;
    }

    const consumeStep = () => {
      this._activeStepFrame = null;
      this._activeStepMode = null;
    };

    const stepFrame = this._activeStepFrame;

    const currentFrame = this._activeTask?.stack[0];
    const currentOperationType = this._activeTask?.operation?.operationType;

    if (!currentFrame || !currentOperationType) {
      consumeStep();
      return false;
    }

    if (stepFrame.sourceLocation?.character === currentFrame.sourceLocation?.character) {
      return false;
    }

    // Exited the function.
    if (currentFrame.depth < stepFrame.depth) {
      consumeStep();
      return true;
    }

    switch (this._activeStepMode) {
      case "stepInto": {
        if (
          // Entered the function
          currentFrame.depth > stepFrame.depth ||
          // Proceeded to a different statement in the same frame.
          currentFrame.sourceLocation?.character !== stepFrame.sourceLocation?.character
        ) {
          consumeStep();
          return true;
        }
        break;
      }
      case "stepOver": {
        if (
          // Proceeded to a different statement in the same frame.
          currentFrame.depth === stepFrame.depth &&
          // FIXME: We should check for what statement we are in and wait to escape that statement.
          // We need the AST tree plus knowledge of parents for this.
          isStepOverTargetOperationType(currentOperationType)
        ) {
          consumeStep();
          return true;
        }
        break;
      }
      case "stepOut": {
        if (currentFrame.depth < stepFrame.depth) {
          consumeStep();
          return true;
        }
        break;
      }
    }

    return false;
  }

  private _finishTerminal(
    reason: StaticJsDebugStopReasonTerminal,
    result: StaticJsValue | StaticJsModule | unknown,
  ): void {
    if (isStaticJsDebugSessionStateTerminal(this._state)) {
      return;
    }

    this._pauseRequested = false;
    this._activeTask = null;
    this._stopOnEntryPending = false;
    this._lastStopEvent = null;

    if (reason === "complete") {
      this._setState("completed");
      this._events.didTerminate({
        sessionId: this.id,
        state: "completed",
        reason: "complete",
        result: result as StaticJsValue | StaticJsModule,
      });
    } else {
      this._setState("terminated");
      this._events.didTerminate({
        sessionId: this.id,
        state: "terminated",
        reason: "error",
        error: result,
      });
    }

    this._acceptControlRequest(null);
  }

  private _beginControlRequest(): Deferred<StaticJsDebugStopEvent | null> {
    if (this._controlRequest) {
      throw new Error("A debug control request is already in flight.");
    }

    this._controlRequest = createDeferred<StaticJsDebugStopEvent | null>();
    return this._controlRequest;
  }

  private _acceptControlRequest(event: StaticJsDebugStopEvent | null): void {
    if (!this._controlRequest) {
      return;
    }

    this._controlRequest.resolve(event);
    this._controlRequest = null;
  }

  private _rejectControlRequest(error: unknown): void {
    if (!this._controlRequest) {
      return;
    }

    const resolvedError = error instanceof Error ? error : new Error(String(error));
    this._controlRequest.reject(resolvedError);
    this._controlRequest = null;
  }

  private _setState(state: StaticJsDebugSessionState): void {
    if (this._state === state) {
      return;
    }

    this._state = state;
    this._events.didChange({ sessionId: this.id, state });
  }

  private _taskFrameToDebugFrame(frame: StaticJsTaskIteratorStackFrame): StaticJsDebugFrame {
    let functionName: string | null = null;

    const func = frame.function;
    if (func) {
      try {
        const funcNameVal = func.getSync("name", { runTask: debugTaskIterator });
        if (isStaticJsScalar(funcNameVal)) {
          functionName = String(funcNameVal.value);
        } else {
          functionName = "<Non-scalar function name>";
        }
      } catch {
        functionName = "<Error determining function name>";
      }
    }

    return {
      id: `${this.id}:${frame.depth}`,
      functionName,
      sourceName: frame.sourceLocation?.sourceName ?? this._launchOptions.sourceName ?? "unknown",
      line: frame.sourceLocation?.line ?? 0,
      column: frame.sourceLocation?.column ?? 0,
    };
  }
}

function formatStaticJsValue(value: StaticJsValue | null): string {
  if (value === null) {
    return "<uninitialized>";
  }
  if (isStaticJsScalar(value)) {
    return String(value.value);
  }

  if (isStaticJsFunction(value)) {
    const name = value.getNameSync({ runTask: debugTaskIterator });
    return `ƒ ${name}()`;
  }

  return capitalize(value.runtimeTypeOf);
}

const DebugTaskIteratorOpts = 5000;
function debugTaskIterator(task: StaticJsTaskIterator) {
  let ops = DebugTaskIteratorOpts;
  while (true) {
    const { done } = task.next();
    if (done) {
      break;
    }

    // Yield to the event loop every DebugTaskIteratorOpts iterations to allow for pause/terminate requests to be processed.
    // This is a bit of a band-aid until we have proper pausing support in the core task runner.
    if (--ops <= 0) {
      task.abort("Unable to determine function name.");
    }
  }
}

function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
