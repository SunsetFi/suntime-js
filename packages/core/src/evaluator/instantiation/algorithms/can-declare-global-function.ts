import type StaticJsGlobalEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import { isStaticJsDataPropertyDescriptor } from "../../../runtime/types/StaticJsPropertyDescriptor.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* canDeclareGlobalFunction(
  name: string,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<boolean> {
  const objRec = env.objectRecord;
  const globalObject = objRec.bindingObject;
  const existingProp = yield* globalObject.getOwnPropertyEvaluator(name);
  if (!existingProp) {
    return globalObject.extensible;
  }

  if (existingProp.configurable) {
    return true;
  }

  if (isStaticJsDataPropertyDescriptor(existingProp)) {
    return Boolean(existingProp.writable && existingProp.enumerable);
  }

  return false;
}
