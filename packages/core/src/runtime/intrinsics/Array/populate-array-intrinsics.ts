import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createArrayConstructor } from "./constructor/create-array-constructor.js";
import { populateArrayPrototype } from "./prototype/populate-array-prototype.js";

export function* populateArrayIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Array.prototype"];
  yield* populateArrayPrototype(realm, proto);
  intrinsics["Array"] = yield* createArrayConstructor(realm, proto);
}
