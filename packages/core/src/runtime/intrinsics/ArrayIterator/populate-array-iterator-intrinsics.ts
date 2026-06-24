import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { type StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { type IntrinsicsRecord } from "../intrinsics.js";

import { populateArrayIteratorPrototype } from "./prototype/populate-arrayiterator-prototype.js";

export function* populateArrayIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["ArrayIteratorPrototype"];
  yield* populateArrayIteratorPrototype(realm, proto);
}
