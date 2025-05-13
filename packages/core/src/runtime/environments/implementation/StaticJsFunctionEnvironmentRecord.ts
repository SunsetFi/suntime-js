import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    realm: StaticJsRealm,
    private readonly _thisArg: StaticJsValue,
    _args: StaticJsValue[],
  ) {
    super(realm);
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
