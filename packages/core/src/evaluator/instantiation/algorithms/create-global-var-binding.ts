import type { StaticJsGlobalEnvironmentRecord } from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import { EvaluationContext } from "../../EvaluationContext.js";

export default function* createGlobalVarBinding(
  name: string,
  deletable: boolean,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<void> {
  const objRec = env.objectRecord;
  const globalObject = objRec.bindingObject;
  const hasProperty = yield* globalObject.hasOwnPropertyEvaluator(name);
  const extensible = yield* globalObject.isExtensibleEvaluator();

  if (!hasProperty && extensible) {
    const { realm } = EvaluationContext.current;
    yield* objRec.createMutableBindingEvaluator(name, deletable);
    yield* objRec.initializeBindingEvaluator(name, realm.types.undefined);
  }
}
