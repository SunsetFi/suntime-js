import type StaticJsGlobalEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";

import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* createGlobalVarBinding(
  name: string,
  deletable: boolean,
  env: StaticJsGlobalEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const objRec = env.objectRecord;
  const globalObject = objRec.bindingObject;
  const hasProperty = yield* globalObject.hasOwnPropertyEvaluator(name);
  const extensible = globalObject.extensible;

  if (!hasProperty && extensible) {
    yield* objRec.createMutableBindingEvaluator(name, deletable);
    yield* objRec.initializeBindingEvaluator(name, realm.types.undefined);
  }
}
