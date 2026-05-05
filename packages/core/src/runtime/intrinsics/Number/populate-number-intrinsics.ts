import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createNumberConstructor } from "./constructor/create-number-constructor.js";
import { populateNumberPrototype } from "./prototype/populate-number-prototype.js";

export function* populateNumberIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Number.prototype"];
  yield* populateNumberPrototype(realm, proto);
  intrinsics["Number"] = yield* createNumberConstructor(realm, proto);
}
