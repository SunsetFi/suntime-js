import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsAsyncGeneratorImpl } from "../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";

export function* asyncGeneratorValidate(
  generator: StaticJsAsyncGeneratorImpl,
  generatorBrand: string | null,
): EvaluationGenerator<void> {
  if (generator.generatorBrand !== generatorBrand) {
    throw Completion.Throw("TypeError", "Generator resume called on incompatible receiver");
  }
}
