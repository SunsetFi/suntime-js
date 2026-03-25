import type { BlockStatement, Expression } from "@babel/types";

import functionDeclarationInstantiation from "../../../evaluator/instantiation/function-declaration-instantiation.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { ThrowCompletion } from "../../../evaluator/completions/completion-types/ThrowCompletion.js";
import { ReturnCompletion } from "../../../evaluator/completions/completion-types/ReturnCompletion.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import promiseReject from "../../algorithms/promise-reject.js";
import getValue from "../../algorithms/get-value.js";

import { AsyncInvocation } from "../../async/AsyncInvocation.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAstFunction, StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsAsyncArrowFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export class StaticJsAsyncArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsAsyncArrowFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      argumentDeclarations,
      body,
      {
        ...opts,
        thisMode: "lexical-this",
        construct: false,
      },
      functionFactory,
    );
  }

  override *constructEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    const nameValue = yield* this.getEvaluator("name");
    let name = nameValue.toStringSync();
    if (name === "") {
      name = "anonymous";
    }

    throw Completion.Throw("TypeError", `${name} is not a constructor`);
  }

  protected override *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _body } = this;

    // FIXME: By spec, we should create one promise capability,
    // and use it for this failure AND root eval.
    try {
      yield* functionDeclarationInstantiation(
        this,
        args,
        // Gross circular dependency workaround.
        this._createFunction,
      );
    } catch (e) {
      if (Completion.Throw.is(e)) {
        const reject = yield* promiseReject(e.value, realm);
        return Completion.Return(reject);
      }

      throw e;
    }

    function* evaluator(): EvaluationGenerator<void> {
      const result = yield* Q(EvaluateNodeCommand(_body));
      if (result !== null) {
        const value = yield* Q(getValue(result));
        throw Completion.Return(value);
      }

      throw Completion.Return(realm.types.undefined);
    }

    const invocation = new AsyncInvocation(evaluator, realm);

    yield* invocation.start();

    return Completion.Return(invocation.promise);
  }
}
