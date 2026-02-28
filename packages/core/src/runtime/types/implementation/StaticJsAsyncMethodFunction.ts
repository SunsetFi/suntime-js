import type { BlockStatement, Expression } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import Q from "../../../evaluator/completions/Q.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction from "./StaticJsAstFunction.js";

export default class StaticJsAsyncMethodFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(realm, name, "non-lexical-this", argumentDeclarations, context, body, functionFactory, {
      // Object methods are not constructable.
      construct: false,
    });

    // Object methods get no prototype.
  }

  protected *_invoke(
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
