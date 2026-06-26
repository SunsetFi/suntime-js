import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsGeneratorImpl } from "#types/implementation/functions/StaticJsGeneratorImpl.js";

export function* generatorResumeAbrupt(
  generator: StaticJsValue,
  completion: Completion.Abrupt,
  generatorBrand: string | null,
): EvaluationGenerator<StaticJsObject> {
  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Generator resume called on incompatible receiver",
    );
  }

  return yield* generator.generatorResumeAbrupt(completion, generatorBrand);
}
