import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { IntrinsicsRecord } from "../intrinsics.js";

import { populateSetIteratorPrototype } from "./populate-setiterator-prototype.js";

export function* populateSetIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["SetIteratorPrototype"];
  yield* populateSetIteratorPrototype(realm, proto);
}
