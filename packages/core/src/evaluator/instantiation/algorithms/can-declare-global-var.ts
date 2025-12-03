import type StaticJsGlobalEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* canDeclareGlobalVar(
  name: string,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<boolean> {
  const objRec = env.objectRecord;
  const globalObject = objRec.bindingObject;
  const hasOwnProp = yield* globalObject.hasOwnPropertyEvaluator(name);
  if (hasOwnProp) {
    return true;
  }

  return globalObject.extensible;
}
