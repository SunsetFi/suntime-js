import {
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
  StaticJsModuleResolution,
  StaticJsObject,
  StaticJsPropertyDescriptorRecord,
  StaticJsRealm,
  StaticJsTaskIterator,
  StaticJsTaskRunner,
  StaticJsTypeFactory,
} from "@suntime-js/core";
import {
  StaticJsDebugger,
  StaticJsDebugSession,
  StaticJsDebugSourceKind,
} from "@suntime-js/debugger";
import { BehaviorSubject } from "rxjs";

import { serialize } from "./serialize";

export interface CodeRuntimeRegisterSubTask {
  (task: StaticJsTaskIterator): void;
}

export interface CodeRuntimeSpawnOptions {
  realm: StaticJsRealm;
  registerSubTask: CodeRuntimeRegisterSubTask;
  addLog(log: CodeRuntimeLog): void;
}

export interface CodeRutimePopulateGlobalOptions {
  types: StaticJsTypeFactory;
  registerSubTask: CodeRuntimeRegisterSubTask;
}

export interface CodeRuntimeOptions {
  maxLogLines?: number;
  populateGlobal?(global: StaticJsObject, options: CodeRutimePopulateGlobalOptions): void;
  resolveModule?(
    specifier: string,
    options: CodeRuntimeSpawnOptions,
  ): StaticJsModuleResolution | null;
  runTask?: StaticJsTaskRunner;
  runTaskSync?: StaticJsTaskRunner;
}

export interface CodeRuntimeLaunchOptions {
  code: string;
  sourceKind?: StaticJsDebugSourceKind;
  stopOnEntry?: boolean;
}

export interface CodeRuntimeSourceLocation {
  line: number;
  column: number;
}

export interface CodeRuntimeLog {
  kind: "log" | "warning" | "error" | "return";
  text: string;
}

export type CodeRuntimeStatus = "idle" | "running" | "paused" | "completed" | "errored";

const defaultOptions = {
  maxLogLines: 100,
  populateGlobal: () => {},
  resolveModule: () => null,
  // Time sharing to allow infinite loops.
  runTask: createTimeSharingTaskRunner({
    operationsPerIteration: 1000,
    yieldTime: 1,
  }),
  // Synchronous time bound to prevent infinite loops in toNative
  runTaskSync: createTimeBoundTaskRunner({
    maxRunTime: 1000,
  }),
};

const SourceName = "live-code.js";

export class CodeRuntime {
  private _disposed = false;
  private _status$ = new BehaviorSubject<CodeRuntimeStatus>("idle");
  private _log$ = new BehaviorSubject<CodeRuntimeLog[]>([]);

  private _debugSession: StaticJsDebugSession | null = null;
  private _breakpoints$ = new BehaviorSubject<number[]>([]);
  private _pauseLocation$ = new BehaviorSubject<Readonly<CodeRuntimeSourceLocation> | null>(null);

  private _subTasks: StaticJsTaskIterator[] = [];

  private _options: Required<CodeRuntimeOptions>;

  constructor(options: CodeRuntimeOptions = {}) {
    this._options = { ...defaultOptions, ...options };
  }

  get status$() {
    return this._status$;
  }

  get status() {
    return this._status$.getValue();
  }

  get log$() {
    return this._log$;
  }

  get pausedLocation$() {
    return this._pauseLocation$;
  }

  get breakpoints$() {
    return this._breakpoints$;
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this._terminate();
    this._status$.complete();
    this._log$.complete();
  }

  run({ code, sourceKind = "script", stopOnEntry = false }: CodeRuntimeLaunchOptions) {
    this._verifyNotDisposed();

    this._reset();

    const realm = this._createRealm();
    const dbg = new StaticJsDebugger({ realm });

    // The debugger will inherit the realm's runTask, so
    // we don't need to set it here.
    const debugSession = (this._debugSession = dbg.createSession({
      launch: {
        sourceKind,
        sourceName: SourceName,
        sourceText: code,
        stopOnEntry,
      },
    }));

    const breakpoints = this._breakpoints$.getValue();
    if (breakpoints.length > 0) {
      breakpoints.forEach((line) => debugSession.addBreakpoint({ line, sourceName: SourceName }));
    }

    this._debugSession.onDidTerminate((event) => {
      if (debugSession !== this._debugSession) return;
      switch (event.reason) {
        case "complete":
          this._status$.next("completed");
          this._addLog({
            kind: "return",
            text: serialize(event.result),
          });
          break;
        case "error":
          this._status$.next("errored");
          this._addLog({
            kind: "error",
            text: serialize(event.error),
          });
          break;
      }

      this._terminate();
    });

    this._debugSession.onDidChange(({ state }) => {
      if (debugSession !== this._debugSession) return;
      switch (state) {
        case "running":
          this._status$.next("running");
          this._pauseLocation$.next(null);
          break;
        case "paused":
          this._status$.next("paused");
          this._snapshot();
          break;
      }
    });

    debugSession.start();
  }

