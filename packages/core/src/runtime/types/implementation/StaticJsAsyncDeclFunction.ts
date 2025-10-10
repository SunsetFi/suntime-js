import type { BlockStatement, Expression } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ReturnCompletion } from "../../../evaluator/completions/ReturnCompletion.js";
import type { EvaluatorCommand } from "../../../evaluator/commands/EvaluatorCommand.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import newPromiseCapability, {
  type PromiseCapabilityRecord,
} from "../../algorithms/new-promise-capability.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPromise } from "../StaticJsPromise.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsFunction } from "../StaticJsFunction.js";
import { isStaticJsObjectLike } from "../StaticJsObjectLike.js";

import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";

import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

export default class StaticJsAsyncDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(realm, name, argumentDeclarations, context, body);
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator {
    const functionContext = yield* this._createContext(thisArg, args);

    yield* this._declareArguments(args, functionContext);

    yield* setupEnvironment(this._body, functionContext);

    const evaluator = EvaluateNodeCommand(this._body, functionContext);
    const invocation = new InvokingAsyncFunction(evaluator, functionContext);

    yield* invocation.start();

    return invocation.promise;
  }
}

class InvokingAsyncFunction {
  private _capability!: PromiseCapabilityRecord;
  private _state: "pending" | "started" | "running" | "awaiting" | "halted" =
    "pending";

  constructor(
    private readonly _evaluator: EvaluationGenerator,
    private readonly _context: EvaluationContext,
  ) {}

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  *start(): EvaluationGenerator<StaticJsPromise> {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Async function can only be started once.");
    }

    this._state = "started";

    this._capability = yield* newPromiseCapability(
      this._context.realm.types.constructors.Promise,
      this._context.realm,
    );

    // We start evaluating immediately, not on a microtask.
    yield* this._continue(null);

    return this._capability.promise;
  }

  private *_continue(
    continueWith: StaticJsValue | null,
    continueMode: "next" | "throw" = "next",
  ): EvaluationGenerator<void> {
    if (this._state !== "started" && this._state !== "awaiting") {
      throw new StaticJsEngineError(
        "Async function can only be continued when running or awaiting.",
      );
    }

    this._state = "running";

    try {
      while (true) {
        let result: IteratorResult<EvaluatorCommand, StaticJsValue | null>;
        if (continueMode === "throw" && continueWith !== null) {
          result = this._evaluator.throw(new ThrowCompletion(continueWith));
        } else {
          result = this._evaluator.next(continueWith);
        }
        continueMode = "next";

        const { value, done } = result;

        if (done) {
          // Hit the end of the generator, no more function to run.
          yield* this._resolve(this._context.realm.types.undefined);
          return;
        }

        if (value.kind === "await") {
          // Signal for us to await.
          // Handle the awaitable and pause execution.
          yield* this._registerContinuation(value.awaitable);
          return;
        }

        // Chain the yield to the parent handler.
        continueWith = yield value;
      }
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        // Function threw an error, reject the promise with it.
        yield* this._reject(e.value);
        return;
      }

      if (e instanceof ReturnCompletion) {
        // Function had a return statement, resolve the promise with it.
        // Silly note: If this is our starting continuation, than failing to capture this return here
        // will bubble up to FunctionBase and make it return the value instead of the promise.
        yield* this._resolve(e.value ?? this._context.realm.types.undefined);
        return;
      }

      throw e;
    }
  }

  private *_registerContinuation(
    awaitable: StaticJsValue,
  ): EvaluationGenerator<void> {
    if (this._state !== "running") {
      throw new StaticJsEngineError(
        "Async function can only register continuations when running.",
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    this._state = "awaiting";

    if (isStaticJsObjectLike(awaitable)) {
      const awaitableThen = yield* awaitable.getPropertyEvaluator("then");
      if (isStaticJsFunction(awaitableThen)) {
        // Register with the function.
        // The function will be responsible for queueing us on the microtask.
        yield* awaitableThen.callEvaluator(
          awaitable,
          new StaticJsFunctionImpl(this._context.realm, "resolve", function* (
            _thisArg,
            value,
          ) {
            yield* self._continue(value);
            return self._context.realm.types.undefined;
          }),
          new StaticJsFunctionImpl(this._context.realm, "reject", function* (
            _thisArg,
            value,
          ) {
            yield* self._continue(value, "throw");
            return self._context.realm.types.undefined;
          }),
        );
        return;
      }
    }

    // For everything else, continue on the next microtask.
    this._context.realm.enqueueMicrotask(function* () {
      yield* self._continue(awaitable);
    });
  }

  private *_resolve(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.resolve.callEvaluator(
      this._context.realm.types.undefined,
      value,
    );
  }

  private *_reject(reason: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.reject.callEvaluator(
      this._context.realm.types.undefined,
      reason,
    );
  }

  private _halt() {
    this._state = "halted";
  }
}
