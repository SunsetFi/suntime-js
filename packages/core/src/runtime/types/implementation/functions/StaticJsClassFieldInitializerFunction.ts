import type { Expression } from "@babel/types";

import isAnonymousFunctionDefinition from "../../../../grammar/is-anonymous-function-definition.js";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Q } from "../../../../evaluator/completions/Q.js";

import NamedEvaluation from "../../../../evaluator/node-evaluators/NamedEvaluation.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import toString from "../../../algorithms/to-string.js";
import { get } from "../../../algorithms/get.js";

import { StaticJsPrivateName } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import type { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsSymbol } from "../../StaticJsSymbol.js";
import type { StaticJsObjectLike } from "../../StaticJsObjectLike.js";

import {
  StaticJsClassMethodFunction,
  StaticJsClassMethodFunctionOptions,
} from "./StaticJsClassMethodFunction.js";

export type StaticJsClassFieldInitializerFunctionOptions = StaticJsClassMethodFunctionOptions;
export class StaticJsClassFieldInitializerFunction extends StaticJsClassMethodFunction {
  constructor(
    realm: StaticJsRealm,
    private readonly _classFieldInitializerName: string | StaticJsSymbol | StaticJsPrivateName,
    initializer: Expression,
    opts: StaticJsClassFieldInitializerFunctionOptions,
  ) {
    super(realm, [], initializer, opts);
  }

  override *constructEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    const nameValue = yield* get(this, "name");
    let name = yield* toString.js(nameValue);
    if (name === "") {
      name = "anonymous";
    }

    throw Completion.Throw("TypeError", `${name} is not a constructor`);
  }

  protected override *_evaluateBody(
    _args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    let value: StaticJsValue;
    if (isAnonymousFunctionDefinition(this._node)) {
      value = yield* Q.val(NamedEvaluation(this._classFieldInitializerName, this._node));
    } else {
      value = yield* Q.val(EvaluateNodeCommand(this._node));
    }
    return Completion.Return(value);
  }
}
