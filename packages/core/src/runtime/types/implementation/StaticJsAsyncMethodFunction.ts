import type { BlockStatement, Expression } from "@babel/types";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import functionDeclarationInstantiation from "../../../evaluator/instantiation/function-declaration-instantiation.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import Q from "../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/completion-types/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import promiseReject from "../../algorithms/promise-reject.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsAsyncMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;

export default class StaticJsAsyncMethodFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsAsyncMethodFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      argumentDeclarations,
      body,
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
    const { realm, _body } = this;

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

    const evaluator = Q(EvaluateNodeCommand(_body));
    const invocation = new AsyncEvaluatorInvocation(evaluator, realm);

    yield* invocation.start();

    return Completion.Return(invocation.promise);
  }
}
