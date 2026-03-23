import type { BlockStatement, Expression } from "@babel/types";

import getValue from "../../algorithms/get-value.js";
import toString from "../../algorithms/to-string.js";

import functionDeclarationInstantiation from "../../../evaluator/instantiation/function-declaration-instantiation.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/completion-types/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsArrowFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export default class StaticJsArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsArrowFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      argumentDeclarations,
      body,
      { thisMode: "lexical-this", construct: false, ...opts },
      functionFactory,
    );
  }

  override *constructEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    const nameValue = yield* this.getEvaluator("name");
    let name = yield* toString.js(nameValue);
    if (name === "") {
      name = "anonymous";
    }

    throw Completion.Throw("TypeError", `${name} is not a constructor`);
  }

  protected override *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _body } = this;

    yield* functionDeclarationInstantiation(
      this,
      args,
      // Gross circular dependency workaround.
      this._createFunction,
    );

    let result: StaticJsValue = realm.types.undefined;
    try {
      const completion = yield* Q(EvaluateNodeCommand(_body));
      if (completion) {
        result = yield* getValue(completion);
      }
      return Completion.Return(result);
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e;
      } else {
        throw e;
      }
    }
  }
}
