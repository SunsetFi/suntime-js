import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createErrorConstructor } from "./constructor/create-error-constructor.js";
import { populateErrorPrototype } from "./prototype/populate-error-prototype.js";

export function* populateErrorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Error.prototype"];
  yield* populateErrorPrototype(realm, proto);
  intrinsics["Error"] = yield* createErrorConstructor(realm, proto);
}
