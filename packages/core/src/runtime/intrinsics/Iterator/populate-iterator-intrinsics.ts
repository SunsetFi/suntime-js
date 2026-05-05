import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createIteratorConstructor } from "./constructor/create-iterator-constructor.js";
import { populateIteratorPrototype } from "./prototype/populate-iterator-prototype.js";

export function* populateIteratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Iterator.prototype"];
  yield* populateIteratorPrototype(realm, proto);
  intrinsics["Iterator"] = yield* createIteratorConstructor(realm, proto);
}
