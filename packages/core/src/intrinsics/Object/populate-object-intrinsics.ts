import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import type { IntrinsicsRecord } from "../intrinsics.js";

import { createObjectConstructor } from "./constructor/create-object-constructor.js";
import { populateObjectPrototype } from "./prototype/populate-object-prototype.js";

export function* populateObjectIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Object.prototype"];
  yield* populateObjectPrototype(realm, proto);
  intrinsics["Object"] = yield* createObjectConstructor(realm, proto);
}
