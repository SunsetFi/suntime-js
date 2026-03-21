import type { BlockStatement, Expression } from "@babel/types";

import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import Q from "../../../evaluator/completions/Q.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import promiseReject from "../../algorithms/promise-reject.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsAsyncArrowFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export default class StaticJsAsyncArrowFunction extends StaticJsAstFunction {
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

    throw Completion.Throw(this.realm.types.error("TypeError", `${name} is not a constructor`));
  }

  protected override *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    // Async functions capture errors thrown by their argument initializations
    let functionContext: EvaluationContext;
    try {
      functionContext = yield* this._createContext(thisArg, args);
    } catch (e) {
      if (Completion.Throw.is(e)) {
        return yield* promiseReject(e.value, this.realm);
      }

      throw e;
    }

    const evaluator = Q(EvaluateNodeCommand(this._body, functionContext));
    const invocation = new AsyncEvaluatorInvocation(evaluator, functionContext.realm, true);

    yield* invocation.start();

    return invocation.promise;
  }
}
