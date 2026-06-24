import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { type StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { type IntrinsicsRecord } from "../intrinsics.js";

import { createStringConstructor } from "./constructor/create-string-constructor.js";
import { populateStringPrototype } from "./prototype/populate-string-prototype.js";

export function* populateStringIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["String.prototype"];
  yield* populateStringPrototype(realm, proto);
  intrinsics["String"] = yield* createStringConstructor(realm, proto);
}
