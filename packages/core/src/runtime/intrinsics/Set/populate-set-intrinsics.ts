import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createSetConstructor } from "./constructor/create-set-constructor.js";
import { populateSetPrototype } from "./prototype/populate-set-prototype.js";

export function* populateSetIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Set.prototype"];
  yield* populateSetPrototype(realm, proto);
  intrinsics["Set"] = yield* createSetConstructor(realm, proto);
}
