import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { populateAsyncIteratorPrototype } from "./populate-asynciterator-prototype.js";

export function* populateAsyncIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AsyncIteratorPrototype"];
  yield* populateAsyncIteratorPrototype(realm, proto);
}
