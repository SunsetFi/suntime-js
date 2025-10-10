import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

// This can't be how its supposed to be done...
export default class StaticJsDirectEvalEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    realm: StaticJsRealm,
    private readonly _strict: boolean,
  ) {
    super(realm);
  }

  *canDeclareGlobalVarEvaluator(_name: string) {
    // If strict is on, we want to capture vars in eval.
    return this._strict;
  }

  *createGlobalVarBindingEvaluator(_name: string, _deletable: boolean) {
    if (this._strict) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          "Cannot create global var binding in strict eval environment.",
        ),
      );
    }
  }
}
