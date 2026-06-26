import { Completion } from "../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { StaticJsGeneratorImpl } from "../runtime/types/implementation/functions/StaticJsGeneratorImpl.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

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
