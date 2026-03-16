import { parse as parseAst } from "@babel/parser";
import traverseNs from "@babel/traverse";
import type { NodePath } from "@babel/traverse";
import type { File, Node } from "@babel/types";

import { v4 as uuidv4 } from "uuid";

import {
  StaticJsSyntaxError,
  StaticJsTaskAbortedError,
  type StaticJsRunTaskOptions,
  StaticJsTaskIteratorLocation,
  type StaticJsRealm,
  type StaticJsTaskIterator,
  type StaticJsTaskRunner,
} from "@suntime-js/core";

import type {
  StaticJsDebugBreakpoint,
  StaticJsDebugBreakpointInput,
} from "../../breakpoints/StaticJsDebugBreakpoint.js";

import type { StaticJsDebugChangeEvent } from "../../events/StaticJsDebugChangeEvent.js";
import type { StaticJsDebugStartEvent } from "../../events/StaticJsDebugStartEvent.js";
import type { StaticJsDebugStopEvent } from "../../events/StaticJsDebugStopEvent.js";
import type { StaticJsDebugTerminateEvent } from "../../events/StaticJsDebugTerminateEvent.js";

import type { StaticJsDebugFrame } from "../../stack/StaticJsDebugFrame.js";
import type { StaticJsDebugSnapshot } from "../../stack/StaticJsDebugSnapshot.js";

import createDeferred, { type Deferred } from "../../utils/create-deferred.js";
import emit from "../../utils/emit.js";

import type { StaticJsDebugSession } from "../StaticJsDebugSession.js";
import type { StaticJsDebugSessionOptions } from "../StaticJsDebugSessionOptions.js";
import type {
  StaticJsDebugSessionState,
  StaticJsDebugSessionStateTerminal,
} from "../StaticJsDebugSessionState.js";
import type {
  StaticJsDebugStopReason,
  StaticJsDebugStopReasonTerminal,
} from "../StaticJsDebugStopReason.js";

type Listener<T> = (event: T) => void;

type ResumeMode = "continue" | "next";

type TaskKind = "macrotask" | "microtask";

// Node's ESM/CJS interop exposes @babel/traverse as a namespace object at runtime.
type TraverseFn = (typeof import("@babel/traverse"))["default"];
type TraverseCompat = TraverseFn | { default: TraverseFn };
const traverseModule = traverseNs as TraverseCompat;
const traverse = typeof traverseModule === "function" ? traverseModule : traverseModule.default;

export class StaticJsDebugSessionImpl implements StaticJsDebugSession {
  readonly id = uuidv4();

  private _state: StaticJsDebugSessionState = "idle";
  private _parsedSource: File | null = null;
  private readonly _breakpointsById = new Map<string, StaticJsDebugBreakpoint>();
  private readonly _breakpointIdsBySource = new Map<string, string[]>();

  private readonly _startListeners = new Set<Listener<StaticJsDebugStartEvent>>();
  private readonly _stopListeners = new Set<Listener<StaticJsDebugStopEvent>>();
  private readonly _terminateListeners = new Set<Listener<StaticJsDebugTerminateEvent>>();
  private readonly _changeListeners = new Set<Listener<StaticJsDebugChangeEvent>>();

