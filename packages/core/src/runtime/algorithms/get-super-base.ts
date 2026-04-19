import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsFunctionEnvironmentRecord } from "../environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsMethodFunction } from "../types/implementation/functions/StaticJsMethodFunction.js";
import { StaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsUndefined } from "../types/StaticJsUndefined.js";

export function* getSuperBase(
  envRec: StaticJsEnvironmentRecord,
): EvaluationGenerator<StaticJsObject | StaticJsNull | StaticJsUndefined> {
  if (envRec instanceof StaticJsFunctionEnvironmentRecord === false) {
    return EvaluationContext.current.realm.types.undefined;
  }
  const funcObject = envRec.functionObject;
  if (funcObject instanceof StaticJsMethodFunction === false) {
    return EvaluationContext.current.realm.types.undefined;
  }

  const home = funcObject.homeObject;
  if (!isStaticJsObject(home)) {
    throw new StaticJsEngineError("Assertion failure: Super method's home object is not an object");
  }

  // More null / StaticJsNull jank
  const proto = yield* home.getPrototypeOfEvaluator();
  if (!proto) {
    return EvaluationContext.current.realm.types.null;
  }

  return proto;
}
