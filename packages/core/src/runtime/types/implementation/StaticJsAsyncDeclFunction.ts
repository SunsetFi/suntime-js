import type { BlockStatement, Expression } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import Q from "../../../evaluator/completions/Q.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import promiseReject from "../../algorithms/promise-reject.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsAsyncDeclFunctionOptions = Omit<StaticJsAstFunctionOptions, "thisMode">;

export default class StaticJsAsyncDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsAsyncDeclFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      argumentDeclarations,
      body,
      { ...opts, construct: false, thisMode: "non-lexical-this" },
      functionFactory,
    );

    // Async functions get no prototype.
  }

  protected override *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    const { realm, _body } = this;

    // Async functions capture errors thrown by their argument initializations
    let functionContext: EvaluationContext;
    try {
      functionContext = yield* this._createContext(thisArg, args);
    } catch (e) {
      if (Completion.Throw.is(e)) {
        return yield* promiseReject(e.value, realm);
      }

      throw e;
    }

    return yield* functionContext.run(function* () {
      const evaluator = Q(EvaluateNodeCommand(_body));
      const invocation = new AsyncEvaluatorInvocation(evaluator, realm);

      yield* invocation.start();

      return invocation.promise;
    });
  }
}
