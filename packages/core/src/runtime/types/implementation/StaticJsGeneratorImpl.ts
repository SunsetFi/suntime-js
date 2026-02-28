import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { type StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsIteratorResult } from "../StaticJsIterator.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import getValue from "../../algorithms/get-value.js";

import type { EvaluatorCommand } from "../../../evaluator/commands/EvaluatorCommand.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import type { CompletionValue } from "../../../evaluator/completions/CompletionValue.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import type { StaticJsGenerator } from "../StaticJsGenerator.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsGeneratorImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsGenerator
{
  private _generatorState:
    | "suspended-start"
    | "suspended-yield"
    | "executing"
    | "completed" = "suspended-start";

  constructor(
    private readonly _closure: EvaluationGenerator<StaticJsValue>,
    private readonly _generatorBrand: string | null,
    prototype: StaticJsObjectLike,
    realm: StaticJsRealm,
  ) {
    super(realm, prototype);
  }

  get runtimeTypeOf() {
    return "generator" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Generator;
  }

  get generatorBrand() {
    return this._generatorBrand;
  }

  *nextEvaluator(
    value: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<StaticJsIteratorResult> {
    if (
      this._generatorState !== "suspended-start" &&
      this._generatorState !== "suspended-yield"
    ) {
      throw new StaticJsEngineError(
        "Generator can only be resumed if it is in suspended-start or suspended-yield state.",
      );
    }

    return yield* this._continue(value, "next");
  }

  *throwEvaluator(
    value: StaticJsValue,
  ): EvaluationGenerator<StaticJsIteratorResult> {
    let state = this._generatorState;
    if (state === "suspended-start") {
      state = this._generatorState = "completed";
    }

    if (state === "completed") {
      // I think this is right?
      throw Completion.Throw(value);
    }

    if (state !== "suspended-yield") {
      throw new StaticJsEngineError(
        "Generator can only be thrown into if it is in suspended-yield state.",
      );
    }

    return yield* this._continue(value, "throw");
  }

  *returnEvaluator(
    value: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<StaticJsIteratorResult> {
    let state = this._generatorState;
    if (state === "suspended-start") {
      state = this._generatorState = "completed";
    }

    if (state === "completed") {
      return {
        done: true,
        value,
      };
    }

    if (state !== "suspended-yield") {
      throw new StaticJsEngineError(
        "Generator can only be returned into if it is in suspended-yield state.",
      );
    }

    return yield* this._continue(value, "return");
  }

  private *_continue(
    continueWith: StaticJsValue,
    continueMode: "next" | "throw" | "return",
  ): EvaluationGenerator<StaticJsIteratorResult> {
    this._generatorState = "executing";

    let continuation: CompletionValue = continueWith;
    let continuationMode = continueMode;
    try {
      while (true) {
        let result: IteratorResult<EvaluatorCommand, Completion>;
        if (continuationMode === "throw") {
          // throw only happens on initial run, so continuation is always a value.
          continuation = yield* getValue(continuation!, this.realm);
          result = this._closure.throw(Completion.Throw(continuation));
        } else if (continuationMode === "return") {
          // Note: Not the same as throw(Completion.return(value)).
          // This is to triger the closure's finally blocks, if they exist.
          // We may keep iterating after this, if finally does more yields.

          // return only happens on the initial run, so continuation is always a value.
          result = this._closure.return(continuation as StaticJsValue);
        } else {
          result = this._closure.next(continuation);
        }

        continuationMode = "next";

        const { value, done } = result;

        if (done) {
          this._generatorState = "completed";

          return {
            done: true,
            value: this.realm.types.undefined,
          };
        }

        if (value.command === "yield") {
          return yield* this._yield(value.value);
        }

        continuation = yield value;
      }
    } catch (e) {
      if (Completion.Return.is(e)) {
        this._generatorState = "completed";
        return {
          done: true,
          value: e.value,
        };
      }

      throw e;
    }
  }

  private *_yield(
    iteratorResult: StaticJsValue,
  ): EvaluationGenerator<StaticJsIteratorResult> {
    if (this._generatorState !== "executing") {
      throw new StaticJsEngineError(
        "Generator can only yield if it is in executing state.",
      );
    }

    this._generatorState = "suspended-yield";

    return {
      done: false,
      value: iteratorResult,
    };
  }
}