  addBreakpoint(line: number) {
    const breakpoints = this._breakpoints$.getValue();
    if (breakpoints.includes(line)) {
      return;
    }

    this._verifyNotDisposed();
    this._breakpoints$.next([...this._breakpoints$.getValue(), line]);
    this._debugSession?.addBreakpoint({ line, sourceName: SourceName });
  }

  removeBreakpoint(line: number) {
    this._verifyNotDisposed();

    const breakpoints = this._breakpoints$.getValue();
    const idx = breakpoints.findIndex((bp) => bp === line);
    if (idx === -1) {
      return;
    }

    this._breakpoints$.next([...breakpoints.slice(0, idx), ...breakpoints.slice(idx + 1)]);

    const breakpoint = this._debugSession?.breakpoints.find(
      (bp) => bp.line === line && bp.sourceName === SourceName,
    );
    if (breakpoint) {
      this._debugSession?.removeBreakpoint(breakpoint.id);
    }
  }

  clearBreakpoints() {
    this._verifyNotDisposed();
    this._debugSession?.clearBreakpoints();
    this._breakpoints$.next([]);
  }

  pause() {
    this._verifyNotDisposed();
    // TODO: Pause sub-tasks?
    this._debugSession?.pause();
  }

  resume() {
    this._verifyNotDisposed();
    this._debugSession?.continue();
  }

  step() {
    this._verifyNotDisposed();
    this._debugSession?.stepInto();
  }

  terminate() {
    this._verifyNotDisposed();
    this._terminate();
  }

  private _snapshot() {
    const snapshot = this._debugSession?.getSnapshot();
    if (!snapshot) {
      return;
    }

    this._pauseLocation$.next({
      line: snapshot.line,
      column: snapshot.column,
    });
  }

  private _terminate() {
    this._debugSession?.terminate();
    this._debugSession = null;

    this._subTasks.filter((x) => !x.done).forEach((task) => task.abort());
    this._subTasks = [];

    this._pauseLocation$.next(null);
    this._status$.next("idle");
  }

  private _reset() {
    this._terminate();
    this._log$.next([]);
  }

  private _createRealm(): StaticJsRealm {
    const addLog = this._addLog.bind(this);

    const makeLoggerProperty = (
      types: StaticJsTypeFactory,
      name: string,
      kind: "log" | "error" | "return",
    ): StaticJsPropertyDescriptorRecord => {
      return {
        value: types.function(name, function* (...args) {
          addLog({
            kind,
            text: args
              .map((x) => x.toNative())
              .map(serialize)
              .join(" "),
          });
          return types.undefined;
        }),
        enumerable: false,
        writable: true,
        configurable: true,
      };
    };

    const realm: StaticJsRealm = StaticJsRealm({
      // Time sharing to allow infinite loops.
      runTask: this._options.runTask,
      // Synchronous time bound to prevent infinite loops in toNative
      runTaskSync: this._options.runTaskSync,
      global: (types) => {
        const global = types.object({
          console: {
            value: types.object({
              log: makeLoggerProperty(types, "log", "log"),
              warn: makeLoggerProperty(types, "warn", "log"),
              error: makeLoggerProperty(types, "error", "error"),
              info: makeLoggerProperty(types, "info", "log"),
            }),
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        this._options.populateGlobal?.(global, {
          types,
          registerSubTask: this._registerSubTask.bind(this),
        });
        return global;
      },
      resolveImportedModule: async (specifier) => {
        return (
          this._options.resolveModule?.(specifier, {
            realm,
            registerSubTask: this._registerSubTask.bind(this),
            addLog: this._addLog.bind(this),
          }) ?? null
        );
      },
    });

    return realm;
  }

  private _registerSubTask(task: StaticJsTaskIterator) {
    this._subTasks.push(task);
  }

  private _addLog(log: CodeRuntimeLog) {
    const currentLogs = this._log$.getValue();
    const maxLogLines = this._options.maxLogLines;
    const newLogs = [...currentLogs, log].slice(-maxLogLines);
    this._log$.next(newLogs);
  }

  private _verifyNotDisposed() {
    if (this._disposed) {
      throw new Error("CodeRuntime has been disposed");
    }
  }
}
