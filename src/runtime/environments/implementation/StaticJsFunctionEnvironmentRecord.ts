import { EvaluationGenerator } from "../../../evaluator/internal.js";
import { StaticJsValue } from "../../types/index.js";

import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    private readonly _thisArg: StaticJsValue,
    _args: StaticJsValue[],
  ) {
    super();
    // TODO: add arguments array-not-array-object.
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._thisArg;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
    return this;
  }
}
