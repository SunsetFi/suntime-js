import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { populateGeneratorPrototype } from "./populate-generator-prototype.js";

export function* populateGeneratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["GeneratorPrototype"];
  yield* populateGeneratorPrototype(realm, proto);
}
