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

export interface AsyncDriverHooks {
  onYield(value: StaticJsValue): EvaluationGenerator<Completion | null>;
  onReturn(value: StaticJsValue): EvaluationGenerator<void>;
  onThrow(reason: StaticJsValue): EvaluationGenerator<void>;
}

export class AsyncDriver {
  private _state: "unstarted" | "running" | "suspended" | "halted" = "unstarted";

  private _evaluatorStack: EvaluationGenerator<Completion | null | void>[] = [];

  constructor(
    private _evaluator: EvaluationGenerator<void>,
    private readonly _hooks: AsyncDriverHooks,
    protected readonly _realm: StaticJsRealm,
  ) {
    this._evaluatorStack.push(this._evaluator);
  }

  get state() {
    return this._state;
  }

  *continue(completion: Completion): EvaluationGenerator<void> {
    if (this._state !== "unstarted" && this._state !== "suspended") {
      throw new StaticJsEngineError(
        "Async function can only be continued when unstarted or suspended.",
      );
    }

    if (this._evaluatorStack.length === 0) {
      throw new StaticJsEngineError("Async function has already completed.");
    }

    this._state = "running";

    try {
      while (true) {
        const evaluator = this._evaluatorStack[this._evaluatorStack.length - 1];
        let result: IteratorResult<EvaluatorCommand, Completion | void>;
        if (Completion.Abrupt.is(completion)) {
          result = evaluator.throw(completion);
        } else {
          result = evaluator.next(completion);
        }

        const { value, done } = result;

        if (done) {
          this._evaluatorStack.pop();

          if (this._evaluatorStack.length === 0) {
            yield* this._return(this._realm.types.undefined);
            return;
          }

          if (value === null) {
            // Does not wish to continue execution.
            // This happens on an async generator when nothing is queued.
            return;
          }

          // Async generator had a queued item, resume with it.
          if (!Completion.is(value)) {
            throw new StaticJsEngineError(
              "Async driver child evaluator completed without a completion value.",
            );
          }
          completion = value;
          continue;
        }

        if (AwaitCommand.is(value)) {
          yield* this._await(value.awaitable);
          return;
        }

        if (YieldCommand.is(value)) {
          const evaluator = this._yield(value.value);
          this._evaluatorStack.push(evaluator);
          continue;
        }

        // Chain the yield to the parent handler.
        completion = yield value;
      }
    } catch (e) {
      if (Completion.Throw.is(e)) {
        this._evaluatorStack.pop();
        // Function threw an error
        yield* this._throw(e.value);
        return;
      }

      if (Completion.Return.is(e)) {
        // Function hit a return statement
        this._evaluatorStack.length = 0;
        yield* this._return(e.value ?? this._realm.types.undefined);
        return;
      }

      throw e;
    }
  }

  private *_await(value: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._state = "suspended";

    const asyncContext = EvaluationContext.current;
    const promise = yield* Q(
      promiseResolve(this._realm.types.constructors.Promise, value, this._realm),
    );

    const realm = this._realm;
    const resolve = this._resolve.bind(this);
    const reject = this._reject.bind(this);
    const onFulfilled = new StaticJsFunctionImpl(
      this._realm,
      "onFulfilled",
      function* (_thisArg, value) {
        yield* asyncContext.run(function* () {
          yield* resolve(value);
        });
        return realm.types.undefined;
      },
    );
    const onRejected = new StaticJsFunctionImpl(
      this._realm,
      "onRejected",
      function* (_thisArg, reason) {
        yield* asyncContext.run(function* () {
          yield* reject(reason);
        });
        return realm.types.undefined;
      },
    );

    yield* promise.thenEvaluator(onFulfilled, onRejected, false);
  }

  private *_resolve(value: StaticJsValue): EvaluationGenerator<void> {
    yield* this.continue(Completion.Normal(value));
  }

  private *_reject(reason: StaticJsValue): EvaluationGenerator<void> {
    yield* this.continue(Completion.Throw(reason));
  }

  private *_yield(value: StaticJsValue): EvaluationGenerator<Completion | null> {
    this._ensureRunning();

    return yield* this._hooks.onYield(value);
  }

  private *_return(value: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._halt();

    yield* this._hooks.onReturn(value);
  }

  private *_throw(reason: StaticJsValue): EvaluationGenerator<void> {
    this._ensureRunning();

    this._halt();

    yield* this._hooks.onThrow(reason);
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