  private _nextBreakpointId = 0;
  private _activeTask: StaticJsTaskIterator | null = null;
  private _activeTaskKind: TaskKind = "macrotask";
  private _seenTaskCount = 0;
  private _pauseRequested = false;
  private _stopOnEntryPending = false;
  private _lastStopEvent: StaticJsDebugStopEvent | null = null;
  private _skipBreakpointOnceForLine: string | null = null;
  private _controlRequest: Deferred<StaticJsDebugStopEvent | null> | null = null;
  private readonly _waitForStopRequests: Deferred<StaticJsDebugStopEvent>[] = [];

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _options: StaticJsDebugSessionOptions,
    private readonly _runTask: StaticJsTaskRunner,
  ) {
    this._parseSource();

    for (const breakpoint of _options.launch.breakpoints ?? []) {
      this._addBreakpoint(breakpoint);
    }
  }

  get state(): StaticJsDebugSessionState {
    return this._state;
  }

  get breakpoints(): readonly StaticJsDebugBreakpoint[] {
    return [...this._breakpointsById.values()];
  }

  async start(): Promise<StaticJsDebugStopEvent | null> {
    if (this._state !== "idle") {
      throw new Error("Debug session has already started.");
    }

    this._stopOnEntryPending = Boolean(this._options.launch.stopOnEntry);

    this._setState("starting");
    emit(this._startListeners, {
      sessionId: this.id,
      state: "starting",
    });

    const request = this._beginControlRequest();

    try {
      this._launchEvaluation().then(this._onSessionComplete, this._onSessionError);
    } catch (error) {
      this._failStart(error);
      throw error;
    }

    return request.promise;
  }

  continue(): Promise<StaticJsDebugStopEvent | null> {
    if (this._state === "completed" || this._state === "terminated") {
      return Promise.resolve(null);
    }

    if (this._state !== "paused") {
      throw new Error("Continue is only available while the session is paused.");
    }

    this._prepareToResume();
    const request = this._beginControlRequest();
    this._resumeActiveTask("continue");
    return request.promise;
  }

  next(): Promise<StaticJsDebugStopEvent | null> {
    if (this._state === "completed" || this._state === "terminated") {
      return Promise.resolve(null);
    }

    if (this._state !== "paused") {
      throw new Error("Next is only available while the session is paused.");
    }

    this._prepareToResume();
    const request = this._beginControlRequest();
    this._resumeActiveTask("next");
    return request.promise;
  }

  pause(): void {
    if (this._state === "completed" || this._state === "terminated") {
      return;
    }

    this._pauseRequested = true;
  }

  terminate(): void {
    if (this._state === "completed" || this._state === "terminated") {
      return;
    }

    this._pauseRequested = false;

    if (this._activeTask == null) {
      this._finishTerminal("terminate", null);
      return;
    }

    this._activeTask.abort();
  }

  setBreakpoints(sourceName: string, lines: readonly number[]): void {
    this.clearBreakpoints(sourceName);

    for (const line of lines) {
      this._addBreakpoint({ sourceName, line });
    }
  }

  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint {
    return this._addBreakpoint(breakpoint);
  }

  removeBreakpoint(breakpointId: string): boolean {
    const breakpoint = this._breakpointsById.get(breakpointId);
    if (!breakpoint) {
      return false;
    }

    this._breakpointsById.delete(breakpointId);

    const ids = this._breakpointIdsBySource.get(breakpoint.sourceName) ?? [];
    const filteredIds = ids.filter((id) => id !== breakpointId);
    if (filteredIds.length === 0) {
      this._breakpointIdsBySource.delete(breakpoint.sourceName);
    } else {
      this._breakpointIdsBySource.set(breakpoint.sourceName, filteredIds);
    }

    return true;
  }

  clearBreakpoints(sourceName?: string): void {
    if (sourceName == null) {
      this._breakpointsById.clear();
      this._breakpointIdsBySource.clear();
      return;
    }

    const breakpointIds = this._breakpointIdsBySource.get(sourceName) ?? [];
    for (const breakpointId of breakpointIds) {
      this._breakpointsById.delete(breakpointId);
    }

    this._breakpointIdsBySource.delete(sourceName);
  }

  getSnapshot(): StaticJsDebugSnapshot | null {
    const operation = this._activeTask?.operation;
    const location = this._getCurrentLocation();
    if (!operation || !location) {
      return null;
    }

    return {
      sourceName: location.sourceName ?? this._options.launch.sourceName ?? "unknown",
      sourceKind: this._options.launch.sourceKind,
      operationType: operation.operationType,
      line: location.start.line,
      column: location.start.column,
      taskKind: this._activeTaskKind,
    };
  }

  getStack(): readonly StaticJsDebugFrame[] {
    const snapshot = this.getSnapshot();
    if (!snapshot) {
      return [];
    }

    return [
      {
        id: `${this.id}:0`,
        name: snapshot.operationType,
        sourceName: snapshot.sourceName,
        line: snapshot.line,
        column: snapshot.column,
      },
    ];
  }

  waitForStop(): Promise<StaticJsDebugStopEvent> {
    if (this._lastStopEvent && this._state === "paused") {
      return Promise.resolve(this._lastStopEvent);
    }

    if (this._state === "completed" || this._state === "terminated") {
      return Promise.reject(new Error("Debug session terminated before stopping."));
    }

    const request = createDeferred<StaticJsDebugStopEvent>();
    this._waitForStopRequests.push(request);
    return request.promise;
  }

  onDidStart(listener: (event: StaticJsDebugStartEvent) => void): () => void {
    this._startListeners.add(listener);
    return () => this._startListeners.delete(listener);
  }

  onDidStop(listener: (event: StaticJsDebugStopEvent) => void): () => void {
    this._stopListeners.add(listener);
    return () => this._stopListeners.delete(listener);
  }

  onDidTerminate(listener: (event: StaticJsDebugTerminateEvent) => void): () => void {
    this._terminateListeners.add(listener);
    return () => this._terminateListeners.delete(listener);
  }

  onDidChange(listener: (event: StaticJsDebugChangeEvent) => void): () => void {
    this._changeListeners.add(listener);
    return () => this._changeListeners.delete(listener);
  }

  private _launchEvaluation(): Promise<unknown> {
    const { sourceKind, sourceName, sourceText } = this._options.launch;
    if (!sourceText) {
      throw new Error("Phase 2 minimal debugger sessions require launch.sourceText.");
    }

    const runTaskOptions: StaticJsRunTaskOptions = {
      runTask: this._handleTask,
      ...(sourceName ? { sourceName } : {}),
    };

    switch (sourceKind) {
      case "expression":
        return this._realm.evaluateExpression(sourceText, runTaskOptions);
      case "module":
        return this._realm.evaluateModule(sourceText, runTaskOptions);
      case "script":
        return this._realm.evaluateScript(sourceText, runTaskOptions);
    }
  }

  private _parseSource(): void {
    const { sourceKind, sourceName, sourceText } = this._options.launch;
    if (!sourceText) {
      this._parsedSource = null;
      return;
    }

    try {
      switch (sourceKind) {
        case "expression":
          this._parsedSource = parseAst(`(${sourceText});`, {
            attachComment: false,
            createImportExpressions: true,
            strictMode: false,
            sourceFilename: sourceName,
            sourceType: "script",
          });
          break;
        case "module":
          this._parsedSource = parseAst(sourceText, {
            attachComment: false,
            createImportExpressions: true,
            sourceFilename: sourceName,
            sourceType: "module",
          });
          break;
        case "script":
          this._parsedSource = parseAst(sourceText, {
            attachComment: false,
            createImportExpressions: true,
            strictMode: false,
            sourceFilename: sourceName,
            sourceType: "script",
          });
          break;
      }
    } catch (error) {
      this._handleParseError(error, `Failed to parse ${sourceKind}`);
    }

    this._refreshBreakpointVerification();
  }

  private _handleParseError(error: unknown, contextMessage: string): never {
    if (!this._isParseError(error)) {
      throw error;
    }

    let message = contextMessage;
    if (typeof error.message === "string") {
      message += `: ${error.message}`;
    }

    const loc = this._hasParseErrorLocation(error) ? error.loc : null;
    throw new StaticJsSyntaxError(message, loc);
  }

  private _isParseError(
    error: unknown,
  ): error is { code: string; reasonCode: string; message?: string; loc?: unknown } {
    return (
      error !== null &&
      typeof error === "object" &&
      "code" in error &&
      typeof error.code === "string" &&
      "reasonCode" in error &&
      typeof error.reasonCode === "string"
    );
  }

  private _hasParseErrorLocation(error: {
    loc?: unknown;
  }): error is { loc: { line: number; column: number; index: number } } {
    return (
      error.loc !== null &&
      typeof error.loc === "object" &&
      error.loc !== undefined &&
      "line" in error.loc &&
      typeof error.loc.line === "number" &&
      "column" in error.loc &&
      typeof error.loc.column === "number" &&
      "index" in error.loc &&
      typeof error.loc.index === "number"
    );
  }

  private _refreshBreakpointVerification(): void {
    for (const breakpoint of this._breakpointsById.values()) {
      const verified = this._isBreakpointLineValid(breakpoint.line);
      if (breakpoint.verified === verified) {
        continue;
      }

      this._breakpointsById.set(breakpoint.id, {
        ...breakpoint,
        verified,
      });
    }
  }

  private readonly _onSessionComplete = (): void => {
    this._finishTerminal("complete", null);
  };

  private readonly _onSessionError = (error: unknown): void => {
    if (this._state === "terminated" || error instanceof StaticJsTaskAbortedError) {
      this._finishTerminal("terminate", null);
      return;
    }

    this._finishTerminal("error", error);
  };

  private readonly _handleTask: StaticJsTaskRunner = (task) => {
    if (this._state === "completed" || this._state === "terminated") {
      task.abort();
      return;
    }

    this._activeTask = task;
    this._activeTaskKind = this._seenTaskCount === 0 ? "macrotask" : "microtask";
    this._seenTaskCount++;

    const immediateStopReason = this._getImmediateStopReason();
    if (immediateStopReason) {
      this._pauseWithReason(immediateStopReason);
      return;
    }

    this._resumeActiveTask("continue");
  };

  private _resumeActiveTask(mode: ResumeMode): void {
    const activeTask = this._activeTask;
    if (this._state === "completed" || this._state === "terminated") {
      return;
    }

    if (!activeTask || activeTask.done) {
      return;
    }

    const immediateStopReason = this._getImmediateStopReason();
    if (immediateStopReason) {
      this._pauseWithReason(immediateStopReason);
      return;
    }

    this._lastStopEvent = null;
    this._setState("running");

    let stopped = false;

    const stop = (reason: StaticJsDebugStopReason): IteratorResult<void, void> => {
      if (!stopped) {
        stopped = true;
        this._pauseWithReason(reason);
      }

      return {
        value: undefined,
        done: true,
      };
    };

    const maybeStopAfterStep = (result: IteratorResult<void, void>): IteratorResult<void, void> => {
      if (result.done) {
        return result;
      }

      if (this._pauseRequested) {
        this._pauseRequested = false;
        return stop("pause");
      }

      if (mode === "next") {
        return stop("step");
      }

      if (this._matchesCurrentBreakpoint()) {
        return stop("breakpoint");
      }

      return {
        value: undefined,
        done: false,
      };
    };

    this._runTask({
      get done() {
        return stopped || activeTask.done;
      },
      get aborted() {
        return activeTask.aborted;
      },
      get operation() {
        return activeTask.operation;
      },
      next: () => maybeStopAfterStep(activeTask.next()),
      throw: (error: unknown) => maybeStopAfterStep(activeTask.throw(error)),
      abort: () => {
        stopped = true;
        activeTask.abort();
      },
    });
  }

  private _pauseWithReason(reason: StaticJsDebugStopReason): void {
    if (this._state === "completed" || this._state === "terminated") {
      return;
    }

    this._setState("paused");
    const event: StaticJsDebugStopEvent = {
      sessionId: this.id,
      reason,
      snapshot: this.getSnapshot(),
    };

    this._skipBreakpointOnceForLine =
      reason === "breakpoint" ? this._getCurrentBreakpointLineKey() : null;

    this._lastStopEvent = event;
    emit(this._stopListeners, event);

    this._controlRequest?.resolve(event);
    this._controlRequest = null;

    while (this._waitForStopRequests.length > 0) {
      this._waitForStopRequests.shift()!.resolve(event);
    }
  }

  private _finishTerminal(reason: StaticJsDebugStopReasonTerminal, error: unknown): void {
    if (this._state === "completed" || this._state === "terminated") {
      return;
    }

    this._pauseRequested = false;
    this._activeTask = null;
    this._lastStopEvent = null;
    this._skipBreakpointOnceForLine = null;
    this._stopOnEntryPending = false;

    const nextState: StaticJsDebugSessionStateTerminal =
      reason === "complete" ? "completed" : "terminated";
    this._setState(nextState);

    emit(this._terminateListeners, {
      sessionId: this.id,
      state: nextState,
      reason,
      error,
    });

    this._controlRequest?.resolve(null);
    this._controlRequest = null;

    while (this._waitForStopRequests.length > 0) {
      this._waitForStopRequests
        .shift()!
        .reject(new Error("Debug session terminated before stopping."));
    }
  }

  private _getImmediateStopReason(): StaticJsDebugStopReason | null {
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

    return null;
  }

  private _matchesCurrentBreakpoint(): boolean {
    const location = this._activeTask?.operation?.location;
    if (!location?.sourceName) {
      return false;
    }

    // When resuming from a breakpoint, we need to allow evaluation to flow into the next line instead of
    // re-triggering on another operation for the current line.
    const currentBreakpointLineKey = this._getCurrentBreakpointLineKey();
    if (currentBreakpointLineKey && currentBreakpointLineKey === this._skipBreakpointOnceForLine) {
      return false;
    }

    this._skipBreakpointOnceForLine = null;

    const breakpointIds = this._breakpointIdsBySource.get(location.sourceName) ?? [];
    for (const breakpointId of breakpointIds) {
      const breakpoint = this._breakpointsById.get(breakpointId);
      if (breakpoint?.line === location.start.line) {
        return true;
      }
    }

    return false;
  }

  private _isBreakpointLineValid(line: number): boolean {
    if (!Number.isInteger(line) || line < 1) {
      return false;
    }

    const parsedSource = this._parsedSource;
    if (!parsedSource) {
      return false;
    }

    let matches = false;
    traverse(parsedSource, {
      enter: (path: NodePath<Node>) => {
        if (matches) {
          path.stop();
          return;
        }

        const node = path.node as Node;
        const startLine = node.loc?.start.line;
        if (startLine === line && this._isBreakpointCandidateNode(node)) {
          matches = true;
          path.stop();
        }
      },
    });

    return matches;
  }

  private _isBreakpointCandidateNode(node: Node): boolean {
    switch (node.type) {
      case "File":
      case "Program":
      case "Identifier":
      case "PrivateName":
      case "StringLiteral":
      case "NumericLiteral":
      case "BooleanLiteral":
      case "NullLiteral":
      case "BigIntLiteral":
      case "RegExpLiteral":
        return false;
      default:
        return true;
    }
  }

  private _getCurrentLocation(): StaticJsTaskIteratorLocation | null {
    return this._activeTask?.operation?.location ?? null;
  }

  private _getCurrentBreakpointLineKey(): string | null {
    const location = this._activeTask?.operation?.location;
    if (!location) {
      return null;
    }

    return [location.sourceName, location.start.line].join(":");
  }

  private _addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint {
    const nextBreakpoint: StaticJsDebugBreakpoint = {
      id: `breakpoint:${this.id}:${this._nextBreakpointId++}`,
      sourceName: breakpoint.sourceName,
      line: breakpoint.line,
      verified: this._isBreakpointLineValid(breakpoint.line),
    };

    this._breakpointsById.set(nextBreakpoint.id, nextBreakpoint);

    const sourceBreakpoints = this._breakpointIdsBySource.get(nextBreakpoint.sourceName) ?? [];
    sourceBreakpoints.push(nextBreakpoint.id);
    this._breakpointIdsBySource.set(nextBreakpoint.sourceName, sourceBreakpoints);

    return nextBreakpoint;
  }

  private _beginControlRequest(): Deferred<StaticJsDebugStopEvent | null> {
    if (this._controlRequest) {
      throw new Error("A debug control request is already in flight.");
    }

    this._controlRequest = createDeferred<StaticJsDebugStopEvent | null>();
    return this._controlRequest;
  }

  private _prepareToResume(): void {
    if (this._lastStopEvent?.reason !== "breakpoint") {
      this._skipBreakpointOnceForLine = null;
    }
  }

  private _failStart(error: unknown): void {
    this._pauseRequested = false;
    this._activeTask = null;
    this._lastStopEvent = null;
    this._skipBreakpointOnceForLine = null;
    this._stopOnEntryPending = false;
    this._controlRequest = null;

    this._setState("terminated");
    emit(this._terminateListeners, {
      sessionId: this.id,
      state: "terminated",
      reason: "error",
      error,
    });

    while (this._waitForStopRequests.length > 0) {
      this._waitForStopRequests
        .shift()!
        .reject(new Error("Debug session terminated before stopping."));
    }
  }

  private _setState(state: StaticJsDebugSessionState): void {
    this._state = state;
    emit(this._changeListeners, {
      sessionId: this.id,
      state,
    });
  }
}
