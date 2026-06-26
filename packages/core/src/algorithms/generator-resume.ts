import { Completion } from "../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import { StaticJsGeneratorImpl } from "../runtime/types/implementation/functions/StaticJsGeneratorImpl.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

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
