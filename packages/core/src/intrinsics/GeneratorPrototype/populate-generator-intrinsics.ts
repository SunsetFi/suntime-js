import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import type { IntrinsicsRecord } from "../intrinsics.js";

import { populateGeneratorPrototype } from "./populate-generator-prototype.js";

export function* populateGeneratorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["GeneratorPrototype"];
  yield* populateGeneratorPrototype(realm, proto);
}
