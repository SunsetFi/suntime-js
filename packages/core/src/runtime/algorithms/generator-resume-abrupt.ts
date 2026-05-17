import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function* generatorResumeAbrupt(
  generator: StaticJsValue,
  completion: Completion.Abrupt,
  generatorBrand: string | null,
): EvaluationGenerator<StaticJsObject> {
  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw Completion.Throw("TypeError", "Generator resume called on incompatible receiver");
  }

  return yield* generator.generatorResumeAbrupt(completion, generatorBrand);
}
