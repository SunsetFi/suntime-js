import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsGeneratorImpl } from "#types/implementation/functions/StaticJsGeneratorImpl.js";

export function* generatorResume(
  generator: StaticJsValue,
  nextValue: StaticJsValue | null,
  generatorBrand: string | null,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Generator resume called on incompatible receiver",
    );
  }

  return yield* generator.generatorResume(nextValue ?? realm.types.undefined, generatorBrand);
}
