import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createMapConstructor } from "./constructor/create-map-constructor.js";
import { populateMapPrototype } from "./prototype/populate-map-prototype.js";

export function* populateMapIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Map.prototype"];
  yield* populateMapPrototype(realm, proto);
  intrinsics["Map"] = yield* createMapConstructor(realm, proto);
}
