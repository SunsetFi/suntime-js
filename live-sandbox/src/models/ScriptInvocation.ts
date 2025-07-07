import { BehaviorSubject, debounceTime, Observable, Subject } from "rxjs";
import mapValues from "lodash-es/mapValues";

import { StaticJsRealm, StaticJsTaskIterator } from "@suntime-js/core";
import AsObservable from "@/decorators/as-observable";
import CacheValue from "@/decorators/cache-value";

export type ScriptInvocationStatus =
  | "unstarted"
  | "running"
  | "paused"
  | "done";

export default class ScriptInvocation {
  private static readonly OptsPerIteration = 1000;
  private static readonly YieldTimePerIteration = 10;

  private _status$ = new BehaviorSubject<ScriptInvocationStatus>("unstarted");

  private _operations$ = new BehaviorSubject<number>(0);
  private _log$ = new BehaviorSubject<string[]>([]);

  private _line$ = new BehaviorSubject<number>(-1);
  private _column$ = new BehaviorSubject<number>(-1);

  private _result$ = new Subject<unknown>();

  private _task: StaticJsTaskIterator | null = null;

  private _iterationTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly _code: string,
    private readonly _modules: Record<string, Record<string, unknown>> = {}
  ) {}

  @CacheValue()
  @AsObservable()
  get status$(): Observable<ScriptInvocationStatus> {
    return this._status$;
  }

  @CacheValue()
  get operations$(): Observable<number> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._operations$.pipe(debounceTime(0));
  }

  @CacheValue()
  get log$(): Observable<string[]> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._log$.pipe(debounceTime(0));
  }

  @CacheValue()
  get line$(): Observable<number> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._line$.pipe(debounceTime(0));
  }

  @CacheValue()
  @AsObservable()
  get column$(): Observable<number> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._column$.pipe(debounceTime(0));
  }

  @CacheValue()
  @AsObservable()
  get result$(): Observable<unknown> {
    return this._result$;
  }

  run() {
    const status = this._status$.value;

    if (status !== "unstarted" && status !== "paused") {
      throw new Error("Script is already running or done.");
    }

    if (status === "unstarted") {
      this._startScript();
      // evaluateScript waits for a microtask to invoke the taskRunner, so
      // this is safe.
      this._status$.next("running");
    } else if (status === "paused") {
      this._status$.next("running");
      this._runTaskIteration();
    }
  }

  abort() {
    if (this._status$.value !== "running") {
      throw new Error("Script is not running.");
    }

    if (this._task && !this._task.done && !this._task.aborted) {
      this._task.abort();
    }

    this._status$.next("done");
  }

  pause() {
    this._status$.next("paused");
    this._cancelRunTaskIteration();
  }

  step() {
    const status = this._status$.value;

    if (status === "unstarted") {
      this._startScript();
      this._status$.next("paused");
    } else if (status !== "running" && status !== "paused") {
      throw new Error("Script is not running or paused.");
    }

    // This might get cleared by doNextOp if the task finishes,
    // but then we would either complete the promise (becoming done),
    // or start a microtask (invoking onRunTask and capturing a task anew).
    // So in theory, we should never hit this.
    if (!this._task) {
      throw new Error("No task to step.");
    }

    this._doNextOp();
  }

  private _startScript() {
    if (this._status$.value !== "unstarted") {
      throw new Error("Script has already been started.");
    }

    this._task = null;
    this._cancelRunTaskIteration();

    const realm = StaticJsRealm({
      globalObject: {
        value: {
          console: {
            log: this._consoleLog.bind(this),
          },
        },
      },
      modules: mapValues(this._modules, (module) => ({
        exports: module,
      })),
      runTask: this._onTaskStarted.bind(this),
    });

    realm.evaluateScript(this._code).then(
      (result) => {
        this._done(result.toJsSync());
      },
      (error) => {
        this._done(error, true);
      }
    );
  }

  private _onTaskStarted(task: StaticJsTaskIterator) {
    this._task = task;
    if (this._status$.value === "running") {
      // Not paused, so start it running.
      this._runTaskIteration();
    }
  }

  private _runTaskIteration() {
    const status = this._status$.value;
    if (status !== "running" && status !== "paused") {
      throw new Error("Script is not running or paused.");
    }

    if (!this._task) {
      throw new Error("No task to run.");
    }

    if (this._task.done || this._task.aborted) {
      return;
    }

    if (status === "paused") {
      return;
    }

    for (let i = 0; i < ScriptInvocation.OptsPerIteration; i++) {
      // Breakpoint or something might have stopped us.
      if (this._status$.value !== "running") {
        return;
      }

      if (!this._doNextOp()) {
        // There is nothing left to do.
        // This doesn't mean we are done; there might be microtasks to run.
        return;
      }
    }

    setTimeout(
      () => this._runTaskIteration(),
      ScriptInvocation.YieldTimePerIteration
    );
  }

  private _doNextOp() {
    if (!this._task) {
      throw new Error("doNextOp(): No task to run.");
    }

    // This is debounced, so don't worry about the spam coming from _runTask().
    this._operations$.next(this._operations$.value + 1);

    // Evaluate an operation.
    const { done } = this._task.next();

    // We are now pointing at a new op, capture it.
    this._captureLineAndColumn();

    if (done) {
      // We may not be 'done' if microtasks want to run.
      // Just clear the task.
      this._task = null;
      return false;
    }

    return true;
  }

  private _cancelRunTaskIteration() {
    if (this._iterationTimeout) {
      clearTimeout(this._iterationTimeout);
      this._iterationTimeout = null;
    }
  }

  private _captureLineAndColumn() {
    if (!this._task) {
      return;
    }

    this._line$.next(this._task.line);
    this._column$.next(this._task.column);
  }

  private _done(result: unknown, error = false) {
    if (this._status$.value === "done") {
      return;
    }

    this._status$.next("done");

    this._task = null;
    this._cancelRunTaskIteration();

    if (error) {
      this._result$.error(result);
    } else {
      this._result$.next(result);
    }
  }

  private _consoleLog(...args: unknown[]) {
    this._log$.next(this._log$.value.concat(args.map(String).join(" ")));
  }
}
