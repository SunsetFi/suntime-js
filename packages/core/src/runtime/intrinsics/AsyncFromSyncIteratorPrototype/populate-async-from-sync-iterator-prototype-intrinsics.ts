import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { IntrinsicsRecord } from "../intrinsics.js";

import { populateAsyncFromSyncIteratorPrototype } from "./prototype/populate-asyncfromsynciteratorprototype-prototype.js";

export function* populateAsyncFromSyncIteratorPrototypeIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AsyncFromSyncIteratorPrototype"];
  yield* populateAsyncFromSyncIteratorPrototype(realm, proto);
}
