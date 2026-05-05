import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createBooleanConstructor } from "./constructor/create-boolean-constructor.js";
import { populateBooleanPrototype } from "./prototype/populate-boolean-prototype.js";

export function* populateBooleanIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Boolean.prototype"];
  yield* populateBooleanPrototype(realm, proto);
  intrinsics["Boolean"] = yield* createBooleanConstructor(realm, proto);
}
