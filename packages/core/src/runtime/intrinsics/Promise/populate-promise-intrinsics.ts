import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createPromiseConstructor } from "./constructor/create-promise-constructor.js";
import { populatePromisePrototype } from "./prototype/populate-promise-prototype.js";

export function* populatePromiseIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Promise.prototype"];
  yield* populatePromisePrototype(realm, proto);
  intrinsics["Promise"] = yield* createPromiseConstructor(realm, proto);
}
