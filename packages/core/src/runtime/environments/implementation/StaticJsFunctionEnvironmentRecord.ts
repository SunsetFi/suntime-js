import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    private readonly _thisArg: StaticJsValue,
    _args: StaticJsValue[],
    outerEnv: StaticJsEnvironmentRecord,
    realm: StaticJsRealm,
  ) {
    super(outerEnv, realm);
    // TODO: add arguments array-not-array-object.
    // Should be alias to real values in non-strict mode.
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._thisArg;
  }
}
