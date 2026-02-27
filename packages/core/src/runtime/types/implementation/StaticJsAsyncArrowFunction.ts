import type { BlockStatement, Expression } from "@babel/types";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import promiseReject from "../../algorithms/promise-reject.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction from "./StaticJsAstFunction.js";

export default class StaticJsAsyncArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(realm, name, "lexical-this", argumentDeclarations, context, body, functionFactory);
  }

  *constructEvaluator(): EvaluationGenerator<StaticJsValue> {
    const nameValue = yield* this.getEvaluator("name");
    let name = nameValue.toStringSync();
    if (name === "") {
      name = "anonymous";
    }

    throw new ThrowCompletion(this.realm.types.error("TypeError", `${name} is not a constructor`));
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    // Async functions capture errors thrown by their argument initializations
    let functionContext: EvaluationContext;
    try {
      functionContext = yield* this._createContext(thisArg, args);
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        return yield* promiseReject(e.value, this.realm);
      }

      throw e;
    }

    const evaluator = EvaluateNodeCommand(this._body, functionContext);
    const invocation = new AsyncEvaluatorInvocation(evaluator, functionContext.realm, true);

    yield* invocation.start();

    return invocation.promise;
  }
}
