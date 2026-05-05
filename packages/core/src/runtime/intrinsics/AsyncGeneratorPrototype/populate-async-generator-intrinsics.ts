import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { populateAsyncGeneratorPrototype } from "./populate-asyncgenerator-prototype.js";

export function* populateAsyncGeneratorPrototypeIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AsyncGeneratorPrototype"];
  yield* populateAsyncGeneratorPrototype(realm, proto);
}
