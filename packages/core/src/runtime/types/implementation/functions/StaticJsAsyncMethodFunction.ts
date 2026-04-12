import type { Function } from "@babel/types";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import functionDeclarationInstantiation from "../../../../evaluator/instantiation/function-declaration-instantiation.js";

import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import promiseReject from "../../../algorithms/promise-reject.js";
import getValue from "../../../algorithms/get-value.js";

import { AsyncInvocation } from "../../../async/AsyncInvocation.js";

import type { StaticJsValue } from "../../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAstFunction, StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsAsyncMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;

export class StaticJsAsyncMethodFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    node: Function,
    opts: StaticJsAsyncMethodFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      null,
      argumentDeclarations,
      node,
      {
        ...opts,
        construct: false,
        thisMode: "non-lexical-this",
      },
      functionFactory,
    );

    // Object methods get no prototype.
  }

  protected override *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _node } = this;

    // FIXME: By spec, we should create one promise capability,
    // and use it for this failure AND root eval.
    // Async functions capture errors thrown by their argument initializations
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
      const result = yield* Q(EvaluateNodeCommand((_node as Function).body));
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
