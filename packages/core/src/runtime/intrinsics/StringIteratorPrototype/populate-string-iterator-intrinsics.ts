import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { IntrinsicsRecord } from "../intrinsics.js";

import { populateStringIteratorPrototype } from "./populate-stringiterator-prototype.js";

export function* populateStringIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["StringIteratorPrototype"];
  yield* populateStringIteratorPrototype(realm, proto);
}
