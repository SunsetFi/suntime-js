import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { EvaluatorCommand } from "../../evaluator/commands/EvaluatorCommand.js";
import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";
import { YieldCommand } from "../../evaluator/commands/YieldCommand.js";

import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";

import { StaticJsValue } from "../types/StaticJsValue.js";
import { StaticJsFunctionImpl } from "../types/implementation/StaticJsFunctionImpl.js";

import promiseResolve from "../algorithms/promise-resolve.js";

export abstract class AsyncDriver {
  private _state: "unstarted" | "running" | "suspended" | "halted" = "unstarted";

  constructor(
    private _evaluator: EvaluationGenerator<void>,
    protected readonly _realm: StaticJsRealm,
  ) {}

  get state() {
    return this._state;
  }

  protected *_continue(
    completion: Completion.Normal | Completion.Throw,
  ): EvaluationGenerator<void> {
    if (this._state !== "unstarted" && this._state !== "suspended") {
      throw new StaticJsEngineError(
        "Async function can only be continued when unstarted or suspended.",
      );
    }

    this._state = "running";

    try {
      while (true) {
        let result: IteratorResult<EvaluatorCommand, void>;
        if (Completion.Abrupt.is(completion)) {
          result = this._evaluator.throw(completion);
        } else {
          result = this._evaluator.next(completion);
        }

        const { value, done } = result;

        if (done) {
          yield* this._return(this._realm.types.undefined);
          return;
        }

        if (AwaitCommand.is(value)) {
          yield* this._await(value.awaitable);
          return;
        }

        if (YieldCommand.is(value)) {
          yield* this._yield(value.value);
          return;
        }

        // Chain the yield to the parent handler.
        completion = yield value;
      }
    } catch (e) {
      if (Completion.Throw.is(e)) {
        // Function threw an error
        yield* this._throw(e.value);
        return;
      }

      if (Completion.Return.is(e)) {
        // Function hit a return statement
        yield* this._return(e.value ?? this._realm.types.undefined);
        return;
      }

      throw e;
    }
  }

  protected abstract _onYield(value: StaticJsValue): EvaluationGenerator<void>;
  protected abstract _onReturn(value: StaticJsValue): EvaluationGenerator<void>;
  protected abstract _onThrow(reason: StaticJsValue): EvaluationGenerator<void>;

  protected abstract _onResolve(value: StaticJsValue): EvaluationGenerator<void>;
  protected abstract _onReject(reason: StaticJsValue): EvaluationGenerator<void>;

  private *_await(value: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._state = "suspended";

    const asyncContext = EvaluationContext.current;
    const promise = yield* Q(
      promiseResolve(this._realm.types.constructors.Promise, value, this._realm),
    );

    const realm = this._realm;
    const onResolve = this._onResolve.bind(this);
    const onReject = this._onReject.bind(this);
    const onFulfilled = new StaticJsFunctionImpl(
      this._realm,
      "onFulfilled",
      function* (_thisArg, value) {
        yield* asyncContext.run(function* () {
          yield* onResolve(value);
        });
        return realm.types.undefined;
      },
    );
    const onRejected = new StaticJsFunctionImpl(
      this._realm,
      "onRejected",
      function* (_thisArg, reason) {
        yield* asyncContext.run(function* () {
          yield* onReject(reason);
        });
        return realm.types.undefined;
      },
    );

    yield* promise.thenEvaluator(onFulfilled, onRejected, false);
  }

  private *_yield(value: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._state = "suspended";

    return yield* this._onYield(value);
  }

  private *_return(value: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._halt();

    yield* this._onReturn(value);
  }

  private *_throw(reason: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._halt();

    yield* this._onThrow(reason);
  }

  private _ensureRunning(): void {
    if (this._state !== "running") {
      throw new StaticJsEngineError("Async function is not running.");
    }
  }

  private _halt(): void {
    this._state = "halted";
  }
}
