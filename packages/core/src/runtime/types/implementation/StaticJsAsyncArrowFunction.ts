import type { BlockStatement, Expression } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";

export default class StaticJsAsyncArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
  ) {
    super(realm, name, argumentDeclarations, context, body);
  }

  *constructEvaluator(): EvaluationGenerator<StaticJsValue> {
    const nameValue = yield* this.getPropertyEvaluator("name");
    let name = nameValue.toStringSync();
    if (name === "") {
      name = "anonymous";
    }

    throw new ThrowCompletion(
      this.realm.types.error("TypeError", `${name} is not a constructor`),
    );
  }

  protected *_createContext(
    _thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<EvaluationContext> {
    return yield* super._createContext(this.realm.types.undefined, args);
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
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
    const invocation = new AsyncEvaluatorInvocation(
      evaluator,
      functionContext.realm,
      true,
    );

    yield* invocation.start();

    return invocation.promise;
  }
}
