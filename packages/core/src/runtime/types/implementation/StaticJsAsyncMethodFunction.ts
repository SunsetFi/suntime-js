import type { BlockStatement, Expression } from "@babel/types";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import Q from "../../../evaluator/completions/Q.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

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

  protected override *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    const functionContext = yield* this._createContext(thisArg, args);

    const evaluator = Q(EvaluateNodeCommand(this._body, functionContext));
    const invocation = new AsyncEvaluatorInvocation(evaluator, functionContext.realm);

    yield* invocation.start();

    return invocation.promise;
  }
}
