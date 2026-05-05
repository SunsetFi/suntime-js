import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { populateMapIteratorPrototype } from "./prototype/populate-mapiterator-prototype.js";

export function* populateMapIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["MapIteratorPrototype"];
  yield* populateMapIteratorPrototype(realm, proto);
}
