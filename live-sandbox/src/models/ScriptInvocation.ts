import { BehaviorSubject, Observable, Subject } from "rxjs";

import { StaticJsRealm, StaticJsTaskIterator } from "@suntime-js/core";

export default class ScriptInvocation {
  private static readonly OptsPerIteration = 1000;
  private static readonly YieldTimePerIteration = 10;

  private _status$ = new BehaviorSubject<"unstarted" | "running" | "done">(
    "unstarted"
  );
  private _operations$ = new BehaviorSubject<number>(0);
  private _log$ = new BehaviorSubject<string[]>([]);
  private _result$ = new Subject<unknown>();

  private _task: StaticJsTaskIterator | null = null;

  constructor(private readonly _code: string) {}

  get operations$(): Observable<number> {
    return this._operations$;
  }

  get log$(): Observable<string[]> {
    return this._log$;
  }

  get status$(): Observable<"unstarted" | "running" | "done"> {
    return this._status$;
  }

  get result$(): Observable<unknown> {
    return this._result$;
  }

  run() {
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
    });

    realm
      .evaluateScript(this._code, { taskRunner: this._taskRunner.bind(this) })
      .then(
        (result) => {
          this._result$.next(result.toJsSync());
          this._status$.next("done");
        },
        (error) => {
          this._result$.error(error);
          this._status$.next("done");
        }
      );

    this._status$.next("running");
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

  private _taskRunner(task: StaticJsTaskIterator) {
    this._task = task;
    const run = () => {
      // Its vaguely possible someone could call abort() before the task starts running,
      // So check the status too.
      if (task.done || task.aborted || this._status$.value !== "running") {
        return;
      }

      for (let i = 0; i < ScriptInvocation.OptsPerIteration; i++) {
        try {
          const { done } = task.next();
          if (done) {
            return;
          }
        } catch (error) {
          this._result$.error(error);
          return;
        } finally {
          this._operations$.next(this._operations$.value + i + 1);
        }
      }

      setTimeout(() => {
        run();
      }, ScriptInvocation.YieldTimePerIteration);
    };

    run();
  }

  private _consoleLog(...args: unknown[]) {
    this._log$.next(this._log$.value.concat(args.map(String).join(" ")));
  }
}
