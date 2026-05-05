import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { populateIteratorHelperPrototype } from "./prototype/populate-iteratorhelper-prototype.js";

export function* populateIteratorHelperIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["IteratorHelperPrototype"];
  yield* populateIteratorHelperPrototype(realm, proto);
}
