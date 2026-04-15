import type { Expression } from "@babel/types";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import {
  StaticJsClassMethodFunction,
  StaticJsClassMethodFunctionOptions,
} from "../../../../evaluator/node-evaluators/Classes/types/StaticJsClassMethodFunction.js";
import NamedEvaluation from "../../../../evaluator/node-evaluators/NamedEvaluation.js";
import isAnonymousFunctionDefinition from "../../../../grammar/is-anonymous-function-definition.js";
import { get } from "../../../algorithms/get.js";
import { toString } from "../../../algorithms/to-string.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { StaticJsPrivateName } from "../../StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";

export type StaticJsClassFieldInitializerFunctionOptions = StaticJsClassMethodFunctionOptions;
export class StaticJsClassFieldInitializerFunction extends StaticJsClassMethodFunction {
  constructor(
    realm: StaticJsRealm,
    private readonly _classFieldInitializerName: StaticJsPropertyKey | StaticJsPrivateName,
    initializer: Expression,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord,
    prototype?: StaticJsObject,
  ) {
    super(realm, initializer, homeObject, env, privateEnv, prototype);
  }

  override *constructEvaluator(): EvaluationGenerator<StaticJsObject> {
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
