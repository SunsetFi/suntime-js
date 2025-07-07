import { BehaviorSubject, debounceTime, Observable, Subject } from "rxjs";
import mapValues from "lodash-es/mapValues";

import { StaticJsRealm, StaticJsTaskIterator } from "@suntime-js/core";
import CacheValue from "@/decorators/cache-value";

export type ScriptInvocationStatus =
  | "unstarted"
  | "running"
  | "paused"
  | "done";

export default class ScriptInvocation {
  // Our desired time span is to take up 20% of one visual frame at 60 fps.
  // So leave 80% of the frame time for the browser to do its thing.
  private static readonly QuotaTime = (0.2 / 60) * 1000;
  private static readonly YieldTime = (0.8 / 60) * 1000;

  // Track the last 15 iterations to see how much time we take.
  private static readonly IterationTimeQutoaSamples = 15;
  private static readonly BaseOpsPerIteration = 1000;

  private _status$ = new BehaviorSubject<ScriptInvocationStatus>("unstarted");

  private _operations$ = new BehaviorSubject<number>(0);
  private _operationsPerSecond$ = new BehaviorSubject<number>(0);
  private _log$ = new BehaviorSubject<string[]>([]);

  private _line$ = new BehaviorSubject<number>(-1);
  private _column$ = new BehaviorSubject<number>(-1);
  private _opType = new BehaviorSubject<string | null>(null);

  private _result$ = new Subject<unknown>();

  private _task: StaticJsTaskIterator | null = null;

  private _timePerIterationSamples: number[] = [];
  private _opsPerIterationSamples: number[] = [];
  private _iterationTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly _code: string,
    private readonly _modules: Record<string, Record<string, unknown>> = {}
  ) {}

  @CacheValue()
  get status$(): Observable<ScriptInvocationStatus> {
    return this._status$.asObservable();
  }

  @CacheValue()
  get operations$(): Observable<number> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._operations$.pipe(debounceTime(0));
  }

  @CacheValue()
  get operationsPerSecond$(): Observable<number> {
    return this._operationsPerSecond$.asObservable();
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
  get column$(): Observable<number> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._column$.pipe(debounceTime(0));
  }

  @CacheValue()
  get operationType$(): Observable<string | null> {
    // This can change rapidly during a single evaluation iteration sequence,
    // so debounce it.
    return this._opType.pipe(debounceTime(0));
  }

  @CacheValue()
  get result$(): Observable<unknown> {
    return this._result$.asObservable();
  }

  run() {
    const status = this._status$.value;

    if (status !== "unstarted" && status !== "paused") {
      throw new Error("Script is already running or done.");
    }

    if (status === "unstarted") {
      this._startScript("running");
    } else if (status === "paused") {
      this._status$.next("running");
      this._runTaskIteration();
    }
  }

  abort() {
    if (this._status$.value !== "running" && this._status$.value !== "paused") {
      throw new Error("Script is not running.");
    }

    this._cancelRunTaskIteration();

    if (this._task && !this._task.done && !this._task.aborted) {
      // Let the task complete in the intended way through an abort.
      // Its promise resolution will be captured and reported.
      this._task.abort();
    } else {
      this._status$.next("done");
    }
  }

  pause() {
    if (this._status$.value !== "running") {
      throw new Error("Script is not running.");
    }

    this._cancelRunTaskIteration();

    this._status$.next("paused");
    this._operationsPerSecond$.next(0);
  }

  step() {
    const status = this._status$.value;

    if (status === "unstarted") {
      this._startScript("paused");
    } else if (status === "running") {
      this.pause();
    } else if (status === "paused") {
      // No-op, continue to the next operation.
    } else {
      throw new Error(
        "Cannot step a script that is not unstarted, running or paused."
      );
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

  private _startScript(mode: "running" | "paused") {
    if (this._status$.value !== "unstarted") {
      throw new Error("Script has already been started.");
    }

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
    this._status$.next(mode);
  }

  private _onTaskStarted(task: StaticJsTaskIterator) {
    const status = this._status$.value;

    if (status !== "running" && status !== "paused") {
      throw new Error(`Unexpected status "${status}" in _onTaskStarted.`);
    }

    this._task = task;

    if (status === "running") {
      // Start running freely.
      this._runTaskIteration();
    } else if (status === "paused") {
      // Task is starting pause.

      // Do a single step to advance the iterator to the first operation.
      // Evaluation doesn't start until the first next() call, so calling this is needed
      // to advance to the first operation.
      // Without this, we would capture a null operation.
      // (We don't use doNextOp as this isn't a real operation and we don't want to increment the operation count.)
      this._task.next();

      // Capture the first operation data.
      this._captureOperationData();
    }
  }

  private _runTaskIteration() {
    // Make sure we never double up.
    this._cancelRunTaskIteration();

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

    const avgTimePerIteration = average(this._timePerIterationSamples, 0);
    let iterationCount = average(
      this._opsPerIterationSamples,
      ScriptInvocation.BaseOpsPerIteration
    );

    // This is a quick and janky way to adjust the number of iterations to hit a certain time quota.
    // This isn't strictly correct as our iteration count is different for each of those time samples.
    // FIXME: Find something better.
    if (avgTimePerIteration > 0) {
      iterationCount = Math.min(
        Math.max(
          1,
          Math.floor(
            iterationCount * (ScriptInvocation.QuotaTime / avgTimePerIteration)
          )
        ),
        100000
      );
    }

    const start = performance.now();
    for (let i = 0; i < iterationCount; i++) {
      // Breakpoint or something might have stopped us.
      if (this._status$.value !== "running") {
        return;
      }

      if (!this._doNextOp()) {
        // The current task has completed.
        // This doesn't mean we are done; there might be microtasks to run.
        // If so, they will be fired off by _onTaskStarted.
        // If we are truely done, the task promise will resolve,
        return;
      }
    }

    // This is fine to not run if we returned, as we don't want a partial iteration
    // to be counted as a full iteration for average time purposes.
    // Note that this data can still go on to be used in microtasks if any execute
    // after this task completes.
    const end = performance.now();
    const timeTaken = end - start;
    this._timePerIterationSamples.push(timeTaken);
    this._opsPerIterationSamples.push(iterationCount);
    if (
      this._timePerIterationSamples.length >
      ScriptInvocation.IterationTimeQutoaSamples
    ) {
      this._timePerIterationSamples.shift();
      this._opsPerIterationSamples.shift();
    }

    this._operationsPerSecond$.next(
      average(
        this._opsPerIterationSamples,
        ScriptInvocation.BaseOpsPerIteration
      ) /
        (avgTimePerIteration / 1000)
    );

    this._iterationTimeout = setTimeout(
      () => this._runTaskIteration(),
      ScriptInvocation.YieldTime
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

    // We are now pointing at a new op (or nothing, if done).
    // Capture the data for it.
    this._captureOperationData();

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

  private _captureOperationData() {
    if (!this._task) {
      return;
    }

    const location = this._task.location;
    const type = this._task.operationType;

    if (!location || !type) {
      this._line$.next(-1);
      this._column$.next(-1);
      this._opType.next(null);
      return;
    }

    this._line$.next(location.start.line);
    this._column$.next(location.start.column);
    this._opType.next(type);
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

function average(arr: number[], fallback: number): number {
  if (arr.length === 0) {
    return fallback;
  }
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
