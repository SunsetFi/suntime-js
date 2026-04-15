import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsIteratorResult } from "../types/StaticJsIterator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { createIteratorResultObject } from "../iterators/create-iterator-result-object.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";

export default function* generatorResumeAbrupt(
  generator: StaticJsValue,
  completion: Completion.Abrupt,
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

  if (generator.generatorState === "executing") {
    throw Completion.Throw("TypeError", "Generator is already running");
  }

  let result: StaticJsIteratorResult;
  if (completion.type === "return") {
    result = yield* generator.returnEvaluator(completion.value ?? realm.types.undefined);
  } else if (completion.type === "throw") {
    result = yield* generator.throwEvaluator(completion.value ?? realm.types.undefined);
  } else {
    throw new StaticJsEngineError("Invalid abrupt completion type");
  }

  return yield* createIteratorResultObject(result.value, result.done, realm);
}
