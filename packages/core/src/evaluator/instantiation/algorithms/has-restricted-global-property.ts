import type StaticJsGlobalEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* hasRestrictedGlobalProperty(
  name: string,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<boolean> {
  const objRec = env.objectRecord;
  const globalObj = objRec.bindingObject;
  const decl = yield* globalObj.getOwnPropertyEvaluator(name);
  if (!decl || decl.configurable) {
    return false;
  }

  return true;
}
