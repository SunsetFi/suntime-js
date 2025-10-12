import type { BlockStatement, Expression } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";

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

    // Base implementation takes an array of statements for the function constructor, which we don't support.
    if (Array.isArray(this._body)) {
      throw new StaticJsEngineError(
        "Async declaration functions do not support array bodies.",
      );
    }

    yield* this._declareArguments(args, functionContext);

    yield* setupEnvironment(this._body, functionContext);

    const evaluator = EvaluateNodeCommand(this._body, functionContext);
    const invocation = new AsyncEvaluatorInvocation(evaluator, functionContext);

    yield* invocation.start();

    return invocation.promise;
  }
}
