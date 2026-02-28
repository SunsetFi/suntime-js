import type { BlockStatement, Expression } from "@babel/types";

import getValue from "../../algorithms/get-value.js";
import toString from "../../algorithms/to-string.js";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction from "./StaticJsAstFunction.js";

export default class StaticJsArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      "lexical-this",
      argumentDeclarations,
      context,
      body,
      functionFactory,
    );
  }

  *constructEvaluator(): EvaluationGenerator<StaticJsValue> {
    const nameValue = yield* this.getEvaluator("name");
    let name = yield* toString.js(nameValue, this.realm);
    if (name === "") {
      name = "anonymous";
    }

    throw Completion.Throw(
      this.realm.types.error("TypeError", `${name} is not a constructor`),
    );
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    const functionContext = yield* this._createContext(thisArg, args);

    let result: StaticJsValue = this.realm.types.undefined;
    try {
      const completion = yield* EvaluateNodeCommand(
        this._body,
        functionContext,
      );
      if (completion) {
        result = yield* getValue(completion, this.realm);
      }
    } catch (e) {
      if (Completion.Return.is(e)) {
        result = e.value;
      } else {
        throw e;
      }
    }

    return result;
  }
}
