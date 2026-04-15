import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { Completion } from "../../evaluator/completions/Completion.js";
import { createIteratorResultObject } from "../iterators/create-iterator-result-object.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";

export default function* generatorResume(
  generator: StaticJsValue,
  nextValue: StaticJsValue | null,
  generatorBrand: string | null,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  // FIXME: Support subclasses
  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw Completion.Throw("TypeError", "Generator resume called on incompatible receiver");
  }

  if (generator.generatorBrand !== generatorBrand) {
    throw Completion.Throw("TypeError", "Generator resume called on incompatible receiver");
  }

  if (generator.generatorState === "completed") {
    return yield* createIteratorResultObject(realm.types.undefined, true, realm);
  }

  if (generator.generatorState === "executing") {
    throw Completion.Throw("TypeError", "Generator is already running");
  }

  const result = yield* generator.nextEvaluator(nextValue ?? realm.types.undefined);
  return yield* createIteratorResultObject(result.value, result.done, realm);
}
