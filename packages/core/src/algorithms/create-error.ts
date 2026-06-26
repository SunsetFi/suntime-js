import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import { isStaticJsObject, type StaticJsObject } from "#types/StaticJsObject.js";
import type { WellKnownErrorName } from "#types/well-known-errors.js";

export function* createError(
  type: WellKnownErrorName,
  message: string,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  function* createErrorInCurrentRealm() {
    const { realm } = EvaluationContext.current;
    const ctor = realm.intrinsics[type];
    if (!ctor) {
      throw new StaticJsEngineError(`Error type ${type} is not supported in this realm`);
    }

    const err = yield* ctor.constructEvaluator([realm.types.string(message)]);
    if (!isStaticJsObject(err)) {
      throw new StaticJsEngineError(`Constructor for ${type} did not return an object`);
    }

    return err;
  }

  // If we were passed a realm, use it.
  // We can be called from outside an evaluation on occasion.
  // We should probably remove instances of this...
  // Currently, this comes from StaticJsAstModule, which is not spec compliant.
  if (realm) {
    return yield* EvaluationContext.withRealmEvaluator(realm, createErrorInCurrentRealm);
  }

  return yield* createErrorInCurrentRealm();
}
